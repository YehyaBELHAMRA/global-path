import { Metadata } from "next"
import { Box, Container, Typography } from "@mui/material"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const dynamic = 'force-static'
export const metadata: Metadata = { 
  title: "Témoignages | Global-Path",
  description: "Découvrez les témoignages et retours d'expérience de professionnels qui ont réussi leur mobilité internationale grâce à Global-Path.",
  openGraph: {
    title: "Témoignages | Global-Path",
    description: "Découvrez les témoignages de professionnels qui ont réussi leur mobilité internationale avec Global-Path.",
    type: "website"
  }
}

export default function TestimonialsPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      <Container component="main" maxWidth="md" sx={{ flex: 1, py: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 4, fontWeight: 600 }}>
          Témoignages
        </Typography>
      </Container>
      <Footer />
    </Box>
  )
}
