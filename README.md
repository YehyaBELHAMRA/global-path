# Global-Path 🌍

Global-Path is a comprehensive web platform designed to guide international professionals (with a specific focus on Algerian talents) in their global mobility and immigration projects. The platform provides detailed insights into various global visa programs and features an **AI-powered Immigration Assistant** to answer specific, legal, and procedural questions.

## 🚀 Features

- **Global Immigration Guides:** Explore residency and work visa opportunities across major regions:
  - European Blue Card (24 EU countries - All EU except France, Denmark, and Ireland)
  - North America (Canada & USA)
  - Gulf Cooperation Council (GCC) nations
  - Oceania (Australia & New Zealand)
  - Other European destinations (Denmark, Ireland, Switzerland, Norway, Iceland, United Kingdom)
- **AI Immigration Assistant:** A smart chat interface powered by **Gemini 2.5 Flash**.
- **RAG (Retrieval-Augmented Generation):** Provides highly accurate, context-aware answers by retrieving grounded data from Google Cloud Vertex AI RagStore (specifically configured for Belgium and Luxembourg).
- **Streaming Responses:** Real-time AI response streaming using Server-Sent Events (SSE).
- **Modern UI/UX:** Fully responsive and accessible interface built with Material-UI (MUI), Tailwind CSS, and Radix UI.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI Libraries:** [Material-UI (MUI)](https://mui.com/), [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/)
- **AI & Machine Learning:**
  - `@google/genai` SDK
  - Vertex AI (Gemini 2.5 Flash & RAG API)
- **Hosting & Deployment:** Firebase App Hosting
- **Secrets Management:** Google Cloud Secret Manager

## ⚙️ Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm
- A Google Cloud Project with Vertex AI enabled
- Firebase CLI (`pnpm install -g firebase-tools`)

## 🔐 Environment Variables

To run the AI features locally, you need to set up your environment variables. Create a `.env.local` file in the root of your project:

```env
# Google Cloud / Vertex AI Configuration
GOOGLE_CLOUD_PROJECT="your-google-cloud-project-id"
GOOGLE_CLOUD_LOCATION="your-google-cloud-location" # e.g., europe-west3
GOOGLE_GENAI_API_KEY="your-gemini-api-key" # Optional if using Vertex AI default credentials

# RAG Corpora IDs for specific countries
BELGIUM_RAG_CORPUS_ID="your-belgium-corpus-id"
LUXEMBOURG_RAG_CORPUS_ID="your-luxembourg-corpus-id"

# AI Assistant System Prompt
GEMINI_SYSTEM_PROMPT="You are a helpful qualified immigration AI assistant..."
```

## 💻 Local Development

1. **Clone the repository and navigate to the project directory:**

   ```bash
   git clone <repository-url>
   cd Global-Path
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Start the development server:**

   ```bash
   pnpm run dev
   ```

4. **Open the app:**
   Visit <http://localhost:3000> in your browser.

## 🚀 Deployment (Firebase App Hosting)

This project is pre-configured to be deployed using **Firebase App Hosting**, which supports Next.js SSR and API routes automatically.

1. **Log in to Firebase:**

   ```bash
   pnpm run firebase:login
   ```

2. **Initialize Firebase Hosting (if not already done):**

   ```bash
   pnpm run firebase:init
   ```

3. **Set up Secrets in Cloud Secret Manager:**
   As defined in `apphosting.yaml`, the app expects certain secrets. Set them using the Firebase CLI:

   ```bash
   firebase apphosting:secrets:set GEMINI_SYSTEM_PROMPT
   firebase apphosting:secrets:set GOOGLE_GENAI_API_KEY
   ```

4. **Deploy the application:**
   The deployment is handled by Firebase App Hosting via GitHub integration, or manually using:

   ```bash
   pnpm run deploy
   ```

   *(Note: The `deploy` script in `package.json` builds the Next.js app and deploys to Firebase).*
