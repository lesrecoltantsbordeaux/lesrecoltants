import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import HeroCarousel from "@/components/ui/HeroCarousel";
import ScrollReveal, { RevealGroup } from "@/components/ui/ScrollReveal";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BasketIcon,
  LeafIcon,
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
          title="La ferme"
          highlightWord="ferme"
          description={<>Un étal de <span className="text-brand-primary font-semibold">produits frais</span>, <span className="text-brand-primary font-semibold">bio</span> et de <span className="text-brand-primary font-semibold">saison</span>. Primeur, fromagerie, crèmerie, boucherie, cave... Tout vient de notre <span className="text-brand-primary font-semibold">ferme partenaire</span>, à moins de 50km.</>}
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
          stats={[
            { value: "100%", label: "Bio & Local", sublabel: "Certifié AB" },
            { value: "<50km", label: "Circuit court", sublabel: "Ferme partenaire" },
            { value: "0", label: "Pesticide", sublabel: "Sol vivant" },
            { value: "100%", label: "De saison", sublabel: "Fraîcheur garantie" },
          ]}
        />

        {/* ==================== NOTRE FERME - STORYTELLING ==================== */}
        <section className="relative overflow-hidden">
          {/* Bloc Hero - Introduction dramatique */}
          <div className="bg-neutral-dark py-20 lg:py-32 relative">
            <div className="absolute inset-0 opacity-20">
              <Image
                src="/images/ferme/carrousel/carrousel-2.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <ScrollReveal animation="fade-up">
                  <p className="text-brand-primary font-courier text-sm uppercase tracking-[0.3em] mb-6">
                    Tabanac — Entre-deux-Mers — 20 km de Bordeaux
                  </p>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={100}>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-stencil font-bold text-white leading-[1.1] mb-8">
                    Notre ferme est située sur un terroir argileux riche qui donne toute sa force à nos légumes.
                  </h2>
                </ScrollReveal>
                <ScrollReveal animation="fade-left" delay={200}>
                  <div className="w-24 h-1 bg-brand-primary"></div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Contenu éditorial - Style magazine */}
          <div className="bg-white py-20 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-6xl mx-auto">

                {/* Section 1 - À la ferme (texte large + accent) */}
                <ScrollReveal animation="fade-up">
                  <div className="mb-12 lg:mb-16">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                      <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-32">
                          <span className="text-8xl lg:text-9xl font-stencil font-bold text-brand-primary/10 leading-none block">01</span>
                          <h3 className="text-3xl lg:text-4xl font-stencil font-bold text-neutral-dark -mt-8 lg:-mt-12 relative z-10">
                            À la ferme
                          </h3>
                        </div>
                      </div>
                      <div className="lg:col-span-8">
                        <p className="text-xl lg:text-2xl font-courier text-neutral-dark leading-relaxed mb-6">
                          Nos pratiques s'inspirent de <strong className="text-brand-primary">l'agroécologie</strong> et du respect du vivant.
                        </p>
                        <p className="text-lg font-courier text-neutral-medium leading-relaxed">
                          François, maraîcher paysan, travaille avec la nature, pas contre elle : <span className="text-brand-primary font-semibold">sols vivants</span>, rotations de cultures, <span className="text-brand-primary font-semibold">semences paysannes</span>, préservation de la <span className="text-brand-primary font-semibold">biodiversité</span>… Chaque geste vise à nourrir la terre autant que nos assiettes, pour une <span className="text-brand-primary font-semibold">agriculture durable</span> et profondément respectueuse du vivant.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Séparateur visuel */}
                <div className="flex items-center gap-4 mb-12 lg:mb-16">
                  <div className="flex-1 h-px bg-neutral-light"></div>
                  <LeafIcon size={24} className="text-brand-primary" />
                  <div className="flex-1 h-px bg-neutral-light"></div>
                </div>

                {/* Section 2 - Le terroir (inversé) */}
                <ScrollReveal animation="fade-up">
                  <div className="mb-12 lg:mb-16">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                      <div className="lg:col-span-8 lg:order-2">
                        <p className="text-xl lg:text-2xl font-courier text-neutral-dark leading-relaxed mb-6">
                          Ici, la terre est <strong className="text-brand-primary">argilo-limoneuse</strong>. Elle retient naturellement l'eau et conserve les minéraux.
                        </p>
                        <p className="text-lg font-courier text-neutral-medium leading-relaxed">
                          Ce terroir, généreux par nature, résiste mieux aux sécheresses et soutient pleinement notre démarche : cultiver de façon <span className="text-brand-primary font-semibold">100 % naturelle</span>, en respectant les <span className="text-brand-primary font-semibold">sols</span> et en travaillant avec ce qu'ils ont de plus précieux.
                        </p>
                      </div>
                      <div className="lg:col-span-4 lg:order-1">
                        <div className="lg:sticky lg:top-32">
                          <span className="text-8xl lg:text-9xl font-stencil font-bold text-brand-primary/10 leading-none block">02</span>
                          <h3 className="text-3xl lg:text-4xl font-stencil font-bold text-neutral-dark -mt-8 lg:-mt-12 relative z-10">
                            Le terroir
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Séparateur visuel */}
                <div className="flex items-center gap-4 mb-12 lg:mb-16">
                  <div className="flex-1 h-px bg-neutral-light"></div>
                  <SparklesIcon size={24} className="text-brand-primary" />
                  <div className="flex-1 h-px bg-neutral-light"></div>
                </div>

                {/* Section 3 - Les légumes */}
                <ScrollReveal animation="fade-up">
                  <div className="mb-12 lg:mb-16">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                      <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-32">
                          <span className="text-8xl lg:text-9xl font-stencil font-bold text-brand-primary/10 leading-none block">03</span>
                          <h3 className="text-3xl lg:text-4xl font-stencil font-bold text-neutral-dark -mt-8 lg:-mt-12 relative z-10">
                            Les légumes
                          </h3>
                        </div>
                      </div>
                      <div className="lg:col-span-8">
                        <p className="text-xl lg:text-2xl font-courier text-neutral-dark leading-relaxed mb-6">
                          <strong className="text-brand-primary">Une soixantaine de variétés</strong> tout au long de l'année, en privilégiant des variétés anciennes.
                        </p>
                        <p className="text-lg font-courier text-neutral-medium leading-relaxed">
                          Nous cultivons des <span className="text-brand-primary font-semibold">semences paysannes</span>. Cette diversité naturelle nous permet de préserver des <span className="text-brand-primary font-semibold">goûts authentiques</span> et riches, loin des standards uniformisés.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Séparateur visuel */}
                <div className="flex items-center gap-4 mb-12 lg:mb-16">
                  <div className="flex-1 h-px bg-neutral-light"></div>
                  <HandshakeIcon size={24} className="text-brand-primary" />
                  <div className="flex-1 h-px bg-neutral-light"></div>
                </div>

                {/* Section 4 - Les partenaires (inversé) */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                      <div className="lg:col-span-8 lg:order-2">
                        <p className="text-xl lg:text-2xl font-courier text-neutral-dark leading-relaxed mb-6">
                          Nous travaillons <strong className="text-brand-primary">main dans la main</strong> avec des producteurs et artisans du goût.
                        </p>
                        <p className="text-lg font-courier text-neutral-medium leading-relaxed">
                          Passionnés et engagés pour une <span className="text-brand-primary font-semibold">agriculture paysanne bio</span>, ensemble nous partageons les mêmes valeurs de qualité, de <span className="text-brand-primary font-semibold">proximité</span> et de <span className="text-brand-primary font-semibold">respect du vivant</span>.
                        </p>
                      </div>
                      <div className="lg:col-span-4 lg:order-1">
                        <div className="lg:sticky lg:top-32">
                          <span className="text-8xl lg:text-9xl font-stencil font-bold text-brand-primary/10 leading-none block">04</span>
                          <h3 className="text-3xl lg:text-4xl font-stencil font-bold text-neutral-dark -mt-8 lg:-mt-12 relative z-10">
                            Nos partenaires
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

              </div>
            </div>
          </div>
        </section>

        {/* ==================== ÉTAL DE PRODUITS FRAIS ==================== */}
        <section id="produits" className="py-24 lg:py-32 texture-ceruse-light relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 lg:mb-20">
                <ScrollReveal animation="fade-up">
                  <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                    <BasketIcon size={16} />
                    Nos produits
                  </div>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={100}>
                  <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-neutral-dark mb-6 leading-tight">
                    Un étal de produits frais
                    <br />
                    <span className="text-brand-primary">et qui ont du goût !</span>
                  </h2>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={200}>
                  <p className="text-lg lg:text-xl font-courier text-neutral-dark max-w-3xl mx-auto leading-relaxed">
                    Parce qu'on leur a laissé le temps de pousser, de mûrir, de grandir. Parce qu'ils sont <span className="text-brand-primary font-semibold">ultra-frais</span>, cueillis du <span className="text-brand-primary font-semibold">jour-même</span>.
                  </p>
                </ScrollReveal>
              </div>

              <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Temps respecté */}
                <div className="reveal-item group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <LeafIcon size={32} className="text-brand-primary" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark mb-3 group-hover:text-brand-primary transition-colors">
                    Temps respecté
                  </h3>
                  <p className="font-courier text-neutral-dark leading-relaxed">
                    On leur a laissé le temps de pousser, mûrir et grandir <span className="text-brand-primary font-semibold">naturellement</span>
                  </p>
                </div>

                {/* Récolte à maturité */}
                <div className="reveal-item group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <CheckCircleIcon size={32} className="text-brand-primary" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark mb-3 group-hover:text-brand-primary transition-colors">
                    Récolte à maturité
                  </h3>
                  <p className="font-courier text-neutral-dark leading-relaxed">
                    Cueillis au bon moment pour un goût optimal et des <span className="text-brand-primary font-semibold">nutriments</span> préservés
                  </p>
                </div>

                {/* Ultra-frais */}
                <div className="reveal-item group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <SparklesIcon size={32} className="text-brand-primary" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark mb-3 group-hover:text-brand-primary transition-colors">
                    Ultra-frais
                  </h3>
                  <p className="font-courier text-neutral-dark leading-relaxed">
                    Récoltés du jour même, du champ à la cuisine en quelques <span className="text-brand-primary font-semibold">heures</span>
                  </p>
                </div>

                {/* Variétés anciennes */}
                <div className="reveal-item group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <HeartIcon size={32} className="text-brand-primary" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark mb-3 group-hover:text-brand-primary transition-colors">
                    Variétés anciennes
                  </h3>
                  <p className="font-courier text-neutral-dark leading-relaxed">
                    Sélection de <span className="text-brand-primary font-semibold">variétés anciennes</span> et gustatives pour plus de <span className="text-brand-primary font-semibold">saveur</span>
                  </p>
                </div>

                {/* Circuit ultra-court */}
                <div className="reveal-item group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <HandshakeIcon size={32} className="text-brand-primary" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark mb-3 group-hover:text-brand-primary transition-colors">
                    Circuit ultra-court
                  </h3>
                  <p className="font-courier text-neutral-dark leading-relaxed">
                    Livré en <span className="text-brand-primary font-semibold">direct</span>, sans <span className="text-brand-primary font-semibold">intermédiaire</span>
                  </p>
                </div>

                {/* Traçabilité totale */}
                <div className="reveal-item group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <BasketIcon size={32} className="text-brand-primary" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark mb-3 group-hover:text-brand-primary transition-colors">
                    Traçabilité totale
                  </h3>
                  <p className="font-courier text-neutral-dark leading-relaxed">
                    On sait comment sont cultivés les produits ou élevés les animaux. Nous visitons les <span className="text-brand-primary font-semibold">fermes</span> et connaissons personnellement tous nos <span className="text-brand-primary font-semibold">producteurs</span>
                  </p>
                </div>
              </RevealGroup>
            </div>
          </div>
        </section>

        {/* ==================== CHARTE DES RÉCOLTANTS ==================== */}
        <section className="py-24 lg:py-32 texture-terracotta-cmyk-image relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Titre principal */}
              <ScrollReveal animation="scale" duration={800}>
                <div className="mb-4 lg:mb-6 flex justify-center">
                  <svg viewBox="0 0 1100 200" className="w-full max-w-5xl h-auto">
                  <defs>
                    <path id="arc-path-ferme" d="M 30 150 Q 550 30 1070 150" fill="none" />
                  </defs>
                    <text className="text-white font-stencil font-bold uppercase" fontSize="70" fill="currentColor">
                      <textPath href="#arc-path-ferme" startOffset="50%" textAnchor="middle">
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

        {/* ==================== CTA FINAL ==================== */}
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <ScrollReveal animation="fade-up">
                <div className="inline-flex items-center gap-2 bg-brand-primary/10 px-6 py-3 rounded-full font-courier text-sm font-semibold uppercase tracking-wider mb-8">
                  <BasketIcon size={16} className="text-brand-primary" />
                  Venez nous voir
                </div>
              </ScrollReveal>

              {/* Titre principal */}
              <ScrollReveal animation="fade-up" delay={100}>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold mb-8 leading-tight text-neutral-dark">
                  Découvrez notre étal
                  <br />
                  <span className="font-stencil font-light italic text-brand-primary">de produits frais</span>
                </h2>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal animation="fade-up" delay={200}>
                <p className="text-lg lg:text-xl font-courier text-neutral-dark leading-relaxed mb-12 max-w-2xl mx-auto">
                  Passez à la ferme pour découvrir nos <span className="text-brand-primary font-semibold">produits frais</span> du jour. Tout est <span className="text-brand-primary font-semibold">bio</span>, tout est <span className="text-brand-primary font-semibold">local</span>, tout a du <span className="text-brand-primary font-semibold">goût</span>.
                </p>
              </ScrollReveal>

              {/* Horaires */}
              <ScrollReveal animation="scale-up" delay={300}>
                <div className="bg-ceruse-light rounded-2xl p-8 lg:p-10 mb-10 max-w-2xl mx-auto">
                <h3 className="text-2xl font-stencil font-bold text-neutral-dark mb-6">Horaires d'ouverture</h3>
                <div className="space-y-4 font-courier text-neutral-dark">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Lundi & Mardi</span>
                    <span>12h - 14h</span>
                  </div>
                  <div className="h-px bg-neutral-light/30" />
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Mercredi - Vendredi</span>
                    <span>12h - 14h • 19h - 21h</span>
                  </div>
                  <div className="h-px bg-neutral-light/30" />
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Samedi</span>
                    <span>10h - 14h • 19h - 21h</span>
                  </div>
                  <div className="h-px bg-neutral-light/30" />
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Dimanche</span>
                    <span className="text-neutral-medium">Fermé</span>
                  </div>
                </div>
                </div>
              </ScrollReveal>

              {/* CTAs */}
              <ScrollReveal animation="fade-up" delay={400}>
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
              </ScrollReveal>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
