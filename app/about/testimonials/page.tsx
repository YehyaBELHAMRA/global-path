import { Metadata } from "next"
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Rating } from "@mui/material"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const testimonials = [
  {
    name: "N. B.",
    role: "Consultant IT - Secteur Bancaire",
    destination: "Düsseldorf, Allemagne (Blaue Karte)",
    image: "", // Laissé vide pour afficher l'initiale
    documentImage: "/images/testimonials/GER_ECB_Blaue_Karte_2026_04.jpg",
    text: "Après avoir vécu et travaillé en France et au Luxembourg pendant neuf ans (depuis 2017) pour plusieurs banques, j'ai voulu donner une nouvelle dimension internationale à ma carrière. Mon expertise technique se concentre sur COBOL DB2 sur IBM z/Os, ainsi que C# et .Net dans le secteur bancaire. Ayant déjà un bon niveau d'allemand (B2), Global-Path m'a aidé à réaliser qu'une transition vers l'Allemagne était une opportunité exceptionnelle. J'ai déposé mon dossier à l'Ambassade d'Allemagne à Paris et j'ai obtenu ma Carte Bleue Européenne (Blaue Karte) en avril 2026 ! Je suis ravi de commencer mon nouveau poste chez Citibank à Düsseldorf ce 1er juin 2026.",
    rating: 5,
  }
]

export const dynamic = 'force-static'
export const metadata: Metadata = { 
  title: "Témoignages | Global-Path",
  description: "Découvrez les témoignages et retours d'expérience de professionnels qui ont réussi leur mobilité internationale grâce à Global-Path.",
  openGraph: {
    title: "Témoignages | Global-Path",
    description: "Découvrez les témoignages de professionnels algériens hautement qualifiés qui ont réussi leur mobilité internationale avec Global-Path.",
    type: "website"
  }
}

export default function TestimonialsPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Témoignages
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Découvrez les histoires inspirantes des professionnels qui ont franchi le pas de la mobilité internationale avec succès.
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container component="main" maxWidth="lg" sx={{ flex: 1, py: { xs: 6, md: 10 } }}>
        
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Ils nous ont fait confiance
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.1rem' }}>
            Parce que chaque parcours est unique, nous sommes fiers de partager les réussites de nos candidats. Leurs expériences démontrent qu'au-delà des restrictions, des opportunités mondiales exceptionnelles existent pour les talents algériens.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          {testimonials.map((testimonial, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': { 
                    transform: 'translateY(-5px)', 
                    boxShadow: 6 
                  } 
                }} 
                variant="outlined"
              >
                <CardContent sx={{ flexGrow: 1, p: 4, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                    <FormatQuoteIcon sx={{ fontSize: 50, color: 'primary.light', opacity: 0.5, transform: 'rotate(180deg)' }} />
                    <Rating value={testimonial.rating} readOnly size="small" />
                  </Box>
                  
                  <Typography variant="body1" sx={{ mb: 4, fontStyle: 'italic', color: 'text.secondary', lineHeight: 1.8, flexGrow: 1, textAlign: 'justify' }}>
                    "{testimonial.text}"
                  </Typography>
                  
                  {testimonial.documentImage && (
                    <Box sx={{ mb: 4, borderRadius: 2, overflow: 'hidden', border: '1px solid', borderColor: 'divider', boxShadow: 1, bgcolor: 'grey.50' }}>
                      <Box 
                        component="img"
                        src={testimonial.documentImage}
                        alt={`Visa/Document de ${testimonial.name}`}
                        sx={{ width: '100%', height: 'auto', display: 'block', maxHeight: 400, objectFit: 'contain' }}
                      />
                    </Box>
                  )}
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pt: 2, borderTop: '1px solid', borderColor: 'divider', mt: 'auto' }}>
                    <Avatar 
                      src={testimonial.image || undefined} 
                      alt={`Photo de ${testimonial.name}`} 
                      sx={{ width: 56, height: 56, bgcolor: 'primary.main' }}
                    >
                      {testimonial.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="primary.main" sx={{ fontWeight: 500 }}>
                        {testimonial.role}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {testimonial.destination}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>

      <Footer />
    </Box>
  )
}
