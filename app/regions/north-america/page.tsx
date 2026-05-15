import { Box, Container, Typography, Card, CardContent, Grid, List, ListItem, ListItemIcon, ListItemText, Divider, Link } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const destinations = [
  { name: "Canada", code: "ca" },
  { name: "États-Unis", code: "us" }
]

export default function NorthAmerica() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Amérique du Nord
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, textAlign: 'center' }}>
            Explorez les opportunités de résidence permanente et de travail au Canada et aux États-Unis
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container component="main" maxWidth="lg" sx={{ flex: 1, py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'justify' }}>
                Immigration au Canada : Cap sur la Francophonie
              </Typography>
              <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2, textAlign: 'justify' }}>
                Le Canada offre de multiples voies vers la résidence permanente (RP) et valorise particulièrement les candidats francophones et bilingues. Le gouvernement canadien a mis en place de nombreuses mesures pour accroître le poids démographique des francophones, même en dehors de la province du Québec.
              </Typography>
              
              <Card variant="outlined" sx={{ mb: 3 }}>
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Mobilité Francophone" 
                        secondary="Un programme facilitant l'embauche de travailleurs francophones ou bilingues hors Québec. Il permet aux employeurs canadiens de vous recruter facilement sans avoir besoin de fournir une Étude d'Impact sur le Marché du Travail (EIMT)." 
                        sx={{ '& .MuiListItemText-primary': { textAlign: 'justify' }, '& .MuiListItemText-secondary': { textAlign: 'justify' } }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Entrée Express (Tirages ciblés pour les francophones)" 
                        secondary="Le système Entrée Express gère les demandes de résidence permanente pour le Canada hors Québec. Il existe désormais des tirages spécifiques, avec des scores requis souvent plus bas, pour les candidats justifiant d'un bon niveau de français." 
                        sx={{ '& .MuiListItemText-primary': { textAlign: 'justify' }, '& .MuiListItemText-secondary': { textAlign: 'justify' } }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Le Québec (Système Arrima)" 
                        secondary="Le Québec possède son propre système d'immigration pour sélectionner ses résidents permanents. Des programmes comme le Programme de l'expérience québécoise (PEQ) ou le nouveau Programme de sélection des travailleurs qualifiés (PSTQ), qui remplace le PRTQ, favorisent très fortement les candidats francophones." 
                        sx={{ '& .MuiListItemText-primary': { textAlign: 'justify' }, '& .MuiListItemText-secondary': { textAlign: 'justify' } }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Nouveau-Brunswick & Provinces de l'Atlantique" 
                        secondary="Le Nouveau-Brunswick est la seule province canadienne officiellement bilingue. Le Programme d'immigration au Canada atlantique (PICA) ainsi que les initiatives provinciales recherchent activement des talents francophones pour s'y établir de manière permanente." 
                        sx={{ '& .MuiListItemText-primary': { textAlign: 'justify' }, '& .MuiListItemText-secondary': { textAlign: 'justify' } }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Box>

            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'justify' }}>
                États-Unis : Visas et Résidence Permanente
              </Typography>
              <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2, textAlign: 'justify' }}>
                Travailler et s'installer de manière permanente aux États-Unis nécessite généralement d'obtenir au préalable un visa de travail (souvent parrainé par un employeur) qui pourra par la suite être converti en résidence permanente.
              </Typography>

              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>La Green Card</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        La Carte Verte (Green Card) octroie le statut de résident permanent. Elle peut être obtenue via le parrainage d'un employeur (catégories EB-1, EB-2, EB-3), le regroupement familial, ou grâce à la loterie de la diversité (Diversity Visa Program).
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Visa H-1B</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Visa de travail temporaire majeur destiné aux professionnels occupant des "emplois spécialisés" (nécessitant généralement au moins un diplôme universitaire). Il est soumis à un quota annuel et un tirage au sort (loterie H-1B).
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Visa O-1</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Destiné aux personnes hautement qualifiées possédant des capacités extraordinaires démontrées dans les domaines des sciences, des arts, de l'éducation, des affaires ou de l'athlétisme.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Visas L-1</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Permet le transfert intra-entreprise d'un cadre dirigeant (L-1A) ou d'un employé possédant des connaissances spécialisées (L-1B) d'un bureau étranger vers un bureau situé aux États-Unis.
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
                      <Box
                        component="img"
                        src={`https://flagcdn.com/${dest.code}.svg`}
                        alt={`Drapeau ${dest.name}`}
                        sx={{ width: 40, height: 30, objectFit: 'cover', borderRadius: '4px', boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }}
                      />
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