"use client"

import { useState, useRef, useEffect } from "react"
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

const suggestedQuestions = [
  "Quelles sont les conditions pour la Carte Bleue Européenne ?",
  "Comment obtenir la résidence permanente au Canada ?",
  "Quel seuil salarial pour l'Allemagne ?",
  "Comparer les visas de travail EAU vs Qatar",
]

export function AIChatInterface({ country }: AIChatInterfaceProps) {
  const initialMessages: Message[] = [
    {
      id: "1",
      role: "assistant",
      content: country 
        ? `Bienvenue sur Global Blue Card ! Je suis votre assistant IA spécialisé en immigration pour ${country === 'belgium' ? 'la Belgique' : country === 'luxembourg' ? 'le Luxembourg' : 'ce pays'}. Je peux vous aider avec des informations précises et actualisées sur les visas et procédures d'immigration. Comment puis-je vous aider aujourd'hui ?`
        : "Bienvenue sur Global Blue Card ! Je suis votre assistant IA spécialisé en immigration, dédié à accompagner les professionnels algériens dans leurs démarches de visa et de résidence à l'international. Comment puis-je vous aider aujourd'hui ?",
      timestamp: new Date(),
    },
  ]
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

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
      if (country && (country === 'belgium' || country === 'luxembourg')) {
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

        const data = await response.json()

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.response,
          sources: data.sources,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, assistantMessage])
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
            Assistant Immigration
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
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                {message.content}
              </Typography>
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
        {messages.length <= 1 && (
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

function getContextualResponse(question: string): string {
  const lowerQuestion = question.toLowerCase()

  if (lowerQuestion.includes("carte bleue") || lowerQuestion.includes("blue card") || lowerQuestion.includes("européenne")) {
    return "La Carte Bleue Européenne est un permis de travail et de séjour pour les ressortissants non-UE hautement qualifiés. Conditions principales : (1) Un contrat de travail valide ou une offre d'emploi ferme avec un salaire minimum (varie selon le pays, généralement 1,5x le salaire moyen), (2) Diplôme d'enseignement supérieur ou 5+ ans d'expérience professionnelle, (3) Couverture d'assurance maladie. Pour les professionnels algériens, l'Allemagne et la France sont des destinations privilégiées avec de solides relations bilatérales."
  }

  if (lowerQuestion.includes("canada") || lowerQuestion.includes("canadien") || lowerQuestion.includes("permanente")) {
    return "Pour la résidence permanente canadienne, les professionnels algériens passent généralement par Entrée Express via le Programme des travailleurs qualifiés. Facteurs clés du Système de classement global (SCG) : âge (max points à 20-29 ans), études, compétences linguistiques (IELTS/TEF), expérience professionnelle et offres d'emploi. Un score SCG de 470+ reçoit typiquement une Invitation à présenter une demande. Les Programmes des candidats des provinces (PCP) peuvent ajouter 600 points."
  }

  if (lowerQuestion.includes("gcc") || lowerQuestion.includes("eau") || lowerQuestion.includes("qatar") || lowerQuestion.includes("golfe") || lowerQuestion.includes("émirats")) {
    return "Les pays du CCG offrent diverses catégories de visas de travail. Les EAU ont introduit le Golden Visa pour les professionnels qualifiés, offrant une résidence de 10 ans. Le programme Premium Residency d'Arabie Saoudite est également disponible. Conditions typiques : parrainage employeur, qualifications valides, certificat médical et habilitation sécuritaire. Pour les professionnels hautement qualifiés, les EAU proposent désormais des visas auto-sponsorisés avec un seuil salarial minimum d'environ 30 000 AED/mois."
  }

  if (lowerQuestion.includes("salaire") || lowerQuestion.includes("seuil") || lowerQuestion.includes("allemagne")) {
    return "Les seuils salariaux varient selon le pays et le type de visa. Pour les Cartes Bleues Européennes : l'Allemagne exige ~45 300€/an (ou 41 042€ pour les métiers en pénurie), la France exige ~1,5x le SMIC (~28 000€), les Pays-Bas exigent ~5 008€/mois. Ces seuils sont actualisés annuellement, je recommande de vérifier les chiffres actuels auprès des sources officielles avant de postuler."
  }

  return "Merci pour votre question. Pour vous fournir des conseils précis, pourriez-vous préciser : (1) Votre pays ou région de destination, (2) Votre domaine d'expertise et années d'expérience, et (3) Vos qualifications académiques ? Cela me permettra d'adapter mes recommandations à votre situation spécifique en tant que professionnel algérien cherchant des opportunités internationales."
}
