import { Box, Container, Typography, Card, CardContent, Grid, Divider } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const destinations = [
  { name: "Danemark", code: "dk" },
  { name: "Irlande", code: "ie" },
  { name: "Suisse", code: "ch" },
  { name: "Norvège", code: "no" },
  { name: "Islande", code: "is" },
  { name: "Royaume-Uni", code: "gb" }
]

export default function EuropeOther() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Europe (Autres Programmes)
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, textAlign: 'center' }}>
            Découvrez les visas de travail pour les professionnels qualifiés dans les pays hors système Carte Bleue
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container component="main" maxWidth="lg" sx={{ flex: 1, py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'justify' }}>
                Des opportunités européennes alternatives
              </Typography>
              <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4, textAlign: 'justify' }}>
                Bien que la Carte Bleue Européenne couvre une grande partie de l'Union Européenne, des pays attractifs comme le Royaume-Uni, la Suisse, et les nations nordiques gèrent leurs propres programmes pour attirer les talents internationaux.
              </Typography>

              {/* Royaume-Uni */}
              <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="img" src="https://flagcdn.com/gb.svg" alt="Drapeau UK" sx={{ width: 24, height: 18, borderRadius: '2px', boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }}/> 
                Royaume-Uni
              </Typography>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Skilled Worker Visa</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Le visa principal pour travailler au R-U. Il nécessite une offre d'emploi parrainée par un employeur agréé et un niveau B1 en anglais. Depuis 2024, le seuil salarial minimum a été considérablement augmenté (à £38,700 par an) pour la plupart des candidats.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Global Talent Visa</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Destiné aux leaders (ou leaders émergents) dans le milieu universitaire, de la recherche, des arts, de la culture, ou des technologies numériques. Aucun employeur parrain n'est requis.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* Suisse */}
              <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="img" src="https://flagcdn.com/ch.svg" alt="Drapeau Suisse" sx={{ width: 24, height: 18, borderRadius: '2px', boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }}/> 
                Suisse
              </Typography>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Permis B (Séjour Long)</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Pour les ressortissants de pays tiers, l'obtention de ce permis de travail est soumise à des quotas stricts et requiert d'être un travailleur très qualifié (cadre, spécialiste). L'employeur doit prouver qu'il n'a pas pu recruter en Suisse ou dans l'UE/AELE.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Permis L (Courte Durée)</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Destiné aux séjours de travail de courte durée (généralement jusqu'à 1 an, renouvelable exceptionnellement à 24 mois), lié aux termes précis d'un contrat de travail.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* Irlande */}
              <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="img" src="https://flagcdn.com/ie.svg" alt="Drapeau Irlande" sx={{ width: 24, height: 18, borderRadius: '2px', boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }}/> 
                Irlande
              </Typography>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid size={{ xs: 12 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Critical Skills Employment Permit</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        L'Irlande a remplacé son système de Carte Bleue par ce permis extrêmement attractif. Destiné aux métiers hautement qualifiés figurant sur la <i>Critical Skills Occupations List</i>, il offre un parrainage familial immédiat et un parcours accéléré (2 ans) vers la résidence permanente (Stamp 4).
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* Danemark */}
              <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="img" src="https://flagcdn.com/dk.svg" alt="Drapeau Danemark" sx={{ width: 24, height: 18, borderRadius: '2px', boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }}/> 
                Danemark
              </Typography>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid size={{ xs: 12 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Fast-Track Scheme & Pay Limit Scheme</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Le Danemark offre des procédures simplifiées et rapides pour les professionnels recrutés par des entreprises certifiées (Fast-Track Scheme), ou pour les personnes se voyant proposer un emploi avec un salaire très compétitif, validé par le système de limites salariales (Pay Limit Scheme).
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* Norvège & Islande */}
              <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="img" src="https://flagcdn.com/no.svg" alt="Drapeau Norvège" sx={{ width: 24, height: 18, borderRadius: '2px', boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }}/> 
                Norvège & <Box component="img" src="https://flagcdn.com/is.svg" alt="Drapeau Islande" sx={{ width: 24, height: 18, borderRadius: '2px', boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }}/> Islande
              </Typography>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Norvège : Skilled Worker</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Pour postuler, vous devez posséder un diplôme de l'enseignement supérieur et avoir une offre d'emploi correspondant à vos qualifications, avec un salaire et des conditions de travail conformes aux normes norvégiennes (conventions collectives).
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Islande : Expert Qualifié</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Délivré aux professionnels disposant de qualifications spécialisées. La Direction du Travail islandaise n'accordera ce permis que si elle atteste que l'expertise requise ne peut être trouvée localement ni au sein de l'Espace Économique Européen (EEE).
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
