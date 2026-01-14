import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo/config'
import { locales } from '@/lib/i18n/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Pages principales avec priorités SEO optimisées
  const pages = [
    { path: '', changeFrequency: 'daily' as const, priority: 1.0 },
    { path: '/restaurant', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/la-ferme', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/traiteur-privatisation', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.8 },
  ]

  // Générer les URLs pour chaque locale avec alternates hreflang
  const routes: MetadataRoute.Sitemap = []

  for (const page of pages) {
    for (const locale of locales) {
      const url = `${baseUrl}/${locale}${page.path}`

      // Construire les alternates pour chaque langue
      const alternates: { languages: Record<string, string> } = {
        languages: {}
      }
      for (const altLocale of locales) {
        alternates.languages[altLocale] = `${baseUrl}/${altLocale}${page.path}`
      }

      routes.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates,
      })
    }
  }

  return routes
}
