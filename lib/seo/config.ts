/**
 * Configuration SEO pour Les Récoltants
 * Optimisé pour le référencement local à Bordeaux
 */

import type { Metadata } from "next";

export const siteConfig = {
  name: "Les Récoltants",
  description: "Restaurant bistronomique & marché fermier bio à Bordeaux. Espace de vie nourricier, convivial et durable. Cuisine spontanée qui change tous les jours, 100% bio et local. De la fourche à la fourchette.",
  url: "https://lesrecoltants.fr",

  // SEO Local Bordeaux
  business: {
    name: "Les Récoltants",
    type: "Restaurant",
    cuisine: "Bistronomique",
    tagline: "De la fourche à la fourchette",

    // Adresse
    address: {
      streetAddress: "18 rue Sainte-Colombe",
      addressLocality: "Bordeaux",
      addressRegion: "Nouvelle-Aquitaine",
      postalCode: "33000",
      addressCountry: "FR",
    },

    // Coordonnées GPS (rue Sainte-Colombe, Bordeaux)
    geo: {
      latitude: 44.8378,
      longitude: -0.5792,
    },

    // Contact
    telephone: "05.56.38.16.47",
    email: "contact@lesrecoltants.fr",

    // Réseaux sociaux
    social: {
      instagram: "https://instagram.com/lesrecoltants",
      facebook: "https://facebook.com/lesrecoltants",
    },

    // Horaires
    openingHours: [
      "Mo 12:00-14:00",
      "Tu 12:00-14:00",
      "We 12:00-14:00",
      "We 19:00-21:00",
      "Th 12:00-14:00",
      "Th 19:00-21:00",
      "Fr 12:00-14:00",
      "Fr 19:00-21:00",
      "Sa 10:00-14:00",
      "Sa 19:00-21:00",
    ],

    // Services
    services: [
      "Restaurant (La Cantine)",
      "Marché fermier bio",
      "Sur place ou à emporter",
      "Service traiteur",
      "Privatisation événements",
    ],

    // Produits
    produits: [
      "Fruits et légumes bio",
      "Fromages",
      "Pains",
      "Viandes",
      "Poissons",
      "Charcuteries",
      "Vins naturels",
    ],

    // Labels et certifications
    labels: [
      "Ecotable",
      "Ocean Friendly Restaurant - Surfrider Foundation",
      "Le Tour des Terroirs",
      "Label Agriculture Biologique",
      "Petit Futé 2023",
      "La Gemme",
      "Restaurant Guru 2023",
    ],

    // Prix
    priceRange: "€€",
  },

  // Mots-clés SEO local prioritaires + Champs sémantiques enrichis
  keywords: [
    // Primaires - Restaurant Bordeaux
    "restaurant bordeaux",
    "restaurant bio bordeaux",
    "restaurant bistronomique bordeaux",
    "restaurant locavore bordeaux",
    "meilleur restaurant bordeaux",
    "restaurant gastronomique bordeaux",

    // Cuisine & Concept
    "cuisine de saison bordeaux",
    "cuisine du terroir bordeaux",
    "restaurant circuit court bordeaux",
    "restaurant produits locaux bordeaux",
    "ferme bio bordeaux",
    "producteurs locaux bordeaux",
    "agriculture biologique bordeaux",

    // Marché & Produits
    "marché fermier bordeaux",
    "marché bio bordeaux",
    "marché producteurs bordeaux",
    "bocaux cuisinés bordeaux",
    "conserves artisanales bordeaux",
    "produits du terroir bordeaux",

    // Services Traiteur
    "traiteur bordeaux",
    "traiteur bio bordeaux",
    "traiteur événementiel bordeaux",
    "traiteur mariage bordeaux",
    "traiteur entreprise bordeaux",
    "traiteur durable bordeaux",
    "traiteur zéro déchet bordeaux",

    // Privatisation
    "privatisation restaurant bordeaux",
    "location salle bordeaux",
    "événement privé bordeaux",
    "salle réception bordeaux",

    // Longue traîne sémantique
    "où manger bio à bordeaux",
    "restaurant éco-responsable bordeaux",
    "restaurant zéro déchet bordeaux",
    "bistronomie bordeaux",
    "restaurant slow food bordeaux",
    "cuisine saine bordeaux",
  ],
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Restaurant Bio & Marché Fermier à Bordeaux`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  // Open Graph
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Restaurant Bio & Marché Fermier à Bordeaux`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg", // À créer
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Restaurant Bio à Bordeaux`,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    } as const,
  },
};
