/**
 * Génération des données structurées Schema.org
 * Critiques pour le SEO local et Google Maps
 */

import { siteConfig } from './config';

/**
 * Données structurées pour la page d'accueil
 * Type: Restaurant + LocalBusiness
 */
export function getRestaurantStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${siteConfig.url}#restaurant`,
    name: siteConfig.business.name,
    image: `${siteConfig.url}/images/hero/hero-background.jpg`,
    description: siteConfig.description,

    // Adresse
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.business.address.streetAddress,
      addressLocality: siteConfig.business.address.addressLocality,
      addressRegion: siteConfig.business.address.addressRegion,
      postalCode: siteConfig.business.address.postalCode,
      addressCountry: siteConfig.business.address.addressCountry,
    },

    // Géolocalisation
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.business.geo.latitude,
      longitude: siteConfig.business.geo.longitude,
    },

    // Contact
    telephone: siteConfig.business.telephone,
    email: siteConfig.business.email,
    url: siteConfig.url,

    // Horaires
    openingHoursSpecification: siteConfig.business.openingHours.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: parseDays(hours),
      opens: parseTime(hours, 'opens'),
      closes: parseTime(hours, 'closes'),
    })),

    // Type de cuisine
    servesCuisine: ['Bistronomique', 'Bio', 'Locale', 'De saison'],

    // Prix
    priceRange: siteConfig.business.priceRange,

    // Services
    hasMenu: {
      '@type': 'Menu',
      url: `${siteConfig.url}/restaurant#menu`,
    },

    // Modes de paiement
    paymentAccepted: 'Cash, Credit Card',

    // Réservations
    acceptsReservations: true,

    // Réseaux sociaux
    sameAs: [
      siteConfig.business.social.instagram,
    ].filter(Boolean),
  };
}

/**
 * Données structurées pour le fil d'Ariane (Breadcrumb)
 */
export function getBreadcrumbStructuredData(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

/**
 * Données structurées pour le service traiteur
 */
export function getCateringServiceStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    '@id': `${siteConfig.url}/traiteur-privatisation#catering`,
    name: `${siteConfig.business.name} - Service Traiteur`,
    description: 'Service traiteur bio et locavore à Bordeaux pour vos événements professionnels et privés.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.business.address.addressLocality,
      addressRegion: siteConfig.business.address.addressRegion,
      addressCountry: siteConfig.business.address.addressCountry,
    },
    telephone: siteConfig.business.telephone,
    url: `${siteConfig.url}/traiteur-privatisation`,
    servesCuisine: ['Bio', 'Locale', 'De saison'],
    priceRange: siteConfig.business.priceRange,
  };
}

/**
 * Organisation principale
 */
export function getOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}#organization`,
    name: siteConfig.business.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logos/logo-les-recoltants.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.business.address.addressLocality,
      addressRegion: siteConfig.business.address.addressRegion,
      addressCountry: siteConfig.business.address.addressCountry,
    },
    sameAs: [
      siteConfig.business.social.instagram,
    ].filter(Boolean),
  };
}

// Helpers
function parseDays(hoursString: string): string[] {
  const dayMap: Record<string, string> = {
    'Mo': 'Monday',
    'Tu': 'Tuesday',
    'We': 'Wednesday',
    'Th': 'Thursday',
    'Fr': 'Friday',
    'Sa': 'Saturday',
    'Su': 'Sunday',
  };

  const days = hoursString.split(' ')[0].split('-');
  if (days.length === 2) {
    // Range de jours
    return Object.values(dayMap).slice(
      Object.keys(dayMap).indexOf(days[0]),
      Object.keys(dayMap).indexOf(days[1]) + 1
    );
  }
  return [dayMap[days[0]]];
}

function parseTime(hoursString: string, type: 'opens' | 'closes'): string {
  const times = hoursString.split(' ')[1].split('-');
  return type === 'opens' ? times[0] : times[1];
}
