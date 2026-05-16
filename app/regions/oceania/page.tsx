import { Metadata } from "next"
import { Box, Container, Typography, Card, CardContent, Grid, List, ListItem, ListItemIcon, ListItemText, Divider, Link } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const destinations = [
  { name: "Australie", code: "au" },
  { name: "Nouvelle-Zélande", code: "nz" }
]

export const metadata: Metadata = {
  title: "Océanie | Immigration Australie et Nouvelle-Zélande - Global-Path",
  description: "Opportunités d'expatriation et visas de travail qualifiés en Océanie. Découvrez les systèmes d'immigration par points pour l'Australie et la Nouvelle-Zélande.",
  openGraph: {
    title: "Océanie : Australie et Nouvelle-Zélande | Global-Path",
    description: "Opportunités d'expatriation et de résidence permanente en Australie et Nouvelle-Zélande via le système de points.",
    type: "website",
  },
}

export default function Oceania() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Océanie
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, textAlign: 'center' }}>
            Opportunités d'expatriation et de résidence permanente en Australie et Nouvelle-Zélande
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container component="main" maxWidth="lg" sx={{ flex: 1, py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'justify' }}>
                Immigration par système de points
              </Typography>
              <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4, textAlign: 'justify' }}>
                L'Australie et la Nouvelle-Zélande utilisent des systèmes d'immigration basés sur les points pour attirer les travailleurs hautement qualifiés. Les candidats sont évalués sur des critères tels que l'âge, l'expérience professionnelle, les qualifications et la maîtrise de l'anglais.
              </Typography>

              {/* Australie */}
              <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="img" src="https://flagcdn.com/au.svg" alt="Drapeau Australie" sx={{ width: 24, height: 18, borderRadius: '2px', boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }}/> 
                Australie : Visas Qualifiés (General Skilled Migration)
              </Typography>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Subclass 189 (Indépendant)</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Un visa de résidence permanente extrêmement convoité. Il ne nécessite aucun parrainage (ni employeur, ni État), mais s'adresse uniquement aux professionnels exerçant une occupation figurant sur la liste des compétences stratégiques à long terme (MLTSSL).
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Subclass 190 (Nomination)</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Visa de résidence permanente qui requiert d'être nominé par un gouvernement d'État ou de territoire australien. Cette nomination octroie des points supplémentaires au candidat, l'engageant généralement à résider dans cet État pendant au moins deux ans.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Subclass 491 (Travail Régional)</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Un visa temporaire de 5 ans pour les travailleurs qualifiés prêts à s'installer dans des zones régionales (hors Sydney, Melbourne, Brisbane). Il ouvre une voie directe vers la résidence permanente (visa 191) après 3 ans de vie et de travail dans ces régions.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* Nouvelle-Zélande */}
              <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="img" src="https://flagcdn.com/nz.svg" alt="Drapeau Nouvelle-Zélande" sx={{ width: 24, height: 18, borderRadius: '2px', boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }}/> 
                Nouvelle-Zélande : Résidence et Travail
              </Typography>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Skilled Migrant Category (SMC)</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Récemment réformé fin 2023, ce visa de résidence permanente est désormais basé sur un système simplifié à 6 points. Il exige généralement une offre d'emploi qualifié, ainsi qu'un certain niveau de rémunération, un enregistrement professionnel ou un diplôme universitaire de haut niveau.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Accredited Employer Work Visa (AEWV)</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Il s'agit du principal visa de travail temporaire en Nouvelle-Zélande. Le processus exige que l'entreprise soit accréditée et qu'elle prouve qu'aucun citoyen local ne peut occuper le poste (Job Check), constituant souvent une première étape avant la SMC.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ position: 'sticky', top: 100, bgcolor: 'background.paper' }} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                  Destinations
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {destinations.map((dest, idx) => (
                    <Box 
                      key={idx} 
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        bgcolor: 'action.hover', 
                        p: 2, 
                        borderRadius: 1,
                        border: '1px solid',
                        borderColor: 'divider',
                      }}
                    >
                      <Box component="img" src={`https://flagcdn.com/${dest.code}.svg`} alt={`Drapeau ${dest.name}`} sx={{ width: 40, height: 30, objectFit: 'cover', borderRadius: '4px', boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }} />
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {dest.name}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  )
}
