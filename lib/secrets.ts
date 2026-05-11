import { SecretManagerServiceClient } from '@google-cloud/secret-manager'

// Initialize client with REST fallback to prevent gRPC connection issues in Next.js
const client = new SecretManagerServiceClient({
  fallback: true,
})

// Cache promises to deduplicate simultaneous requests and persist across API calls
const secretCache = new Map<string, Promise<string>>()

export async function getSecret(secretName: string): Promise<string> {
  // Google Cloud Secret Manager expects the full resource name:
  // projects/PROJECT_ID/secrets/SECRET_NAME/versions/latest
  const projectId = process.env.GOOGLE_CLOUD_PROJECT
  const formattedName = secretName.startsWith('projects/')
    ? secretName
    : `projects/${projectId}/secrets/${secretName}/versions/latest`

  if (!secretCache.has(formattedName)) {
    const secretPromise = client
      .accessSecretVersion({ name: formattedName })
      .then(([version]) => version.payload?.data?.toString() || '')
      .catch((error) => {
        secretCache.delete(formattedName)
        console.error(`Failed to fetch secret ${formattedName}:`, error)
        throw new Error('Secret retrieval failed')
      })

    secretCache.set(formattedName, secretPromise)
  }

  return secretCache.get(formattedName)!
}