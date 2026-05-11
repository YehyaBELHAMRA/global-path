"use client"

import {
  Box,
  Container,
  Typography,
} from "@mui/material"
import { motion } from "motion/react"

export function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "primary.main",
        py: { xs: 8, md: 12 },
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          backgroundImage: "radial-gradient(circle at 30% 20%, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          sx={{ maxWidth: 800, mx: "auto", textAlign: "center" }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: { xs: "1.875rem", sm: "2.25rem", md: "3rem", lg: "3.75rem" },
              letterSpacing: "-0.025em",
              textWrap: "balance",
            }}
          >
            Votre passerelle vers la mobilité internationale
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mt: 2,
              color: "rgba(255,255,255,0.85)",
              fontWeight: 500,
              fontSize: { xs: "1.125rem", md: "1.25rem" },
            }}
          >
            Conçu pour les professionnels algériens hautement qualifiés résidents en France<br />
          </Typography>
          <Typography
            sx={{
              mt: 1,
              color: "rgba(255,255,255,0.85)",
              fontSize: { xs: "1.0rem", md: "1.0rem" },
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Naviguez vos différentes options de mobilité internationale avec confiance :<br />
            - Cartes Bleues Européennes (24 pays)<br />
            - Autres destinations européennes (Irlande, UK, Suisse, etc...)<br />
            - Résidences permanentes nord-américaines (Canada et États-Unis)<br />
            - Visas des six pays du Golfe (Émirats Arabes Unis, Qatar, etc...)<br />
            - Et encore plus à venir !<br />
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
