import { GoogleGenAI } from '@google/genai'
import { NextRequest, NextResponse } from 'next/server'
import { getSecret } from '@/lib/secrets'

// Initialize Google GenAI client for Vertex AI
const genAI = new GoogleGenAI({
  vertexai: true,
  project: process.env.GOOGLE_CLOUD_PROJECT,
  location: process.env.GOOGLE_CLOUD_LOCATION,
  ...(process.env.GOOGLE_GENAI_API_KEY ? { apiKey: process.env.GOOGLE_GENAI_API_KEY } : {}),
})

// Map country slugs to RAG corpus IDs
const COUNTRY_CORPORA: Record<string, string> = {
  belgium: process.env.BELGIUM_RAG_CORPUS_ID || '',
  luxembourg: process.env.LUXEMBOURG_RAG_CORPUS_ID || '',
}

// Module-level cache for system prompt (loaded once)
let cachedSystemPrompt: string | null = null
let promptInitialized = false

async function getSystemPrompt(): Promise<string> {
  // Return cached prompt if already loaded
  if (promptInitialized && cachedSystemPrompt) {
    return cachedSystemPrompt
  }

  // Try environment variable first (preferred for production)
  if (process.env.GEMINI_SYSTEM_PROMPT) {
    cachedSystemPrompt = process.env.GEMINI_SYSTEM_PROMPT
    promptInitialized = true
    return cachedSystemPrompt
  }

  // Fallback to Secret Manager (only called once due to cache flag)
  try {
    cachedSystemPrompt = await getSecret('GEMINI_SYSTEM_PROMPT')
    promptInitialized = true
    console.log('✅ System prompt loaded successfully')
    return cachedSystemPrompt
  } catch (error) {
    console.error('❌ Failed to fetch system prompt:', error)
    throw new Error('Failed to load system prompt')
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ country: string }> }
) {
  try {
    const { country } = await params
    const { message } = await request.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Fetch system prompt using our cached wrapper
    let GeminiSystemPrompt: string
    try {
      GeminiSystemPrompt = await getSystemPrompt()
    } catch (error) {
      return NextResponse.json(
        { error: 'Failed to load system prompt' },
        { status: 500 }
      )
    }

    const corpusId = COUNTRY_CORPORA[country]
    if (!corpusId) {
      return NextResponse.json(
        { error: 'Country not supported for RAG queries' },
        { status: 400 }
      )
    }

    // Stream content directly from the Vertex AI model with RAG grounding
    const resultStream = await genAI.models.generateContentStream({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        tools: [
          {
            retrieval: {
              vertexRagStore: {
                ragResources: [
                  {
                    ragCorpus: corpusId,
                  },
                ],
              },
            },
          },
        ],
        systemInstruction: GeminiSystemPrompt,
        maxOutputTokens: 32767,
        temperature: 0.2,
        topP: 0.95,
      },
    })

    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        const sources = new Set<string>()
        try {
          for await (const chunk of resultStream) {
            const text = chunk.candidates?.[0]?.content?.parts?.[0]?.text || ''
            if (text) {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`))
            }
            
            const groundingChunks = chunk.candidates?.[0]?.groundingMetadata?.groundingChunks
            if (groundingChunks) {
              for (const gChunk of groundingChunks) {
                if (gChunk.web?.uri) {
                  sources.add(gChunk.web.uri)
                }
              }
            }
          }
          
          if (sources.size > 0) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ sources: Array.from(sources) })}\n\n`))
          }
          controller.close()
        } catch (error) {
          console.error('Streaming error:', error)
          controller.error(error)
        }
      }
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}