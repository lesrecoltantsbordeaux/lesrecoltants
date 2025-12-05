import { siteConfig } from "@/lib/seo/config";

/**
 * Schema.org JSON-LD pour le référencement local
 * Optimisé pour Google Business Profile et la recherche locale
 */
export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteConfig.url}/#restaurant`,
    name: siteConfig.business.name,
    description: siteConfig.description,
    url: siteConfig.url,

    // Type de cuisine
    servesCuisine: ["Bistronomique", "Française", "Bio", "Locavore", "De saison"],

    // Prix
    priceRange: siteConfig.business.priceRange,

    // Adresse
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address.streetAddress,
      addressLocality: siteConfig.business.address.addressLocality,
      addressRegion: siteConfig.business.address.addressRegion,
      postalCode: siteConfig.business.address.postalCode,
      addressCountry: siteConfig.business.address.addressCountry,
    },

    // Géolocalisation
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.business.geo.latitude,
      longitude: siteConfig.business.geo.longitude,
    },

    // Contact
    telephone: siteConfig.business.telephone,
    email: siteConfig.business.email,

    // Horaires d'ouverture
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "12:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "19:00",
        closes: "22:00",
      },
    ],

    // Services proposés
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Nos services",
      itemListElement: siteConfig.business.services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },

    // Réseaux sociaux
    sameAs: siteConfig.business.social.instagram
      ? [siteConfig.business.social.instagram]
      : [],

    // Caractéristiques spéciales (USP pour le SEO)
    keywords: "restaurant bio, circuit court, locavore, zéro déchet, produits locaux, cuisine de saison, producteurs locaux, Bordeaux",

    // Labels et certifications
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Certification Bio",
        value: "100%",
      },
      {
        "@type": "PropertyValue",
        name: "Circuit Court",
        value: "Producteurs locaux",
      },
      {
        "@type": "PropertyValue",
        name: "Zéro Déchet",
        value: "Engagement complet",
      },
    ],

    // Menu (pour la recherche Google)
    hasMenu: `${siteConfig.url}/restaurant`,

    // Accepte les réservations
    acceptsReservations: true,

    // Paiement
    paymentAccepted: "Espèces, Carte bancaire",

    // Image (og-image)
    image: `${siteConfig.url}/og-image.jpg`,

    // Organisation parente (pour le graph de connaissance)
    ...(siteConfig.business.social.instagram && {
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": siteConfig.url,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
