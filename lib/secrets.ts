import { SecretManagerServiceClient } from '@google-cloud/secret-manager'
import * as path from 'path'
import * as fs from 'fs'

// Cache for secrets to avoid repeated calls
const secretCache = new Map<string, { value: string; timestamp: number }>()
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

// Initialize client lazily with proper credentials
let secretClient: SecretManagerServiceClient | null = null

function getClient(): SecretManagerServiceClient {
  if (!secretClient) {
    const keyPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
    
    if (!keyPath) {
      throw new Error('GOOGLE_APPLICATION_CREDENTIALS environment variable is not set')
    }

    // Convert relative path to absolute path
    const absoluteKeyPath = path.isAbsolute(keyPath) 
      ? keyPath 
      : path.resolve(process.cwd(), keyPath)

    console.log(`📝 Using service account from: ${absoluteKeyPath}`)

    // Verify the file exists
    if (!fs.existsSync(absoluteKeyPath)) {
      throw new Error(`Service account key file not found: ${absoluteKeyPath}`)
    }

    secretClient = new SecretManagerServiceClient({
      keyFilename: absoluteKeyPath,
      apiEndpoint: 'secretmanager.googleapis.com',
      fallback: 'rest',
    })
  }
  
  return secretClient
}

export async function getSecret(secretName: string): Promise<string> {
  const projectId = process.env.GOOGLE_CLOUD_PROJECT
  
  if (!projectId) {
    throw new Error('GOOGLE_CLOUD_PROJECT environment variable is not set')
  }

  // Check cache first
  const cached = secretCache.get(secretName)
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    console.log(`✅ Using cached secret: ${secretName}`)
    return cached.value
  }

  try {
    console.log(`🔍 Fetching secret from Google Secret Manager: ${secretName}`)
    console.log(`📊 Project ID: ${projectId}`)
    
    let client: SecretManagerServiceClient
    try {
      client = getClient()
    } catch (clientError: any) {
      console.error(`❌ Failed to initialize Secret Manager client:`, clientError?.message)
      throw clientError
    }
    
    const resourceName = `projects/${projectId}/secrets/${secretName}/versions/latest`
    console.log(`📋 Using resource name: ${resourceName}`)
    
    console.log(`⏳ Attempting to access secret...`)
    const [version] = await client.accessSecretVersion({
      name: resourceName,
    })
    
    console.log(`📦 Received version object, extracting payload...`)
    const secretValue = version.payload?.data?.toString() || ''
    
    if (!secretValue) {
      throw new Error(`Secret value is empty for ${secretName}`)
    }
    
    // Cache the secret
    secretCache.set(secretName, {
      value: secretValue,
      timestamp: Date.now(),
    })
    
    console.log(`✅ Secret fetched successfully: ${secretName} (${secretValue.length} chars)`)
    return secretValue
  } catch (error: any) {
    console.warn(`⚠️  Secret Manager failed for ${secretName}, checking environment variable fallback...`)
    
    // Fallback: Check if secret exists as environment variable
    const envFallback = process.env[secretName]
    if (envFallback) {
      console.log(`⚠️  Using environment variable fallback for ${secretName}`)
      return envFallback
    }

    console.error(`❌ Error fetching secret ${secretName}:`)
    console.error(`   Code: ${error?.code}`)
    console.error(`   Details: ${error?.details}`)
    console.error(`   Message: ${error?.message}`)
    console.error(`   Note: ${error?.note}`)
    console.error(`\n💡 Troubleshooting tips:`)
    console.error(`   1. Verify the secret "${secretName}" exists in Google Secret Manager`)
    console.error(`   2. Check that the service account has 'Secret Accessor' role`)
    console.error(`   3. For local testing, you can set the variable as an environment variable`)
    console.error(`   4. Ensure GOOGLE_CLOUD_PROJECT is set correctly (current: ${projectId})`)
    throw error
  }
}
