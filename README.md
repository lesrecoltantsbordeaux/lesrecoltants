# Les Récoltants - Site Officiel

Site vitrine ultra-performant pour **Les Récoltants**, restaurant bistronomique & marché fermier locavore à Bordeaux.

## 🎯 Objectifs

- **SEO local Bordeaux** : dominer les requêtes locales
- **Performance Lighthouse** : 95+ sur tous les scores
- **Conversions** : réservations, traiteur, privatisation
- **Crédibilité** : design premium et émotionnel

## 🚀 Stack Technique

- **Framework** : Next.js 14 (App Router)
- **Styling** : TailwindCSS v4
- **TypeScript** : Full typing
- **Optimisation** : AVIF/WebP automatique, ISR, SSG
- **SEO** : Métadonnées dynamiques, Schema.org, Open Graph

## 📁 Architecture

```
app/
├── (pages)/
│   ├── a-propos/
│   ├── restaurant/
│   ├── marche-bocaux/
│   ├── traiteur-privatisation/
│   └── contact/
├── layout.tsx          # Layout global + SEO
└── page.tsx            # Page d'accueil

components/
├── layout/
│   ├── Header.tsx      # Navigation responsive
│   └── Footer.tsx      # Footer complet
└── ui/
    └── FloatingCTA.tsx # Bouton réservation flottant

lib/
├── seo/
│   ├── config.ts       # Configuration SEO locale
│   └── structured-data.ts  # Schema.org
└── utils/

types/
└── index.ts            # Types TypeScript
```

## 🎨 Design System

### Couleurs
- **Primaire** : `#e04a14` (orange chaleureux)
- **Fonds texturés** :
  - Cérusé clair : `#f8f6f3`
  - Terre cuite : `#fdf4f0`
- **Neutres** : Palette harmonieuse terre

### Typographie
- Font principale : Geist Sans
- Hiérarchie H1-H6 optimisée
- Line-height adaptés pour lisibilité

### Textures CSS
- `.texture-ceruse-light` : fond subtil cérusé
- `.texture-terracotta` : fond chaleureux terre cuite

## ⚡️ Performance

### Optimisations Next.js
- Images AVIF + WebP automatiques
- Compression activée
- Headers de sécurité
- Cache long terme (1 an)

### Core Web Vitals
- LCP : Optimisé avec `priority` sur hero
- CLS : Layout stable, pas de shift
- FID : Hydratation optimisée

## 🔍 SEO Local

### Données Structurées
- **Restaurant** : Type Schema.org complet
- **LocalBusiness** : Géolocalisation Bordeaux
- **Breadcrumb** : Navigation
- **Organization** : Entreprise

### Métadonnées
- Title templates dynamiques
- Descriptions optimisées par page
- Open Graph complet
- Twitter Cards

### Mots-clés Ciblés
- restaurant bordeaux
- restaurant bio bordeaux
- traiteur bordeaux
- privatisation restaurant bordeaux
- marché fermier bordeaux

## 🛠 Commandes

```bash
# Développement
npm run dev

# Build production
npm run build

# Prévisualisation production
npm run start

# Lint
npm run lint
```

## 📝 À Compléter

Dans `lib/seo/config.ts` :
- [ ] Adresse complète du restaurant
- [ ] Numéro de téléphone
- [ ] Email de contact
- [ ] Instagram handle
- [ ] Coordonnées GPS exactes
- [ ] Horaires définitifs

## 🎯 Prochaines Étapes

### Phase 2 : Pages Internes
- [ ] Page "À propos" (storytelling)
- [ ] Page "Restaurant" (carte, photos)
- [ ] Page "Marché & Bocaux"
- [ ] Page "Traiteur & Privatisation"
- [ ] Page "Contact" (formulaire + map)

### Phase 3 : Contenus
- [ ] Photos professionnelles
- [ ] Rédaction contenu SEO
- [ ] Création logo optimisé
- [ ] Images OG personnalisées

### Phase 4 : Fonctionnalités
- [ ] Formulaire contact/réservation
- [ ] Intégration Google Maps
- [ ] Instagram feed
- [ ] Galerie photos optimisée

### Phase 5 : SEO Avancé
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Google Search Console
- [ ] Google My Business
- [ ] Backlinks locaux

## 🔒 Sécurité

- Headers CSP configurés
- X-Frame-Options: SAMEORIGIN
- DNS prefetch activé
- Pas d'injection XSS possible

## 📱 Responsive

- Mobile-first design
- Breakpoints : sm (640), md (768), lg (1024), xl (1280)
- Navigation mobile hamburger
- Touch-friendly (48px min targets)

## ♿️ Accessibilité

- Sémantique HTML5 stricte
- ARIA labels sur navigation
- Contraste couleurs WCAG AA
- Focus visible sur tous les éléments

## 📊 Analytics (à venir)

- [ ] Google Analytics 4
- [ ] Google Tag Manager
- [ ] Hotjar / Clarity
- [ ] Tracking conversions

---

**Développé avec ❤️ pour Les Récoltants**
*De la fourche à la fourchette*
