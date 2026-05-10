export interface Country {
  name: string
  slug: string
  flag: string
  phoneCode: string
  region: "european-blue-card" | "europe-other" | "north-america" | "gcc" | "oceania"
  description: string
  highlights: string[]
  visaType: string
  officialName: string
  capital: string
  officialLanguages: string[]
  population: number
  area: number
  currency: string
  economicIndicators?: {
    gdp: { value: string; date: string }
    gdpPerCapita: { value: string; date: string }
    economicGrowth: { value: string; date: string }
    inflation: { value: string; date: string }
    unemploymentRate: { value: string; date: string }
    publicDebt: { value: string; date: string }
    publicDeficit: { value: string; date: string }
  }
}

export const euCountries: Country[] = [
  {
    name: "Luxembourg",
    slug: "luxembourg",
    flag: "https://flagcdn.com/lu.svg",
    phoneCode: "+352",
    region: "european-blue-card",
    description: "Le Luxembourg offre une Carte Bleue Européenne avec des conditions attractives pour les professionnels qualifiés. Centre financier de l'Europe avec une qualité de vie exceptionnelle.",
    highlights: ["Salaire minimum élevé", "Multilinguisme", "Centre financier européen", "Qualité de vie exceptionnelle"],
    visaType: "Carte Bleue Européenne",
    officialName: "Grand-Duché de Luxembourg",
    capital: "Luxembourg",
    officialLanguages: ["Luxembourgeois", "Français", "Allemand"],
    population: 0.65,
    area: 2586,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "110 milliards USD", date: "2026" },
      gdpPerCapita: { value: "158 733 USD", date: "2026" },
      economicGrowth: { value: "1,3 %", date: "T1 2026" },
      inflation: { value: "2,3 %", date: "T1 2026" },
      unemploymentRate: { value: "5,8 %", date: "T1 2026" },
      publicDebt: { value: "25,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-1,5 % du PIB", date: "2025" }
    }
  },
  {
    name: "Belgique",
    slug: "belgium",
    flag: "https://flagcdn.com/be.svg",
    phoneCode: "+32",
    region: "european-blue-card",
    description: "La Belgique propose une Carte Bleue Européenne pour les travailleurs hautement qualifiés. Située au cœur de l'Europe avec accès aux institutions européennes.",
    highlights: ["Capitale de l'UE", "Système de santé excellent", "Position centrale en Europe", "Diversité culturelle"],
    visaType: "Carte Bleue Européenne",
    officialName: "Royaume de Belgique",
    capital: "Bruxelles",
    officialLanguages: ["Néerlandais", "Français", "Allemand"],
    population: 11.7,
    area: 30528,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "777 milliards USD", date: "2026" },
      gdpPerCapita: { value: "65 112 USD", date: "2026" },
      economicGrowth: { value: "1,2 %", date: "T1 2026" },
      inflation: { value: "3,0 %", date: "T1 2026" },
      unemploymentRate: { value: "6,0 %", date: "T1 2026" },
      publicDebt: { value: "105,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-4,4 % du PIB", date: "2025" }
    }
  },
  {
    name: "Allemagne",
    slug: "germany",
    flag: "https://flagcdn.com/de.svg",
    phoneCode: "+49",
    region: "european-blue-card",
    description: "L'Allemagne est la première économie européenne et offre d'excellentes opportunités pour les professionnels qualifiés avec sa Carte Bleue Européenne.",
    highlights: ["Première économie européenne", "Industrie technologique avancée", "Excellentes infrastructures", "Forte demande de talents"],
    visaType: "Carte Bleue Européenne / Chancenkarte",
    officialName: "République fédérale d'Allemagne",
    capital: "Berlin",
    officialLanguages: ["Allemand"],
    population: 83.3,
    area: 357022,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "5 453 milliards USD", date: "2026" },
      gdpPerCapita: { value: "65 303 USD", date: "2026" },
      economicGrowth: { value: "0,2 %", date: "T1 2026" },
      inflation: { value: "2,4 %", date: "T1 2026" },
      unemploymentRate: { value: "3,2 %", date: "T1 2026" },
      publicDebt: { value: "63,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-1,6 % du PIB", date: "2025" }
    }
  },
  {
    name: "Autriche",
    slug: "austria",
    flag: "https://flagcdn.com/at.svg",
    phoneCode: "+43",
    region: "european-blue-card",
    description: "L'Autriche offre une excellente qualité de vie et des opportunités professionnelles dans un cadre alpin magnifique.",
    highlights: ["Qualité de vie élevée", "Cadre naturel exceptionnel", "Économie stable", "Culture riche"],
    visaType: "Carte Bleue Européenne",
    officialName: "République d'Autriche",
    capital: "Vienne",
    officialLanguages: ["Allemand"],
    population: 9.1,
    area: 83871,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "624 milliards USD", date: "2026" },
      gdpPerCapita: { value: "67 761 USD", date: "2026" },
      economicGrowth: { value: "0,4 %", date: "T1 2026" },
      inflation: { value: "3,8 %", date: "T1 2026" },
      unemploymentRate: { value: "5,2 %", date: "T1 2026" },
      publicDebt: { value: "77,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-2,9 % du PIB", date: "2025" }
    }
  },
  {
    name: "Pays-Bas",
    slug: "netherlands",
    flag: "https://flagcdn.com/nl.svg",
    phoneCode: "+31",
    region: "european-blue-card",
    description: "Les Pays-Bas sont reconnus pour leur ouverture internationale et leur écosystème startup dynamique.",
    highlights: ["Hub technologique européen", "Population anglophone", "Écosystème startup", "Infrastructure cyclable"],
    visaType: "Carte Bleue Européenne",
    officialName: "Royaume des Pays-Bas",
    capital: "Amsterdam",
    officialLanguages: ["Néerlandais"],
    population: 17.8,
    area: 41543,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "1 450 milliards USD", date: "2026" },
      gdpPerCapita: { value: "79 918 USD", date: "2026" },
      economicGrowth: { value: "0,8 %", date: "T1 2026" },
      inflation: { value: "2,8 %", date: "T1 2026" },
      unemploymentRate: { value: "3,7 %", date: "T1 2026" },
      publicDebt: { value: "46,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-2,0 % du PIB", date: "2025" }
    }
  },
  {
    name: "Suède",
    slug: "sweden",
    flag: "https://flagcdn.com/se.svg",
    phoneCode: "+46",
    region: "european-blue-card",
    description: "La Suède offre un équilibre travail-vie personnelle exemplaire et une forte culture d'innovation.",
    highlights: ["Équilibre vie-travail", "Innovation technologique", "Congés parentaux généreux", "Nature préservée"],
    visaType: "Carte Bleue Européenne",
    officialName: "Royaume de Suède",
    capital: "Stockholm",
    officialLanguages: ["Suédois"],
    population: 10.5,
    area: 450295,
    currency: "Couronne suédoise (kr)",
    economicIndicators: {
      gdp: { value: "760 milliards USD", date: "2026" },
      gdpPerCapita: { value: "70 676 USD", date: "2026" },
      economicGrowth: { value: "0,6 %", date: "T1 2026" },
      inflation: { value: "2,7 %", date: "T1 2026" },
      unemploymentRate: { value: "8,3 %", date: "T1 2026" },
      publicDebt: { value: "31,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-0,8 % du PIB", date: "2025" }
    }
  },
  {
    name: "Finlande",
    slug: "finland",
    flag: "https://flagcdn.com/fi.svg",
    phoneCode: "+358",
    region: "european-blue-card",
    description: "La Finlande est régulièrement classée parmi les pays les plus heureux au monde avec un excellent système éducatif.",
    highlights: ["Pays le plus heureux", "Éducation excellente", "Technologie avancée", "Nature sauvage"],
    visaType: "Carte Bleue Européenne",
    officialName: "République de Finlande",
    capital: "Helsinki",
    officialLanguages: ["Finnois", "Suédois"],
    population: 5.5,
    area: 338145,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "338 milliards USD", date: "2026" },
      gdpPerCapita: { value: "60 130 USD", date: "2026" },
      economicGrowth: { value: "-0,4 %", date: "T1 2026" },
      inflation: { value: "2,0 %", date: "T1 2026" },
      unemploymentRate: { value: "7,4 %", date: "T1 2026" },
      publicDebt: { value: "75,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-3,0 % du PIB", date: "2025" }
    }
  },
  {
    name: "Malte",
    slug: "malta",
    flag: "https://flagcdn.com/mt.svg",
    phoneCode: "+356",
    region: "european-blue-card",
    description: "Malte offre un climat méditerranéen agréable et un secteur des services financiers et du gaming en pleine croissance.",
    highlights: ["Climat méditerranéen", "Anglais langue officielle", "Secteur iGaming", "Fiscalité avantageuse"],
    visaType: "Carte Bleue Européenne",
    officialName: "République de Malte",
    capital: "La Valette",
    officialLanguages: ["Maltais", "Anglais"],
    population: 0.53,
    area: 316,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "31 milliards USD", date: "2026" },
      gdpPerCapita: { value: "53 560 USD", date: "2026" },
      economicGrowth: { value: "5,0 %", date: "T1 2026" },
      inflation: { value: "2,8 %", date: "T1 2026" },
      unemploymentRate: { value: "2,6 %", date: "T1 2026" },
      publicDebt: { value: "50,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-4,0 % du PIB", date: "2025" }
    }
  },
  {
    name: "Italie",
    slug: "italy",
    flag: "https://flagcdn.com/it.svg",
    phoneCode: "+39",
    region: "european-blue-card",
    description: "L'Italie combine richesse culturelle et opportunités dans les secteurs de la mode, du design et de la technologie.",
    highlights: ["Patrimoine culturel", "Design et mode", "Gastronomie", "Art de vivre"],
    visaType: "Carta Blu UE",
    officialName: "République italienne",
    capital: "Rome",
    officialLanguages: ["Italien"],
    population: 58.9,
    area: 301340,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "2 738 milliards USD", date: "2026" },
      gdpPerCapita: { value: "46 505 USD", date: "2026" },
      economicGrowth: { value: "0,7 %", date: "T1 2026" },
      inflation: { value: "1,7 %", date: "T1 2026" },
      unemploymentRate: { value: "7,2 %", date: "T1 2026" },
      publicDebt: { value: "137,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-4,3 % du PIB", date: "2025" }
    }
  },
  {
    name: "Espagne",
    slug: "spain",
    flag: "https://flagcdn.com/es.svg",
    phoneCode: "+34",
    region: "european-blue-card",
    description: "L'Espagne offre un excellent climat, une riche culture et des opportunités croissantes dans la tech.",
    highlights: ["Climat ensoleillé", "Qualité de vie", "Coût de vie raisonnable", "Hubs tech émergents"],
    visaType: "Tarjeta Azul UE",
    officialName: "Royaume d'Espagne",
    capital: "Madrid",
    officialLanguages: ["Espagnol"],
    population: 48.1,
    area: 505990,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "2 091 milliards USD", date: "2026" },
      gdpPerCapita: { value: "41 563 USD", date: "2026" },
      economicGrowth: { value: "1,9 %", date: "T1 2026" },
      inflation: { value: "3,0 %", date: "T1 2026" },
      unemploymentRate: { value: "11,6 %", date: "T1 2026" },
      publicDebt: { value: "106,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-3,0 % du PIB", date: "2025" }
    }
  },
  {
    name: "Portugal",
    slug: "portugal",
    flag: "https://flagcdn.com/pt.svg",
    phoneCode: "+351",
    region: "european-blue-card",
    description: "Le Portugal attire les professionnels avec son climat doux, sa qualité de vie et son écosystème tech en croissance.",
    highlights: ["Climat agréable", "Coût de vie attractif", "Communauté expat", "Écosystème startup"],
    visaType: "Cartão Azul UE",
    officialName: "République portugaise",
    capital: "Lisbonne",
    officialLanguages: ["Portugais"],
    population: 10.5,
    area: 92212,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "381 milliards USD", date: "2026" },
      gdpPerCapita: { value: "35 434 USD", date: "2026" },
      economicGrowth: { value: "1,7 %", date: "T1 2026" },
      inflation: { value: "2,5 %", date: "T1 2026" },
      unemploymentRate: { value: "6,5 %", date: "T1 2026" },
      publicDebt: { value: "98,0 % du PIB", date: "2025" },
      publicDeficit: { value: "+0,2 % du PIB", date: "2025" }
    }
  },
  {
    name: "Bulgarie",
    slug: "bulgaria",
    flag: "https://flagcdn.com/bg.svg",
    phoneCode: "+359",
    region: "european-blue-card",
    description: "La Bulgarie offre un coût de vie bas et des opportunités croissantes dans le secteur IT.",
    highlights: ["Coût de vie bas", "Secteur IT en croissance", "Nature diverse", "Fiscalité attractive"],
    visaType: "Carte Bleue Européenne",
    officialName: "République de Bulgarie",
    capital: "Sofia",
    officialLanguages: ["Bulgare"],
    population: 6.4,
    area: 110994,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "148 milliards USD", date: "2026" },
      gdpPerCapita: { value: "23 850 USD", date: "2026" },
      economicGrowth: { value: "2,7 %", date: "T1 2026" },
      inflation: { value: "3,4 %", date: "T1 2026" },
      unemploymentRate: { value: "4,3 %", date: "T1 2026" },
      publicDebt: { value: "23,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-2,8 % du PIB", date: "2025" }
    }
  },
  {
    name: "Chypre",
    slug: "cyprus",
    flag: "https://flagcdn.com/cy.svg",
    phoneCode: "+357",
    region: "european-blue-card",
    description: "Chypre combine climat méditerranéen et opportunités dans les services financiers.",
    highlights: ["Climat méditerranéen", "Services financiers", "Anglais répandu", "Qualité de vie"],
    visaType: "Carte Bleue Européenne",
    officialName: "République de Chypre",
    capital: "Nicosie",
    officialLanguages: ["Grec", "Turc"],
    population: 1.2,
    area: 9251,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "45 milliards USD", date: "2026" },
      gdpPerCapita: { value: "45 410 USD", date: "2026" },
      economicGrowth: { value: "2,7 %", date: "T1 2026" },
      inflation: { value: "2,4 %", date: "T1 2026" },
      unemploymentRate: { value: "5,8 %", date: "T1 2026" },
      publicDebt: { value: "72,0 % du PIB", date: "2025" },
      publicDeficit: { value: "+2,0 % du PIB", date: "2025" }
    }
  },
  {
    name: "Croatie",
    slug: "croatia",
    flag: "https://flagcdn.com/hr.svg",
    phoneCode: "+385",
    region: "european-blue-card",
    description: "La Croatie offre un cadre de vie exceptionnel avec sa côte adriatique et son intégration récente à l'UE.",
    highlights: ["Côte adriatique", "Membre récent de l'UE", "Tourisme développé", "Qualité de vie"],
    visaType: "Carte Bleue Européenne",
    officialName: "République de Croatie",
    capital: "Zagreb",
    officialLanguages: ["Croate"],
    population: 3.8,
    area: 56594,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "117 milliards USD", date: "2026" },
      gdpPerCapita: { value: "30 030 USD", date: "2026" },
      economicGrowth: { value: "3,0 %", date: "T1 2026" },
      inflation: { value: "3,1 %", date: "T1 2026" },
      unemploymentRate: { value: "5,8 %", date: "T1 2026" },
      publicDebt: { value: "60,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-1,9 % du PIB", date: "2025" }
    }
  },
  {
    name: "Estonie",
    slug: "estonia",
    flag: "https://flagcdn.com/ee.svg",
    phoneCode: "+372",
    region: "european-blue-card",
    description: "L'Estonie est pionnière en e-gouvernement et offre un écosystème startup dynamique.",
    highlights: ["E-gouvernement avancé", "Écosystème startup", "Société numérique", "E-résidence"],
    visaType: "Carte Bleue Européenne",
    officialName: "République d'Estonie",
    capital: "Tallinn",
    officialLanguages: ["Estonien"],
    population: 1.36,
    area: 45227,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "52 milliards USD", date: "2026" },
      gdpPerCapita: { value: "37 720 USD", date: "2026" },
      economicGrowth: { value: "-0,5 %", date: "T1 2026" },
      inflation: { value: "3,5 %", date: "T1 2026" },
      unemploymentRate: { value: "7,0 %", date: "T1 2026" },
      publicDebt: { value: "20,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-3,0 % du PIB", date: "2025" }
    }
  },
  {
    name: "France",
    slug: "france",
    flag: "https://flagcdn.com/fr.svg",
    phoneCode: "+33",
    region: "european-blue-card",
    description: "La France offre une économie diversifiée, une culture riche et un excellent système de protection sociale.",
    highlights: ["Culture riche", "Système de santé", "Gastronomie", "Hubs tech (Paris, Lyon)"],
    visaType: "Carte Bleue Européenne",
    officialName: "République française",
    capital: "Paris",
    officialLanguages: ["Français"],
    population: 68.0,
    area: 551695,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "3 596 milliards USD", date: "2026" },
      gdpPerCapita: { value: "52 083 USD", date: "2026" },
      economicGrowth: { value: "0,7 %", date: "T1 2026" },
      inflation: { value: "2,4 %", date: "T1 2026" },
      unemploymentRate: { value: "7,4 %", date: "T1 2026" },
      publicDebt: { value: "111,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-5,0 % du PIB", date: "2025" }
    }
  },
  {
    name: "Grèce",
    slug: "greece",
    flag: "https://flagcdn.com/gr.svg",
    phoneCode: "+30",
    region: "european-blue-card",
    description: "La Grèce combine patrimoine historique exceptionnel et qualité de vie méditerranéenne.",
    highlights: ["Patrimoine historique", "Climat méditerranéen", "Coût de vie modéré", "Tourisme"],
    visaType: "Carte Bleue Européenne",
    officialName: "République hellénique",
    capital: "Athènes",
    officialLanguages: ["Grec"],
    population: 10.4,
    area: 131957,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "308 milliards USD", date: "2026" },
      gdpPerCapita: { value: "29 700 USD", date: "2026" },
      economicGrowth: { value: "2,0 %", date: "T1 2026" },
      inflation: { value: "2,8 %", date: "T1 2026" },
      unemploymentRate: { value: "10,0 %", date: "T1 2026" },
      publicDebt: { value: "152,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-1,2 % du PIB", date: "2025" }
    }
  },
  {
    name: "Hongrie",
    slug: "hungary",
    flag: "https://flagcdn.com/hu.svg",
    phoneCode: "+36",
    region: "european-blue-card",
    description: "La Hongrie offre un coût de vie attractif et une position centrale en Europe.",
    highlights: ["Coût de vie bas", "Position centrale", "Architecture", "Thermes"],
    visaType: "Carte Bleue Européenne / Enter Hungary Scheme",
    officialName: "Hongrie",
    capital: "Budapest",
    officialLanguages: ["Hongrois"],
    population: 9.6,
    area: 93028,
    currency: "Forint hongrois (Ft)",
    economicIndicators: {
      gdp: { value: "271 milliards USD", date: "2026" },
      gdpPerCapita: { value: "28 430 USD", date: "2026" },
      economicGrowth: { value: "2,2 %", date: "T1 2026" },
      inflation: { value: "4,5 %", date: "T1 2026" },
      unemploymentRate: { value: "4,4 %", date: "T1 2026" },
      publicDebt: { value: "73,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-4,5 % du PIB", date: "2025" }
    }
  },
  {
    name: "Lettonie",
    slug: "latvia",
    flag: "https://flagcdn.com/lv.svg",
    phoneCode: "+371",
    region: "european-blue-card",
    description: "La Lettonie offre un écosystème startup en développement et une qualité de vie nordique.",
    highlights: ["Startup ecosystem", "Nature baltique", "Coût de vie modéré", "IT en croissance"],
    visaType: "Carte Bleue Européenne",
    officialName: "République de Lettonie",
    capital: "Riga",
    officialLanguages: ["Letton"],
    population: 1.88,
    area: 64589,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "54 milliards USD", date: "2026" },
      gdpPerCapita: { value: "28 910 USD", date: "2026" },
      economicGrowth: { value: "1,7 %", date: "T1 2026" },
      inflation: { value: "2,0 %", date: "T1 2026" },
      unemploymentRate: { value: "6,7 %", date: "T1 2026" },
      publicDebt: { value: "43,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-2,8 % du PIB", date: "2025" }
    }
  },
  {
    name: "Lituanie",
    slug: "lithuania",
    flag: "https://flagcdn.com/lt.svg",
    phoneCode: "+370",
    region: "european-blue-card",
    description: "La Lituanie est reconnue pour son secteur fintech et sa qualité de vie.",
    highlights: ["Hub fintech", "Qualité de vie", "Internet rapide", "Coût de vie modéré"],
    visaType: "Carte Bleue Européenne",
    officialName: "République de Lituanie",
    capital: "Vilnius",
    officialLanguages: ["Lituanien"],
    population: 2.8,
    area: 65300,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "106 milliards USD", date: "2026" },
      gdpPerCapita: { value: "36 540 USD", date: "2026" },
      economicGrowth: { value: "2,2 %", date: "T1 2026" },
      inflation: { value: "2,4 %", date: "T1 2026" },
      unemploymentRate: { value: "6,4 %", date: "T1 2026" },
      publicDebt: { value: "39,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-2,4 % du PIB", date: "2025" }
    }
  },
  {
    name: "Pologne",
    slug: "poland",
    flag: "https://flagcdn.com/pl.svg",
    phoneCode: "+48",
    region: "european-blue-card",
    description: "La Pologne offre une économie dynamique et un secteur IT en pleine expansion.",
    highlights: ["Économie dynamique", "Secteur IT", "Coût de vie modéré", "Villes historiques"],
    visaType: "Carte Bleue Européenne",
    officialName: "République de Pologne",
    capital: "Varsovie",
    officialLanguages: ["Polonais"],
    population: 36.8,
    area: 312696,
    currency: "Złoty (zł)",
    economicIndicators: {
      gdp: { value: "1 134 milliards USD", date: "2026" },
      gdpPerCapita: { value: "31 340 USD", date: "2026" },
      economicGrowth: { value: "3,1 %", date: "T1 2026" },
      inflation: { value: "5,0 %", date: "T1 2026" },
      unemploymentRate: { value: "5,1 %", date: "T1 2026" },
      publicDebt: { value: "54,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-5,4 % du PIB", date: "2025" }
    }
  },
  {
    name: "République tchèque",
    slug: "czech-republic",
    flag: "https://flagcdn.com/cz.svg",
    phoneCode: "+420",
    region: "european-blue-card",
    description: "La République tchèque combine patrimoine culturel et économie industrielle avancée.",
    highlights: ["Prague", "Industrie automobile", "Coût de vie", "Position centrale"],
    visaType: "Carte Bleue Européenne",
    officialName: "République tchèque",
    capital: "Prague",
    officialLanguages: ["Tchèque"],
    population: 10.8,
    area: 78867,
    currency: "Couronne tchèque (Kč)",
    economicIndicators: {
      gdp: { value: "433 milliards USD", date: "2026" },
      gdpPerCapita: { value: "39 800 USD", date: "2026" },
      economicGrowth: { value: "1,2 %", date: "T1 2026" },
      inflation: { value: "2,1 %", date: "T1 2026" },
      unemploymentRate: { value: "2,8 %", date: "T1 2026" },
      publicDebt: { value: "45,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-2,5 % du PIB", date: "2025" }
    }
  },
  {
    name: "Roumanie",
    slug: "romania",
    flag: "https://flagcdn.com/ro.svg",
    phoneCode: "+40",
    region: "european-blue-card",
    description: "La Roumanie offre un secteur IT compétitif et un coût de vie attractif.",
    highlights: ["Secteur IT fort", "Coût de vie bas", "Francophonie", "Nature diverse"],
    visaType: "Carte Bleue Européenne",
    officialName: "Roumanie",
    capital: "Bucarest",
    officialLanguages: ["Roumain"],
    population: 19.0,
    area: 238391,
    currency: "Leu roumain (lei)",
    economicIndicators: {
      gdp: { value: "481 milliards USD", date: "2026" },
      gdpPerCapita: { value: "25 690 USD", date: "2026" },
      economicGrowth: { value: "2,8 %", date: "T1 2026" },
      inflation: { value: "5,0 %", date: "T1 2026" },
      unemploymentRate: { value: "5,5 %", date: "T1 2026" },
      publicDebt: { value: "52,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-5,0 % du PIB", date: "2025" }
    }
  },
  {
    name: "Slovaquie",
    slug: "slovakia",
    flag: "https://flagcdn.com/sk.svg",
    phoneCode: "+421",
    region: "european-blue-card",
    description: "La Slovaquie offre une position centrale en Europe et une industrie automobile développée.",
    highlights: ["Industrie automobile", "Position centrale", "Coût de vie modéré", "Nature"],
    visaType: "Carte Bleue Européenne",
    officialName: "République slovaque",
    capital: "Bratislava",
    officialLanguages: ["Slovaque"],
    population: 5.4,
    area: 49035,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "169 milliards USD", date: "2026" },
      gdpPerCapita: { value: "31 240 USD", date: "2026" },
      economicGrowth: { value: "2,1 %", date: "T1 2026" },
      inflation: { value: "3,0 %", date: "T1 2026" },
      unemploymentRate: { value: "5,4 %", date: "T1 2026" },
      publicDebt: { value: "59,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-5,5 % du PIB", date: "2025" }
    }
  },
  {
    name: "Slovénie",
    slug: "slovenia",
    flag: "https://flagcdn.com/si.svg",
    phoneCode: "+386",
    region: "european-blue-card",
    description: "La Slovénie combine qualité de vie alpine et accès méditerranéen.",
    highlights: ["Nature alpine", "Qualité de vie", "Taille humaine", "Accès Adriatique"],
    visaType: "Carte Bleue Européenne",
    officialName: "République de Slovénie",
    capital: "Ljubljana",
    officialLanguages: ["Slovène"],
    population: 2.1,
    area: 20273,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "87 milliards USD", date: "2026" },
      gdpPerCapita: { value: "40 630 USD", date: "2026" },
      economicGrowth: { value: "2,0 %", date: "T1 2026" },
      inflation: { value: "2,7 %", date: "T1 2026" },
      unemploymentRate: { value: "3,6 %", date: "T1 2026" },
      publicDebt: { value: "68,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-3,5 % du PIB", date: "2025" }
    }
  },
]

export const northAmericaCountries: Country[] = [
  {
    name: "Canada",
    slug: "canada",
    flag: "https://flagcdn.com/ca.svg",
    phoneCode: "+1",
    region: "north-america",
    description: "Le Canada offre des programmes d'immigration variés avec une politique d'accueil reconnue mondialement.",
    highlights: ["Entrée Express", "PNP (Programmes provinciaux)", "Qualité de vie élevée", "Multiculturalisme"],
    visaType: "Résidence Permanente",
    officialName: "Canada",
    capital: "Ottawa",
    officialLanguages: ["Anglais", "Français"],
    population: 40.0,
    area: 9984670,
    currency: "Dollar canadien (CAD)",
    economicIndicators: {
      gdp: { value: "2 507 milliards USD", date: "2026" },
      gdpPerCapita: { value: "60 304 USD", date: "2026" },
      economicGrowth: { value: "1,2 %", date: "T1 2026" },
      inflation: { value: "2,6 %", date: "T1 2026" },
      unemploymentRate: { value: "6,1 %", date: "T1 2026" },
      publicDebt: { value: "104,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-1,5 % du PIB", date: "2025" }
    }
  },
  {
    name: "États-Unis",
    slug: "united-states",
    flag: "https://flagcdn.com/us.svg",
    phoneCode: "+1",
    region: "north-america",
    description: "Les États-Unis offrent diverses catégories de visas pour les professionnels qualifiés.",
    highlights: ["Visa H-1B", "Visa O-1", "Green Card par emploi", "Opportunités Silicon Valley"],
    visaType: "H-1B / Green Card",
    officialName: "États-Unis d'Amérique",
    capital: "Washington, D.C.",
    officialLanguages: ["Anglais"],
    population: 334.9,
    area: 9833517,
    currency: "Dollar américain ($)",
    economicIndicators: {
      gdp: { value: "32 384 milliards USD", date: "2026" },
      gdpPerCapita: { value: "94 430 USD", date: "2026" },
      economicGrowth: { value: "2,7 %", date: "T1 2026" },
      inflation: { value: "2,9 %", date: "T1 2026" },
      unemploymentRate: { value: "3,8 %", date: "T1 2026" },
      publicDebt: { value: "123,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-6,5 % du PIB", date: "2025" }
    }
  },
]

export const gccCountries: Country[] = [
  {
    name: "Émirats Arabes Unis",
    slug: "united-arab-emirates",
    flag: "https://flagcdn.com/ae.svg",
    phoneCode: "+971",
    region: "gcc",
    description: "Les EAU offrent des opportunités exceptionnelles à Dubaï et Abu Dhabi avec des salaires attractifs.",
    highlights: ["Pas d'impôt sur le revenu", "Dubaï hub mondial", "Golden Visa", "Infrastructure moderne"],
    visaType: "Visa de Travail / Golden Visa",
    officialName: "Émirats arabes unis",
    capital: "Abou Dabi",
    officialLanguages: ["Arabe"],
    population: 9.4,
    area: 83600,
    currency: "Dirham des Émirats arabes unis (AED)",
    economicIndicators: {
      gdp: { value: "622 milliards USD", date: "2026" },
      gdpPerCapita: { value: "54 214 USD", date: "2026" },
      economicGrowth: { value: "3,5 %", date: "T1 2026" },
      inflation: { value: "2,1 %", date: "T1 2026" },
      unemploymentRate: { value: "2,8 %", date: "T1 2026" },
      publicDebt: { value: "29,0 % du PIB", date: "2025" },
      publicDeficit: { value: "+4,5 % du PIB", date: "2025" }
    }
  },
  {
    name: "Qatar",
    slug: "qatar",
    flag: "https://flagcdn.com/qa.svg",
    phoneCode: "+974",
    region: "gcc",
    description: "Le Qatar offre des salaires compétitifs et des projets ambitieux dans divers secteurs.",
    highlights: ["Salaires élevés", "Projets d'infrastructure", "Pas d'impôt", "Qualité de vie"],
    visaType: "Visa de Travail",
    officialName: "État du Qatar",
    capital: "Doha",
    officialLanguages: ["Arabe"],
    population: 2.7,
    area: 11586,
    currency: "Riyal qatari (QAR)",
    economicIndicators: {
      gdp: { value: "217 milliards USD", date: "2026" },
      gdpPerCapita: { value: "68 138 USD", date: "2026" },
      economicGrowth: { value: "2,0 %", date: "T1 2026" },
      inflation: { value: "2,2 %", date: "T1 2026" },
      unemploymentRate: { value: "0,1 %", date: "T1 2026" },
      publicDebt: { value: "39,0 % du PIB", date: "2025" },
      publicDeficit: { value: "+6,0 % du PIB", date: "2025" }
    }
  },
  {
    name: "Koweït",
    slug: "kuwait",
    flag: "https://flagcdn.com/kw.svg",
    phoneCode: "+965",
    region: "gcc",
    description: "Le Koweït offre des opportunités dans le secteur pétrolier et les services.",
    highlights: ["Secteur pétrolier", "Salaires compétitifs", "Pas d'impôt", "Allocations logement"],
    visaType: "Visa de Travail",
    officialName: "État du Koweït",
    capital: "Koweït",
    officialLanguages: ["Arabe"],
    population: 4.3,
    area: 17818,
    currency: "Dinar koweïtien (KWD)",
    economicIndicators: {
      gdp: { value: "173 milliards USD", date: "2026" },
      gdpPerCapita: { value: "33 160 USD", date: "2026" },
      economicGrowth: { value: "-1,4 %", date: "T1 2026" },
      inflation: { value: "3,2 %", date: "T1 2026" },
      unemploymentRate: { value: "2,1 %", date: "T1 2026" },
      publicDebt: { value: "3,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-2,0 % du PIB", date: "2025" }
    }
  },
  {
    name: "Bahreïn",
    slug: "bahrain",
    flag: "https://flagcdn.com/bh.svg",
    phoneCode: "+973",
    region: "gcc",
    description: "Bahreïn est un centre financier régional avec un environnement business favorable.",
    highlights: ["Centre financier", "Flexi Permit", "Taille humaine", "Diversité économique"],
    visaType: "Visa de Travail / Flexi Permit",
    officialName: "Royaume de Bahreïn",
    capital: "Manama",
    officialLanguages: ["Arabe"],
    population: 1.5,
    area: 765,
    currency: "Dinar bahreïni (BHD)",
    economicIndicators: {
      gdp: { value: "49 milliards USD", date: "2026" },
      gdpPerCapita: { value: "29 570 USD", date: "2026" },
      economicGrowth: { value: "3,6 %", date: "T1 2026" },
      inflation: { value: "1,4 %", date: "T1 2026" },
      unemploymentRate: { value: "5,4 %", date: "T1 2026" },
      publicDebt: { value: "121,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-3,0 % du PIB", date: "2025" }
    }
  },
  {
    name: "Oman",
    slug: "oman",
    flag: "https://flagcdn.com/om.svg",
    phoneCode: "+968",
    region: "gcc",
    description: "Oman offre un cadre de vie paisible et des opportunités dans le tourisme et l'énergie.",
    highlights: ["Cadre paisible", "Tourisme en développement", "Secteur énergétique", "Culture authentique"],
    visaType: "Visa de Travail",
    officialName: "Sultanat d'Oman",
    capital: "Mascate",
    officialLanguages: ["Arabe"],
    population: 4.6,
    area: 309500,
    currency: "Rial omanais (OMR)",
    economicIndicators: {
      gdp: { value: "117 milliards USD", date: "2026" },
      gdpPerCapita: { value: "21 640 USD", date: "2026" },
      economicGrowth: { value: "1,2 %", date: "T1 2026" },
      inflation: { value: "1,5 %", date: "T1 2026" },
      unemploymentRate: { value: "2,3 %", date: "T1 2026" },
      publicDebt: { value: "36,0 % du PIB", date: "2025" },
      publicDeficit: { value: "+1,5 % du PIB", date: "2025" }
    }
  },
  {
    name: "Arabie Saoudite",
    slug: "saudi-arabia",
    flag: "https://flagcdn.com/sa.svg",
    phoneCode: "+966",
    region: "gcc",
    description: "L'Arabie Saoudite offre des opportunités majeures avec la Vision 2030 et des mégaprojets.",
    highlights: ["Vision 2030", "Mégaprojets (NEOM)", "Salaires élevés", "Pas d'impôt sur le revenu"],
    visaType: "Visa de Travail / Iqama",
    officialName: "Royaume d'Arabie saoudite",
    capital: "Riyad",
    officialLanguages: ["Arabe"],
    population: 36.4,
    area: 2149690,
    currency: "Riyal saoudien (SAR)",
    economicIndicators: {
      gdp: { value: "1 389 milliards USD", date: "2026" },
      gdpPerCapita: { value: "37 810 USD", date: "2026" },
      economicGrowth: { value: "2,6 %", date: "T1 2026" },
      inflation: { value: "2,2 %", date: "T1 2026" },
      unemploymentRate: { value: "4,4 %", date: "T1 2026" },
      publicDebt: { value: "26,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-1,7 % du PIB", date: "2025" }
    }
  },
]

export const oceaniaCountries: Country[] = [
  {
    name: "Australie",
    slug: "australia",
    flag: "https://flagcdn.com/au.svg",
    phoneCode: "+61",
    region: "oceania",
    description: "L'Australie offre une excellente qualité de vie et un système d'immigration par points.",
    highlights: ["Skilled Independent Visa", "Qualité de vie", "Économie stable", "Nature exceptionnelle"],
    visaType: "Visa Qualifié (189/190/491)",
    officialName: "Commonwealth d'Australie",
    capital: "Canberra",
    officialLanguages: ["Anglais"],
    population: 26.6,
    area: 7692024,
    currency: "Dollar australien (AUD)",
    economicIndicators: {
      gdp: { value: "2 124 milliards USD", date: "2026" },
      gdpPerCapita: { value: "75 648 USD", date: "2026" },
      economicGrowth: { value: "1,5 %", date: "T1 2026" },
      inflation: { value: "3,5 %", date: "T1 2026" },
      unemploymentRate: { value: "4,0 %", date: "T1 2026" },
      publicDebt: { value: "49,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-1,2 % du PIB", date: "2025" }
    }
  },
  {
    name: "Nouvelle-Zélande",
    slug: "new-zealand",
    flag: "https://flagcdn.com/nz.svg",
    phoneCode: "+64",
    region: "oceania",
    description: "La Nouvelle-Zélande offre un cadre de vie exceptionnel et des opportunités pour les professionnels qualifiés.",
    highlights: ["Skilled Migrant Category", "Équilibre vie-travail", "Nature préservée", "Société accueillante"],
    visaType: "Skilled Migrant Category",
    officialName: "Nouvelle-Zélande",
    capital: "Wellington",
    officialLanguages: ["Anglais", "Māori"],
    population: 5.2,
    area: 268021,
    currency: "Dollar néo-zélandais (NZD)",
    economicIndicators: {
      gdp: { value: "279 milliards USD", date: "2026" },
      gdpPerCapita: { value: "52 023 USD", date: "2026" },
      economicGrowth: { value: "1,0 %", date: "T1 2026" },
      inflation: { value: "3,0 %", date: "T1 2026" },
      unemploymentRate: { value: "4,7 %", date: "T1 2026" },
      publicDebt: { value: "45,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-3,0 % du PIB", date: "2025" }
    }
  },
]

export const europeOtherCountries: Country[] = [
  {
    name: "Danemark",
    slug: "denmark",
    flag: "https://flagcdn.com/dk.svg",
    phoneCode: "+45",
    region: "europe-other",
    description: "Le Danemark est reconnu pour son équilibre vie-travail et son économie innovante.",
    highlights: ["Équilibre vie-travail", "Design danois", "Vélo culture", "Innovation verte"],
    visaType: "Permis de travail / Fast-Track Denmark Scheme",
    officialName: "Royaume du Danemark",
    capital: "Copenhague",
    officialLanguages: ["Danois"],
    population: 5.9,
    area: 42933,
    currency: "Couronne danoise (kr)",
    economicIndicators: {
      gdp: { value: "504 milliards USD", date: "2026" },
      gdpPerCapita: { value: "83 445 USD", date: "2026" },
      economicGrowth: { value: "2,1 %", date: "T1 2026" },
      inflation: { value: "1,9 %", date: "T1 2026" },
      unemploymentRate: { value: "4,5 %", date: "T1 2026" },
      publicDebt: { value: "29,0 % du PIB", date: "2025" },
      publicDeficit: { value: "+2,5 % du PIB", date: "2025" }
    }
  },
  {
    name: "Irlande",
    slug: "ireland",
    flag: "https://flagcdn.com/ie.svg",
    phoneCode: "+353",
    region: "europe-other",
    description: "L'Irlande est un hub technologique majeur avec de nombreuses multinationales.",
    highlights: ["Hub tech européen", "Anglophone", "Multinationales", "Culture accueillante"],
    visaType: "Critical Skills Employment Permit",
    officialName: "Irlande",
    capital: "Dublin",
    officialLanguages: ["Irlandais", "Anglais"],
    population: 5.3,
    area: 70273,
    currency: "Euro (€)",
    economicIndicators: {
      gdp: { value: "779 milliards USD", date: "2026" },
      gdpPerCapita: { value: "140 186 USD", date: "2026" },
      economicGrowth: { value: "1,5 %", date: "T1 2026" },
      inflation: { value: "2,2 %", date: "T1 2026" },
      unemploymentRate: { value: "4,3 %", date: "T1 2026" },
      publicDebt: { value: "42,0 % du PIB", date: "2025" },
      publicDeficit: { value: "+1,2 % du PIB", date: "2025" }
    }
  },
  {
    name: "Suisse",
    slug: "switzerland",
    flag: "https://flagcdn.com/ch.svg",
    phoneCode: "+41",
    region: "europe-other",
    description: "La Suisse est reconnue pour sa stabilité économique, ses salaires élevés et son cadre de vie premium.",
    highlights: ["Salaires élevés", "Pays multilingue", "Infrastructure de qualité", "Sécurité"],
    visaType: "Permis de travail (Permis B / L)",
    officialName: "Confédération suisse",
    capital: "Berne",
    officialLanguages: ["Allemand", "Français", "Italien", "Romanche"],
    population: 8.8,
    area: 41285,
    currency: "Franc suisse (CHF)",
    economicIndicators: {
      gdp: { value: "1 147 milliards USD", date: "2026" },
      gdpPerCapita: { value: "126 177 USD", date: "2026" },
      economicGrowth: { value: "1,3 %", date: "T1 2026" },
      inflation: { value: "1,5 %", date: "T1 2026" },
      unemploymentRate: { value: "4,0 %", date: "T1 2026" },
      publicDebt: { value: "38,0 % du PIB", date: "2025" },
      publicDeficit: { value: "+0,5 % du PIB", date: "2025" }
    }
  },
  {
    name: "Norvège",
    slug: "norway",
    flag: "https://flagcdn.com/no.svg",
    phoneCode: "+47",
    region: "europe-other",
    description: "La Norvège offre une excellente qualité de vie, un système social solide et des secteurs énergétiques dynamiques.",
    highlights: ["Qualité de vie élevée", "Nature spectaculaire", "Économie stable", "Système social fort"],
    visaType: "Visa de travailleur qualifié (Skilled Worker)",
    officialName: "Royaume de Norvège",
    capital: "Oslo",
    officialLanguages: ["Norvégien"],
    population: 5.5,
    area: 385207,
    currency: "Couronne norvégienne (kr)",
    economicIndicators: {
      gdp: { value: "599 milliards USD", date: "2026" },
      gdpPerCapita: { value: "105 877 USD", date: "2026" },
      economicGrowth: { value: "1,5 %", date: "T1 2026" },
      inflation: { value: "3,8 %", date: "T1 2026" },
      unemploymentRate: { value: "3,9 %", date: "T1 2026" },
      publicDebt: { value: "43,0 % du PIB", date: "2025" },
      publicDeficit: { value: "+14,0 % du PIB", date: "2025" }
    }
  },
  {
    name: "Islande",
    slug: "iceland",
    flag: "https://flagcdn.com/is.svg",
    phoneCode: "+354",
    region: "europe-other",
    description: "L'Islande est idéale pour les professionnels qui recherchent un environnement innovant, durable et une nature préservée.",
    highlights: ["Durabilité", "Innovation", "Cadre naturel unique", "Petite communauté internationale"],
    visaType: "Permis pour professionnel qualifié",
    officialName: "Islande",
    capital: "Reykjavik",
    officialLanguages: ["Islandais"],
    population: 0.38,
    area: 103000,
    currency: "Couronne islandaise (kr)",
    economicIndicators: {
      gdp: { value: "44 milliards USD", date: "2026" },
      gdpPerCapita: { value: "110 048 USD", date: "2026" },
      economicGrowth: { value: "1,1 %", date: "T1 2026" },
      inflation: { value: "5,4 %", date: "T1 2026" },
      unemploymentRate: { value: "3,5 %", date: "T1 2026" },
      publicDebt: { value: "63,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-1,0 % du PIB", date: "2025" }
    }
  },
  {
    name: "Royaume-Uni",
    slug: "united-kingdom",
    flag: "https://flagcdn.com/gb.svg",
    phoneCode: "+44",
    region: "europe-other",
    description: "Le Royaume-Uni reste une destination majeure pour les professionnels qualifiés, avec un marché du travail international et de nombreuses opportunités.",
    highlights: ["Marché du travail international", "Centres financiers mondiaux", "Diversité culturelle", "Réseaux professionnels"],
    visaType: "Skilled Worker Visa / Global Talent",
    officialName: "Royaume-Uni de Grande-Bretagne et d'Irlande du Nord",
    capital: "Londres",
    officialLanguages: ["Anglais"],
    population: 67.3,
    area: 242495,
    currency: "Livre sterling (£)",
    economicIndicators: {
      gdp: { value: "4 265 milliards USD", date: "2026" },
      gdpPerCapita: { value: "61 056 USD", date: "2026" },
      economicGrowth: { value: "0,5 %", date: "T1 2026" },
      inflation: { value: "2,5 %", date: "T1 2026" },
      unemploymentRate: { value: "4,2 %", date: "T1 2026" },
      publicDebt: { value: "104,0 % du PIB", date: "2025" },
      publicDeficit: { value: "-4,5 % du PIB", date: "2025" }
    }
  }
]

export const allCountries = [...euCountries, ...europeOtherCountries, ...northAmericaCountries, ...gccCountries, ...oceaniaCountries]

export function getCountryBySlug(slug: string): Country | undefined {
  return allCountries.find(country => country.slug === slug)
}

export function getCountriesByRegion(region: Country["region"]): Country[] {
  return allCountries.filter(country => country.region === region)
}
