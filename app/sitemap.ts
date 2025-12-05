import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Pages principales avec priorités SEO optimisées
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0, // Homepage - priorité maximale
    },
    {
      url: `${baseUrl}/restaurant`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9, // Service principal
    },
    {
      url: `${baseUrl}/la-ferme`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9, // Service principal
    },
    {
      url: `${baseUrl}/traiteur-privatisation`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8, // Service secondaire
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8, // Important pour la conversion
    },
  ]

  return routes
}
