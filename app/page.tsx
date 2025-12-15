import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import ScrollReveal, { RevealGroup } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import Image from "next/image";
import {
  RestaurantIcon,
  BasketIcon,
  JarIcon,
  ChefHatIcon,
  LeafIcon,
  ArrowRightIcon,
  SparklesIcon,
  HandshakeIcon,
  RecycleIcon,
  HeartIcon,
  CheckCircleIcon,
  StarIcon,
  UsersIcon,
} from "@/components/ui/Icons";

export default function Home() {
  return (
    <>
      <Header />
      <FloatingCTA />

      <main className="flex-1">
        {/* ==================== HERO SECTION ==================== */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-dark">
          {/* Background Image - Photo hero */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero/hero-background.jpg"
              alt=""
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "center" }}
            />
            {/* Overlay sombre pour lisibilité */}
            <div className="absolute inset-0 bg-neutral-dark/40" />
          </div>

          {/* Blobs décoratifs animés */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-brand-primary/20 rounded-full blur-3xl animate-float z-10" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-float z-10" style={{ animationDelay: "1s" }} />

          <div className="container mx-auto px-4 lg:px-8 relative z-20 pt-24 pb-20 lg:pt-28 lg:pb-32">
            {/* Layout Magazine Éditorial */}
            <div className="relative max-w-7xl mx-auto">

              {/* Label numéro de page style magazine - Desktop uniquement */}
              <div className="hidden lg:block absolute -left-8 top-12 text-white/30 font-courier text-sm tracking-widest">
                <div className="rotate-180" style={{ writingMode: 'vertical-rl' }}>
                  PAGE 01 — ACCUEIL
                </div>
              </div>

              {/* Contenu principal avec marge commune */}
              <div className="pt-8 lg:pt-0 space-y-6 lg:space-y-8 text-center lg:text-left lg:ml-0">

                {/* Surtitre style magazine */}
                <div className="inline-block animate-fade-in-up">
                  <div className="flex items-center gap-3 text-brand-primary font-courier text-xs uppercase tracking-[0.3em] font-bold">
                    <div className="w-12 h-px bg-brand-primary"></div>
                    Restaurant bistronomique
                  </div>
                </div>

                {/* Titre Principal */}
                <div className="animate-fade-in-up stagger-1">
                  <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-stencil font-bold text-white leading-[0.95] tracking-tighter">
                    Du champ
                  </h1>
                  <div className="relative inline-block mt-2">
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-stencil font-bold text-white leading-[0.95] tracking-tighter">
                      à votre{" "}
                      <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                        assiette
                      </span>
                    </h1>
                    <div className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-brand-primary/30 rounded-full"></div>
                  </div>
                </div>

                {/* Description */}
                <div className="max-w-xl animate-fade-in-up stagger-2">
                  <p className="text-lg lg:text-xl font-courier text-white/90 leading-relaxed">
                    Un restaurant bistronomique à Bordeaux, où nous avons choisi de cuisiner les produits des <span className="text-brand-primary font-semibold">fermes bio</span> voisines. Des <span className="text-brand-primary font-semibold">produits proches</span>, des liens forts, une cuisine qui respecte l'essentiel.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start pt-6 animate-fade-in-up stagger-4">
                  <Link
                    href="/restaurant"
                    className="group relative inline-flex items-center justify-center gap-3 bg-brand-primary text-white px-10 py-5 font-courier font-bold hover:bg-brand-primary-dark transition-all shadow-2xl shadow-brand-primary/30 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <RestaurantIcon size={20} />
                    Découvrir la carte
                      <ArrowRightIcon
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                  </Link>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 border-2 border-white text-white px-10 py-5 font-courier font-bold hover:bg-white hover:text-neutral-dark transition-all"
                  >
                    Réserver une table
                  </Link>
                </div>

              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in stagger-5">
            <div className="flex flex-col items-center gap-2 text-white/40">
              <span className="text-xs font-courier uppercase tracking-widest font-medium">Découvrir</span>
              <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* ==================== STATS BANNER ==================== */}
        <section className="py-12 lg:py-16 bg-white border-y-2 border-neutral-light/20">
          <div className="container mx-auto px-4 lg:px-8">
            <RevealGroup className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {[
                { value: "100%", label: "Bio & Local", sublabel: "Certifié AB" },
                { value: "<50km", label: "Circuit court", sublabel: "Ferme partenaire" },
                { value: "0", label: "Pesticide", sublabel: "Sol vivant" },
                { value: "100%", label: "De saison", sublabel: "Fraîcheur garantie" },
              ].map((stat, index) => (
                <div key={index} className="text-center reveal-item">
                  <div className="text-5xl lg:text-6xl font-stencil font-bold text-brand-primary mb-3">
                    {stat.value}
                  </div>
                  <div className="font-courier font-bold text-neutral-dark mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm font-courier text-neutral-medium">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* ==================== NOS VALEURS ==================== */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-ceruse-light to-white relative overflow-hidden">
          {/* Texture de fond - Ceruse CMJN (section importante) */}
          <div className="absolute inset-0 texture-ceruse-cmyk opacity-40" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            {/* En-tête de section */}
            <div className="text-center mb-16 lg:mb-20">
              <ScrollReveal animation="fade-up">
                <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                  <HeartIcon size={16} />
                  Nos engagements
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-neutral-dark mb-6 leading-tight max-w-3xl mx-auto">
                  Une cuisine qui a du{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                    sens
                  </span>
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={200}>
                <p className="text-lg lg:text-xl font-courier text-neutral-dark leading-relaxed max-w-5xl mx-auto">
                  Chaque ingrédient, chaque geste et chaque choix naît d'un lien sincère avec la <span className="text-brand-primary font-semibold">terre</span>, les <span className="text-brand-primary font-semibold">producteurs</span> qui la cultivent et le soin que nous voulons apporter à votre assiette.
                </p>
              </ScrollReveal>
            </div>

            {/* Grid des valeurs */}
            <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Valeur 1 */}
              <div className="reveal-item group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <LeafIcon size={28} className="text-brand-primary" />
                </div>
                <h3 className="text-xl font-stencil font-bold text-brand-primary mb-3">
                  Zéro compromis
                </h3>
                <p className="font-courier text-neutral-dark leading-relaxed">
                  Des produits bruts cultivés en <span className="text-brand-primary font-semibold">agriculture bio</span>, paysanne, dans le respect d'un <span className="text-brand-primary font-semibold">sol vivant</span>, sans pesticides…
                </p>
              </div>

              {/* Valeur 2 */}
              <div className="reveal-item group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <HandshakeIcon size={28} className="text-brand-primary" />
                </div>
                <h3 className="text-xl font-stencil font-bold text-brand-primary mb-3">
                  Direct Producteurs
                </h3>
                <p className="font-courier text-neutral-dark leading-relaxed">
                  Des <span className="text-brand-primary font-semibold">fermes voisines</span> qui nous livrent en <span className="text-brand-primary font-semibold">direct</span>, de 20km à 150km au plus loin. C'est ça le vrai goût : <span className="text-brand-primary font-semibold">frais</span>, simple, immédiat.
                </p>
              </div>

              {/* Valeur 3 */}
              <div className="reveal-item group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <RecycleIcon size={28} className="text-brand-primary" />
                </div>
                <h3 className="text-xl font-stencil font-bold text-brand-primary mb-3">
                  La ferme des Récoltants
                </h3>
                <p className="font-courier text-neutral-dark leading-relaxed">
                  Nous faisons pousser nos légumes en <span className="text-brand-primary font-semibold">agriculture bio</span>, dans notre propre <span className="text-brand-primary font-semibold">champ à 20km</span> d'ici. Rien de plus vrai, rien de plus simple.
                </p>
              </div>

              {/* Valeur 4 */}
              <div className="reveal-item group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <UsersIcon size={28} className="text-brand-primary" />
                </div>
                <h3 className="text-xl font-stencil font-bold text-brand-primary mb-3">
                  Équité
                </h3>
                <p className="font-courier text-neutral-dark leading-relaxed">
                  Un <span className="text-brand-primary font-semibold">prix juste</span> pour le producteur, un tarif honnête pour vous, et des conditions dignes pour toute l'équipe. L'<span className="text-brand-primary font-semibold">équité</span> à tous les niveaux.
                </p>
              </div>
            </RevealGroup>
          </div>
        </section>

        {/* ==================== LA CHARTE DES RÉCOLTANTS ==================== */}
        <section id="charte-section" className="py-24 lg:py-32 texture-terracotta-cmyk-image relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Titre principal */}
              <ScrollReveal animation="scale" duration={800}>
                <div className="mb-4 lg:mb-6 flex justify-center">
                  <svg viewBox="0 0 1100 200" className="w-full max-w-5xl h-auto">
                    <defs>
                      <path id="arc-path" d="M 30 150 Q 550 30 1070 150" fill="none" />
                    </defs>
                    <text className="text-white font-stencil font-bold uppercase" fontSize="70" fill="currentColor">
                      <textPath href="#arc-path" startOffset="50%" textAnchor="middle">
                        LA CHARTE DES RÉCOLTANTS
                      </textPath>
                    </text>
                  </svg>
                </div>
              </ScrollReveal>

              {/* Liste des principes */}
              <ul className="space-y-1 lg:space-y-2">
                <li className="flex items-center justify-center">
                  <p className="font-courier text-white text-lg lg:text-xl leading-relaxed text-center">
                    Un produit qui a du <strong className="uppercase">GOÛT</strong>
                  </p>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-white font-courier text-lg lg:text-xl">—</span>
                </li>
                <li className="flex items-center justify-center">
                  <p className="font-courier text-white text-lg lg:text-xl leading-relaxed text-center">
                    Notre potager bio directement dans votre assiette
                  </p>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-white font-courier text-lg lg:text-xl">—</span>
                </li>
                <li className="flex items-center justify-center">
                  <p className="font-courier text-white text-lg lg:text-xl leading-relaxed text-center">
                    De l'agriculture bio, paysanne et durable sur sol <strong className="uppercase">VIVANT</strong> !
                  </p>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-white font-courier text-lg lg:text-xl">—</span>
                </li>
                <li className="flex items-center justify-center">
                  <p className="font-courier text-white text-lg lg:text-xl leading-relaxed text-center">
                    La <strong className="uppercase">SAISONNALITÉ</strong> 100% respectée
                  </p>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-white font-courier text-lg lg:text-xl">—</span>
                </li>
                <li className="flex items-center justify-center">
                  <p className="font-courier text-white text-lg lg:text-xl leading-relaxed text-center">
                    Plein phare sur le terroir et les ressources locales
                  </p>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-white font-courier text-lg lg:text-xl">—</span>
                </li>
                <li className="flex items-center justify-center">
                  <p className="font-courier text-white text-lg lg:text-xl leading-relaxed text-center">
                    Modes d'élevages durables et <strong className="uppercase">RESPECTUEUX</strong> du vivant
                  </p>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-white font-courier text-lg lg:text-xl">—</span>
                </li>
                <li className="flex items-center justify-center">
                  <p className="font-courier text-white text-lg lg:text-xl leading-relaxed text-center">
                    Sauvegarde du savoir-faire artisanal
                  </p>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-white font-courier text-lg lg:text-xl">—</span>
                </li>
                <li className="flex items-center justify-center">
                  <p className="font-courier text-white text-lg lg:text-xl leading-relaxed text-center">
                    <strong className="uppercase">TRANSPARENCE</strong> à tous les étages
                  </p>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-white font-courier text-lg lg:text-xl">—</span>
                </li>
                <li className="flex items-center justify-center">
                  <p className="font-courier text-white text-lg lg:text-xl leading-relaxed text-center">
                    Un prix juste pour le consommateur et le producteur
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ==================== LE MARCHÉ FERMIER ==================== */}
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
          {/* Texture de fond - Ceruse normal (section secondaire) */}
          <div className="absolute inset-0 texture-ceruse-light opacity-20" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">

            {/* En-tête de section */}
            <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
              <ScrollReveal animation="fade-up">
                <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                  <BasketIcon size={16} />
                  Notre ferme
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-neutral-dark mb-6 leading-tight">
                  Le marché{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                    fermier
                  </span>{" "}
                  directement dans vos paniers !
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={200}>
                <p className="text-lg lg:text-xl font-courier text-neutral-dark leading-relaxed mb-8">
                  Primeur • Fromagerie • Crèmerie • Boucherie/Charcuterie • Cave et Épicerie sèche
                </p>
              </ScrollReveal>
              <ScrollReveal animation="scale" delay={300}>
                <div className="inline-block bg-brand-primary/10 text-brand-primary px-6 py-3 rounded-full font-courier font-bold">
                  Ici, vous ne trouverez que des produits bio de saison !
                </div>
              </ScrollReveal>
            </div>

            {/* Message principal */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="max-w-4xl mx-auto mb-20 text-center">
                <p className="text-xl lg:text-2xl font-courier text-neutral-dark leading-relaxed">
                  Le message est simple : <span className="font-bold text-brand-primary">défendre coûte que coûte le terroir</span>, respecter le <span className="text-brand-primary font-semibold">vivant</span> et se fournir exclusivement auprès de <span className="text-brand-primary font-semibold">producteurs</span> et <span className="text-brand-primary font-semibold">artisans locaux</span>.
                </p>
                <p className="text-lg lg:text-xl font-courier text-neutral-medium mt-4">
                  Parce qu'il est possible de proposer une cuisine gourmande ET <span className="text-brand-primary font-semibold">ultra locale</span>.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* ==================== NOS SERVICES ==================== */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-ceruse-light to-white relative overflow-hidden">
          {/* Texture de fond - Ceruse CMJN (section importante) */}
          <div className="absolute inset-0 texture-ceruse-cmyk opacity-30" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            {/* Intro Section */}
            <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
              <ScrollReveal animation="fade-up">
                <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                  <SparklesIcon size={16} />
                  Notre univers
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-neutral-dark mb-6 leading-tight">
                  Un écosystème vertueux
                  <br />
                  <span className="text-neutral-medium font-stencil font-light">
                    autour du{" "}
                    <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent font-bold">
                      local
                    </span>
                  </span>
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={200}>
                <p className="text-lg lg:text-xl font-courier text-neutral-dark leading-relaxed">
                  Du restaurant à la ferme, découvrez toutes les facettes de notre engagement pour une <span className="text-brand-primary font-semibold">alimentation responsable</span>.
                </p>
              </ScrollReveal>
            </div>

            {/* Grid Services */}
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Restaurant - Large */}
              <ScrollReveal animation="fade-up" delay={0} className="lg:col-span-2">
                <Link
                  href="/restaurant"
                className="group block bg-white rounded-3xl p-10 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-light/20 hover:border-brand-primary/30 hover:-translate-y-2"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <RestaurantIcon size={32} className="text-brand-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-stencil font-bold text-brand-primary mb-4">
                      Restaurant bistronomique
                    </h3>
                    <div className="text-base lg:text-lg font-courier text-neutral-dark leading-relaxed mb-6 space-y-3">
                      <p>Chez les Récoltants, tout repose sur un <span className="text-brand-primary font-semibold">cercle vertueux</span> qui relie la ferme, la cuisine et la terre.</p>
                      <p>Nos légumes poussent dans des <span className="text-brand-primary font-semibold">sols vivants</span>, à deux pas d'ici. Nous les cuisinons dans leur intégralité, sans gâchis. Et ce qui reste retourne nourrir le sol grâce à notre <span className="text-brand-primary font-semibold">compost</span>.</p>
                      <p>Du champ à l'assiette, puis de l'assiette à la terre : c'est notre manière de prendre soin du goût, des <span className="text-brand-primary font-semibold">producteurs</span> et du territoire.</p>
                    </div>
                    <div className="inline-flex items-center gap-2 text-brand-primary font-courier font-semibold group-hover:gap-3 transition-all">
                  Voir la carte
                      <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
              </ScrollReveal>

              {/* Marché */}
              <ScrollReveal animation="fade-up" delay={100}>
                <Link
                  href="/marche-bocaux"
                  className="group block bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-light/20 hover:border-brand-primary/30 hover:-translate-y-2 h-full"
                >
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <BasketIcon size={32} className="text-brand-primary" />
                  </div>
                  <h3 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                    La ferme
                  </h3>
                  <p className="text-base font-courier text-neutral-dark leading-relaxed mb-6">
                    Fruits, légumes, fromages, viandes... Tout ce qui pousse dans notre <span className="text-brand-primary font-semibold">ferme partenaire</span> arrive <span className="text-brand-primary font-semibold">frais</span> chez vous.
                  </p>
                  <div className="inline-flex items-center gap-2 text-brand-primary font-courier font-semibold group-hover:gap-3 transition-all">
                    Découvrir
                    <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollReveal>

              {/* Epicerie paysanne - Large */}
              <ScrollReveal animation="fade-up" delay={200} className="lg:col-span-2">
                <Link
                  href="/marche-bocaux"
                  className="group block bg-white rounded-3xl p-10 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-light/20 hover:border-brand-primary/30 hover:-translate-y-2"
                >
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all">
                      <JarIcon size={32} className="text-brand-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-stencil font-bold text-brand-primary mb-4">
                        Epicerie paysanne
                      </h3>
                      <p className="text-base lg:text-lg font-courier text-neutral-dark leading-relaxed mb-6">
                        Les Récoltants, c'est aussi une petite épicerie où vous retrouverez les produits de nos <span className="text-brand-primary font-semibold">fermes partenaires</span> et d'<span className="text-brand-primary font-semibold">artisans engagés</span> de la région.<br /><br />
                        Le <span className="text-brand-primary font-semibold">terroir bio et local</span> à emporter chez vous.
                      </p>
                      <div className="inline-flex items-center gap-2 text-brand-primary font-courier font-semibold group-hover:gap-3 transition-all">
                        En savoir plus
                        <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>

              {/* Traiteur */}
              <ScrollReveal animation="fade-up" delay={300}>
                <Link
                  href="/traiteur-privatisation"
                  className="group block bg-gradient-to-br from-neutral-dark to-neutral-medium text-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <ChefHatIcon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                    Traiteur & Privatisation
                  </h3>
                  <p className="text-base font-courier text-white/90 leading-relaxed mb-6">
                    Privatisez notre espace pour vos événements ou optez pour notre service traiteur.
                  </p>
                  <div className="inline-flex items-center gap-2 text-white font-courier font-semibold group-hover:gap-3 transition-all">
                    Demander un devis
                    <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ==================== TÉMOIGNAGES ==================== */}
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
          {/* Texture de fond - Ceruse normal (section secondaire) */}
          <div className="absolute inset-0 texture-ceruse-light opacity-15" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            {/* En-tête */}
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
              <ScrollReveal animation="fade-up">
                <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                  <StarIcon size={16} />
                  Ils nous font confiance
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6 leading-tight">
                  Ce que nos{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                    clients
                  </span>{" "}
                  pensent de nous
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={200}>
                <div className="flex items-center justify-center gap-2 text-2xl">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} size={28} className="text-brand-primary" />
                ))}
                <a
                  href="https://www.google.com/search?sca_esv=8c1d8b7610d1bcd4&rlz=1C5CHFA_enNL1119NL1119&q=Les%20R%C3%A9coltants%20Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NDQ2tDAyM7c0MzE0NDM0AuINjIyvGEV8UosVgg6vTM7PKUnMKylWcCzLLF7EilUYALS2PZ9IAAAA&rldimm=1131826796411612161&tbm=lcl&hl=fr-PT&sa=X&ved=0CAcQ5foLahcKEwj4z-iHh7aRAxUAAAAAHQAAAAAQBQ#lkt=LocalPoiReviews&arid=Ci9DQUlRQUNvZENodHljRjlvT21wZmJuZElkVUp1TURReGVDMXZSa2d6TVhWd0xWRRAB&lrd=0xd55272ca34adbfb:0xfb50e798361ec01,3,,,," 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 text-lg font-stencil font-bold text-neutral-dark hover:text-brand-primary transition-colors underline"
                >
                  4,8/5
                </a>
                <a
                  href="https://www.google.com/search?sca_esv=8c1d8b7610d1bcd4&rlz=1C5CHFA_enNL1119NL1119&q=Les%20R%C3%A9coltants%20Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NDQ2tDAyM7c0MzE0NDM0AuINjIyvGEV8UosVgg6vTM7PKUnMKylWcCzLLF7EilUYALS2PZ9IAAAA&rldimm=1131826796411612161&tbm=lcl&hl=fr-PT&sa=X&ved=0CAcQ5foLahcKEwj4z-iHh7aRAxUAAAAAHQAAAAAQBQ#lkt=LocalPoiReviews&arid=Ci9DQUlRQUNvZENodHljRjlvT21wZmJuZElkVUp1TURReGVDMXZSa2d6TVhWd0xWRRAB&lrd=0xd55272ca34adbfb:0xfb50e798361ec01,3,,,," 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-courier text-neutral-dark hover:text-brand-primary transition-colors underline"
                >
                  (1 423 avis)
                </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Grid témoignages */}
            <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Témoignage 1 - Laurence M */}
              <div className="reveal-item bg-ceruse-light rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} size={18} className="text-brand-primary" />
                  ))}
                </div>
                <p className="font-courier text-neutral-dark leading-relaxed mb-6 italic">
                  "J'ai adoré cette table rue Sainte Colombe ! On a l'impression vu de l'extérieur que la salle est relativement petite, eh bien sachez que le restaurant est tout en longueur avec une autre salle très spacieuse au fond. J'ai choisi un dahl de graines de sarrasin + œuf parfait, accompagné d'un <span className="text-brand-primary font-semibold not-italic">jus maison</span> gingembre, pomme et carotte. Je me suis régalée ! La décoration est cosy et chaleureuse ! Je reviendrai volontiers."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-brand-primary font-stencil font-bold">LM</span>
                  </div>
                  <div>
                    <p className="font-stencil font-bold text-neutral-dark">Laurence M.</p>
                    <p className="text-sm font-courier text-neutral-dark">Avis Google</p>
                  </div>
                </div>
              </div>

              {/* Témoignage 2 - Helma Ravenel */}
              <div className="reveal-item bg-ceruse-light rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} size={18} className="text-brand-primary" />
                  ))}
                </div>
                <p className="font-courier text-neutral-dark leading-relaxed mb-6 italic">
                  "Nous avons adoré notre expérience chez Les Récoltants. La cuisine est vraiment excellente, avec des produits <span className="text-brand-primary font-semibold not-italic">ultra-frais</span> qui viennent directement de leur <span className="text-brand-primary font-semibold not-italic">ferme</span> ou de <span className="text-brand-primary font-semibold not-italic">producteurs locaux</span>. Le personnel est chaleureux, attentif, et rend l'ambiance très agréable. Et surtout, le concept est génial : tout est pensé en <span className="text-brand-primary font-semibold not-italic">circuit court</span>, de la terre à l'assiette, avec une vraie démarche <span className="text-brand-primary font-semibold not-italic">éthique et responsable</span>. Une adresse aussi savoureuse que cohérente, à découvrir absolument à Bordeaux !"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-brand-primary font-stencil font-bold">HR</span>
                  </div>
                  <div>
                    <p className="font-stencil font-bold text-neutral-dark">Helma Ravenel</p>
                    <p className="text-sm font-courier text-neutral-dark">Avis Google</p>
                  </div>
                </div>
              </div>

              {/* Témoignage 3 - Catherine */}
              <div className="reveal-item bg-ceruse-light rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} size={18} className="text-brand-primary" />
                  ))}
                </div>
                <p className="font-courier text-neutral-dark leading-relaxed mb-6 italic">
                  "Quel plaisir de pouvoir attribuer une note excellente à un restaurant qui le mérite vraiment ! Nous avons adoré cette <span className="text-brand-primary font-semibold not-italic">expérience en famille</span> : de l'<span className="text-brand-primary font-semibold not-italic">accueil chaleureux</span> à la qualité des plats, sans oublier le cadre particulièrement agréable. La <span className="text-brand-primary font-semibold not-italic">cuisine ouverte</span> apporte également une touche originale et conviviale à l'ensemble. Merci à tous de André, Catherine, Baptiste, Clémence et Bonne-Mamie Colette, 97 ans s'il vous plaît. À bientôt !"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-brand-primary font-stencil font-bold">C</span>
                  </div>
                  <div>
                    <p className="font-stencil font-bold text-neutral-dark">Catherine</p>
                    <p className="text-sm font-courier text-neutral-dark">Avis Google</p>
                  </div>
                </div>
              </div>
            </RevealGroup>
          </div>
        </section>

        {/* ==================== BON CADEAU ==================== */}
        <section id="bon-cadeau-section" className="py-20 lg:py-28 texture-terracotta-cmyk-image relative overflow-hidden">
          {/* Décoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal animation="fade-up">
                <div className="inline-flex items-center gap-2 text-white/80 text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                  <HeartIcon size={16} />
                  Offrir une expérience
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-white mb-6 leading-tight">
                  Bon cadeau
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={200}>
                <p className="text-xl lg:text-2xl font-courier text-white/90 leading-relaxed mb-10">
                  Faites découvrir les Récoltants à ceux que vous aimez
                </p>
              </ScrollReveal>
              <ScrollReveal animation="scale" delay={300}>
                <a
                  href="https://www.kadoresto.fr/restaurant/d07f/offrir-bon-cadeau-restaurant-les-recoltants/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-brand-primary px-10 py-5 font-courier font-bold hover:bg-ceruse-light transition-all shadow-2xl hover:scale-105"
                >
                  <HeartIcon size={20} />
                  Offrir un bon cadeau
                  <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
