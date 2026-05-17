import { Metadata } from "next"
import { Box, Container, Typography } from "@mui/material"
import ConstructionIcon from "@mui/icons-material/Construction"
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = { 
  title: "Évaluation de profil | Global-Path",
  description: "Évaluez votre profil d'immigration qualifiée et découvrez les programmes (Carte Bleue Européenne, Entrée Express, Golden Visa) les plus adaptés à votre situation.",
  openGraph: {
    title: "Évaluation de profil | Global-Path",
    description: "Évaluez votre profil d'immigration qualifiée et découvrez les programmes les plus adaptés à votre situation.",
    type: "website"
  }
}

export default function EvaluationPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      <Container component="main" maxWidth="md" sx={{ flex: 1, py: { xs: 8, md: 16 }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <Box sx={{ display: 'flex', gap: 3, mb: 4, color: 'primary.main' }}>
          <ConstructionIcon sx={{ fontSize: 80 }} />
          <HourglassEmptyIcon sx={{ fontSize: 80 }} />
        </Box>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
          Page en construction
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4, maxWidth: '600px', lineHeight: 1.6 }}>
          Notre outil d'évaluation de profil sera bientôt disponible. Il vous permettra de découvrir les programmes d'immigration qualifiée les plus adaptés à votre situation.
        </Typography>
        <Typography variant="body1" color="primary.main" sx={{ fontWeight: 500, fontSize: '1.2rem' }}>
          Revenez nous voir très prochainement !
        </Typography>
      </Container>
      <Footer />
    </Box>
  )
}
