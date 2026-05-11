import { notFound } from "next/navigation"
import { Box } from "@mui/material"
import { Header } from "@/components/header"
import { CountryPage } from "@/components/country-page"
import { Footer } from "@/components/footer"
import { gccCountries } from "@/lib/countries"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return gccCountries.map((country) => ({
    slug: country.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const country = gccCountries.find((c) => c.slug === slug)
  
  if (!country) {
    return {
      title: "Pays non trouvé | Global-Path",
    }
  }

  return {
    title: `Visa de travail - ${country.name} | Global-Path`,
    description: country.description,
  }
}

export default async function GCCCountryPage({ params }: PageProps) {
  const { slug } = await params
  const country = gccCountries.find((c) => c.slug === slug)

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
      <Footer />
    </Box>
  )
}
