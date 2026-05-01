import { GoogleGenAI } from '@google/genai'
import { NextRequest, NextResponse } from 'next/server'

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

    const corpusId = COUNTRY_CORPORA[country]
    if (!corpusId) {
      return NextResponse.json(
        { error: 'Country not supported for RAG queries' },
        { status: 400 }
      )
    }

    // Generate content directly from the Vertex AI model with RAG grounding
    const result = await genAI.models.generateContent({
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
        maxOutputTokens: 65535,
        temperature: 1,
        topP: 0.95
      },
    })

    // Correct way to extract text from the response
    const responseText = result.candidates?.[0]?.content?.parts?.[0]?.text || ''

    console.log('Finish Reason:', result.candidates?.[0]?.finishReason)
    console.log('Safety Ratings:', JSON.stringify(result.candidates?.[0]?.safetyRatings))

    if (!responseText) {
      console.log('No text returned. Check safety filters or RAG grounding.')
    }

    // Extract source links from grounding metadata
    const sources: string[] = []
    const groundingChunks = result.candidates?.[0]?.groundingMetadata?.groundingChunks
    if (groundingChunks) {
      for (const chunk of groundingChunks) {
        if (chunk.web?.uri) {
          sources.push(chunk.web.uri)
        }
      }
    }

    return NextResponse.json({
      response: responseText,
      sources: [...new Set(sources)], // Remove duplicates
    })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}