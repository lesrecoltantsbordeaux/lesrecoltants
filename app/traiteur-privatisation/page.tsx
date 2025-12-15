import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import HeroCarousel from "@/components/ui/HeroCarousel";
import ScrollReveal, { RevealGroup } from "@/components/ui/ScrollReveal";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  RestaurantIcon,
  HomeIcon,
  LeafIcon,
  RecycleIcon,
  HandshakeIcon,
  ChefHatIcon,
  StarIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  UsersIcon,
  HeartIcon,
  CalendarIcon,
  LightbulbIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Traiteur Bio & Privatisation Restaurant - Bordeaux",
  description:
    "Service traiteur bio et privatisation de notre restaurant à Bordeaux pour vos événements professionnels et privés. Cuisine locavore et de saison.",
  keywords: [
    "traiteur bio bordeaux",
    "privatisation restaurant bordeaux",
    "événement bordeaux",
    "traiteur locavore",
    "réception bordeaux",
  ],
};

export default function TraiteurPrivatisation() {
  return (
    <>
      <Header />
      <FloatingCTA />

      <main className="flex-1">
        {/* ==================== HERO CAROUSEL ==================== */}
        <HeroCarousel
          images={[
            "/images/traiteur/carrousel/carrousel-2.jpg",
            "/images/traiteur/carrousel/carrousel-3.jpg",
            "/images/traiteur/carrousel/carrousel-4.jpg",
            "/images/traiteur/carrousel/carrousel-5.jpg",
            "/images/traiteur/carrousel/carrousel-1.jpg",
          ]}
          title="Traiteur & Privatisation"
          highlightWord="Privatisation"
          description={<>Un <span className="text-brand-primary font-semibold">service traiteur</span> d'exception et la <span className="text-brand-primary font-semibold">privatisation</span> de notre lieu pour faire de vos moments importants des souvenirs inoubliables.</>}
          badge={{
            icon: <SparklesIcon size={14} />,
            text: "Sur-mesure & éco-responsable",
          }}
          cta={{
            primary: {
              text: "Demander un devis",
              href: "/contact",
              icon: <ChefHatIcon size={20} />,
            },
            secondary: {
              text: "Nous appeler",
              href: "tel:0556000000",
            },
          }}
        />

        {/* ==================== TYPES D'ÉVÉNEMENTS ==================== */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-ceruse-light to-white relative overflow-hidden">
          {/* Texture de fond - Ceruse CMJN (section importante) */}
          <div className="absolute inset-0 texture-ceruse-cmyk opacity-30" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
              <ScrollReveal animation="fade-up">
                <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                  <HeartIcon size={16} />
                  Nos prestations
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6 leading-tight">
                  Pour tous vos
                  <br />
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                    moments
                  </span>{" "}
                  importants
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={200}>
                <p className="text-lg lg:text-xl font-courier text-neutral-medium leading-relaxed">
                  De l'intimité d'un dîner privé à l'éclat d'un mariage, nous créons des <span className="text-brand-primary font-semibold">expériences culinaires</span> mémorables adaptées à chaque occasion.
                </p>
              </ScrollReveal>
            </div>

            <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Mariages */}
              <div className="reveal-item group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <HeartIcon size={32} className="text-brand-primary" />
                </div>
                <h3 className="text-2xl font-stencil font-bold text-neutral-dark mb-3 group-hover:text-brand-primary transition-colors">
                  Mariages
                </h3>
                <p className="font-courier text-neutral-medium leading-relaxed mb-4">
                  Le plus beau jour de votre vie mérite une <span className="text-brand-primary font-semibold">cuisine exceptionnelle</span>
                </p>
                <div className="flex items-center gap-2 text-sm text-brand-primary font-semibold">
                  <UsersIcon size={16} />
                  30-150 pers.
                </div>
              </div>

              {/* Entreprise */}
              <div className="reveal-item group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <UsersIcon size={32} className="text-brand-primary" />
                </div>
                <h3 className="text-2xl font-stencil font-bold text-neutral-dark mb-3 group-hover:text-brand-primary transition-colors">
                  Entreprise
                </h3>
                <p className="font-courier text-neutral-medium leading-relaxed mb-4">
                  Séminaires, inaugurations, <span className="text-brand-primary font-semibold">cocktails professionnels</span>
                </p>
                <div className="flex items-center gap-2 text-sm text-brand-primary font-semibold">
                  <UsersIcon size={16} />
                  20-100 pers.
                </div>
              </div>

              {/* Anniversaires */}
              <div className="reveal-item group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <SparklesIcon size={32} className="text-brand-primary" />
                </div>
                <h3 className="text-2xl font-stencil font-bold text-neutral-dark mb-3 group-hover:text-brand-primary transition-colors">
                  Anniversaires
                </h3>
                <p className="font-courier text-neutral-medium leading-relaxed mb-4">
                  <span className="text-brand-primary font-semibold">Célébrations privées</span> et moments familiaux inoubliables
                </p>
                <div className="flex items-center gap-2 text-sm text-brand-primary font-semibold">
                  <UsersIcon size={16} />
                  10-80 pers.
                </div>
              </div>

              {/* Réceptions */}
              <div className="reveal-item group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <RestaurantIcon size={32} className="text-brand-primary" />
                </div>
                <h3 className="text-2xl font-stencil font-bold text-neutral-dark mb-3 group-hover:text-brand-primary transition-colors">
                  Réceptions
                </h3>
                <p className="font-courier text-neutral-medium leading-relaxed mb-4">
                  Baptêmes, communions, dîners de gala <span className="text-brand-primary font-semibold">sur-mesure</span>
                </p>
                <div className="flex items-center gap-2 text-sm text-brand-primary font-semibold">
                  <UsersIcon size={16} />
                  20-120 pers.
                </div>
              </div>
            </RevealGroup>
          </div>
        </section>

        {/* ==================== SERVICES ==================== */}
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
          {/* Texture de fond - Ceruse normal (section secondaire) */}
          <div className="absolute inset-0 texture-ceruse-light opacity-20" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center mb-16 lg:mb-20">
              <ScrollReveal animation="fade-up">
                <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                  <SparklesIcon size={16} />
                  Nos services
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6">
                  Deux{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                    formules
                  </span>{" "}
                  au choix
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={200}>
                <p className="text-lg font-courier text-neutral-medium max-w-2xl mx-auto leading-relaxed">
                  De l'apéritif au dîner gastronomique, en passant par le cocktail ou le buffet, nous adaptons notre <span className="text-brand-primary font-semibold">cuisine</span> à vos envies et vos besoins.
                </p>
              </ScrollReveal>
            </div>

            <RevealGroup className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Service Traiteur */}
              <div className="reveal-item bg-gradient-to-br from-ceruse-light to-white rounded-3xl p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-brand-primary/30">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center">
                    <RestaurantIcon size={32} className="text-brand-primary" />
                  </div>
                  <h3 className="text-3xl font-stencil font-bold text-neutral-dark">Service Traiteur</h3>
                </div>

                <p className="text-lg font-courier text-neutral-medium leading-relaxed mb-8">
                  Notre chef et son équipe se déplacent pour créer une <span className="text-brand-primary font-semibold">expérience culinaire</span> unique chez vous ou sur le lieu de votre choix.
                </p>

                <div className="space-y-6 mb-10">
                  <div>
                    <h4 className="font-courier font-bold text-neutral-dark mb-4 flex items-center gap-2">
                      <CheckCircleIcon size={20} className="text-brand-primary" />
                      Parfait pour :
                    </h4>
                    <ul className="space-y-3 ml-7">
                      <li className="flex items-center gap-3 font-courier text-neutral-medium">
                        <ArrowRightIcon size={14} className="text-brand-primary" />
                        <span className="text-brand-primary font-semibold">Mariages</span> & anniversaires
                      </li>
                      <li className="flex items-center gap-3 font-courier text-neutral-medium">
                        <ArrowRightIcon size={14} className="text-brand-primary" />
                        Événements d'<span className="text-brand-primary font-semibold">entreprise</span>
                      </li>
                      <li className="flex items-center gap-3 font-courier text-neutral-medium">
                        <ArrowRightIcon size={14} className="text-brand-primary" />
                        <span className="text-brand-primary font-semibold">Réceptions privées</span>
                      </li>
                      <li className="flex items-center gap-3 font-courier text-neutral-medium">
                        <ArrowRightIcon size={14} className="text-brand-primary" />
                        <span className="text-brand-primary font-semibold">Cocktails</span> & buffets
                      </li>
                      <li className="flex items-center gap-3 font-courier text-neutral-medium">
                        <ArrowRightIcon size={14} className="text-brand-primary" />
                        Repas à <span className="text-brand-primary font-semibold">domicile</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-courier font-bold text-neutral-dark mb-4 flex items-center gap-2">
                      <CheckCircleIcon size={20} className="text-brand-primary" />
                      Inclus dans la prestation :
                    </h4>
                    <ul className="space-y-3 ml-7">
                      <li className="flex items-center gap-3 font-courier text-neutral-medium">
                        <ArrowRightIcon size={14} className="text-brand-primary" />
                        <span className="text-brand-primary font-semibold">Chef</span> & équipe de cuisine
                      </li>
                      <li className="flex items-center gap-3 font-courier text-neutral-medium">
                        <ArrowRightIcon size={14} className="text-brand-primary" />
                        Matériel et <span className="text-brand-primary font-semibold">vaisselle</span>
                      </li>
                      <li className="flex items-center gap-3 font-courier text-neutral-medium">
                        <ArrowRightIcon size={14} className="text-brand-primary" />
                        <span className="text-brand-primary font-semibold">Service en salle</span> si besoin
                      </li>
                      <li className="flex items-center gap-3 font-courier text-neutral-medium">
                        <ArrowRightIcon size={14} className="text-brand-primary" />
                        <span className="text-brand-primary font-semibold">Nettoyage complet</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-brand-primary/20">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-neutral-medium mb-1">À partir de</p>
                      <p className="text-4xl font-bold text-brand-primary">45€</p>
                      <p className="text-sm text-neutral-medium mt-1">par personne</p>
                    </div>
                    <div className="text-right text-sm text-neutral-medium">
                      <p>Minimum</p>
                      <p className="text-2xl font-bold text-neutral-dark">20</p>
                      <p>personnes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Privatisation */}
              <div className="reveal-item bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-white rounded-3xl p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-brand-primary/30">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center">
                    <HomeIcon size={32} className="text-brand-primary" />
                  </div>
                  <h3 className="text-3xl font-stencil font-bold text-neutral-dark">Privatisation</h3>
                </div>

                <p className="text-lg font-courier text-neutral-medium leading-relaxed mb-8">
                  Louez notre restaurant en exclusivité et profitez d'un cadre <span className="text-brand-primary font-semibold">chaleureux et authentique</span> pour votre événement.
                </p>

                <div className="space-y-6 mb-10">
                  <div>
                    <h4 className="font-courier font-bold text-neutral-dark mb-4 flex items-center gap-2">
                      <CheckCircleIcon size={20} className="text-brand-primary" />
                      Capacités d'accueil :
                    </h4>
                    <ul className="space-y-3 ml-7">
                      <li className="flex items-center gap-3 font-courier text-neutral-medium">
                        <ArrowRightIcon size={14} className="text-brand-primary" />
                        <span className="text-brand-primary font-semibold">60 personnes</span> assises
                      </li>
                      <li className="flex items-center gap-3 font-courier text-neutral-medium">
                        <ArrowRightIcon size={14} className="text-brand-primary" />
                        <span className="text-brand-primary font-semibold">80 personnes</span> en cocktail
                      </li>
                      <li className="flex items-center gap-3 font-courier text-neutral-medium">
                        <ArrowRightIcon size={14} className="text-brand-primary" />
                        <span className="text-brand-primary font-semibold">Cuisine ouverte</span> visible
                      </li>
                      <li className="flex items-center gap-3 font-courier text-neutral-medium">
                        <ArrowRightIcon size={14} className="text-brand-primary" />
                        Espace <span className="text-brand-primary font-semibold">modulable</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-courier font-bold text-neutral-dark mb-4 flex items-center gap-2">
                      <CheckCircleIcon size={20} className="text-brand-primary" />
                      Services inclus :
                    </h4>
                    <ul className="space-y-3 ml-7">
                      <li className="flex items-center gap-3 font-courier text-neutral-medium">
                        <ArrowRightIcon size={14} className="text-brand-primary" />
                        <span className="text-brand-primary font-semibold">Location exclusive</span> du lieu
                      </li>
                      <li className="flex items-center gap-3 font-courier text-neutral-medium">
                        <ArrowRightIcon size={14} className="text-brand-primary" />
                        Équipement <span className="text-brand-primary font-semibold">son & vidéo</span>
                      </li>
                      <li className="flex items-center gap-3 font-courier text-neutral-medium">
                        <ArrowRightIcon size={14} className="text-brand-primary" />
                        Décoration <span className="text-brand-primary font-semibold">personnalisable</span>
                      </li>
                      <li className="flex items-center gap-3 font-courier text-neutral-medium">
                        <ArrowRightIcon size={14} className="text-brand-primary" />
                        <span className="text-brand-primary font-semibold">Personnel dédié</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-brand-primary">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-neutral-medium mb-1">À partir de</p>
                      <p className="text-4xl font-bold text-brand-primary">55€</p>
                      <p className="text-sm text-neutral-medium mt-1">par personne</p>
                    </div>
                    <div className="text-right text-sm text-neutral-medium">
                      <p className="font-semibold text-neutral-dark">Location</p>
                      <p className="text-lg font-bold text-brand-primary">+ Menu</p>
                      <p>inclus</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealGroup>
          </div>
        </section>

        {/* ==================== FORMULES TRAITEUR ==================== */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-ceruse-light to-white relative overflow-hidden">
          {/* Texture de fond - Ceruse CMJN (section importante) */}
          <div className="absolute inset-0 texture-ceruse-cmyk opacity-30" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 lg:mb-20">
                <ScrollReveal animation="fade-up">
                  <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                    <ChefHatIcon size={16} />
                    Nos formules
                  </div>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={100}>
                  <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6">
                    Des formules pour tous les{" "}
                    <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                      budgets
                    </span>
                  </h2>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={200}>
                  <p className="text-lg font-courier text-neutral-medium max-w-2xl mx-auto leading-relaxed">
                    Toutes nos formules sont personnalisables selon vos envies, vos préférences alimentaires et votre budget. Ingrédients <span className="text-brand-primary font-semibold">100% bio et locaux</span> garantis.
                  </p>
                </ScrollReveal>
              </div>

              <RevealGroup className="grid md:grid-cols-3 gap-8">
                {/* Formule Apéritif */}
                <div className="reveal-item bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                  <div className="bg-ceruse-light p-8 text-center">
                    <ChefHatIcon size={40} className="text-brand-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-stencil font-bold text-neutral-dark mb-3">Formule Apéritif</h3>
                    <div className="mt-6">
                      <p className="text-5xl font-stencil font-bold text-brand-primary">28€</p>
                      <p className="text-sm font-courier text-neutral-medium mt-2">par personne</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 font-courier text-neutral-medium">
                        <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                        8 pièces cocktail <span className="text-brand-primary font-semibold">salées</span>
                      </li>
                      <li className="flex items-start gap-3 font-courier text-neutral-medium">
                        <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                        2 pièces cocktail <span className="text-brand-primary font-semibold">sucrées</span>
                      </li>
                      <li className="flex items-start gap-3 font-courier text-neutral-medium">
                        <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                        Sélection de <span className="text-brand-primary font-semibold">vins bio</span>
                      </li>
                      <li className="flex items-start gap-3 font-courier text-neutral-medium">
                        <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                        Eaux & <span className="text-brand-primary font-semibold">jus de fruits</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Formule Buffet - POPULAIRE */}
                <div className="reveal-item bg-white rounded-3xl overflow-visible shadow-2xl hover:shadow-2xl transition-all duration-500 scale-105 border-2 border-brand-primary relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-xs font-courier font-bold px-6 py-2 rounded-full shadow-lg z-10 uppercase tracking-wider">
                    LE PLUS POPULAIRE
                  </div>
                  <div className="bg-brand-primary text-white p-8 text-center">
                    <SparklesIcon size={40} className="text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-stencil font-bold mb-3">Formule Buffet</h3>
                    <div className="mt-6">
                      <p className="text-5xl font-stencil font-bold">45€</p>
                      <p className="text-sm font-courier text-white/80 mt-2">par personne</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 font-courier text-neutral-medium">
                        <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                        Buffet d'entrées <span className="text-brand-primary font-semibold">variées</span>
                      </li>
                      <li className="flex items-start gap-3 font-courier text-neutral-medium">
                        <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                        3 <span className="text-brand-primary font-semibold">plats chauds</span> au choix
                      </li>
                      <li className="flex items-start gap-3 font-courier text-neutral-medium">
                        <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                        Accompagnements <span className="text-brand-primary font-semibold">de saison</span>
                      </li>
                      <li className="flex items-start gap-3 font-courier text-neutral-medium">
                        <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                        Buffet de <span className="text-brand-primary font-semibold">desserts</span>
                      </li>
                      <li className="flex items-start gap-3 font-courier text-neutral-medium">
                        <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                        <span className="text-brand-primary font-semibold">Boissons incluses</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Formule Prestige */}
                <div className="reveal-item bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                  <div className="bg-gradient-to-br from-neutral-dark to-neutral-medium text-white p-8 text-center">
                    <StarIcon size={40} className="text-brand-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-stencil font-bold mb-3">Formule Prestige</h3>
                    <div className="mt-6">
                      <p className="text-5xl font-stencil font-bold text-brand-primary">75€</p>
                      <p className="text-sm font-courier text-white/80 mt-2">par personne</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 font-courier text-neutral-medium">
                        <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                        Menu <span className="text-brand-primary font-semibold">5 services</span> assis
                      </li>
                      <li className="flex items-start gap-3 font-courier text-neutral-medium">
                        <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                        Service <span className="text-brand-primary font-semibold">à l'assiette</span>
                      </li>
                      <li className="flex items-start gap-3 font-courier text-neutral-medium">
                        <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                        Accord <span className="text-brand-primary font-semibold">mets-vins</span> inclus
                      </li>
                      <li className="flex items-start gap-3 font-courier text-neutral-medium">
                        <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                        <span className="text-brand-primary font-semibold">Personnel</span> de service
                      </li>
                      <li className="flex items-start gap-3 font-courier text-neutral-medium">
                        <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                        <span className="text-brand-primary font-semibold">Décoration</span> de table
                      </li>
                    </ul>
                  </div>
                </div>
              </RevealGroup>

              <ScrollReveal animation="fade-up" delay={100}>
                <div className="mt-16 bg-gradient-to-r from-brand-primary/10 to-brand-primary/5 rounded-2xl p-8 text-center border-2 border-brand-primary/20">
                <p className="font-courier text-neutral-dark mb-6 leading-relaxed text-lg">
                  <strong>Toutes nos formules sont entièrement personnalisables</strong> selon vos préférences : <span className="text-brand-primary font-semibold">végétarien</span>, <span className="text-brand-primary font-semibold">vegan</span>, <span className="text-brand-primary font-semibold">sans gluten</span>, allergies, régimes spéciaux... Nous nous adaptons à toutes vos contraintes!
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-brand-primary text-white px-10 py-5 rounded-full font-courier font-semibold text-lg hover:bg-brand-primary-dark transition-all hover:scale-105 shadow-xl"
                >
                  Demander un devis personnalisé
                  <ArrowRightIcon size={20} />
                </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ==================== COMMENT ÇA MARCHE ==================== */}
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
          {/* Texture de fond - Ceruse normal (section secondaire) */}
          <div className="absolute inset-0 texture-ceruse-light opacity-20" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16 lg:mb-20">
                <ScrollReveal animation="fade-up">
                  <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                    <LightbulbIcon size={16} />
                    Notre processus
                  </div>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={100}>
                  <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6">
                    Comment ça{" "}
                    <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                      marche
                    </span>
                    ?
                  </h2>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={200}>
                  <p className="text-lg font-courier text-neutral-medium max-w-2xl mx-auto leading-relaxed">
                    Un accompagnement personnalisé à chaque étape pour garantir la réussite de
                    votre événement
                  </p>
                </ScrollReveal>
              </div>

              <RevealGroup className="grid md:grid-cols-4 gap-8">
                {/* Étape 1 */}
                <div className="reveal-item text-center">
                  <div className="relative mb-8">
                    <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto text-white text-2xl font-stencil font-bold shadow-lg">
                      1
                    </div>
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-brand-primary/30" />
                  </div>
                  <h3 className="text-xl font-stencil font-bold text-neutral-dark mb-3">Premier contact</h3>
                  <p className="font-courier text-neutral-medium leading-relaxed">
                    Vous nous contactez par téléphone ou email pour nous parler de votre <span className="text-brand-primary font-semibold">projet</span>
                  </p>
                </div>

                {/* Étape 2 */}
                <div className="reveal-item text-center">
                  <div className="relative mb-8">
                    <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto text-white text-2xl font-stencil font-bold shadow-lg">
                      2
                    </div>
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-brand-primary/30" />
                  </div>
                  <h3 className="text-xl font-stencil font-bold text-neutral-dark mb-3">Échange & devis</h3>
                  <p className="font-courier text-neutral-medium leading-relaxed">
                    Nous échangeons sur vos besoins, vos envies, votre budget. <span className="text-brand-primary font-semibold">Devis gratuit</span> sous 48h
                  </p>
                </div>

                {/* Étape 3 */}
                <div className="reveal-item text-center">
                  <div className="relative mb-8">
                    <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto text-white text-2xl font-stencil font-bold shadow-lg">
                      3
                    </div>
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-brand-primary/30" />
                  </div>
                  <h3 className="text-xl font-stencil font-bold text-neutral-dark mb-3">Personnalisation</h3>
                  <p className="font-courier text-neutral-medium leading-relaxed">
                    Nous affinons ensemble le <span className="text-brand-primary font-semibold">menu</span>, les quantités, les options. <span className="text-brand-primary font-semibold">Dégustation</span> possible
                  </p>
                </div>

                {/* Étape 4 */}
                <div className="reveal-item text-center">
                  <div className="relative mb-8">
                    <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto text-white text-2xl font-stencil font-bold shadow-lg">
                      4
                    </div>
                  </div>
                  <h3 className="text-xl font-stencil font-bold text-neutral-dark mb-3">Le jour J</h3>
                  <p className="font-courier text-neutral-medium leading-relaxed">
                    Notre équipe assure le <span className="text-brand-primary font-semibold">service</span> avec professionnalisme. Vous profitez pleinement!
                  </p>
                </div>
              </RevealGroup>

              <ScrollReveal animation="scale" delay={100}>
                <div className="mt-16 text-center">
                  <div className="inline-flex items-center gap-2 bg-ceruse-light rounded-2xl px-8 py-4">
                    <CalendarIcon size={24} className="text-brand-primary" />
                    <p className="font-courier text-neutral-dark font-semibold">
                      Délai recommandé : <span className="text-brand-primary">4-8 semaines</span>{" "}
                      avant votre événement
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ==================== NOS ENGAGEMENTS ==================== */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-ceruse-light to-white relative overflow-hidden">
          {/* Texture de fond - Ceruse CMJN (section importante) */}
          <div className="absolute inset-0 texture-ceruse-cmyk opacity-30" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16 lg:mb-20">
                <ScrollReveal animation="fade-up">
                  <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                    <HeartIcon size={16} />
                    Nos engagements
                  </div>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={100}>
                  <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6">
                    Une{" "}
                    <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                      prestation
                    </span>{" "}
                    éco-responsable
                </h2>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={200}>
                  <p className="text-lg font-courier text-neutral-medium max-w-2xl mx-auto">
                    Même pour vos événements, nous ne transigeons pas sur nos <span className="text-brand-primary font-semibold">valeurs</span>
                  </p>
                </ScrollReveal>
              </div>

              <RevealGroup className="grid md:grid-cols-2 gap-8">
                {/* 100% Bio & Local */}
                <div className="reveal-item bg-white rounded-2xl p-8 lg:p-10 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-neutral-light/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                      <LeafIcon size={28} className="text-brand-primary" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark">
                      100% Bio & Local
                    </h3>
                  </div>
                  <p className="font-courier text-neutral-medium leading-relaxed text-lg">
                    Tous nos produits sont issus de l'<span className="text-brand-primary font-semibold">agriculture biologique</span> et proviennent de <span className="text-brand-primary font-semibold">producteurs locaux</span> à moins de <span className="text-brand-primary font-semibold">50km</span>. Qualité et traçabilité garanties.
                  </p>
                </div>

                {/* Zéro déchet */}
                <div className="reveal-item bg-white rounded-2xl p-8 lg:p-10 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-neutral-light/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                      <RecycleIcon size={28} className="text-brand-primary" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark">
                      Zéro déchet
                    </h3>
                  </div>
                  <p className="font-courier text-neutral-medium leading-relaxed text-lg">
                    Vaisselle <span className="text-brand-primary font-semibold">compostable</span> ou réutilisable, tri sélectif, <span className="text-brand-primary font-semibold">compostage</span> des déchets organiques. Votre événement sera <span className="text-brand-primary font-semibold">éco-responsable</span> de A à Z.
                  </p>
                </div>

                {/* Chef présent */}
                <div className="reveal-item bg-white rounded-2xl p-8 lg:p-10 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-neutral-light/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                      <ChefHatIcon size={28} className="text-brand-primary" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark">
                      Chef présent
                    </h3>
                  </div>
                  <p className="font-courier text-neutral-medium leading-relaxed text-lg">
                    Notre chef supervise personnellement chaque prestation pour garantir la <span className="text-brand-primary font-semibold">qualité</span> de nos plats et le respect de nos standards culinaires.
                  </p>
                </div>

                {/* Accompagnement complet */}
                <div className="reveal-item bg-white rounded-2xl p-8 lg:p-10 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-neutral-light/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                      <HandshakeIcon size={28} className="text-brand-primary" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark">
                      Accompagnement complet
                    </h3>
                  </div>
                  <p className="font-courier text-neutral-medium leading-relaxed text-lg">
                    De la conception du menu à la réalisation, nous vous accompagnons à chaque étape. Un interlocuteur <span className="text-brand-primary font-semibold">dédié</span> pour votre sérénité.
                  </p>
                </div>
              </RevealGroup>
            </div>
          </div>
        </section>

        {/* ==================== CTA FINAL ==================== */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-ceruse-light to-white relative overflow-hidden">
          <div className="absolute inset-0 texture-ceruse-cmyk opacity-30" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <ScrollReveal animation="fade-up">
                <div className="inline-flex items-center gap-2 bg-brand-primary/10 px-6 py-3 rounded-full font-courier text-sm font-semibold uppercase tracking-wider mb-8">
                  <SparklesIcon size={16} className="text-brand-primary" />
                  Un événement à venir ?
                </div>
              </ScrollReveal>

              {/* Titre principal */}
              <ScrollReveal animation="fade-up" delay={100}>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold mb-8 leading-tight text-neutral-dark">
                  Parlons de votre projet
                  <br />
                  <span className="font-stencil font-light italic text-brand-primary">ensemble</span>
                </h2>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal animation="fade-up" delay={200}>
                <p className="text-lg lg:text-xl font-courier text-neutral-dark leading-relaxed mb-12 max-w-2xl mx-auto">
                  Que ce soit pour un mariage, un événement d'entreprise ou une célébration privée, nous serions ravis de créer une <span className="text-brand-primary font-semibold">expérience culinaire mémorable</span> pour vous.
                </p>
              </ScrollReveal>

              {/* CTAs */}
              <ScrollReveal animation="fade-up" delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
                  <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 bg-neutral-dark text-white px-10 py-5 font-courier font-bold hover:bg-neutral-dark/90 transition-all shadow-2xl"
                >
                  <span className="relative z-10 flex items-center gap-3">
                  Demander un devis
                    <ArrowRightIcon
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>
                  <a
                    href="tel:0556000000"
                    className="group inline-flex items-center justify-center gap-3 border-2 border-neutral-dark text-neutral-dark px-10 py-5 font-courier font-bold hover:bg-neutral-dark hover:text-white transition-all"
                  >
                    <PhoneIcon size={20} />
                    05 56 00 00 00
                  </a>
                </div>
              </ScrollReveal>

              {/* Note */}
              <ScrollReveal animation="fade" delay={400}>
                <p className="text-sm font-courier text-neutral-medium mt-8">
                  Devis gratuit sous 48h • Réponse personnalisée garantie
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
