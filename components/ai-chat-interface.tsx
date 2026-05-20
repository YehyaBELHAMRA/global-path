"use client"

import { type ReactNode, useEffect, useRef, useState } from "react"
import {
  Box,
  Paper,
  Typography,
  TextField,
  IconButton,
  Avatar,
  Chip,
  InputAdornment,
} from "@mui/material"
import {
  Send as SendIcon,
  SmartToy as BotIcon,
  Person as PersonIcon,
  AutoAwesome as SparklesIcon,
} from "@mui/icons-material"
import { AVAILABLE_RAG_COUNTRIES } from "@/lib/countries"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  sources?: string[]
}

interface AIChatInterfaceProps {
  country?: string
}

type MarkdownBlock =
  | { type: "heading"; level: 1 | 2 | 3 | 4 | 5 | 6; text: string }
  | { type: "paragraph"; text: string }
  | { type: "unordered-list"; items: string[] }
  | { type: "ordered-list"; items: string[] }
  | { type: "blockquote"; text: string }
  | { type: "code"; code: string; language?: string }
  | { type: "rule" }
  | { type: "table"; headers: string[]; rows: string[][] }

const countryQuestionsMap: Record<string, string[]> = {
  luxembourg: [
    "Quelles sont les conditions pour la Carte Bleue Européenne au Luxembourg ?",
    "Quel est le minimum salarial pour la Carte Bleue Européenne au Luxembourg ?",
    "Quels sont les avantages pour les travailleurs hautement qualifiés au Luxembourg ?",
  ],
  belgium: [
    "Quelles sont les conditions pour la Carte Bleue Européenne en Belgique ?",
    "Quelles sont les conditions pour la Carte Bleue Européenne en Wallonie ?",
    "Quelles sont les conditions pour la Carte Bleue Européenne en Flandre ?",
    "Quelles sont les conditions pour la Carte Bleue Européenne en région Bruxelles-Capitale ?",
    "Quel est le minimum salarial pour la Carte Bleue Européenne dans chaque région en Belgique ?",
    "Quelles sont les différences entre le permis unique et la Carte Bleue Européenne en Belgique ?",
  ],
  germany: [
    "Quelles sont les conditions pour la Carte Bleue Européenne en Allemagne ?",
    "Quel est le minimum salarial pour la Carte Bleue Européenne en Allemagne ?",
    "Quelles sont les conditions pour la Chancenkarte en Allemagne ?",
    "Quel est le minimum salarial pour la Carte Bleue Européenne pour les professionnels de l'IT en Allemagne ?",
    "Est-il obligatoire de parler allemand pour obtenir la Carte Bleue Européenne ?",
  ],
  austria: [
    "Quelles sont les conditions pour la Carte Bleue Européenne en Autriche ?",
    "Qu'est-ce que la carte Rouge-Blanc-Rouge en Autriche ?",
    "Quel est le minimum salarial pour la Carte Bleue Européenne en Autriche ?",
    "Comment fonctionne le système de points pour l'immigration en Autriche ?",
    "Quelles sont les professions en pénurie en Autriche ?",
  ],
  netherlands: [
    "Quelles sont les conditions pour la Carte Bleue Européenne aux Pays-Bas ?",
    "Qu'est-ce que le visa de kennismigrant (migrant hautement qualifié) aux Pays-Bas ?",
    "Quel est l'avantage de la règle des 30% aux Pays-Bas ?",
    "Quelles sont les conditions pour obtenir un visa de recherche d'emploi (Orientation year) ?",
  ],
  sweden: [
    "Quelles sont les conditions pour la Carte Bleue Européenne en Suède ?",
    "Comment obtenir un permis de travail classique en Suède ?",
    "Quels sont les avantages du modèle de travail suédois ?",
    "Comment fonctionne le permis de recherche d'emploi pour les diplômés en Suède ?",
    "Est-ce que l'employeur doit parrainer mon visa en Suède ?",
  ],
  finland: [
    "Quelles sont les conditions pour la Carte Bleue Européenne en Finlande ?",
    "Comment fonctionne le permis de spécialiste (Specialist permit) en Finlande ?",
    "Quelles sont les opportunités dans la tech en Finlande ?",
    "Qu'est-ce que le Fast-track pour les spécialistes en Finlande ?",
  ],
  malta: [
    "Quelles sont les conditions pour la Carte Bleue Européenne à Malte ?",
    "Quels sont les avantages fiscaux pour les professionnels à Malte ?",
    "Comment travailler dans le secteur iGaming à Malte ?",
    "Qu'est-ce que la Key Employee Initiative (KEI) à Malte ?",
    "Comment obtenir la résidence permanente à Malte ?",
  ],
  italy: [
    "Quelles sont les conditions pour la Carta Blu UE en Italie ?",
    "Comment fonctionne le système de quotas (Decreto Flussi) en Italie ?",
    "Quels sont les avantages pour les impatriés (Lavoratori Impatriati) en Italie ?",
    "Comment obtenir un visa pour travailleur indépendant en Italie ?",
    "La Carta Blu italienne nécessite-t-elle de parler italien ?",
  ],
  spain: [
    "Quelles sont les conditions pour la Carte Bleue Européenne en Espagne ?",
    "Quelles sont les conditions pour le visa nomade numérique en Espagne ?",
    "Qu'est-ce que la loi des startups (Ley de Startups) en Espagne ?",
    "Comment obtenir un visa pour professionnel hautement qualifié (PAC) en Espagne ?",
    "Quel est le délai de traitement pour une Carte Bleue Européenne en Espagne ?",
  ],
  portugal: [
    "Quelles sont les conditions pour la Carte Bleue Européenne au Portugal ?",
    "Comment obtenir le visa D3 pour professionnels hautement qualifiés au Portugal ?",
    "Quelles sont les conditions pour le visa Tech (Tech Visa) au Portugal ?",
    "Comment fonctionne le visa nomade numérique (D8) au Portugal ?",
    "Quels sont les avantages fiscaux du régime RNH au Portugal ?",
  ],
  bulgaria: [
    "Quelles sont les conditions pour la Carte Bleue Européenne en Bulgarie ?",
    "Quels sont les salaires moyens dans l'IT en Bulgarie ?",
    "Quels sont les avantages fiscaux en Bulgarie ?",
    "Faut-il une reconnaissance de diplôme pour travailler en Bulgarie ?",
    "Quel est le coût de la vie pour un expatrié à Sofia ?",
  ],
  cyprus: [
    "Quelles sont les conditions pour la Carte Bleue Européenne à Chypre ?",
    "Comment obtenir un permis de travail dans une entreprise d'intérêts étrangers à Chypre ?",
    "Quelles sont les opportunités dans les services financiers à Chypre ?",
    "Quels sont les avantages fiscaux pour les nouveaux résidents à Chypre ?",
  ],
  croatia: [
    "Quelles sont les conditions pour la Carte Bleue Européenne en Croatie ?",
    "Comment obtenir un permis de séjour et de travail en Croatie ?",
    "Quelles sont les conditions pour le visa nomade numérique en Croatie ?",
    "Comment le test du marché du travail fonctionne-t-il en Croatie ?",
    "Quels sont les secteurs qui recrutent le plus en Croatie ?",
  ],
  estonia: [
    "Quelles sont les conditions pour la Carte Bleue Européenne en Estonie ?",
    "Comment fonctionne l'e-résidence (e-Residency) en Estonie ?",
    "Quels sont les avantages de l'écosystème startup estonien ?",
    "Quelles sont les conditions pour obtenir un visa startup en Estonie ?",
    "Quel est le seuil salarial pour un développeur en Estonie ?",
  ],
  greece: [
    "Quelles sont les conditions pour la Carte Bleue Européenne en Grèce ?",
    "Comment obtenir un visa de travail de long séjour (Visa D) en Grèce ?",
    "Quels sont les avantages pour les expatriés en Grèce ?",
    "Comment fonctionne le visa nomade numérique en Grèce ?",
  ],
  hungary: [
    "Quelles sont les conditions pour la Carte Bleue Européenne en Hongrie ?",
    "Quelles sont les conditions pour la carte nationale hongroise ?",
    "Comment obtenir un permis de séjour pour travail en Hongrie ?",
    "Qu'est-ce que le programme 'Enter Hungary Scheme' ?",
    "Quel est le coût de la vie pour un ingénieur IT à Budapest ?",
  ],
  latvia: [
    "Quelles sont les conditions pour la Carte Bleue Européenne en Lettonie ?",
    "Comment obtenir un visa startup en Lettonie ?",
    "Quelles sont les opportunités IT en Lettonie ?",
    "Quel est le délai pour obtenir une Carte Bleue Européenne lettone ?",
  ],
  lithuania: [
    "Quelles sont les conditions pour la Carte Bleue Européenne en Lituanie ?",
    "Quelles sont les opportunités dans la Fintech en Lituanie ?",
    "Comment obtenir un visa startup en Lituanie ?",
    "Quel est le seuil salarial pour les métiers en demande en Lituanie ?",
    "La Lituanie autorise-t-elle la double nationalité ?",
  ],
  poland: [
    "Quelles sont les conditions pour la Carte Bleue Européenne en Pologne ?",
    "Comment fonctionne le programme Poland.Business Harbour ?",
    "Quelles sont les opportunités IT en Pologne ?",
    "Qu'est-ce qu'une promesse d'embauche (oświadczenie) en Pologne ?",
    "Quel est le délai pour obtenir un permis de séjour temporaire (Karta Pobytu) ?",
  ],
  "czech-republic": [
    "Quelles sont les conditions pour la Carte Bleue Européenne en République tchèque ?",
    "Quelles sont les conditions pour la Carte d'employé en République tchèque ?",
    "Quel est le salaire moyen pour un expatrié à Prague ?",
    "Comment obtenir un visa de travailleur indépendant (Zivno) ?",
    "Quelles sont les démarches d'intégration pour les étrangers en République tchèque ?",
  ],
  romania: [
    "Quelles sont les conditions pour la Carte Bleue Européenne en Roumanie ?",
    "Quelles sont les conditions pour un permis de travail classique en Roumanie ?",
    "Quels sont les avantages fiscaux pour les développeurs IT en Roumanie ?",
    "Qu'est-ce que l'avis de travail (Aviz de munca) en Roumanie ?",
    "Combien de temps faut-il pour obtenir la résidence en Roumanie ?",
  ],
  slovakia: [
    "Quelles sont les conditions pour la Carte Bleue Européenne en Slovaquie ?",
    "Comment obtenir un permis de séjour unique (Single Permit) en Slovaquie ?",
    "Quelles sont les industries qui recrutent en Slovaquie ?",
    "Comment fonctionne l'exemption du test du marché du travail en Slovaquie ?",
    "Quel est le coût de la vie à Bratislava ?",
  ],
  slovenia: [
    "Quelles sont les conditions pour la Carte Bleue Européenne en Slovénie ?",
    "Comment obtenir un permis unique de séjour et de travail en Slovénie ?",
    "Quel est le cadre de vie pour un expatrié en Slovénie ?",
    "Quels sont les secteurs en demande en Slovénie ?",
    "Comment faire valider ses diplômes en Slovénie ?",
  ],
  canada: [
    "Comment obtenir la résidence permanente au Canada avec Entrée Express ?",
    "Quelles sont les opportunités via les Programmes des candidats des provinces (PCP) ?",
    "Quelles sont les professions les plus en demande au Canada ?",
    "Comment obtenir un permis de travail fermé avec EIMT au Canada ?",
    "Qu'est-ce que l'expérience canadienne (CEC) et comment cela aide-t-il ?",
  ],
  "united-states": [
    "Quelles sont les conditions pour le visa H-1B aux États-Unis ?",
    "Comment obtenir une Green Card par l'emploi (EB-2/EB-3) ?",
    "Quelles sont les conditions pour le visa O-1 pour talents extraordinaires ?",
    "Quelle est la différence entre le visa L-1 et le visa H-1B ?",
    "Comment fonctionne la loterie de la diversité (Diversity Visa) ?",
  ],
  "united-arab-emirates": [
    "Quelles sont les conditions pour le Golden Visa aux Émirats Arabes Unis ?",
    "Comment obtenir un visa de travail sponsorisé par l'employeur à Dubaï ?",
    "Quels sont les avantages du visa de travail indépendant (Green Visa) ?",
    "Quel est le coût de la vie et le niveau des salaires à Dubaï ?",
  ],
  qatar: [
    "Quelles sont les conditions pour un visa de travail au Qatar ?",
    "Comment fonctionne le système de parrainage (Kafala) révisé au Qatar ?",
    "Quels sont les avantages de vivre et travailler à Doha ?",
    "Quelles sont les démarches pour obtenir le Qatar ID (QID) ?",
    "Le Qatar propose-t-il une résidence permanente pour les expatriés ?",
  ],
  kuwait: [
    "Quelles sont les conditions pour un visa de travail (Article 18) au Koweït ?",
    "Quelles sont les opportunités pour les professionnels dans le secteur pétrolier au Koweït ?",
    "Comment fonctionne le transfert de résidence au Koweït ?",
    "Quels sont les avantages et allocations typiques pour un expat au Koweït ?",
  ],
  bahrain: [
    "Quelles sont les conditions pour un visa de travail à Bahreïn ?",
    "Qu'est-ce que le Flexi Permit à Bahreïn ?",
    "Quels sont les avantages du Golden Residency Visa à Bahreïn ?",
    "Combien de temps faut-il pour obtenir un permis de travail via la LMRA ?",
    "Quel est le coût de la vie à Manama ?",
  ],
  oman: [
    "Quelles sont les conditions pour un visa de travail en Oman ?",
    "Quelles sont les opportunités pour les professionnels étrangers en Oman ?",
    "Comment fonctionne la politique d'Omanisation pour les emplois ?",
    "Qu'est-ce que le visa investisseur ou partenaire en Oman ?",
  ],
  "saudi-arabia": [
    "Quelles sont les conditions pour un visa de travail (Iqama) en Arabie Saoudite ?",
    "Qu'est-ce que le Premium Residency en Arabie Saoudite ?",
    "Quelles opportunités offre le plan Vision 2030 (ex: NEOM) aux professionnels ?",
    "Comment fonctionne la plateforme Qiwa pour les contrats de travail ?",
    "Les femmes expatriées peuvent-elles travailler librement en Arabie Saoudite ?",
  ],
  australia: [
    "Quelles sont les conditions pour le visa qualifié indépendant (Subclass 189) en Australie ?",
    "Comment fonctionne le système de points pour l'immigration en Australie ?",
    "Quelles sont les conditions pour un visa sponsorisé par un employeur (Subclass 482) ?",
    "Qu'est-ce que le visa nomade régional (Subclass 491) ?",
    "Comment faire évaluer ses compétences pour l'Australie (Skills Assessment) ?",
  ],
  "new-zealand": [
    "Quelles sont les conditions pour la résidence dans la catégorie Skilled Migrant en Nouvelle-Zélande ?",
    "Comment obtenir un Accredited Employer Work Visa (AEWV) ?",
    "Quelles sont les professions sur la liste verte (Green List) en Nouvelle-Zélande ?",
    "Comment fonctionne le système de points néo-zélandais ?",
  ],
  denmark: [
    "Quelles sont les conditions pour le Fast-Track Scheme au Danemark ?",
    "Qu'est-ce que le Pay Limit Scheme au Danemark ?",
    "Quelles sont les conditions pour la Positive List au Danemark ?",
    "Comment fonctionne le régime fiscal pour chercheurs et travailleurs hautement qualifiés ?",
    "Le Danemark autorise-t-il la double nationalité ?",
  ],
  ireland: [
    "Quelles sont les conditions pour le Critical Skills Employment Permit en Irlande ?",
    "Comment obtenir un General Employment Permit en Irlande ?",
    "Quelles sont les opportunités dans les grandes entreprises technologiques à Dublin ?",
    "Combien de temps faut-il pour obtenir la résidence permanente en Irlande ?",
  ],
  switzerland: [
    "Quelles sont les conditions pour le Permis B et Permis L en Suisse ?",
    "Comment le système de quotas affecte-t-il les travailleurs extra-européens en Suisse ?",
    "Quels sont les salaires et le coût de la vie en Suisse ?",
    "Quelle est la différence entre un frontalier (Permis G) et un résident (Permis B) ?",
  ],
  norway: [
    "Quelles sont les conditions pour le visa de travailleur qualifié (Skilled Worker) en Norvège ?",
    "Quels sont les critères d'études pour travailler en Norvège ?",
    "Quelles sont les opportunités dans l'ingénierie et l'énergie en Norvège ?",
    "Comment obtenir la résidence permanente en Norvège ?",
  ],
  iceland: [
    "Quelles sont les conditions pour un permis de travail de professionnel qualifié en Islande ?",
    "Quelles sont les opportunités pour les spécialistes IT en Islande ?",
    "Comment obtenir une prolongation de permis de séjour en Islande ?",
    "Quel est le processus d'intégration et les cours d'islandais obligatoires ?",
  ],
  "united-kingdom": [
    "Quelles sont les conditions pour le Skilled Worker Visa au Royaume-Uni ?",
    "Comment obtenir le Global Talent Visa au Royaume-Uni ?",
    "Quel est le seuil de salaire minimum pour travailler au Royaume-Uni ?",
    "Qu'est-ce que le 'Health and Care Worker visa' ?",
    "Comment fonctionne le système de parrainage (Sponsorship Certificate) au UK ?",
  ],
}

const defaultSuggestedQuestions = [
  "Quelles sont les conditions pour la Carte Bleue Européenne ?",
  "Quel est le minimum salarial pour la Carte Bleue Européenne ?",
]

export function AIChatInterface({ country }: AIChatInterfaceProps) {
  const currentSuggestedQuestions = country && countryQuestionsMap[country]
    ? countryQuestionsMap[country]
    : defaultSuggestedQuestions

  const [suggestedQuestions, setSuggestedQuestions] = useState(currentSuggestedQuestions)

  const initialMessages: Message[] = [
    {
      id: "1",
      role: "assistant",
      content: country 
        ? `Bienvenue sur Global-Path ! Je suis votre assistant IA spécialisé en immigration pour ${country === 'belgium' ? 'la Belgique' : country === 'luxembourg' ? 'le Luxembourg' : 'ce pays'}. Je peux vous aider avec des informations précises et actualisées sur les visas et procédures d'immigration. Comment puis-je vous aider aujourd'hui ?`
        : "Bienvenue sur Global-Path ! Je suis votre assistant IA spécialisé en immigration, dédié à accompagner les professionnels algériens dans leurs démarches de visa de travail qualifié et de résidence à l'international. Comment puis-je vous aider aujourd'hui ?",
      timestamp: new Date(),
    },
  ]
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSuggestedQuestions(currentSuggestedQuestions)
  }, [currentSuggestedQuestions])

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    if (suggestedQuestions.includes(inputValue)) {
      setSuggestedQuestions((prev) => prev.filter((q) => q !== inputValue))
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    try {
      if (country && AVAILABLE_RAG_COUNTRIES.includes(country)) {
        // Call the RAG API
        const response = await fetch(`/api/chat/${country}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: inputValue }),
        })

        if (!response.ok) {
          throw new Error('API request failed')
        }

        const reader = response.body?.getReader()
        if (!reader) throw new Error('Response body is not readable')

        // Create a placeholder message for the incoming stream
        const messageId = (Date.now() + 1).toString()
        setMessages((prev) => [
          ...prev,
          {
            id: messageId,
            role: "assistant",
            content: "",
            timestamp: new Date(),
          }
        ])

        const decoder = new TextDecoder()
        let done = false
        let buffer = ""
        let fullText = ""
        let sources: string[] = []

        while (!done) {
          const { value, done: readerDone } = await reader.read()
          done = readerDone
          if (value) {
            buffer += decoder.decode(value, { stream: true })
            let boundary = buffer.indexOf('\n\n')
            
            while (boundary !== -1) {
              const chunk = buffer.slice(0, boundary)
              buffer = buffer.slice(boundary + 2)
              
              if (chunk.startsWith('data: ')) {
                try {
                  const data = JSON.parse(chunk.slice(6))
                  if (data.text) fullText += data.text
                  if (data.sources) sources = data.sources
                  
                  setMessages((prev) => 
                    prev.map((msg) => 
                      msg.id === messageId 
                        ? { ...msg, content: fullText, sources } 
                        : msg
                    )
                  )
                } catch (e) {
                  console.error("Failed to parse SSE JSON:", chunk)
                }
              }
              boundary = buffer.indexOf('\n\n')
            }
          }
        }
      } else {
        // Fallback to stubbed response
        setTimeout(() => {
          const assistantMessage: Message = {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: getContextualResponse(inputValue),
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, assistantMessage])
          setIsTyping(false)
        }, 1500)
      }
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Désolé, une erreur s'est produite. Veuillez réessayer.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question)
  }

  return (
    <Paper
      elevation={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        borderRadius: 3,
      }}
    >
      {/* Chat Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          p: 2,
          borderBottom: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        <Avatar sx={{ bgcolor: "secondary.main", width: 44, height: 44 }}>
          <SparklesIcon />
        </Avatar>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Assistant immigration
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Conseils juridiques par IA
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: "success.main",
            }}
          />
          <Typography variant="caption" color="text.secondary">
            En ligne
          </Typography>
        </Box>
      </Box>

      {/* Messages Area */}
      <Box
        ref={scrollContainerRef}
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {messages.map((message) => (
          <Box
            key={message.id}
            sx={{
              display: "flex",
              gap: 1.5,
              flexDirection: message.role === "user" ? "row-reverse" : "row",
            }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: message.role === "assistant" ? "secondary.main" : "primary.main",
              }}
            >
              {message.role === "assistant" ? (
                <BotIcon sx={{ fontSize: 18 }} />
              ) : (
                <PersonIcon sx={{ fontSize: 18 }} />
              )}
            </Avatar>
            <Paper
              elevation={0}
              sx={{
                maxWidth: "80%",
                px: 2,
                py: 1.5,
                borderRadius: 3,
                bgcolor: message.role === "assistant" ? "grey.100" : "secondary.main",
                color: message.role === "assistant" ? "text.primary" : "white",
              }}
            >
              {message.role === "assistant" ? (
                <MarkdownMessage content={message.content} />
              ) : (
                <Typography variant="body2" sx={{ lineHeight: 1.6, whiteSpace: "pre-wrap" }}>
                  {message.content}
                </Typography>
              )}
              {message.sources && message.sources.length > 0 && (
                <Box sx={{ mt: 1.5, pt: 1.5, borderTop: 1, borderColor: 'divider' }}>
                  <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                    Sources :
                  </Typography>
                  <Box sx={{ mt: 0.5 }}>
                    {message.sources.map((source, index) => (
                      <Box key={index} sx={{ mt: 0.5 }}>
                        <a
                          href={source}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: message.role === "assistant" ? "#1976d2" : "#ffffff",
                            textDecoration: "none",
                            fontSize: "0.75rem",
                          }}
                        >
                          {source}
                        </a>
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  mt: 0.5,
                  opacity: 0.7,
                }}
              >
                {message.timestamp.toLocaleTimeString("fr-FR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Typography>
            </Paper>
          </Box>
        ))}

        {isTyping && (
          <Box sx={{ display: "flex", gap: 1.5 }}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: "secondary.main" }}>
              <BotIcon sx={{ fontSize: 18 }} />
            </Avatar>
            <Paper
              elevation={0}
              sx={{ px: 2, py: 1.5, borderRadius: 3, bgcolor: "grey.100" }}
            >
              <Box sx={{ display: "flex", gap: 0.5 }}>
                {[0, 150, 300].map((delay) => (
                  <Box
                    key={delay}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: "text.secondary",
                      animation: "bounce 1.4s infinite ease-in-out both",
                      animationDelay: `${delay}ms`,
                      "@keyframes bounce": {
                        "0%, 80%, 100%": { transform: "scale(0.6)" },
                        "40%": { transform: "scale(1)" },
                      },
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Box>
        )}

        {/* Suggested Questions */}
        {suggestedQuestions.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: 500, mb: 1.5 }}
            >
              Questions suggérées :
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {suggestedQuestions.map((question) => (
                <Chip
                  key={question}
                  label={question}
                  variant="outlined"
                  onClick={() => handleSuggestedQuestion(question)}
                  sx={{
                    borderRadius: 2,
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "secondary.light",
                      color: "white",
                      borderColor: "secondary.light",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        )}
      </Box>

      {/* Input Area */}
      <Box
        sx={{
          p: 2,
          borderTop: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Posez vos questions sur les visas, l'éligibilité ou les procédures..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    color="secondary"
                    sx={{
                      bgcolor: inputValue.trim() ? "secondary.main" : "transparent",
                      color: inputValue.trim() ? "white" : "action.disabled",
                      "&:hover": {
                        bgcolor: inputValue.trim() ? "secondary.dark" : "transparent",
                      },
                    }}
                  >
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              bgcolor: "grey.50",
            },
          }}
        />
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: "block", textAlign: "center", mt: 1.5 }}
        >
          Les réponses IA sont à titre informatif uniquement. Consultez un avocat spécialisé pour des conseils juridiques.
        </Typography>
      </Box>
    </Paper>
  )
}

function MarkdownMessage({ content }: { content: string }) {
  const blocks = parseMarkdown(content)

  return (
    <Box
      sx={{
        fontSize: "0.875rem",
        lineHeight: 1.6,
        wordBreak: "break-word",
        "& > :first-of-type": {
          mt: 0,
        },
        "& > :last-child": {
          mb: 0,
        },
      }}
    >
      {blocks.map((block, index) => renderMarkdownBlock(block, index))}
    </Box>
  )
}

function renderMarkdownBlock(block: MarkdownBlock, index: number): ReactNode {
  if (block.type === "heading") {
    const headingStyles = getHeadingStyles(block.level)

    return (
      <Box key={`heading-${index}`} component={headingStyles.component} sx={headingStyles.sx}>
        {renderInlineMarkdown(block.text, `heading-${index}`)}
      </Box>
    )
  }

  if (block.type === "paragraph") {
    return (
      <Box key={`paragraph-${index}`} component="p" sx={{ my: 1.25 }}>
        {renderInlineMarkdown(block.text, `paragraph-${index}`)}
      </Box>
    )
  }

  if (block.type === "unordered-list" || block.type === "ordered-list") {
    return (
      <Box
        key={`list-${index}`}
        component={block.type === "ordered-list" ? "ol" : "ul"}
        sx={{
          my: 1.25,
          pl: 3,
          "& li + li": {
            mt: 0.5,
          },
        }}
      >
        {block.items.map((item, itemIndex) => (
          <Box key={`list-${index}-${itemIndex}`} component="li">
            {renderInlineMarkdown(item, `list-${index}-${itemIndex}`)}
          </Box>
        ))}
      </Box>
    )
  }

  if (block.type === "blockquote") {
    return (
      <Box
        key={`blockquote-${index}`}
        component="blockquote"
        sx={{
          my: 1.25,
          pl: 2,
          py: 0.25,
          ml: 0,
          mr: 0,
          borderLeft: 3,
          borderColor: "secondary.main",
          color: "text.secondary",
          fontStyle: "italic",
        }}
      >
        {renderInlineMarkdown(block.text, `blockquote-${index}`)}
      </Box>
    )
  }

  if (block.type === "code") {
    return (
      <Box
        key={`code-${index}`}
        component="pre"
        sx={{
          my: 1.25,
          p: 1.5,
          borderRadius: 2,
          overflowX: "auto",
          bgcolor: "grey.900",
          color: "grey.100",
          fontSize: "0.8125rem",
          lineHeight: 1.6,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        }}
      >
        {block.language ? (
          <Box
            component="span"
            sx={{
              display: "block",
              mb: 1,
              color: "grey.500",
              textTransform: "uppercase",
              fontSize: "0.6875rem",
              letterSpacing: "0.08em",
            }}
          >
            {block.language}
          </Box>
        ) : null}
        <Box component="code">{block.code}</Box>
      </Box>
    )
  }

  if (block.type === "rule") {
    return (
      <Box
        key={`rule-${index}`}
        component="hr"
        sx={{
          my: 1.5,
          border: 0,
          borderTop: 1,
          borderColor: "divider",
        }}
      />
    )
  }

  return (
    <Box key={`table-${index}`} sx={{ my: 1.25, overflowX: "auto" }}>
      <Box
        component="table"
        sx={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "0.8125rem",
          "& th, & td": {
            border: 1,
            borderColor: "divider",
            px: 1,
            py: 0.75,
            textAlign: "left",
            verticalAlign: "top",
          },
          "& th": {
            bgcolor: "grey.200",
            fontWeight: 600,
          },
        }}
      >
        <Box component="thead">
          <Box component="tr">
            {block.headers.map((header, headerIndex) => (
              <Box key={`table-head-${index}-${headerIndex}`} component="th">
                {renderInlineMarkdown(header, `table-head-${index}-${headerIndex}`)}
              </Box>
            ))}
          </Box>
        </Box>
        <Box component="tbody">
          {block.rows.map((row, rowIndex) => (
            <Box key={`table-row-${index}-${rowIndex}`} component="tr">
              {row.map((cell, cellIndex) => (
                <Box key={`table-cell-${index}-${rowIndex}-${cellIndex}`} component="td">
                  {renderInlineMarkdown(cell, `table-cell-${index}-${rowIndex}-${cellIndex}`)}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

function renderInlineMarkdown(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let remaining = text
  let index = 0

  const patterns = [
    { type: "code" as const, regex: /`([^`\n]+)`/ },
    { type: "link" as const, regex: /\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)/ },
    { type: "bold" as const, regex: /\*\*([^\n]+?)\*\*/ },
    { type: "bold" as const, regex: /__([^\n]+?)__/ },
    { type: "italic" as const, regex: /\*([^\n]+?)\*/ },
    { type: "italic" as const, regex: /_([^\n]+?)_/ },
    { type: "strike" as const, regex: /~~([^\n]+?)~~/ },
  ]

  while (remaining.length > 0) {
    let nextMatch:
      | {
          type: (typeof patterns)[number]["type"]
          match: RegExpExecArray
        }
      | null = null

    for (const pattern of patterns) {
      const match = pattern.regex.exec(remaining)

      if (!match) {
        continue
      }

      if (!nextMatch || match.index < nextMatch.match.index) {
        nextMatch = { type: pattern.type, match }
      }
    }

    if (!nextMatch) {
      appendTextWithLineBreaks(nodes, remaining, `${keyPrefix}-text-${index}`)
      break
    }

    if (nextMatch.match.index > 0) {
      appendTextWithLineBreaks(
        nodes,
        remaining.slice(0, nextMatch.match.index),
        `${keyPrefix}-text-${index}`
      )
    }

    const tokenKey = `${keyPrefix}-${index}`

    if (nextMatch.type === "code") {
      nodes.push(
        <Box
          key={tokenKey}
          component="code"
          sx={{
            px: 0.5,
            py: 0.15,
            borderRadius: 1,
            bgcolor: "grey.200",
            fontSize: "0.85em",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          }}
        >
          {nextMatch.match[1]}
        </Box>
      )
    } else if (nextMatch.type === "link") {
      nodes.push(
        <Box
          key={tokenKey}
          component="a"
          href={nextMatch.match[2]}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "secondary.dark",
            textDecoration: "underline",
            textUnderlineOffset: "0.15em",
          }}
        >
          {renderInlineMarkdown(nextMatch.match[1], `${tokenKey}-link`)}
        </Box>
      )
    } else if (nextMatch.type === "bold") {
      nodes.push(
        <Box key={tokenKey} component="strong" sx={{ fontWeight: 700 }}>
          {renderInlineMarkdown(nextMatch.match[1], `${tokenKey}-bold`)}
        </Box>
      )
    } else if (nextMatch.type === "italic") {
      nodes.push(
        <Box key={tokenKey} component="em" sx={{ fontStyle: "italic" }}>
          {renderInlineMarkdown(nextMatch.match[1], `${tokenKey}-italic`)}
        </Box>
      )
    } else if (nextMatch.type === "strike") {
      nodes.push(
        <Box key={tokenKey} component="del" sx={{ opacity: 0.8 }}>
          {renderInlineMarkdown(nextMatch.match[1], `${tokenKey}-strike`)}
        </Box>
      )
    }

    remaining = remaining.slice(nextMatch.match.index + nextMatch.match[0].length)
    index += 1
  }

  return nodes
}

function appendTextWithLineBreaks(nodes: ReactNode[], text: string, keyPrefix: string) {
  const parts = text.split("\n")

  parts.forEach((part, index) => {
    if (part) {
      nodes.push(part)
    }

    if (index < parts.length - 1) {
      nodes.push(<br key={`${keyPrefix}-br-${index}`} />)
    }
  })
}

function parseMarkdown(content: string): MarkdownBlock[] {
  const normalizedContent = content.replace(/\r\n?/g, "\n")
  const lines = normalizedContent.split("\n")
  const blocks: MarkdownBlock[] = []
  let index = 0

  while (index < lines.length) {
    const line = lines[index]
    const trimmedLine = line.trim()

    if (!trimmedLine) {
      index += 1
      continue
    }

    if (trimmedLine.startsWith("```")) {
      const language = trimmedLine.slice(3).trim() || undefined
      const codeLines: string[] = []

      index += 1

      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        codeLines.push(lines[index])
        index += 1
      }

      if (index < lines.length) {
        index += 1
      }

      blocks.push({
        type: "code",
        language,
        code: codeLines.join("\n"),
      })
      continue
    }

    const table = parseMarkdownTable(lines, index)

    if (table) {
      blocks.push(table.block)
      index = table.nextIndex
      continue
    }

    const headingMatch = trimmedLine.match(/^(#{1,6})\s+(.+)$/)

    if (headingMatch) {
      blocks.push({
        type: "heading",
        level: headingMatch[1].length as 1 | 2 | 3 | 4 | 5 | 6,
        text: headingMatch[2].trim(),
      })
      index += 1
      continue
    }

    if (isHorizontalRule(trimmedLine)) {
      blocks.push({ type: "rule" })
      index += 1
      continue
    }

    if (/^>\s?/.test(trimmedLine)) {
      const quoteLines: string[] = []

      while (index < lines.length && /^>\s?/.test(lines[index].trim())) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/, ""))
        index += 1
      }

      blocks.push({
        type: "blockquote",
        text: quoteLines.join("\n"),
      })
      continue
    }

    if (/^[-*+]\s+/.test(trimmedLine)) {
      const list = parseMarkdownList(lines, index, false)
      blocks.push({ type: "unordered-list", items: list.items })
      index = list.nextIndex
      continue
    }

    if (/^\d+\.\s+/.test(trimmedLine)) {
      const list = parseMarkdownList(lines, index, true)
      blocks.push({ type: "ordered-list", items: list.items })
      index = list.nextIndex
      continue
    }

    const paragraphLines = [line]
    index += 1

    while (index < lines.length) {
      const nextLine = lines[index]

      if (!nextLine.trim() || isMarkdownBlockStart(lines, index)) {
        break
      }

      paragraphLines.push(nextLine)
      index += 1
    }

    blocks.push({
      type: "paragraph",
      text: paragraphLines.join("\n").trim(),
    })
  }

  return blocks.length > 0 ? blocks : [{ type: "paragraph", text: content }]
}

function parseMarkdownList(lines: string[], startIndex: number, ordered: boolean) {
  const items: string[] = []
  const markerPattern = ordered ? /^\d+\.\s+(.*)$/ : /^[-*+]\s+(.*)$/
  let index = startIndex
  let currentItem = ""

  while (index < lines.length) {
    const trimmedLine = lines[index].trim()

    if (!trimmedLine) {
      break
    }

    const markerMatch = trimmedLine.match(markerPattern)

    if (markerMatch) {
      if (currentItem) {
        items.push(currentItem.trim())
      }

      currentItem = markerMatch[1]
      index += 1
      continue
    }

    if (/^\s{2,}\S/.test(lines[index]) && currentItem) {
      currentItem = `${currentItem}\n${trimmedLine}`
      index += 1
      continue
    }

    break
  }

  if (currentItem) {
    items.push(currentItem.trim())
  }

  return { items, nextIndex: index }
}

function parseMarkdownTable(lines: string[], startIndex: number) {
  if (startIndex + 1 >= lines.length) {
    return null
  }

  const headerLine = lines[startIndex].trim()
  const dividerLine = lines[startIndex + 1].trim()

  if (!headerLine.includes("|") || !isMarkdownTableDivider(dividerLine)) {
    return null
  }

  const headers = splitMarkdownTableRow(headerLine)
  const rows: string[][] = []
  let index = startIndex + 2

  while (index < lines.length) {
    const rowLine = lines[index].trim()

    if (!rowLine || !rowLine.includes("|")) {
      break
    }

    rows.push(splitMarkdownTableRow(rowLine))
    index += 1
  }

  return {
    block: { type: "table", headers, rows } as MarkdownBlock,
    nextIndex: index,
  }
}

function splitMarkdownTableRow(row: string): string[] {
  const normalizedRow = row.replace(/^\||\|$/g, "")
  return normalizedRow.split("|").map((cell) => cell.trim())
}

function isMarkdownTableDivider(line: string) {
  return /^\|?(?:\s*:?-{3,}:?\s*\|)+\s*:?-{3,}:?\s*\|?$/.test(line)
}

function isHorizontalRule(line: string) {
  return /^([-*_])(?:\s*\1){2,}$/.test(line)
}

function isMarkdownBlockStart(lines: string[], index: number) {
  const trimmedLine = lines[index].trim()

  return (
    trimmedLine.startsWith("```") ||
    /^#{1,6}\s+/.test(trimmedLine) ||
    isHorizontalRule(trimmedLine) ||
    /^>\s?/.test(trimmedLine) ||
    /^[-*+]\s+/.test(trimmedLine) ||
    /^\d+\.\s+/.test(trimmedLine) ||
    parseMarkdownTable(lines, index) !== null
  )
}

function getHeadingStyles(level: 1 | 2 | 3 | 4 | 5 | 6): {
  component: "h1" | "h2" | "h3" | "h4"
  sx: {
    mt: number
    mb: number
    fontSize: string
    fontWeight: number
    lineHeight: number
  }
} {
  if (level === 1) {
    return {
      component: "h1",
      sx: {
        mt: 1.5,
        mb: 1,
        fontSize: "1.4rem",
        fontWeight: 700,
        lineHeight: 1.3,
      },
    }
  }

  if (level === 2) {
    return {
      component: "h2",
      sx: {
        mt: 1.5,
        mb: 1,
        fontSize: "1.2rem",
        fontWeight: 700,
        lineHeight: 1.35,
      },
    }
  }

  if (level === 3) {
    return {
      component: "h3",
      sx: {
        mt: 1.5,
        mb: 1,
        fontSize: "1.05rem",
        fontWeight: 700,
        lineHeight: 1.4,
      },
    }
  }

  return {
    component: "h4",
    sx: {
      mt: 1.25,
      mb: 0.75,
      fontSize: "0.95rem",
      fontWeight: 700,
      lineHeight: 1.45,
    },
  }
}

function getContextualResponse(question: string): string {
  const lowerQuestion = question.toLowerCase()

  if (lowerQuestion.includes("carte bleue") || lowerQuestion.includes("blue card") || lowerQuestion.includes("européenne")) {
    return "La Carte Bleue Européenne est un permis de travail et de séjour pour les ressortissants non-UE hautement qualifiés. Conditions principales : (1) Un contrat de travail valide ou une offre d'emploi ferme avec un salaire minimum (varie selon le pays, généralement 1,5x le salaire moyen), (2) Diplôme d'enseignement supérieur ou 5+ ans d'expérience professionnelle, (3) Couverture d'assurance maladie. Pour les professionnels algériens, l'Allemagne est une destination privilégiée avec de solides relations bilatérales."
  }

  if (lowerQuestion.includes("canada") || lowerQuestion.includes("canadien") || lowerQuestion.includes("permanente")) {
    return "Pour la résidence permanente canadienne, les professionnels algériens passent généralement par Entrée Express via le Programme des travailleurs qualifiés. Facteurs clés du Système de Classement Global (SCG) : âge (max points à 20-29 ans), études, compétences linguistiques (IELTS/TEF), expérience professionnelle et offres d'emploi. Un score SCG de 470+ reçoit typiquement une Invitation à présenter une demande. Les Programmes des Candidats Provinciaux (PCP) peuvent ajouter 600 points."
  }

  if (lowerQuestion.includes("gcc") || lowerQuestion.includes("eau") || lowerQuestion.includes("qatar") || lowerQuestion.includes("golfe") || lowerQuestion.includes("émirats")) {
    return "Les pays du CCG offrent diverses catégories de visas de travail. Les EAU ont introduit le Golden Visa pour les professionnels qualifiés, offrant une résidence de 10 ans. Le programme Premium Residency d'Arabie Saoudite est également disponible. Conditions typiques : parrainage employeur, qualifications valides, certificat médical et habilitation sécuritaire. Pour les professionnels hautement qualifiés, les EAU proposent désormais des visas auto-sponsorisés avec un seuil salarial minimum d'environ 30 000 AED/mois."
  }

  if (lowerQuestion.includes("salaire") || lowerQuestion.includes("seuil") || lowerQuestion.includes("allemagne")) {
    return "Les seuils salariaux varient selon le pays et le type de visa. Pour les Cartes Bleues Européennes : l'Allemagne exige ~45 300€/an (ou 41 042€ pour les métiers en pénurie), les Pays-Bas exigent ~5 008€/mois. Ces seuils sont actualisés annuellement, je recommande de vérifier les chiffres actuels auprès des sources officielles avant de postuler."
  }

  return "Merci pour votre question. Pour vous fournir des conseils précis, pourriez-vous préciser : (1) Votre pays ou région de destination, (2) Votre domaine d'expertise et années d'expérience, et (3) Vos qualifications académiques ? Cela me permettra d'adapter mes recommandations à votre situation spécifique en tant que professionnel algérien cherchant des opportunités internationales."
}
