import { notFound } from "next/navigation"
import { Box, Container, Typography } from "@mui/material"
import { Header } from "@/components/header"
import { CountryPage } from "@/components/country-page"
import { northAmericaCountries } from "@/lib/countries"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return northAmericaCountries.map((country) => ({
    slug: country.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const country = northAmericaCountries.find((c) => c.slug === slug)
  
  if (!country) {
    return {
      title: "Pays non trouvé | Global Path",
    }
  }

  return {
    title: `Immigration ${country.name} | Global Path`,
    description: country.description,
  }
}

export default async function NorthAmericaCountryPage({ params }: PageProps) {
  const { slug } = await params
  const country = northAmericaCountries.find((c) => c.slug === slug)

  if (!country) {
    notFound()
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <CountryPage 
          country={country} 
          backLink="/" 
          backLabel="Retour à l'accueil"
        />
      </Box>
      <Box
        component="footer"
        sx={{
          borderTop: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            Global Path. À titre informatif uniquement.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}
