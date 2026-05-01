export interface Country {
  name: string
  slug: string
  flag: string
  region: "european-blue-card" | "europe-other" | "north-america" | "gcc" | "oceania"
  description: string
  highlights: string[]
  requirements: string[]
  processingTime: string
  visaType: string
}

export const euCountries: Country[] = [
  {
    name: "Luxembourg",
    slug: "luxembourg",
    flag: "🇱🇺",
    region: "european-blue-card",
    description: "Le Luxembourg offre une Carte Bleue Européenne avec des conditions attractives pour les professionnels qualifiés. Centre financier de l'Europe avec une qualité de vie exceptionnelle.",
    highlights: ["Salaire minimum élevé", "Multilinguisme", "Centre financier européen", "Qualité de vie exceptionnelle"],
    requirements: ["Diplôme d'enseignement supérieur", "Contrat de travail d'au moins 1 an", "Salaire minimum de 1.5x le salaire moyen national"],
    processingTime: "3-4 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Belgique",
    slug: "belgium",
    flag: "🇧🇪",
    region: "european-blue-card",
    description: "La Belgique propose une Carte Bleue Européenne pour les travailleurs hautement qualifiés. Située au cœur de l'Europe avec accès aux institutions européennes.",
    highlights: ["Capitale de l'UE", "Système de santé excellent", "Position centrale en Europe", "Diversité culturelle"],
    requirements: ["Diplôme d'enseignement supérieur", "Contrat de travail qualifié", "Salaire brut annuel minimum requis"],
    processingTime: "2-4 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Allemagne",
    slug: "germany",
    flag: "🇩🇪",
    region: "european-blue-card",
    description: "L'Allemagne est la première économie européenne et offre d'excellentes opportunités pour les professionnels qualifiés avec sa Carte Bleue Européenne.",
    highlights: ["Première économie européenne", "Industrie technologique avancée", "Excellentes infrastructures", "Forte demande de talents"],
    requirements: ["Diplôme reconnu", "Offre d'emploi qualifié", "Salaire annuel brut minimum de 45 300€"],
    processingTime: "1-3 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Autriche",
    slug: "austria",
    flag: "🇦🇹",
    region: "european-blue-card",
    description: "L'Autriche offre une excellente qualité de vie et des opportunités professionnelles dans un cadre alpin magnifique.",
    highlights: ["Qualité de vie élevée", "Cadre naturel exceptionnel", "Économie stable", "Culture riche"],
    requirements: ["Diplôme d'enseignement supérieur", "Contrat de travail", "Salaire minimum requis"],
    processingTime: "2-3 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Pays-Bas",
    slug: "netherlands",
    flag: "🇳🇱",
    region: "european-blue-card",
    description: "Les Pays-Bas sont reconnus pour leur ouverture internationale et leur écosystème startup dynamique.",
    highlights: ["Hub technologique européen", "Population anglophone", "Écosystème startup", "Infrastructure cyclable"],
    requirements: ["Diplôme d'enseignement supérieur", "Emploi qualifié", "Salaire brut mensuel minimum"],
    processingTime: "2-3 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Suède",
    slug: "sweden",
    flag: "🇸🇪",
    region: "european-blue-card",
    description: "La Suède offre un équilibre travail-vie personnelle exemplaire et une forte culture d'innovation.",
    highlights: ["Équilibre vie-travail", "Innovation technologique", "Congés parentaux généreux", "Nature préservée"],
    requirements: ["Diplôme d'enseignement supérieur", "Offre d'emploi", "Conditions salariales requises"],
    processingTime: "2-4 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Finlande",
    slug: "finland",
    flag: "🇫🇮",
    region: "european-blue-card",
    description: "La Finlande est régulièrement classée parmi les pays les plus heureux au monde avec un excellent système éducatif.",
    highlights: ["Pays le plus heureux", "Éducation excellente", "Technologie avancée", "Nature sauvage"],
    requirements: ["Diplôme d'enseignement supérieur", "Contrat de travail qualifié", "Salaire minimum requis"],
    processingTime: "2-4 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Malte",
    slug: "malta",
    flag: "🇲🇹",
    region: "european-blue-card",
    description: "Malte offre un climat méditerranéen agréable et un secteur des services financiers et du gaming en pleine croissance.",
    highlights: ["Climat méditerranéen", "Anglais langue officielle", "Secteur iGaming", "Fiscalité avantageuse"],
    requirements: ["Diplôme d'enseignement supérieur", "Emploi qualifié", "Salaire minimum requis"],
    processingTime: "2-3 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Italie",
    slug: "italy",
    flag: "🇮🇹",
    region: "european-blue-card",
    description: "L'Italie combine richesse culturelle et opportunités dans les secteurs de la mode, du design et de la technologie.",
    highlights: ["Patrimoine culturel", "Design et mode", "Gastronomie", "Art de vivre"],
    requirements: ["Diplôme d'enseignement supérieur", "Contrat de travail", "Salaire annuel minimum"],
    processingTime: "3-4 mois",
    visaType: "Carta Blu UE"
  },
  {
    name: "Espagne",
    slug: "spain",
    flag: "🇪🇸",
    region: "european-blue-card",
    description: "L'Espagne offre un excellent climat, une riche culture et des opportunités croissantes dans la tech.",
    highlights: ["Climat ensoleillé", "Qualité de vie", "Coût de vie raisonnable", "Hubs tech émergents"],
    requirements: ["Diplôme d'enseignement supérieur", "Offre d'emploi qualifié", "Salaire minimum requis"],
    processingTime: "2-3 mois",
    visaType: "Tarjeta Azul UE"
  },
  {
    name: "Portugal",
    slug: "portugal",
    flag: "🇵🇹",
    region: "european-blue-card",
    description: "Le Portugal attire les professionnels avec son climat doux, sa qualité de vie et son écosystème tech en croissance.",
    highlights: ["Climat agréable", "Coût de vie attractif", "Communauté expat", "Écosystème startup"],
    requirements: ["Diplôme d'enseignement supérieur", "Contrat de travail", "Salaire brut annuel minimum"],
    processingTime: "2-3 mois",
    visaType: "Cartão Azul UE"
  },
  {
    name: "Bulgarie",
    slug: "bulgaria",
    flag: "🇧🇬",
    region: "european-blue-card",
    description: "La Bulgarie offre un coût de vie bas et des opportunités croissantes dans le secteur IT.",
    highlights: ["Coût de vie bas", "Secteur IT en croissance", "Nature diverse", "Fiscalité attractive"],
    requirements: ["Diplôme d'enseignement supérieur", "Contrat de travail", "Salaire minimum requis"],
    processingTime: "2-3 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Chypre",
    slug: "cyprus",
    flag: "🇨🇾",
    region: "european-blue-card",
    description: "Chypre combine climat méditerranéen et opportunités dans les services financiers.",
    highlights: ["Climat méditerranéen", "Services financiers", "Anglais répandu", "Qualité de vie"],
    requirements: ["Diplôme d'enseignement supérieur", "Emploi qualifié", "Salaire minimum requis"],
    processingTime: "2-3 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Croatie",
    slug: "croatia",
    flag: "🇭🇷",
    region: "european-blue-card",
    description: "La Croatie offre un cadre de vie exceptionnel avec sa côte adriatique et son intégration récente à l'UE.",
    highlights: ["Côte adriatique", "Membre récent de l'UE", "Tourisme développé", "Qualité de vie"],
    requirements: ["Diplôme d'enseignement supérieur", "Contrat de travail", "Salaire minimum requis"],
    processingTime: "2-4 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Estonie",
    slug: "estonia",
    flag: "🇪🇪",
    region: "european-blue-card",
    description: "L'Estonie est pionnière en e-gouvernement et offre un écosystème startup dynamique.",
    highlights: ["E-gouvernement avancé", "Écosystème startup", "Société numérique", "E-résidence"],
    requirements: ["Diplôme d'enseignement supérieur", "Emploi qualifié", "Salaire minimum requis"],
    processingTime: "2-3 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "France",
    slug: "france",
    flag: "🇫🇷",
    region: "european-blue-card",
    description: "La France offre une économie diversifiée, une culture riche et un excellent système de protection sociale.",
    highlights: ["Culture riche", "Système de santé", "Gastronomie", "Hubs tech (Paris, Lyon)"],
    requirements: ["Diplôme d'enseignement supérieur", "Contrat de travail d'au moins 1 an", "Salaire brut annuel minimum"],
    processingTime: "2-3 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Grèce",
    slug: "greece",
    flag: "🇬🇷",
    region: "european-blue-card",
    description: "La Grèce combine patrimoine historique exceptionnel et qualité de vie méditerranéenne.",
    highlights: ["Patrimoine historique", "Climat méditerranéen", "Coût de vie modéré", "Tourisme"],
    requirements: ["Diplôme d'enseignement supérieur", "Contrat de travail", "Salaire minimum requis"],
    processingTime: "2-4 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Hongrie",
    slug: "hungary",
    flag: "🇭🇺",
    region: "european-blue-card",
    description: "La Hongrie offre un coût de vie attractif et une position centrale en Europe.",
    highlights: ["Coût de vie bas", "Position centrale", "Architecture", "Thermes"],
    requirements: ["Diplôme d'enseignement supérieur", "Emploi qualifié", "Salaire minimum requis"],
    processingTime: "2-3 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Lettonie",
    slug: "latvia",
    flag: "🇱🇻",
    region: "european-blue-card",
    description: "La Lettonie offre un écosystème startup en développement et une qualité de vie nordique.",
    highlights: ["Startup ecosystem", "Nature baltique", "Coût de vie modéré", "IT en croissance"],
    requirements: ["Diplôme d'enseignement supérieur", "Contrat de travail", "Salaire minimum requis"],
    processingTime: "2-3 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Lituanie",
    slug: "lithuania",
    flag: "🇱🇹",
    region: "european-blue-card",
    description: "La Lituanie est reconnue pour son secteur fintech et sa qualité de vie.",
    highlights: ["Hub fintech", "Qualité de vie", "Internet rapide", "Coût de vie modéré"],
    requirements: ["Diplôme d'enseignement supérieur", "Emploi qualifié", "Salaire minimum requis"],
    processingTime: "2-3 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Pologne",
    slug: "poland",
    flag: "🇵🇱",
    region: "european-blue-card",
    description: "La Pologne offre une économie dynamique et un secteur IT en pleine expansion.",
    highlights: ["Économie dynamique", "Secteur IT", "Coût de vie modéré", "Villes historiques"],
    requirements: ["Diplôme d'enseignement supérieur", "Contrat de travail", "Salaire minimum requis"],
    processingTime: "2-3 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "République tchèque",
    slug: "czech-republic",
    flag: "🇨🇿",
    region: "european-blue-card",
    description: "La République tchèque combine patrimoine culturel et économie industrielle avancée.",
    highlights: ["Prague", "Industrie automobile", "Coût de vie", "Position centrale"],
    requirements: ["Diplôme d'enseignement supérieur", "Offre d'emploi", "Salaire minimum requis"],
    processingTime: "2-4 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Roumanie",
    slug: "romania",
    flag: "🇷🇴",
    region: "european-blue-card",
    description: "La Roumanie offre un secteur IT compétitif et un coût de vie attractif.",
    highlights: ["Secteur IT fort", "Coût de vie bas", "Francophonie", "Nature diverse"],
    requirements: ["Diplôme d'enseignement supérieur", "Contrat de travail", "Salaire minimum requis"],
    processingTime: "2-3 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Slovaquie",
    slug: "slovakia",
    flag: "🇸🇰",
    region: "european-blue-card",
    description: "La Slovaquie offre une position centrale en Europe et une industrie automobile développée.",
    highlights: ["Industrie automobile", "Position centrale", "Coût de vie modéré", "Nature"],
    requirements: ["Diplôme d'enseignement supérieur", "Emploi qualifié", "Salaire minimum requis"],
    processingTime: "2-3 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Slovénie",
    slug: "slovenia",
    flag: "🇸🇮",
    region: "european-blue-card",
    description: "La Slovénie combine qualité de vie alpine et accès méditerranéen.",
    highlights: ["Nature alpine", "Qualité de vie", "Taille humaine", "Accès Adriatique"],
    requirements: ["Diplôme d'enseignement supérieur", "Contrat de travail", "Salaire minimum requis"],
    processingTime: "2-3 mois",
    visaType: "Carte Bleue Européenne"
  },
]

export const northAmericaCountries: Country[] = [
  {
    name: "Canada",
    slug: "canada",
    flag: "🇨🇦",
    region: "north-america",
    description: "Le Canada offre des programmes d'immigration variés avec une politique d'accueil reconnue mondialement.",
    highlights: ["Entrée Express", "PNP (Programmes provinciaux)", "Qualité de vie élevée", "Multiculturalisme"],
    requirements: ["Évaluation des diplômes (ECA)", "Test de langue (IELTS/TEF)", "Expérience professionnelle", "Points CRS suffisants"],
    processingTime: "6-12 mois",
    visaType: "Résidence Permanente"
  },
  {
    name: "États-Unis",
    slug: "united-states",
    flag: "🇺🇸",
    region: "north-america",
    description: "Les États-Unis offrent diverses catégories de visas pour les professionnels qualifiés.",
    highlights: ["Visa H-1B", "Visa O-1", "Green Card par emploi", "Opportunités Silicon Valley"],
    requirements: ["Offre d'emploi d'un sponsor", "Diplôme équivalent Bachelor minimum", "Spécialité professionnelle", "Processus USCIS"],
    processingTime: "3-18 mois selon visa",
    visaType: "H-1B / Green Card"
  },
]

export const gccCountries: Country[] = [
  {
    name: "Émirats Arabes Unis",
    slug: "united-arab-emirates",
    flag: "🇦🇪",
    region: "gcc",
    description: "Les EAU offrent des opportunités exceptionnelles à Dubaï et Abu Dhabi avec des salaires attractifs.",
    highlights: ["Pas d'impôt sur le revenu", "Dubaï hub mondial", "Golden Visa", "Infrastructure moderne"],
    requirements: ["Offre d'emploi avec sponsor", "Diplômes attestés", "Examen médical", "Visa de travail"],
    processingTime: "2-4 semaines",
    visaType: "Visa de Travail / Golden Visa"
  },
  {
    name: "Qatar",
    slug: "qatar",
    flag: "🇶🇦",
    region: "gcc",
    description: "Le Qatar offre des salaires compétitifs et des projets ambitieux dans divers secteurs.",
    highlights: ["Salaires élevés", "Projets d'infrastructure", "Pas d'impôt", "Qualité de vie"],
    requirements: ["Contrat de travail", "Attestation des diplômes", "Examen médical", "NOC si applicable"],
    processingTime: "2-4 semaines",
    visaType: "Visa de Travail"
  },
  {
    name: "Koweït",
    slug: "kuwait",
    flag: "🇰🇼",
    region: "gcc",
    description: "Le Koweït offre des opportunités dans le secteur pétrolier et les services.",
    highlights: ["Secteur pétrolier", "Salaires compétitifs", "Pas d'impôt", "Allocations logement"],
    requirements: ["Offre d'emploi", "Diplômes certifiés", "Examen médical", "Visa de travail"],
    processingTime: "3-6 semaines",
    visaType: "Visa de Travail"
  },
  {
    name: "Bahreïn",
    slug: "bahrain",
    flag: "🇧🇭",
    region: "gcc",
    description: "Bahreïn est un centre financier régional avec un environnement business favorable.",
    highlights: ["Centre financier", "Flexi Permit", "Taille humaine", "Diversité économique"],
    requirements: ["Contrat de travail ou Flexi Permit", "Diplômes", "Examen médical", "Enregistrement LMRA"],
    processingTime: "2-4 semaines",
    visaType: "Visa de Travail / Flexi Permit"
  },
  {
    name: "Oman",
    slug: "oman",
    flag: "🇴🇲",
    region: "gcc",
    description: "Oman offre un cadre de vie paisible et des opportunités dans le tourisme et l'énergie.",
    highlights: ["Cadre paisible", "Tourisme en développement", "Secteur énergétique", "Culture authentique"],
    requirements: ["Offre d'emploi avec sponsor", "Diplômes attestés", "Examen médical", "Visa de travail"],
    processingTime: "3-6 semaines",
    visaType: "Visa de Travail"
  },
  {
    name: "Arabie Saoudite",
    slug: "saudi-arabia",
    flag: "🇸🇦",
    region: "gcc",
    description: "L'Arabie Saoudite offre des opportunités majeures avec la Vision 2030 et des mégaprojets.",
    highlights: ["Vision 2030", "Mégaprojets (NEOM)", "Salaires élevés", "Pas d'impôt sur le revenu"],
    requirements: ["Contrat de travail", "Iqama (permis de résidence)", "Diplômes attestés", "Examen médical"],
    processingTime: "4-8 semaines",
    visaType: "Visa de Travail / Iqama"
  },
]

export const oceaniaCountries: Country[] = [
  {
    name: "Australie",
    slug: "australia",
    flag: "🇦🇺",
    region: "oceania",
    description: "L'Australie offre une excellente qualité de vie et un système d'immigration par points.",
    highlights: ["Skilled Independent Visa", "Qualité de vie", "Économie stable", "Nature exceptionnelle"],
    requirements: ["Évaluation des compétences", "Test de langue (IELTS)", "Points suffisants", "Santé et moralité"],
    processingTime: "6-18 mois",
    visaType: "Visa Qualifié (189/190/491)"
  },
  {
    name: "Nouvelle-Zélande",
    slug: "new-zealand",
    flag: "🇳🇿",
    region: "oceania",
    description: "La Nouvelle-Zélande offre un cadre de vie exceptionnel et des opportunités pour les professionnels qualifiés.",
    highlights: ["Skilled Migrant Category", "Équilibre vie-travail", "Nature préservée", "Société accueillante"],
    requirements: ["Points suffisants", "Offre d'emploi (avantage)", "Test de langue (IELTS)", "Santé et moralité"],
    processingTime: "6-12 mois",
    visaType: "Skilled Migrant Category"
  },
]

export const europeOtherCountries: Country[] = [
  {
    name: "Danemark",
    slug: "denmark",
    flag: "🇩🇰",
    region: "europe-other",
    description: "Le Danemark est reconnu pour son équilibre vie-travail et son économie innovante.",
    highlights: ["Équilibre vie-travail", "Design danois", "Vélo culture", "Innovation verte"],
    requirements: ["Diplôme d'enseignement supérieur", "Offre d'emploi", "Salaire minimum requis"],
    processingTime: "2-3 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Irlande",
    slug: "ireland",
    flag: "🇮🇪",
    region: "europe-other",
    description: "L'Irlande est un hub technologique majeur avec de nombreuses multinationales.",
    highlights: ["Hub tech européen", "Anglophone", "Multinationales", "Culture accueillante"],
    requirements: ["Diplôme d'enseignement supérieur", "Offre d'emploi qualifié", "Salaire minimum requis"],
    processingTime: "2-3 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Suisse",
    slug: "switzerland",
    flag: "🇨🇭",
    region: "europe-other",
    description: "La Suisse est reconnue pour sa stabilité économique, ses salaires élevés et son cadre de vie premium.",
    highlights: ["Salaires élevés", "Pays multilingue", "Infrastructure de qualité", "Sécurité"],
    requirements: ["Diplôme d'enseignement supérieur", "Offre d'emploi qualifiée", "Permis de travail suisse"],
    processingTime: "3-6 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Norvège",
    slug: "norway",
    flag: "🇳🇴",
    region: "europe-other",
    description: "La Norvège offre une excellente qualité de vie, un système social solide et des secteurs énergétiques dynamiques.",
    highlights: ["Qualité de vie élevée", "Nature spectaculaire", "Économie stable", "Système social fort"],
    requirements: ["Diplôme d'enseignement supérieur", "Offre d'emploi qualifiée", "Permis de travail norvégien"],
    processingTime: "2-4 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Islande",
    slug: "iceland",
    flag: "🇮🇸",
    region: "europe-other",
    description: "L'Islande est idéale pour les professionnels qui recherchent un environnement innovant, durable et une nature préservée.",
    highlights: ["Durabilité", "Innovation", "Cadre naturel unique", "Petite communauté internationale"],
    requirements: ["Diplôme d'enseignement supérieur", "Offre d'emploi qualifiée", "Permis de travail islandais"],
    processingTime: "2-4 mois",
    visaType: "Carte Bleue Européenne"
  },
  {
    name: "Royaume-Uni",
    slug: "united-kingdom",
    flag: "🇬🇧",
    region: "europe-other",
    description: "Le Royaume-Uni reste une destination majeure pour les professionnels qualifiés, avec un marché du travail international et de nombreuses opportunités.",
    highlights: ["Marché du travail international", "Centres financiers mondiaux", "Diversité culturelle", "Réseaux professionnels"],
    requirements: ["Diplôme d'enseignement supérieur", "Offre d'emploi qualifiée", "Visa de travail britannique"],
    processingTime: "3-5 mois",
    visaType: "Carte Bleue Européenne"
  }
]

export const allCountries = [...euCountries, ...europeOtherCountries, ...northAmericaCountries, ...gccCountries, ...oceaniaCountries]

export function getCountryBySlug(slug: string): Country | undefined {
  return allCountries.find(country => country.slug === slug)
}

export function getCountriesByRegion(region: Country["region"]): Country[] {
  return allCountries.filter(country => country.region === region)
}
