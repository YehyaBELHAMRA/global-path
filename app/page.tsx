import { Box, Container } from "@mui/material"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      <HeroSection />
      
      {/* Main Content */}
      <Container component="main" maxWidth="md" sx={{ flex: 1, py: 4 }}>
        <Box sx={{ minHeight: { xs: 500, lg: "calc(100vh - 12rem)" } }}>
        </Box>
      </Container>

      <Footer />
    </Box>
  )
}
