import { Metadata } from "next"
import NextLink from "next/link"
import { Box, Container, Typography, Card, CardContent, Grid, List, ListItem, ListItemIcon, ListItemText, Divider, Link } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const destinations = [
  { name: "Arabie Saoudite", code: "sa", slug: "saudi-arabia" },
  { name: "Bahreïn", code: "bh", slug: "bahrain" },
  { name: "Émirats Arabes Unis", code: "ae", slug: "united-arab-emirates" },
  { name: "Koweït", code: "kw", slug: "kuwait" },
  { name: "Oman", code: "om", slug: "oman" },
  { name: "Qatar", code: "qa", slug: "qatar" }
]

export const metadata: Metadata = {
  title: "Pays du Golfe (GCC) | Visas de travail et Golden Visas - Global-Path",
  description: "Découvrez les opportunités professionnelles dans les pays du GCC : Golden Visas aux Émirats, Premium Residency en Arabie Saoudite, Visas de travail au Qatar.",
  openGraph: {
    title: "Immigration dans les pays du Golfe (GCC) | Global-Path",
    description: "Découvrez les visas de travail et de résidence pour les professionnels hautement qualifiés dans les six nations du Gulf Cooperation Council.",
    type: "website",
  },
}

export default function GCC() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Les six nations du Gulf Cooperation Council (GCC)
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, textAlign: 'center' }}>
            Découvrez les visas de travail et de résidence pour les professionnels hautement qualifiés dans le Golfe
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container component="main" maxWidth="lg" sx={{ flex: 1, py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'justify' }}>
                Immigration et travail dans les six nations du Gulf Cooperation Council (GCC)
              </Typography>
              <Typography variant="body1" component="p" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4, textAlign: 'justify' }}>
                Les six nations du Gulf Cooperation Council (GCC) modernisent rapidement leurs politiques d'immigration pour s'éloigner d'une dépendance exclusive au parrainage (système de Kafala). De nouvelles catégories de visas émergent, ciblant les talents mondiaux, les cadres supérieurs, et les investisseurs pour des séjours de longue durée.
              </Typography>

              {/* Arabie Saoudite */}
              <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="img" src="https://flagcdn.com/sa.svg" alt="Drapeau Arabie Saoudite" sx={{ width: 24, height: 18, borderRadius: '2px', boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }}/> 
                Arabie Saoudite
              </Typography>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Premium Residency</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        L'Iqama Premium permet de résider sans sponsor. Cinq nouveaux produits ont été lancés pour attirer les "Talents Spéciaux", les chercheurs, les professionnels de la santé, et les investisseurs, facilitant l'accès à la résidence permanente.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Visa de Travail Standard</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        L'Iqama classique pour emploi nécessite une offre de la part d'un employeur saoudien, qui agira comme parrain. Des réformes récentes de mobilité professionnelle permettent aux travailleurs de changer plus librement d'entreprise.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* Émirats Arabes Unis */}
              <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="img" src="https://flagcdn.com/ae.svg" alt="Drapeau UAE" sx={{ width: 24, height: 18, borderRadius: '2px', boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }}/> 
                Émirats Arabes Unis
              </Typography>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Golden Visa & Green Visa</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Le <strong>Golden Visa</strong> accorde 10 ans de résidence (sans sponsor) aux scientifiques, médecins, et professionnels exceptionnels. Le <strong>Green Visa</strong> (5 ans) vise les indépendants et les employés hautement qualifiés (Niveau 1, 2 et 3 de qualification).
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Visa de Travail Classique</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Visa standard de 2 ans. Il est strictement parrainé par l'employeur (zone franche ou entreprise continentale) et géré conjointement avec le Ministère des Ressources Humaines (MOHRE).
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* Qatar */}
              <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="img" src="https://flagcdn.com/qa.svg" alt="Drapeau Qatar" sx={{ width: 24, height: 18, borderRadius: '2px', boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }}/> 
                Qatar
              </Typography>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Résidence Permanente</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Octroyée à des individus sélectionnés (quota limité). Les titulaires bénéficient d'avantages similaires aux citoyens (santé, éducation) et peuvent posséder des commerces sans partenaire qatari.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Permis de Travail (QID)</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        La vaste majorité de la main-d'œuvre dépend du parrainage par l'entreprise locale. Récemment, le Qatar a aboli la règle du "Certificat de Non-Objection" (NOC), permettant aux professionnels de changer plus facilement de poste.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* Bahreïn */}
              <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="img" src="https://flagcdn.com/bh.svg" alt="Drapeau Bahreïn" sx={{ width: 24, height: 18, borderRadius: '2px', boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }}/> 
                Bahreïn
              </Typography>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Golden Residency Visa</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Visa de 10 ans, renouvelable indéfiniment. Les talents hautement qualifiés (médecins, cadres, chercheurs) peuvent postuler s'ils répondent à des critères de revenu ou d'expérience, offrant ainsi flexibilité et droits de parrainage familial.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Visa de Travail Standard</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Géré avec flexibilité par l'Autorité de Régulation du Marché du Travail (LMRA), ce visa lie l'expatrié à son parrain, tout en facilitant une des législations les plus permissives de la région.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* Oman et Koweït - Regroupés pour équilibrer */}
              <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="img" src="https://flagcdn.com/om.svg" alt="Drapeau Oman" sx={{ width: 24, height: 18, borderRadius: '2px', boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }}/> 
                Oman & <Box component="img" src="https://flagcdn.com/kw.svg" alt="Drapeau Koweït" sx={{ width: 24, height: 18, borderRadius: '2px', boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }}/> Koweït
              </Typography>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Oman: Investor & Work Visa</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        Oman propose un programme de résidence d'investisseur (5 à 10 ans) pour stimuler les affaires. Les professionnels qualifiés entrent typiquement avec un visa de travail de 2 ans sponsorisé par leur employeur et soutenu par la "Vision 2040".
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', bgcolor: 'background.paper' }} variant="outlined">
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <CheckCircleIcon color="primary" sx={{ mt: 0.5 }} />
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>Koweït: Visa Article 18</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: 'justify', color: 'text.secondary' }}>
                        La voie de résidence standard pour le secteur privé, accordée aux expatriés via le parrainage d'une société koweïtienne. Les transferts d'employeurs et la vérification des diplômes pour les travailleurs hautement qualifiés y sont très réglementés.
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
                    <NextLink href={`/gcc/${dest.slug}`} key={idx} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Box 
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
                    </NextLink>
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