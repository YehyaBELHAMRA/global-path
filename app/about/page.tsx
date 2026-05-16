import { Metadata } from "next"
import { Box, Container, Typography } from "@mui/material"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const dynamic = 'force-static'
export const metadata: Metadata = { 
  title: "À propos | Global-Path",
  description: "Découvrez la mission de Global-Path : accompagner les professionnels dans leur mobilité internationale et leurs démarches d'immigration vers les meilleures destinations mondiales.",
  openGraph: {
    title: "À propos de Global-Path",
    description: "Accompagner les professionnels dans leur mobilité internationale et leurs démarches d'immigration.",
    type: "website"
  }
}

export default function AboutPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      <Container component="main" maxWidth="md" sx={{ flex: 1, py: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 4, fontWeight: 600 }}>
          À propos
        </Typography>
      </Container>
      <Footer />
    </Box>
  )
}
