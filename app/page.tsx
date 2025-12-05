import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
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
              quality={75}
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
                    De la terre
                  </h1>
                  <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-stencil font-bold text-white leading-[0.95] tracking-tighter mt-2">
                    à votre
                  </h1>
                  <div className="relative inline-block mt-4">
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-stencil font-light italic bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent leading-[0.95] tracking-tighter">
                      assiette
                </h1>
                    <div className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-brand-primary/30 rounded-full"></div>
                  </div>
                </div>

                {/* Description */}
                <div className="max-w-xl animate-fade-in-up stagger-2">
                  <p className="text-lg lg:text-xl font-courier text-white/90 leading-relaxed border-l-2 border-brand-primary/30 pl-6 lg:pl-8">
                    Un restaurant bistronomique et un marché fermier à Bordeaux où chaque produit raconte l'histoire de notre ferme partenaire, à moins de 50km d'ici.
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
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {[
                { value: "100%", label: "Bio & Local", sublabel: "Certifié AB" },
                { value: "<50km", label: "Circuit court", sublabel: "Ferme partenaire" },
                { value: "0", label: "Pesticide", sublabel: "Sol vivant" },
                { value: "100%", label: "De saison", sublabel: "Fraîcheur garantie" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
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
            </div>
          </div>
        </section>

        {/* ==================== NOS VALEURS ==================== */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-ceruse-light to-white relative overflow-hidden">
          {/* Texture de fond - Ceruse CMJN (section importante) */}
          <div className="absolute inset-0 texture-ceruse-cmyk opacity-40" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            {/* En-tête de section */}
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                <HeartIcon size={16} />
                Nos engagements
              </div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-neutral-dark mb-6 leading-tight">
                Une cuisine qui a du{" "}
                <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                  sens
                </span>
              </h2>
              <p className="text-lg lg:text-xl font-courier text-neutral-dark leading-relaxed">
                Chaque décision que nous prenons, de la fourche à la fourchette,
                est guidée par un engagement profond envers la terre, les artisans et votre santé.
              </p>
            </div>

            {/* Grid des valeurs */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Valeur 1 */}
              <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <LeafIcon size={28} className="text-brand-primary" />
                </div>
                <h3 className="text-xl font-stencil font-bold text-brand-primary mb-3">
                  100% Bio
                </h3>
                <p className="font-courier text-neutral-dark leading-relaxed">
                  Chaque produit est cultivé dans le respect du sol vivant et sans pesticides. Une agriculture qui nourrit sans épuiser.
                </p>
                  </div>

              {/* Valeur 2 */}
              <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <HandshakeIcon size={28} className="text-brand-primary" />
                  </div>
                <h3 className="text-xl font-stencil font-bold text-brand-primary mb-3">
                  Circuit Court
                  </h3>
                <p className="font-courier text-neutral-dark leading-relaxed">
                  Du champ à votre assiette en moins de 50km. Des produits cueillis le matin, servis le midi. C'est ça, le vrai goût.
                  </p>
                  </div>

              {/* Valeur 3 */}
              <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <RecycleIcon size={28} className="text-brand-primary" />
                </div>
                <h3 className="text-xl font-stencil font-bold text-brand-primary mb-3">
                  Zéro Déchet
                </h3>
                <p className="font-courier text-neutral-dark leading-relaxed">
                  Bocaux consignés, compostage, transformation des invendus... Chaque légume a sa place, rien ne finit à la poubelle.
                </p>
              </div>

              {/* Valeur 4 */}
              <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <UsersIcon size={28} className="text-brand-primary" />
                </div>
                <h3 className="text-xl font-stencil font-bold text-brand-primary mb-3">
                  Équité
                </h3>
                <p className="font-courier text-neutral-dark leading-relaxed">
                  Un prix juste pour le producteur, un tarif honnête pour vous, et des conditions dignes pour toute l'équipe. L'équité à tous les niveaux.
                </p>
              </div>
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
              <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                <BasketIcon size={16} />
                Notre ferme
              </div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-neutral-dark mb-6 leading-tight">
                Le marché{" "}
                <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                  fermier
                </span>{" "}
                directement dans vos paniers !
              </h2>
              <p className="text-lg lg:text-xl font-courier text-neutral-dark leading-relaxed mb-8">
                Primeur • Fromagerie • Crèmerie • Boucherie/Charcuterie • Cave et Épicerie sèche
              </p>
              <div className="inline-block bg-brand-primary/10 text-brand-primary px-6 py-3 rounded-full font-courier font-bold">
                Ici, vous ne trouverez que des produits bio de saison !
              </div>
            </div>

            {/* Message principal */}
            <div className="max-w-4xl mx-auto mb-20 text-center">
              <p className="text-xl lg:text-2xl font-courier text-neutral-dark leading-relaxed">
                Le message est simple : <span className="font-bold text-brand-primary">défendre coûte que coûte le terroir</span>, respecter le vivant
                et se fournir exclusivement auprès de producteurs et artisans locaux.
              </p>
              <p className="text-lg lg:text-xl font-courier text-neutral-medium mt-4">
                Parce qu'il est possible de proposer une cuisine gourmande ET ultra locale.
              </p>
            </div>

            {/* Grid en 2 colonnes */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">

              {/* Colonne 1 : Un étal de produits frais */}
              <div className="bg-ceruse-light rounded-3xl p-8 lg:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <LeafIcon size={24} className="text-brand-primary" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-stencil font-bold text-brand-primary leading-tight">
                    Un étal de produits frais et qui ont du goût !
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-1" />
                    <p className="font-courier text-neutral-dark">
                      Parce qu'on leur a laissé le temps de pousser, de mûrir, de grandir
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-1" />
                    <p className="font-courier text-neutral-dark">
                      Parce qu'on les a récoltés à maturité
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-1" />
                    <p className="font-courier text-neutral-dark">
                      Parce qu'ils sont ultra-frais, cueillis du jour-même
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-1" />
                    <p className="font-courier text-neutral-dark">
                      Parce qu'on a sélectionné des variétés anciennes et gustatives
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-1" />
                    <p className="font-courier text-neutral-dark">
                      Parce qu'ils viennent d'à côté et sont livrés en direct, sans intermédiaire
                    </p>
                  </div>
                </div>
              </div>

              {/* Colonne 2 : Tout se transforme */}
              <div className="bg-ceruse-light rounded-3xl p-8 lg:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <RecycleIcon size={24} className="text-brand-primary" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-stencil font-bold text-brand-primary leading-tight">
                    Tout se transforme, rien ne se perd !
                  </h3>
                </div>

                <p className="font-courier text-neutral-dark text-lg leading-relaxed mb-6">
                  Les produits de notre étal sont transformés dans notre labo de cuisine en soupes,
                  coulis, gâteaux, tartinades, purées…
                </p>

                <div className="bg-white rounded-2xl p-6 border-l-4 border-brand-primary">
                  <p className="font-courier text-neutral-dark font-semibold">
                    Retrouvez notre gamme de bocaux cuisinés : tout est 100% maison, préparé ici,
                    sur place avec les produits frais de l'étal.
                  </p>
                </div>
              </div>
            </div>

            {/* La charte des récoltants */}
            <div className="texture-terracotta-cmyk rounded-3xl p-10 lg:p-12 max-w-4xl mx-auto">
              {/* Titre principal */}
              <h3 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold mb-12 lg:mb-16 text-brand-primary uppercase tracking-tight text-center">
                LA CHARTE DES RÉCOLTANTS
              </h3>

              {/* Liste des principes */}
              <ul className="space-y-4 lg:space-y-5">
                <li className="flex items-center justify-center gap-3">
                  <span className="text-brand-primary font-courier text-lg lg:text-xl">—</span>
                  <p className="font-courier text-brand-primary text-lg lg:text-xl leading-relaxed text-center">
                    Un produit qui a du <strong className="uppercase">GOÛT</strong>
                  </p>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <span className="text-brand-primary font-courier text-lg lg:text-xl">—</span>
                  <p className="font-courier text-brand-primary text-lg lg:text-xl leading-relaxed text-center">
                    Notre potager bio directement dans votre assiette
                  </p>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <span className="text-brand-primary font-courier text-lg lg:text-xl">—</span>
                  <p className="font-courier text-brand-primary text-lg lg:text-xl leading-relaxed text-center">
                    De l'agriculture bio, paysanne et durable sur sol <strong className="uppercase">VIVANT</strong> !
                  </p>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <span className="text-brand-primary font-courier text-lg lg:text-xl">—</span>
                  <p className="font-courier text-brand-primary text-lg lg:text-xl leading-relaxed text-center">
                    La <strong className="uppercase">SAISONALITÉ</strong> 100% respectée
                  </p>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <span className="text-brand-primary font-courier text-lg lg:text-xl">—</span>
                  <p className="font-courier text-brand-primary text-lg lg:text-xl leading-relaxed text-center">
                    Plein phare sur le terroir et les ressources locales
                  </p>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <span className="text-brand-primary font-courier text-lg lg:text-xl">—</span>
                  <p className="font-courier text-brand-primary text-lg lg:text-xl leading-relaxed text-center">
                    Modes d'élevages durables et <strong className="uppercase">RESPECTUEUX</strong> du vivant
                  </p>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <span className="text-brand-primary font-courier text-lg lg:text-xl">—</span>
                  <p className="font-courier text-brand-primary text-lg lg:text-xl leading-relaxed text-center">
                    Sauvegarde du savoir-faire artisanal
                  </p>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <span className="text-brand-primary font-courier text-lg lg:text-xl">—</span>
                  <p className="font-courier text-brand-primary text-lg lg:text-xl leading-relaxed text-center">
                    <strong className="uppercase">TRANSPARENCE</strong> à tous les étages
                  </p>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <span className="text-brand-primary font-courier text-lg lg:text-xl">—</span>
                  <p className="font-courier text-brand-primary text-lg lg:text-xl leading-relaxed text-center">
                    Un prix juste pour le consommateur et le producteur
                  </p>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* ==================== NOS SERVICES ==================== */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-ceruse-light to-white relative overflow-hidden">
          {/* Texture de fond - Ceruse CMJN (section importante) */}
          <div className="absolute inset-0 texture-ceruse-cmyk opacity-30" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            {/* Intro Section */}
            <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                <SparklesIcon size={16} />
                Notre univers
              </div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-neutral-dark mb-6 leading-tight">
                Un écosystème complet
                <br />
                <span className="text-neutral-medium font-stencil font-light">
                  autour du{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent font-bold">
                    local
                  </span>
                </span>
              </h2>
              <p className="text-lg lg:text-xl font-courier text-neutral-dark leading-relaxed">
                Du restaurant au marché fermier, découvrez toutes les facettes de
                notre engagement pour une alimentation responsable.
              </p>
            </div>

            {/* Grid Services */}
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Restaurant - Large */}
                <Link
                  href="/restaurant"
                className="group lg:col-span-2 bg-white rounded-3xl p-10 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-light/20 hover:border-brand-primary/30 hover:-translate-y-2"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <RestaurantIcon size={32} className="text-brand-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-stencil font-bold text-brand-primary mb-4">
                      Restaurant bistronomique
                    </h3>
                    <p className="text-base lg:text-lg font-courier text-neutral-dark leading-relaxed mb-6">
                      Une cuisine bistronomique où chaque assiette raconte l'histoire de notre ferme.
                      La carte change au rythme des saisons, jamais au rythme des tendances.
                    </p>
                    <div className="inline-flex items-center gap-2 text-brand-primary font-courier font-semibold group-hover:gap-3 transition-all">
                  Voir la carte
                      <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Marché */}
              <Link
                href="/marche-bocaux"
                className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-light/20 hover:border-brand-primary/30 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <BasketIcon size={32} className="text-brand-primary" />
                </div>
                <h3 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Marché fermier
                </h3>
                <p className="text-base font-courier text-neutral-dark leading-relaxed mb-6">
                  Fruits, légumes, fromages, viandes... Tout ce qui pousse dans notre ferme partenaire arrive frais chez vous.
                </p>
                <div className="inline-flex items-center gap-2 text-brand-primary font-courier font-semibold group-hover:gap-3 transition-all">
                  Découvrir
                  <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Bocaux */}
              <Link
                href="/marche-bocaux"
                className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-light/20 hover:border-brand-primary/30 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <JarIcon size={32} className="text-brand-primary" />
                </div>
                <h3 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Bocaux cuisinés
                </h3>
                <p className="text-base font-courier text-neutral-dark leading-relaxed mb-6">
                  Soupes, plats mijotés, desserts... Nos recettes faites maison, prêtes à réchauffer. Le bocal se rapporte, le plaisir reste.
                </p>
                <div className="inline-flex items-center gap-2 text-brand-primary font-courier font-semibold group-hover:gap-3 transition-all">
                  En savoir plus
                  <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Traiteur - Large */}
              <Link
                href="/traiteur-privatisation"
                className="group lg:col-span-2 bg-gradient-to-br from-neutral-dark to-neutral-medium text-white rounded-3xl p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <ChefHatIcon size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-stencil font-bold text-brand-primary mb-4">
                      Traiteur & Privatisation
                    </h3>
                    <p className="text-base lg:text-lg font-courier text-white/90 leading-relaxed mb-6">
                      Privatisez notre espace pour vos événements ou optez pour notre service traiteur.
                      On amène la ferme à votre fête, avec la même exigence qu'au restaurant.
                    </p>
                    <div className="inline-flex items-center gap-2 text-white font-courier font-semibold group-hover:gap-3 transition-all">
                      Demander un devis
                      <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                </Link>
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
              <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                <StarIcon size={16} />
                Ils nous font confiance
              </div>
              <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6 leading-tight">
                Ce que nos{" "}
                <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                  clients
                </span>{" "}
                pensent de nous
              </h2>
              <div className="flex items-center justify-center gap-2 text-2xl">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} size={28} className="text-brand-primary" />
                ))}
                <span className="ml-3 text-lg font-stencil font-bold text-neutral-dark">4.9/5</span>
                <span className="text-sm font-courier text-neutral-dark">(127 avis)</span>
              </div>
            </div>

            {/* Grid témoignages */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Témoignage 1 */}
              <div className="bg-ceruse-light rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} size={18} className="text-brand-primary" />
                  ))}
                </div>
                <p className="font-courier text-neutral-dark leading-relaxed mb-6 italic">
                  "On sent que les légumes ont poussé tranquillement. Ce goût authentique qu'on a perdu ailleurs...
                  Ici, on le retrouve dans chaque bouchée. Un vrai coup de cœur !"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-brand-primary font-stencil font-bold">MC</span>
                  </div>
                  <div>
                    <p className="font-stencil font-bold text-neutral-dark">Marie C.</p>
                    <p className="text-sm font-courier text-neutral-dark">Il y a 2 semaines</p>
                  </div>
                </div>
              </div>

              {/* Témoignage 2 */}
              <div className="bg-ceruse-light rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} size={18} className="text-brand-primary" />
                  ))}
                </div>
                <p className="font-courier text-neutral-dark leading-relaxed mb-6 italic">
                  "Mes enfants ont enfin goûté des vraies tomates ! Ils ne voulaient plus partir.
                  Merci de nous prouver qu'on peut bien manger local sans se ruiner."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-brand-primary font-stencil font-bold">JD</span>
                  </div>
                  <div>
                    <p className="font-stencil font-bold text-neutral-dark">Jean D.</p>
                    <p className="text-sm font-courier text-neutral-dark">Il y a 1 mois</p>
                  </div>
                </div>
              </div>

              {/* Témoignage 3 */}
              <div className="bg-ceruse-light rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} size={18} className="text-brand-primary" />
                  ))}
                </div>
                <p className="font-courier text-neutral-dark leading-relaxed mb-6 italic">
                  "J'ai adoré parler avec le chef qui connaît personnellement le producteur.
                  Cette transparence totale, c'est exactement ce que je cherchais. On reviendra !"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-brand-primary font-stencil font-bold">SL</span>
                  </div>
                  <div>
                    <p className="font-stencil font-bold text-neutral-dark">Sophie L.</p>
                    <p className="text-sm font-courier text-neutral-dark">Il y a 3 semaines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
