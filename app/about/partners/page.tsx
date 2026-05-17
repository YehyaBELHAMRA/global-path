import { Metadata } from "next"
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material"
import VerifiedIcon from "@mui/icons-material/Verified"
import TranslateIcon from "@mui/icons-material/Translate"
import SchoolIcon from "@mui/icons-material/School"
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff"
import BalanceIcon from "@mui/icons-material/Balance"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"
import CalculateIcon from "@mui/icons-material/Calculate"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const dynamic = 'force-static'
export const metadata: Metadata = { 
  title: "Partenaires | Global-Path",
  description: "Découvrez les partenaires de Global-Path, un réseau d'experts mondiaux pour faciliter votre expatriation et vos démarches de visa.",
  openGraph: {
    title: "Partenaires | Global-Path",
    description: "Découvrez les partenaires de Global-Path, un réseau d'experts mondiaux pour faciliter votre expatriation.",
    type: "website"
  }
}

export default function PartnersPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Nos Partenaires
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Un réseau d'experts de confiance pour vous accompagner à chaque étape de votre expatriation et de votre installation.
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container component="main" maxWidth="lg" sx={{ flex: 1, py: { xs: 6, md: 10 } }}>
        
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Des services sur-mesure pour votre mobilité
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.1rem' }}>
            Nous collaborons avec un réseau rigoureusement sélectionné d'experts pour vous garantir un parcours d'immigration fluide et une installation sereine dans votre nouveau pays d'accueil.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 4 }}>
          
          {/* Légalisation et Apostille */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} variant="outlined">
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ p: 2, borderRadius: '50%', bgcolor: '#e3f2fd', mb: 2 }}>
                  <VerifiedIcon color="primary" sx={{ fontSize: 40 }} />
                </Box>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Légalisation et Apostille
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Légalisation, apostille et certification officielle de tous vos documents pour une utilisation valide et reconnue à l'étranger.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Services de traduction */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} variant="outlined">
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ p: 2, borderRadius: '50%', bgcolor: '#e3f2fd', mb: 2 }}>
                  <TranslateIcon color="primary" sx={{ fontSize: 40 }} />
                </Box>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Services de traduction
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Traductions certifiées par des traducteurs assermentés (documents personnels, relevés de notes, diplômes, actes de naissance, casiers judiciaires, actes de mariage, etc.).
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Formation linguistique */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} variant="outlined">
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ p: 2, borderRadius: '50%', bgcolor: '#e3f2fd', mb: 2 }}>
                  <SchoolIcon color="primary" sx={{ fontSize: 40 }} />
                </Box>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Formation linguistique
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cours de langues et tutorat pour aider les candidats à s'intégrer parfaitement et à satisfaire aux exigences de résidence de leurs pays de destination.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Services de relocation */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} variant="outlined">
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ p: 2, borderRadius: '50%', bgcolor: '#e3f2fd', mb: 2 }}>
                  <FlightTakeoffIcon color="primary" sx={{ fontSize: 40 }} />
                </Box>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Services de relocation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Accompagnement complet de bout en bout incluant le logement, l'enregistrement et l'installation, permettant aux candidats de gagner du temps, de l'argent et de l'énergie.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Avocats en droit de l'immigration */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} variant="outlined">
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ p: 2, borderRadius: '50%', bgcolor: '#e3f2fd', mb: 2 }}>
                  <BalanceIcon color="primary" sx={{ fontSize: 40 }} />
                </Box>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Avocats en droit de l'immigration
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Conseil juridique pointu pour les demandes de visas et de permis de travail. Particulièrement utile pour les processus d'immigration au Canada et au Québec.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Services bancaires et financiers */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} variant="outlined">
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ p: 2, borderRadius: '50%', bgcolor: '#e3f2fd', mb: 2 }}>
                  <AccountBalanceIcon color="primary" sx={{ fontSize: 40 }} />
                </Box>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Services bancaires et financiers
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ouverture de comptes bancaires, gestion des finances et accès privilégié à des produits bancaires (crédits, assurances-vie) spécifiquement adaptés aux nouveaux arrivants.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>
      
      <Footer />
    </Box>
  )
}
