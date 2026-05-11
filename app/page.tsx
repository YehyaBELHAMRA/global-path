import { Box, Container, Typography } from "@mui/material"
import { Header } from "@/components/header"
import dynamic from "next/dynamic"

// Dynamically import HeroSection to reduce initial JS bundle size
const HeroSection = dynamic(() => import("@/components/hero-section").then((mod) => mod.HeroSection), {
  ssr: true,
})

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

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          borderTop: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            Global-Path. À titre informatif uniquement.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}
