import { notFound } from "next/navigation"
import { Box } from "@mui/material"
import { Header } from "@/components/header"
import { CountryPage } from "@/components/country-page"
import { Footer } from "@/components/footer"
import { allCountries } from "@/lib/countries"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allCountries
    .filter(country => country.region === "europe-other")
    .map((country) => ({
      slug: country.slug,
    }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const country = allCountries.find((c) => c.slug === slug && c.region === "europe-other")

  if (!country) {
    return {
      title: "Pays non trouvé | Global-Path",
    }
  }

  return {
    title: `Europe - ${country.name} | Global-Path`,
    description: country.description,
  }
}

export default async function EuropeOtherCountryPage({ params }: PageProps) {
  const { slug } = await params
  const country = allCountries.find((c) => c.slug === slug && c.region === "europe-other")

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