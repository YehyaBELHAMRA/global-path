import { Box, Container, Typography, Card, CardContent, Grid, List, ListItem, ListItemIcon, ListItemText, Divider, Link } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const countries = [
  { name: "Allemagne", code: "de" }, { name: "Autriche", code: "at" },
  { name: "Belgique", code: "be" }, { name: "Bulgarie", code: "bg" },
  { name: "Chypre", code: "cy" }, { name: "Croatie", code: "hr" },
  { name: "Espagne", code: "es" }, { name: "Estonie", code: "ee" },
  { name: "Finlande", code: "fi" }, { name: "Grèce", code: "gr" },
  { name: "Hongrie", code: "hu" }, { name: "Italie", code: "it" },
  { name: "Lettonie", code: "lv" }, { name: "Lituanie", code: "lt" },
  { name: "Luxembourg", code: "lu" }, { name: "Malte", code: "mt" },
  { name: "Pays-Bas", code: "nl" }, { name: "Pologne", code: "pl" },
  { name: "Portugal", code: "pt" }, { name: "Roumanie", code: "ro" },
  { name: "Slovaquie", code: "sk" }, { name: "Slovénie", code: "si" },
  { name: "Suède", code: "se" }, { name: "Tchéquie", code: "cz" }
]

export default function EuropeanBlueCard() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Carte Bleue Européenne
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, textAlign: 'center' }}>
            Votre passeport pour une carrière internationale dans 24 pays de l'Union Européenne
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container component="main" maxWidth="lg" sx={{ flex: 1, py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'justify' }}>
                Qu'est-ce que la Carte Bleue Européenne ?
              </Typography>
              <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2, textAlign: 'justify' }}>
                La Carte Bleue Européenne est un titre de séjour et de travail approuvé à l'échelle de l'UE (directive 2021/1883) qui permet aux ressortissants de pays tiers hautement qualifiés de vivre et de travailler dans 24 des 27 pays de l'Union Européenne (à l'exclusion du Danemark et de l'Irlande pour toutes les nationalités, et de la France pour les ressortissants algériens à cause de l'accord bilatéral franco-algérien de 1968).
              </Typography>
              <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'justify' }}>
                Inspirée de la "Green Card" américaine, elle a été conçue pour attirer les talents mondiaux en offrant une procédure accélérée de résidence et d'emploi, tout en garantissant des droits socio-économiques étendus et la mobilité au sein de l'Europe.
              </Typography>
            </Box>

            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'justify' }}>
                Conditions d'éligibilité
              </Typography>
              <Card variant="outlined" sx={{ mb: 3 }}>
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Citoyenneté non-européenne" 
                        secondary="Vous devez être ressortissant d'un pays tiers (hors UE/EEE/Suisse)." 
                        sx={{ '& .MuiListItemText-primary': { textAlign: 'justify' }, '& .MuiListItemText-secondary': { textAlign: 'justify' } }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Niveau d'études ou compétences professionnelles" 
                        secondary="Posséder un diplôme de l'enseignement supérieur (au moins bac+3) ou, dans le domaine des technologies de l'information et de la communication (TIC), justifier d'au moins 3 ans d'expérience professionnelle pertinente." 
                        sx={{ '& .MuiListItemText-primary': { textAlign: 'justify' }, '& .MuiListItemText-secondary': { textAlign: 'justify' } }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Contrat de travail valide" 
                        secondary="Disposer d'un contrat de travail ou d'une offre d'emploi ferme d'une durée d'au moins 6 mois dans le pays d'accueil européen." 
                        sx={{ '& .MuiListItemText-primary': { textAlign: 'justify' }, '& .MuiListItemText-secondary': { textAlign: 'justify' } }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Seuil de salaire minimum" 
                        secondary="Le salaire annuel brut proposé doit atteindre un seuil spécifique défini par l'État membre (généralement entre 1 et 1,6 fois le salaire annuel brut moyen national du pays)." 
                        sx={{ '& .MuiListItemText-primary': { textAlign: 'justify' }, '& .MuiListItemText-secondary': { textAlign: 'justify' } }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Box>

            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'justify' }}>
                Avantages clés
              </Typography>
              <Grid container spacing={3}>
                {[
                  "Conditions de travail et de salaire égales à celles des citoyens de l'UE.",
                  "Liberté de circulation au sein de l'espace Schengen pour de courts séjours.",
                  "Accès aux droits socio-économiques et à la sécurité sociale du pays d'accueil.",
                  "Conditions favorables et accélérées pour le regroupement familial.",
                  "Perspective de résidence permanente et accès facilité au statut de résident de longue durée de l'UE.",
                  "Mobilité intra-européenne facilitée vers d'autres États membres après 12 mois de travail."
                ].map((benefit, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                          <Typography variant="body2" sx={{ textAlign: 'justify' }}>{benefit}</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'justify' }}>
                Liens utiles
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <OpenInNewIcon color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Link href="https://www.consilium.europa.eu/fr/infographics/eu-blue-card/" target="_blank" rel="noopener noreferrer" underline="hover" color="inherit">
                        Commission Européenne (CE) : Infographie et explications sur la Carte Bleue Européenne
                      </Link>
                    } 
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <OpenInNewIcon color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Link href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32021L1883&qid=1776694382284" target="_blank" rel="noopener noreferrer" underline="hover" color="inherit">
                        EUR-Lex : Directive 2021/1883 sur la Carte Bleue Européenne
                      </Link>
                    } 
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <OpenInNewIcon color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Link href="https://en.wikipedia.org/wiki/Blue_Card_(European_Union)" target="_blank" rel="noopener noreferrer" underline="hover" color="inherit">
                        Wikipedia English : Blue Card (European Union)
                      </Link>
                    } 
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <OpenInNewIcon color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Link href="https://fr.wikipedia.org/wiki/Carte_bleue_(Union_europ%C3%A9enne)" target="_blank" rel="noopener noreferrer" underline="hover" color="inherit">
                        Wikipedia French : Carte bleue (Union européenne)
                      </Link>
                    } 
                  />
                </ListItem>
              </List>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ position: 'sticky', top: 100, bgcolor: 'background.paper' }} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                  Pays participants (24)
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                  {countries.sort((a, b) => a.name.localeCompare(b.name)).map((country, idx) => (
                    <Box 
                      key={idx} 
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        bgcolor: 'action.hover', 
                        px: 1.5, 
                        py: 0.5, 
                        borderRadius: 1,
                        border: '1px solid',
                        borderColor: 'divider',
                      }}
                    >
                      <Box
                        component="img"
                        src={`https://flagcdn.com/${country.code}.svg`}
                        alt={`Drapeau ${country.name}`}
                        sx={{ width: 20, height: 15, objectFit: 'cover', borderRadius: '2px', boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }}
                      />
                      <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                        {country.name}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 3, textAlign: 'center' }}>
                  * À l'exclusion du Danemark et de l'Irlande pour toutes les nationalités, et de la France pour les ressortissants algériens à cause de l'accord bilatéral franco-algérien de 1968.
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
