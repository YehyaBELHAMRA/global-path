import { Metadata } from "next"
import { Box, Container, Typography, Card, CardContent, CardActions, Button } from "@mui/material"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import Link from "next/link"

const row1Regions = [
  {
    title: "Carte Bleue Européenne (24 pays)",
    description: "Accédez à des opportunités de carrière uniques dans 24 pays de l'Union Européenne (à l'exclusion de la France, du Danemark et de l'Irlande). La Carte Bleue Européenne facilite l'installation des professionnels hautement qualifiés avec des conditions de travail et de résidence attractives.",
    flags: [
      "https://flagcdn.com/lu.svg", "https://flagcdn.com/be.svg", "https://flagcdn.com/de.svg", 
      "https://flagcdn.com/at.svg", "https://flagcdn.com/nl.svg", "https://flagcdn.com/se.svg", 
      "https://flagcdn.com/fi.svg", "https://flagcdn.com/mt.svg", "https://flagcdn.com/it.svg", 
      "https://flagcdn.com/es.svg", "https://flagcdn.com/pt.svg", "https://flagcdn.com/bg.svg", 
      "https://flagcdn.com/cy.svg", "https://flagcdn.com/hr.svg", "https://flagcdn.com/ee.svg", 
      "https://flagcdn.com/gr.svg", "https://flagcdn.com/hu.svg", "https://flagcdn.com/lv.svg", 
      "https://flagcdn.com/lt.svg", "https://flagcdn.com/pl.svg", "https://flagcdn.com/cz.svg", 
      "https://flagcdn.com/ro.svg", "https://flagcdn.com/sk.svg", "https://flagcdn.com/si.svg"
    ],
    link: "/regions/european-blue-card",
  },
  {
    title: "Résidence Permanente (RP) en Amérique du Nord",
    description: "L'Amérique du Nord offre d'excellentes options de résidence permanente (RP). Découvrez les programmes d'immigration clés au Canada, comme l'Entrée Express, le Programme de Sélection des Travailleurs Qualifiés (PSTQ) du Québec, les Programmes de Candidats Provinciaux (PCP), et aux États-Unis (Green Card, visas spécialisés) pour une installation durable.",
    flags: ["https://flagcdn.com/ca.svg", "https://flagcdn.com/us.svg"],
    link: "/regions/north-america",
  },
  {
    title: "Visas de travail & Golden Visas dans les pays du Golfe",
    description: "Profitez d'un développement économique fulgurant dans les six nations du Gulf Cooperation Council (GCC). Découvrez les diverses options de visas de travail ainsi que les prestigieux Golden Visas pour les talents internationaux.",
    flags: [
      "https://flagcdn.com/ae.svg", "https://flagcdn.com/qa.svg", "https://flagcdn.com/sa.svg", 
      "https://flagcdn.com/kw.svg", "https://flagcdn.com/bh.svg", "https://flagcdn.com/om.svg"
    ],
    link: "/regions/gcc",
  }
]

const row2Regions = [
  {
    title: "Autres destinations européennes",
    description: "Découvrez les opportunités professionnelles dans les pays européens hors du programme de la Carte Bleue Européenne, tels que l'Irlande, le Royaume-Uni, la Suisse, la Norvège, le Danemark,  ou l'Islande, réputés pour leurs opportunités professionnelles et pour leur qualité de vie.",
    flags: [
      "https://flagcdn.com/dk.svg", "https://flagcdn.com/ie.svg", "https://flagcdn.com/ch.svg", 
      "https://flagcdn.com/no.svg", "https://flagcdn.com/is.svg", "https://flagcdn.com/gb.svg"
    ],
    link: "/regions/europe-other",
  },
  {
    title: "Visas de travail en Océanie",
    description: "Une qualité de vie exceptionnelle vous attend en Océanie. Explorez les différents visas de travail et programmes d'immigration qualifiée disponibles en Australie et en Nouvelle-Zélande pour bâtir votre nouvelle carrière.",
    flags: ["https://flagcdn.com/au.svg", "https://flagcdn.com/nz.svg"],
    link: "/regions/oceania",
  }
]

export const metadata: Metadata = {
  title: "Global-Path | Votre mobilité internationale et programmes d'immigration qualifiée",
  description: "Explorez les principales destinations mondiales et trouvez le programme d'immigration qualifiée adapté à votre projet professionnel : Carte Bleue Européenne, Résidence Permanente, Golden Visa.",
  openGraph: {
    title: "Global-Path | Votre mobilité internationale et programmes d'immigration qualifiée",
    description: "Trouvez le programme d'immigration qualifiée adapté à votre projet professionnel (Carte Bleue Européenne, Résidence Permanente, Visas de travail) vers l'Europe, l'Amérique du Nord, le Golfe et l'Océanie.",
    url: "https://global-path.fr",
    siteName: "Global-Path",
    locale: "fr_FR",
    type: "website",
  },
}

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      <HeroSection />
      
      {/* Main Content */}
      <Container component="main" maxWidth="lg" sx={{ flex: 1, py: { xs: 6, md: 10 } }}>
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: "bold" }}>
            Votre mobilité internationale
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: "800px", mx: "auto" }}>
            Explorez les principales destinations mondiales et trouvez le programme d'immigration adapté à votre projet professionnel.
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
            gap: 4,
            mb: 4
          }}
        >
          {row1Regions.map((region, index) => (
            <Card 
              key={index} 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': { 
                  transform: 'translateY(-5px)', 
                  boxShadow: 6 
                } 
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
            <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {region.flags.map((flag, idx) => (
                    <Box
                      key={idx}
                      component="img"
                      src={flag}
                      alt="Drapeau"
                      sx={{
                        width: 32,
                        height: 24,
                        objectFit: 'cover',
                        borderRadius: '2px',
                        boxShadow: '0 0 0 1px rgba(0,0,0,0.1)'
                      }}
                    />
                  ))}
                </Box>
                <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
                  {region.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
                  {region.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Link href={region.link} style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary" disableElevation component="span">
                    Découvrir
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </Box>

        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, 
            gap: 4 
          }}
        >
          {row2Regions.map((region, index) => (
            <Card 
              key={index} 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': { 
                  transform: 'translateY(-5px)', 
                  boxShadow: 6 
                } 
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
            <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {region.flags.map((flag, idx) => (
                    <Box
                      key={idx}
                      component="img"
                      src={flag}
                      alt="Drapeau"
                      sx={{
                        width: 32,
                        height: 24,
                        objectFit: 'cover',
                        borderRadius: '2px',
                        boxShadow: '0 0 0 1px rgba(0,0,0,0.1)'
                      }}
                    />
                  ))}
                </Box>
                <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
                  {region.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
                  {region.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Link href={region.link} style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary" disableElevation component="span">
                    Découvrir
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>

      <Footer />
    </Box>
  )
}
