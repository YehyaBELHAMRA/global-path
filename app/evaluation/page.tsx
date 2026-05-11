import { Box, Container, Typography } from "@mui/material"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = { title: "Évaluation | Global-Path" }

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
