# Les Récoltants - Résumé du Projet

## 📋 Vue d'ensemble

Site vitrine Next.js pour **Les Récoltants**, restaurant bistronomique et marché fermier bio à Bordeaux. Le projet met l'accent sur le référencement local, la performance et une expérience utilisateur premium.

## 🚀 Stack Technique

- **Framework**: Next.js 16.0.10 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 3.4.18
- **Déploiement**: Vercel
- **Repository**: GitHub (`lesrecoltantsbordeaux/lesrecoltants`)

## 📁 Architecture du Projet

### Structure des Pages (`app/`)

```
app/
├── page.tsx                    # Page d'accueil
├── layout.tsx                  # Layout global + métadonnées SEO
├── globals.css                 # Styles globaux + textures CSS
├── robots.ts                   # Configuration robots.txt
├── sitemap.ts                  # Génération sitemap.xml
│
├── restaurant/
│   └── page.tsx                # Page "Le Restaurant" (carte, menus)
│
├── la-ferme/
│   └── page.tsx                # Page "La Ferme" (marché fermier)
│
├── traiteur-privatisation/
│   └── page.tsx                # Page traiteur & privatisation
│
├── contact/
│   └── page.tsx                # Page contact avec formulaire
│
├── mentions-legales/
│   └── page.tsx                # Mentions légales
│
└── politique-confidentialite/
    └── page.tsx                # Politique de confidentialité
```

### Composants (`components/`)

```
components/
├── layout/
│   ├── Header.tsx              # Navigation principale (responsive, active page highlight)
│   └── Footer.tsx              # Footer avec liens, horaires, contact
│
├── ui/
│   ├── HeroCarousel.tsx        # Carousel hero avec auto-play, navigation, dots
│   ├── ContactForm.tsx         # Formulaire de contact (sans labels, placeholders uniquement)
│   ├── FloatingCTA.tsx         # Bouton réservation flottant
│   ├── PageHero.tsx            # Hero section réutilisable
│   ├── ScrollReveal.tsx        # Animations au scroll
│   ├── CookieBanner.tsx        # Bannière cookies
│   └── Icons.tsx               # Bibliothèque d'icônes SVG
│
└── seo/
    └── LocalBusinessSchema.tsx # Données structurées Schema.org
```

### Configuration (`lib/`)

```
lib/
├── seo/
│   ├── config.ts               # Configuration SEO (métadonnées, Open Graph, robots)
│   └── structured-data.ts      # Génération Schema.org
└── utils/                      # Utilitaires
```

## 🎨 Design System

### Couleurs (Tailwind)

- **Brand Primary**: `#e14a16` (orange chaleureux)
- **Brand Primary Dark**: `#c03e11`
- **Brand Primary Light**: `#ff6b2c`
- **Ceruse Light**: `#f8f6f3` (fond texturé clair)
- **Terracotta Light**: `#fdf4f0` (fond texturé terre cuite)
- **Neutral Dark**: `#2d2820`
- **Neutral Medium**: `#6b6355`
- **Neutral Light**: `#b8b0a3`

### Typographie

- **Sans-serif**: Geist Sans (variable)
- **Monospace**: Courier Prime (formulaires)
- **Stencil**: VtgStencil (titres décoratifs)

### Textures CSS

- `.texture-ceruse-light-image`: Fond cérusé clair
- `.texture-terracotta-cmyk-image`: Fond terre cuite (utilisé pour "La charte des récoltants" et "Bon cadeau")

## 🎯 Fonctionnalités Principales

### Navigation

- Header responsive avec navigation active (page courante en orange)
- Changement de langue (FR/EN) positionné à droite
- Bouton "Réserver" dans le header
- Footer avec sections Navigation, Horaires, Contact (titres en orange)

### Pages Spécifiques

#### Page d'Accueil (`app/page.tsx`)

- Hero section avec image de fond et titre "De la fourche à votre assiette"
- Section "Direct Producteurs" (anciennement "Circuit Court")
- Section "La ferme des Récoltants" (anciennement "Zéro Déchet")
- Section "La charte des récoltants" avec titre en arc (SVG) et fond texturé
- Section "Bon cadeau" avec fond texturé
- Animations au scroll (ScrollReveal)

#### Page Restaurant (`app/restaurant/page.tsx`)

- Hero carousel avec 6 images
- Titre: "Cuisine d'auteur – produits bruts du terroir"
- Sections: "Carte changeante", "100% fait maison", "Dans l'assiette"
- Section "Un exemple de nos menus" avec liens vers "Le déjeuner" et "A la carte"
- Note Google: 4,8/5 (1 423 avis) avec lien

#### Page La Ferme (`app/la-ferme/page.tsx`)

- Hero carousel
- Section "Un étal de produits frais et qui ont du goût !" avec 6 cartes
- Section "La charte des récoltants" avec titre en arc (SVG)

#### Page Traiteur (`app/traiteur-privatisation/page.tsx`)

- Hero carousel avec 5 images
- Section "Formule Buffet" avec badge "LE PLUS POPULAIRE" (visible, z-index élevé)
- Section "Privatisation"
- Section "Bon cadeau"

#### Page Contact (`app/contact/page.tsx`)

- Hero carousel avec 5 images (position ajustée pour montrer les visages)
- Formulaire de contact sans labels (placeholders uniquement)
- Police Courier pour tous les champs
- Section "Garanties" supprimée

## 🔍 SEO & Métadonnées

### Configuration SEO (`lib/seo/config.ts`)

- Métadonnées dynamiques par page
- Open Graph complet
- Twitter Cards
- Configuration robots (indexation, max-image-preview)
- Données structurées Schema.org (Restaurant, LocalBusiness)

### Informations Business

- **Nom**: Les Récoltants
- **Adresse**: 18 rue Sainte-Colombe, 33000 Bordeaux
- **Téléphone**: 05.56.38.16.47
- **Email**: contact@lesrecoltants.fr
- **Coordonnées GPS**: 44.8378, -0.5792

## 🖼️ Gestion des Images

### Structure des Images (`public/images/`)

```
public/images/
├── hero/                       # Images hero (textures, fonds)
├── restaurant/carrousel/       # 6 images carousel restaurant
├── traiteur/carrousel/         # 5 images carousel traiteur
├── contact/carrousel/          # 5 images carousel contact
├── ferme/carrousel/            # 4 images carousel ferme
├── producteurs/                # Photos producteurs
└── logos/                      # Logo Les Récoltants
```

### Optimisation Images

- Utilisation de `next/image` avec `priority` pour les images hero
- Qualité 100 pour les carousels
- `object-cover` / `object-contain` selon le contexte
- `object-position` ajustable (ex: contact carousel pour montrer les visages)

## 🎭 Animations & Interactions

- **ScrollReveal**: Animations au scroll pour les sections
- **HeroCarousel**: Auto-play, navigation, dots, transitions
- **FloatingCTA**: Bouton réservation flottant (fixe en bas à droite)
- **Animations CSS**: `animate-float` pour les blobs décoratifs

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints Tailwind: sm (640px), md (768px), lg (1024px), xl (1280px)
- Navigation mobile avec menu hamburger
- Images responsives avec `sizes` optimisés

## 🔒 Sécurité & Performance

- Next.js 16.0.10 (dernière version stable, CVE-2025-66478 corrigée)
- Headers de sécurité configurés
- Compression activée
- Cache optimisé
- TypeScript strict mode

## 🛠️ Commandes Disponibles

```bash
npm run dev      # Développement local (port 3000)
npm run build    # Build production
npm run start    # Serveur production
npm run lint     # Linter ESLint
```

## 📝 Points d'Attention

### Modifications Récentes

1. **Mise à jour sécurité**: Next.js 16.0.10 (fix CVE-2025-66478)
2. **Textes**: Mises à jour de contenu sur toutes les pages
3. **Design**: Titres en arc SVG, fonds texturés, badges visibles
4. **Navigation**: Page active en orange, langue à droite
5. **Formulaires**: Suppression des labels, placeholders uniquement

### Fichiers Clés à Connaître

- `app/layout.tsx`: Layout global, métadonnées par défaut
- `app/page.tsx`: Page d'accueil (639+ lignes)
- `components/layout/Header.tsx`: Navigation avec logique active page
- `components/ui/HeroCarousel.tsx`: Carousel réutilisable
- `lib/seo/config.ts`: Configuration SEO centralisée
- `tailwind.config.ts`: Design system (couleurs, fonts)
- `app/globals.css`: Styles globaux + classes textures

## 🚨 Problèmes Connus & Solutions

### Port 3000 occupé

```bash
lsof -i :3000
kill -9 <PID>
rm -rf .next/dev/lock
npm run dev
```

### Build Vercel (TypeScript metadata)

- Utiliser `as const` pour les valeurs littérales dans `metadata.robots`
- Typer explicitement `defaultMetadata: Metadata`

## 📦 Dépendances Principales

```json
{
  "next": "^16.0.10",
  "react": "19.2.0",
  "react-dom": "19.2.0",
  "typescript": "^5",
  "tailwindcss": "^3.4.18",
  "eslint-config-next": "^16.0.10"
}
```

## 🎯 Prochaines Étapes Potentielles

- Intégration formulaire de réservation
- Google Maps embed
- Instagram feed
- Analytics (GA4)
- Blog/actualités
- Système de réservation en ligne

---

**Dernière mise à jour**: Après correction CVE-2025-66478 (Next.js 16.0.10)
**Repository**: `lesrecoltantsbordeaux/lesrecoltants`
**Déploiement**: Vercel

