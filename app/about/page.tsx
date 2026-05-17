import { Metadata } from "next"
import { Box, Container, Typography, Card, CardContent, Grid, List, ListItem, ListItemIcon, ListItemText, Divider, Link, Button } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import InfoIcon from "@mui/icons-material/Info"
import PublicIcon from "@mui/icons-material/Public"
import GavelIcon from "@mui/icons-material/Gavel"
import NextLink from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const dynamic = 'force-static'
export const metadata: Metadata = { 
  title: "À propos | Global-Path",
  description: "Découvrez la mission de Global-Path : accompagner les professionnels dans leur mobilité internationale et leurs démarches d'immigration vers les meilleures destinations mondiales.",
  openGraph: {
    title: "À propos de Global-Path",
    description: "Accompagner les professionnels dans leur mobilité internationale et leurs démarches d'immigration.",
    type: "website"
  }
}

export default function AboutPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            À propos de Global-Path
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Notre mission : Ouvrir les portes du monde aux talents algériens face aux restrictions de mobilité en France.
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container component="main" maxWidth="lg" sx={{ flex: 1, py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 8 }}>
            
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'justify' }}>
                La genèse de Global-Path
              </Typography>
              <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2, textAlign: 'justify' }}>
                Global-Path est né d'un constat frappant concernant la mobilité des travailleurs hautement qualifiés algériens. Alors que l'Europe modernise ses dispositifs d'attractivité pour les talents mondiaux, une spécificité juridique française crée une barrière unique pour les ressortissants algériens, les privant de certains avantages liés à la mobilité internationale.
              </Typography>
            </Box>

            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}>
                <GavelIcon color="primary" /> L'exception française : La privation de la Carte Bleue Européenne
              </Typography>
              <Typography variant="body1" component="p" sx={{ mb: 3, textAlign: 'justify' }}>
                En France, la mise en œuvre de la Directive européenne 2021/1883 relative à la Carte Bleue Européenne (CBE) a été finalisée par la Loi du 30 avril 2025. Cette transposition modernise le titre de séjour « Talent – Carte Bleue Européenne » pour attirer les travailleurs hautement qualifiés et assouplit considérablement les critères d'éligibilité :
              </Typography>

              <Card variant="outlined" sx={{ mb: 4, bgcolor: 'background.paper' }}>
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                      <ListItemText 
                        primary="Contrat de travail réduit" 
                        secondary="La durée minimale du contrat requis est passée de 12 à 6 mois." 
                        sx={{ '& .MuiListItemText-primary': { fontWeight: 'bold' } }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                      <ListItemText 
                        primary="Seuil salarial accessible" 
                        secondary="La rémunération annuelle brute doit être au moins égale à 1,5 fois le salaire moyen de référence, soit 59 373 € brut par an (valeur 2025/2026)." 
                        sx={{ '& .MuiListItemText-primary': { fontWeight: 'bold' } }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                      <ListItemText 
                        primary="Qualifications" 
                        secondary="Le candidat doit justifier d'un diplôme de l'enseignement supérieur (3 ans minimum) ou d'une expérience professionnelle d'au moins 5 ans." 
                        sx={{ '& .MuiListItemText-primary': { fontWeight: 'bold' } }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
                      <ListItemText 
                        primary="Mobilité facilitée" 
                        secondary="Les titulaires d'une CBE d'un autre État membre peuvent s'installer plus facilement en France." 
                        sx={{ '& .MuiListItemText-primary': { fontWeight: 'bold' } }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>

              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'error.main' }}>
                Pourquoi les Algériens sont-ils exclus de ce dispositif ?
              </Typography>
              <Typography variant="body1" component="p" sx={{ mb: 2, textAlign: 'justify' }}>
                Malgré ces avancées, les ressortissants algériens ne peuvent pas prétendre à la Carte Bleue Européenne. Ils sont la <strong>seule et unique nationalité exclue</strong> de cette carte en France. Cette situation s'explique par deux principes juridiques :
              </Typography>
              
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', borderLeft: '4px solid', borderColor: 'primary.main' }} variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>L'exclusivité de l'Accord de 1968</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                        Le séjour et l'emploi des Algériens en France sont régis de manière exclusive par l'Accord franco-algérien du 27 décembre 1968. Ce texte constitue un "bloc autonome" qui remplace l'application du droit commun pour cette nationalité.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', borderLeft: '4px solid', borderColor: 'primary.main' }} variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>La primauté des traités internationaux</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                        En vertu de la Constitution française, les traités régulièrement ratifiés ont une autorité supérieure aux lois internes. Ainsi, les dispositions du CESEDA relatives à la "Carte Talent" ne s'appliquent pas aux Algériens.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Box sx={{ p: 3, bgcolor: 'error.50', borderRadius: 2, border: '1px solid', borderColor: 'error.200' }}>
                <Typography variant="body2" sx={{ textAlign: 'justify', color: 'error.900' }}>
                  <strong>Conséquence directe :</strong> Un ingénieur ou cadre algérien hautement qualifié doit solliciter un Certificat de Résidence Algérien (CRA) mention "salarié". Bien que ce régime spécifique présente certains avantages (accès plus rapide au titre de 10 ans), il prive ces travailleurs des droits à la mobilité intra-européenne offerts par la Carte Bleue Européenne.
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 6 }} />

            <Box>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', display: 'flex', alignItems: 'center', gap: 1 }}>
                <PublicIcon fontSize="large" /> Notre Réponse : Explorer les alternatives mondiales
              </Typography>
              <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4, textAlign: 'justify' }}>
                Face à cette restriction spécifique à la France, Global-Path a été créé pour mettre en lumière les très nombreuses autres voies d'immigration et de mobilité internationale qui s'offrent aux talents algériens, et qui valorisent pleinement leurs qualifications sans restrictions.
              </Typography>
              
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <NextLink href="/regions/european-blue-card" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                    <Button component="span" variant="outlined" color="primary" fullWidth sx={{ py: 2, justifyContent: 'flex-start', textAlign: 'left', height: '100%' }}>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>24 autres pays de l'UE</Typography>
                        <Typography variant="caption" sx={{ textTransform: 'none', color: 'text.secondary' }}>La Carte Bleue Européenne y est pleinement accessible sans distinction de nationalité.</Typography>
                      </Box>
                    </Button>
                  </NextLink>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <NextLink href="/regions/north-america" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                    <Button component="span" variant="outlined" color="primary" fullWidth sx={{ py: 2, justifyContent: 'flex-start', textAlign: 'left', height: '100%' }}>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Amérique du Nord</Typography>
                        <Typography variant="caption" sx={{ textTransform: 'none', color: 'text.secondary' }}>Résidence Permanente (Canada) et opportunités massives de Visas de travail (États-Unis).</Typography>
                      </Box>
                    </Button>
                  </NextLink>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <NextLink href="/regions/gcc" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                    <Button component="span" variant="outlined" color="primary" fullWidth sx={{ py: 2, justifyContent: 'flex-start', textAlign: 'left', height: '100%' }}>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Pays du Golfe (GCC)</Typography>
                        <Typography variant="caption" sx={{ textTransform: 'none', color: 'text.secondary' }}>Golden Visas, Premium Residency et opportunités professionnelles majeures et défiscalisées.</Typography>
                      </Box>
                    </Button>
                  </NextLink>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <NextLink href="/regions/europe-other" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                    <Button component="span" variant="outlined" color="primary" fullWidth sx={{ py: 2, justifyContent: 'flex-start', textAlign: 'left', height: '100%' }}>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Autres Nations (Suisse, UK...)</Typography>
                        <Typography variant="caption" sx={{ textTransform: 'none', color: 'text.secondary' }}>Des cadres de vie premium avec des systèmes d'immigration qualifiée ou par points.</Typography>
                      </Box>
                    </Button>
                  </NextLink>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          
          {/* Right Sidebar */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ position: 'sticky', top: 100, bgcolor: 'background.paper' }} variant="outlined">
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <InfoIcon color="primary" />
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                    Textes de référence
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <List>
                  <ListItem sx={{ px: 0, alignItems: 'flex-start' }}>
                    <ListItemText 
                      primary={
                        <Link href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000045646581" target="_blank" rel="noopener noreferrer" underline="hover" color="primary" sx={{ fontWeight: 500 }}>
                          LégiFrance : Loi du 30 avril 2025
                        </Link>
                      } 
                      secondary="Loi finalisant la mise en œuvre de la Directive européenne sur la Carte Bleue en France."
                      sx={{ m: 0 }}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0, alignItems: 'flex-start', mt: 2 }}>
                    <ListItemText 
                      primary={
                        <Link href="https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32021L1883" target="_blank" rel="noopener noreferrer" underline="hover" color="primary" sx={{ fontWeight: 500 }}>
                          Eur-Lex : Directive 2021/1883
                        </Link>
                      } 
                      secondary="Directive relative aux conditions d'entrée et de séjour des ressortissants de pays tiers aux fins d'un emploi hautement qualifié."
                      sx={{ m: 0 }}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  )
}
