# 🚀 Optimisation SEO - Les Récoltants

## ✅ Optimisations Réalisées

### 1. Configuration SEO Enrichie
**Fichier**: `/lib/seo/config.ts`

#### Mots-clés stratégiques ajoutés (43 mots-clés)

**Primaires (Position #1 visée)**:
- restaurant bordeaux ⭐
- restaurant bio bordeaux
- restaurant bistronomique bordeaux
- meilleur restaurant bordeaux

**Champs sémantiques enrichis**:
- **Cuisine**: cuisine de saison, cuisine du terroir, produits locaux
- **Bio & Local**: ferme bio, producteurs locaux, agriculture biologique
- **Marché**: marché fermier, marché bio, marché producteurs
- **Traiteur**: traiteur bio, traiteur mariage, traiteur durable, traiteur zéro déchet
- **Privatisation**: privatisation restaurant, location salle, événement privé

**Longue traîne**:
- "où manger bio à bordeaux"
- "restaurant éco-responsable bordeaux"
- "restaurant zéro déchet bordeaux"
- "restaurant slow food bordeaux"

---

### 2. Sitemap.xml Dynamique
**Fichier**: `/app/sitemap.ts`

✅ **Configuré avec Next.js 14 App Router**

**URLs indexées avec priorités SEO**:
| Page | Priorité | Fréquence | Justification |
|------|----------|-----------|---------------|
| Homepage `/` | 1.0 | daily | Page principale = max priorité |
| `/restaurant` | 0.9 | weekly | Service principal |
| `/marche-bocaux` | 0.9 | weekly | Service principal |
| `/traiteur-privatisation` | 0.8 | monthly | Service secondaire |
| `/contact` | 0.8 | monthly | Important pour conversion |
| `/a-propos` | 0.7 | monthly | Contenu institutionnel |

**Accès**: `https://lesrecoltants.fr/sitemap.xml` (automatique Next.js)

---

### 3. Robots.txt
**Fichier**: `/app/robots.ts`

✅ **Configuré pour optimiser le crawl**

```
User-agent: *
Allow: /
Disallow: /api/, /admin/, /_next/, /private/
Sitemap: https://lesrecoltants.fr/sitemap.xml
```

**Accès**: `https://lesrecoltants.fr/robots.txt` (automatique Next.js)

---

### 4. Schema.org JSON-LD (Données Structurées)
**Fichier existant optimisé**: `/lib/seo/structured-data.ts`

✅ **Implémenté dans le layout principal**

**Types de données structurées**:

1. **Restaurant** (`@type: Restaurant`)
   - Nom, adresse, téléphone, email
   - Géolocalisation (latitude/longitude)
   - Horaires d'ouverture
   - Type de cuisine (Bistronomique, Bio, Locale, De saison)
   - Gamme de prix (€€)
   - Menu URL
   - Accepte réservations

2. **Organization** (`@type: Organization`)
   - Identité de marque
   - Logo
   - Réseaux sociaux (Instagram)

3. **BreadcrumbList** (pour navigation)
   - Fil d'Ariane structuré

4. **FoodEstablishment** (service traiteur)
   - Page traiteur-privatisation

**Impact SEO**:
- ✅ Éligible Google Business Profile
- ✅ Rich snippets dans Google Search
- ✅ Cartes Google Maps optimisées
- ✅ Knowledge Graph

---

### 5. Métadonnées Optimisées

#### Homepage
```typescript
title: "Les Récoltants - Restaurant Bio & Marché Fermier à Bordeaux"
description: "Restaurant bistronomique & marché fermier locavore à Bordeaux..."
keywords: [43 mots-clés enrichis]
```

#### Pages spécifiques
Chaque page a ses propres métadonnées optimisées pour son contenu spécifique.

#### Open Graph & Twitter Cards
- ✅ Partage optimisé sur réseaux sociaux
- ✅ Image OG 1200×630px (à créer)
- ✅ Descriptions adaptées par page

---

## 🎯 Recommandations pour Optimisation Continue

### Images à Optimiser
**Priorité HAUTE**

Toutes les images doivent avoir:
1. **Balises ALT descriptives** avec mots-clés
   ```html
   <Image
     src="/hero.jpg"
     alt="Restaurant bistronomique Les Récoltants à Bordeaux - cuisine bio et produits locaux"
   />
   ```

2. **Compression optimale**
   - Format: WebP avec fallback JPEG
   - Taille: max 200KB par image
   - Next.js Image component (déjà utilisé ✅)

3. **Images SEO à créer**:
   - `/public/og-image.jpg` (1200×630px) - Partage réseaux sociaux
   - `/public/logo.png` - Logo haute résolution
   - `/public/apple-touch-icon.png` - iOS

---

### Contenu Enrichi pour SEO

#### Textes à optimiser sur chaque page:

**Homepage**:
- ✅ H1: "De la terre à votre assiette" (déjà présent)
- ✅ Inclure naturellement les mots-clés dans les paragraphes
- ✅ Ajouter une section avec texte long (300+ mots) pour le SEO

**Page Restaurant**:
- ✅ H1: Inclure "Restaurant Bordeaux"
- Exemple: "Restaurant Bistronomique à Bordeaux - Cuisine Bio de Saison"

**Page Marché**:
- H1: "Marché Fermier Bio à Bordeaux"
- Texte enrichi: producteurs locaux, agriculture biologique, circuit court

**Page Traiteur**:
- H1: "Traiteur Bio Bordeaux - Événements Éco-responsables"
- Mots-clés: traiteur mariage, traiteur entreprise, privatisation

**Page À Propos**:
- Histoire du restaurant
- Engagement bio et local
- Présentation de l'équipe

---

### URLs Lisibles
✅ **Déjà optimisées**:
- `/restaurant` (au lieu de `/resto` ou `/r`)
- `/marche-bocaux` (descriptif)
- `/traiteur-privatisation` (mots-clés inclus)
- `/a-propos` (français, pas `/about`)
- `/contact`

---

### Hiérarchie des Titres

#### Structure recommandée par page:

```
H1 - Titre principal (1 seul par page) avec mot-clé principal
  H2 - Section majeure
    H3 - Sous-section
      H4 - Détail (si nécessaire)
```

**Exemple Page Restaurant**:
```
H1: Restaurant Bistronomique à Bordeaux | Les Récoltants
  H2: Notre Philosophie Culinaire
  H2: Menu du Marché
    H3: Entrées Bio
    H3: Plats de Saison
    H3: Desserts Maison
  H2: Carte des Vins Naturels
```

---

## 📊 Outils de Suivi SEO Recommandés

### 1. Google Search Console
**À configurer immédiatement**
- Vérifier la propriété du site
- Soumettre le sitemap.xml
- Suivre les performances de recherche
- Identifier les erreurs d'indexation

### 2. Google Business Profile
**Optimisation locale cruciale**
- Créer/optimiser la fiche établissement
- Ajouter photos HD
- Encourager les avis clients
- Mettre à jour horaires et services

### 3. Google Analytics 4
- Suivre le trafic organique
- Identifier les mots-clés performants
- Analyser le comportement utilisateur

### 4. PageSpeed Insights
- Tester la vitesse de chargement
- Optimiser les Core Web Vitals
- Score visé: 90+ sur mobile

---

## 🎯 Actions Prioritaires Immédiates

### Semaine 1
- [ ] Créer `/public/og-image.jpg` (1200×630px)
- [ ] Compléter les informations de contact dans `/lib/seo/config.ts`:
  - Adresse complète
  - Numéro de téléphone
  - Email
  - Instagram handle
- [ ] Ajouter balises ALT à toutes les images
- [ ] Configurer Google Search Console
- [ ] Soumettre sitemap.xml

### Semaine 2
- [ ] Créer/optimiser Google Business Profile
- [ ] Ajouter un blog pour contenu SEO régulier
- [ ] Optimiser images (compression WebP)
- [ ] Créer pages légales:
  - `/mentions-legales`
  - `/politique-confidentialite`

### Semaine 3-4
- [ ] Stratégie de backlinks locaux
- [ ] Partenariats avec producteurs (liens)
- [ ] Présence annuaires locaux bordelais
- [ ] Obtenir premiers avis Google

---

## 🏆 Résultat Attendu

**Objectif 3-6 mois**:
- Position #1-3 pour "restaurant bio bordeaux"
- Position #1-5 pour "restaurant bordeaux" (très compétitif)
- Top 10 pour tous les mots-clés ciblés
- Trafic organique: +200% vs baseline
- Visibilité Google Maps locale optimale

**KPIs à suivre**:
- Impressions Google Search
- CTR (Click-Through Rate)
- Position moyenne des mots-clés
- Trafic organique
- Conversions (réservations, devis)

---

## 📞 Support Technique

**Fichiers modifiés**:
1. `/lib/seo/config.ts` - Configuration SEO enrichie
2. `/app/sitemap.ts` - Sitemap dynamique
3. `/app/robots.ts` - Robots.txt
4. `/lib/seo/structured-data.ts` - Déjà optimisé
5. `/app/layout.tsx` - Données structurées implémentées

**Nouveaux fichiers**:
- `/components/seo/LocalBusinessSchema.tsx` - Composant JSON-LD additionnel

**Next.js génère automatiquement**:
- `/sitemap.xml` (accessible en production)
- `/robots.txt` (accessible en production)

---

## 🔥 Quick Wins SEO

1. **Titre de page**: Toujours inclure "Bordeaux" dans les titres
2. **Meta descriptions**: 150-160 caractères, appel à l'action
3. **URLs**: Courtes, descriptives, avec mots-clés
4. **Balises ALT images**: Descriptives + mot-clé naturel
5. **Liens internes**: Mailler les pages entre elles
6. **Vitesse**: Site déjà optimisé avec Next.js 14
7. **Mobile-first**: Design responsive déjà implémenté ✅

---

**Date de création**: 2025-12-03
**Prochaine révision**: 2025-12-10 (vérifier indexation)

---

🚀 **Le site est maintenant techniquement optimisé pour le référencement naturel !**
