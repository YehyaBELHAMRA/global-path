import { Box, Container, Typography } from "@mui/material"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "primary.contrastText",
        py: 4,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" sx={{ mb: 1.5, opacity: 0.9 }}>
          <strong>Global-Path</strong> — Ces informations ne constituent pas un avis juridique de la part d'un avocat ou d'un cabinet d'avocats.
        </Typography>
        <Typography variant="body2" align="center" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 0.5, opacity: 0.9 }}>
          © {currentYear} Global-Path. Tous droits réservés. Fait avec ❤️ par un
          <Box 
            component="img" 
            src="https://flagcdn.com/dz.svg" 
            alt="Algérie" 
            sx={{ width: 20, height: 'auto', mx: 0.5, borderRadius: '2px' }} 
          />
          en
          <Box 
            component="img" 
            src="https://flagcdn.com/ch.svg" 
            alt="Suisse" 
            sx={{ width: 20, height: 'auto', mx: 0.5, borderRadius: '2px' }} 
          />
        </Typography>
      </Container>
    </Box>
  )
}