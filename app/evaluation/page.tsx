import { Metadata } from "next"
import { Box, Container, Typography } from "@mui/material"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = { 
  title: "Évaluation de profil | Global-Path",
  description: "Évaluez votre profil d'immigration et découvrez les programmes (Carte Bleue Européenne, Entrée Express, Golden Visa) les plus adaptés à votre situation.",
  openGraph: {
    title: "Évaluation de profil | Global-Path",
    description: "Évaluez votre profil d'immigration et découvrez les programmes les plus adaptés à votre situation.",
    type: "website"
  }
}

export default function EvaluationPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      <Container component="main" maxWidth="md" sx={{ flex: 1, py: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 4, fontWeight: 600 }}>
          Évaluation
        </Typography>
      </Container>
      <Footer />
    </Box>
  )
}
