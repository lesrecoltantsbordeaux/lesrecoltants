import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import HeroCarousel from "@/components/ui/HeroCarousel";
import { Metadata } from "next";
import Link from "next/link";
import {
  BasketIcon,
  JarIcon,
  LeafIcon,
  RecycleIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  HandshakeIcon,
  HeartIcon,
  PhoneIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "La Ferme - Produits Bio de Saison",
  description:
    "Découvrez La Ferme des Récoltants : produits bio de saison, étal de produits frais, bocaux cuisinés maison. Défense du terroir et respect du vivant.",
  keywords: [
    "ferme bio bordeaux",
    "produits bio saison",
    "étal produits frais",
    "bocaux cuisinés maison",
    "terroir local",
  ],
};

export default function LaFerme() {
  return (
    <>
      <Header />
      <FloatingCTA />

      <main className="flex-1">
        {/* ==================== HERO CAROUSEL ==================== */}
        <HeroCarousel
          images={[
            "/images/ferme/carrousel/carrousel-1.jpg",
            "/images/ferme/carrousel/carrousel-2.jpg",
            "/images/ferme/carrousel/carrousel-3.jpg",
            "/images/ferme/carrousel/carrousel-4.jpg",
          ]}
          title="Le marché fermier"
          highlightWord="fermier"
          description="Un étal de produits frais, bio et de saison. Primeur, fromagerie, crèmerie, boucherie, cave... Tout vient de notre ferme partenaire, à moins de 50km."
          badge={{
            text: "100% Bio & Local",
          }}
          cta={{
            primary: {
              text: "Découvrir nos produits",
              href: "#produits",
              icon: <BasketIcon size={20} />,
            },
          }}
        />

        {/* ==================== STATS ==================== */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-5xl mx-auto">
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

        {/* ==================== ÉTAL DE PRODUITS FRAIS ==================== */}
        <section id="produits" className="py-24 lg:py-32 texture-ceruse-light relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 lg:mb-20">
                <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                  <BasketIcon size={16} />
                  Nos produits
                </div>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-neutral-dark mb-6 leading-tight">
                  Un étal de produits frais
                  <br />
                  <span className="text-brand-primary">et qui ont du goût !</span>
                </h2>
                <p className="text-lg lg:text-xl font-courier text-neutral-dark max-w-3xl mx-auto leading-relaxed">
                  Parce qu'on leur a laissé le temps de pousser, de mûrir, de grandir.
                  Parce qu'ils sont ultra-frais, cueillis du jour-même.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Temps respecté",
                    description: "On leur a laissé le temps de pousser, mûrir et grandir naturellement",
                    icon: LeafIcon,
                  },
                  {
                    title: "Récoltés à maturité",
                    description: "Cueillis au bon moment pour un goût optimal et des nutriments préservés",
                    icon: CheckCircleIcon,
                  },
                  {
                    title: "Ultra-frais",
                    description: "Cueillis du jour-même, de la terre à l'étal en quelques heures",
                    icon: SparklesIcon,
                  },
                  {
                    title: "Variétés anciennes",
                    description: "Sélection de variétés anciennes et gustatives pour plus de saveur",
                    icon: HeartIcon,
                  },
                  {
                    title: "Circuit ultra-court",
                    description: "Livrés en direct par notre ferme partenaire, sans intermédiaire",
                    icon: HandshakeIcon,
                  },
                  {
                    title: "Traçabilité totale",
                    description: "On connaît l'origine de chaque produit et l'histoire de la ferme",
                    icon: BasketIcon,
                  },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20"
                    >
                      <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                        <IconComponent size={32} className="text-brand-primary" />
                      </div>
                      <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark mb-3 group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-courier text-neutral-dark leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== TRANSFORMATION ==================== */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-ceruse-light to-white relative overflow-hidden">
          <div className="absolute inset-0 texture-ceruse-cmyk opacity-25" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16 lg:mb-20">
                <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                  <JarIcon size={16} />
                  Transformation
                </div>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-neutral-dark mb-8 leading-tight">
                  Tout se <span className="text-brand-primary">transforme</span>,
                  <br />
                  rien ne se perd !
                </h2>
              </div>

              {/* Layout Split */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Texte */}
                <div>
                  <p className="text-xl lg:text-2xl font-courier text-neutral-dark leading-relaxed mb-8 font-semibold">
                    De l'étal au bocal, une cuisine zéro déchet
                  </p>
                  <p className="text-lg font-courier text-neutral-dark leading-relaxed mb-8">
                    Les produits de notre étal sont transformés dans notre labo de cuisine en soupes,
                    coulis, gâteaux, tartinades, purées… Retrouvez notre gamme de bocaux cuisinés :
                    tout est 100% maison, préparé ici, sur place avec les produits frais de l'étal.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-xs font-courier bg-white border-2 border-brand-primary/30 px-4 py-2.5 text-neutral-dark font-semibold rounded-full shadow-sm">
                      100% fait maison
                    </span>
                    <span className="text-xs font-courier bg-white border-2 border-brand-primary/30 px-4 py-2.5 text-neutral-dark font-semibold rounded-full shadow-sm">
                      Zéro déchet
                    </span>
                    <span className="text-xs font-courier bg-white border-2 border-brand-primary/30 px-4 py-2.5 text-neutral-dark font-semibold rounded-full shadow-sm">
                      Bocaux consignés
                    </span>
                  </div>
                </div>

                {/* Layout organique des produits */}
                <div className="relative">
                  {/* Forme blob organique en arrière-plan */}
                  <div className="absolute inset-0 bg-white/50 rounded-[3rem] blur-2xl transform rotate-6" />

                  <div className="relative flex flex-wrap justify-center gap-4 lg:gap-6">
                    {[
                      { name: "Soupes", emoji: "🍲", rotate: -4, size: "lg" },
                      { name: "Coulis", emoji: "🍅", rotate: 3, size: "md" },
                      { name: "Gâteaux", emoji: "🍰", rotate: -2, size: "lg" },
                      { name: "Tartinades", emoji: "🥖", rotate: 5, size: "md" },
                      { name: "Purées", emoji: "🥔", rotate: -3, size: "md" },
                      { name: "Plats cuisinés", emoji: "🍽️", rotate: 2, size: "lg" },
                    ].map((produit, index) => (
                      <div
                        key={index}
                        className={`bg-white rounded-full shadow-lg hover:shadow-2xl transition-all border-2 border-neutral-light/40 text-center group hover:-translate-y-2 duration-500 ${
                          produit.size === "lg"
                            ? "w-32 h-32 lg:w-40 lg:h-40"
                            : "w-28 h-28 lg:w-36 lg:h-36"
                        }`}
                        style={{
                          transform: `rotate(${produit.rotate}deg) translateY(${
                            index % 2 === 0 ? 0 : 20
                          }px)`,
                        }}
                      >
                        <div className="flex flex-col items-center justify-center h-full p-4">
                          <div
                            className={`mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ${
                              produit.size === "lg" ? "text-5xl" : "text-4xl"
                            }`}
                          >
                            {produit.emoji}
                          </div>
                          <p className="font-courier font-semibold text-neutral-dark text-xs lg:text-sm leading-tight">
                            {produit.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CHARTE DES RÉCOLTANTS ==================== */}
        <section className="py-24 lg:py-32 texture-terracotta-cmyk-image relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
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

        {/* ==================== CTA FINAL ==================== */}
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-primary/10 px-6 py-3 rounded-full font-courier text-sm font-semibold uppercase tracking-wider mb-8">
                <BasketIcon size={16} className="text-brand-primary" />
                Venez nous voir
              </div>

              {/* Titre principal */}
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold mb-8 leading-tight text-neutral-dark">
                Découvrez notre étal
                <br />
                <span className="font-stencil font-light italic text-brand-primary">de produits frais</span>
              </h2>

              {/* Description */}
              <p className="text-lg lg:text-xl font-courier text-neutral-dark leading-relaxed mb-12 max-w-2xl mx-auto">
                Passez à la ferme pour découvrir nos produits frais du jour.
                Tout est bio, tout est local, tout a du goût.
              </p>

              {/* Horaires */}
              <div className="bg-ceruse-light rounded-2xl p-8 lg:p-10 mb-10 max-w-2xl mx-auto">
                <h3 className="text-2xl font-stencil font-bold text-neutral-dark mb-6">Horaires d'ouverture</h3>
                <div className="space-y-4 font-courier text-neutral-dark">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Lundi, Mardi & Mercredi</span>
                    <span>12h - 19h</span>
                  </div>
                  <div className="h-px bg-neutral-light/30" />
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Jeudi - Samedi</span>
                    <span>12h - 22h30</span>
                  </div>
                  <div className="h-px bg-neutral-light/30" />
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Dimanche</span>
                    <span className="text-neutral-medium">Fermé</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 bg-neutral-dark text-white px-10 py-5 font-courier font-bold hover:bg-neutral-dark/90 transition-all shadow-2xl"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Nous contacter
                    <ArrowRightIcon
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>
                <a
                  href="tel:0556381647"
                  className="group inline-flex items-center justify-center gap-3 border-2 border-neutral-dark text-neutral-dark px-10 py-5 font-courier font-bold hover:bg-neutral-dark hover:text-white transition-all"
                >
                  <PhoneIcon size={20} />
                  05 56 38 16 47
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
