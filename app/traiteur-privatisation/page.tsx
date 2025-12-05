import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import PageHero from "@/components/ui/PageHero";
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
        {/* ==================== HERO ==================== */}
        <PageHero
          title="Vos événements sublimés"
          highlightWord="sublimés"
          description="Un service traiteur d'exception et la privatisation de notre lieu pour faire de vos moments importants des souvenirs inoubliables."
          imageSrc="/images/hero/hero-background.jpg"
          imageAlt="Service traiteur Les Récoltants"
          badge={{
            icon: <SparklesIcon size={14} />,
            text: "Sur-mesure & éco-responsable",
          }}
          cta={{
            primary: {
              text: "Demander un devis",
              href: "/contact",
            },
            secondary: {
              text: "Nous appeler",
              href: "tel:0556000000",
            },
          }}
          imagePosition="left"
        />

        {/* ==================== TYPES D'ÉVÉNEMENTS ==================== */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-ceruse-light to-white relative overflow-hidden">
          {/* Texture de fond - Ceruse CMJN (section importante) */}
          <div className="absolute inset-0 texture-ceruse-cmyk opacity-30" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                <HeartIcon size={16} />
                Nos prestations
              </div>
              <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6 leading-tight">
                Pour tous vos
                <br />
                <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                  moments
                </span>{" "}
                importants
              </h2>
              <p className="text-lg lg:text-xl font-courier text-neutral-medium leading-relaxed">
                De l'intimité d'un dîner privé à l'éclat d'un mariage, nous créons des
                expériences culinaires mémorables adaptées à chaque occasion.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  type: "Mariages",
                  icon: HeartIcon,
                  description: "Le plus beau jour de votre vie mérite une cuisine exceptionnelle",
                  capacité: "30-150 pers.",
                },
                {
                  type: "Entreprise",
                  icon: UsersIcon,
                  description: "Séminaires, inaugurations, cocktails professionnels",
                  capacité: "20-100 pers.",
                },
                {
                  type: "Anniversaires",
                  icon: SparklesIcon,
                  description: "Célébrations privées et moments familiaux inoubliables",
                  capacité: "10-80 pers.",
                },
                {
                  type: "Réceptions",
                  icon: RestaurantIcon,
                  description: "Baptêmes, communions, dîners de gala sur-mesure",
                  capacité: "20-120 pers.",
                },
              ].map((evenement, index) => {
                const IconComponent = evenement.icon;
                return (
                  <div
                    key={evenement.type}
                    className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20"
                  >
                    <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                      <IconComponent size={32} className="text-brand-primary" />
                    </div>
                    <h3 className="text-2xl font-stencil font-bold text-neutral-dark mb-3 group-hover:text-brand-primary transition-colors">
                      {evenement.type}
                    </h3>
                    <p className="font-courier text-neutral-medium leading-relaxed mb-4">
                      {evenement.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-brand-primary font-semibold">
                      <UsersIcon size={16} />
                      {evenement.capacité}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================== SERVICES ==================== */}
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
          {/* Texture de fond - Ceruse normal (section secondaire) */}
          <div className="absolute inset-0 texture-ceruse-light opacity-20" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                <SparklesIcon size={16} />
                Nos services
              </div>
              <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6">
                Deux{" "}
                <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                  formules
                </span>{" "}
                au choix
              </h2>
              <p className="text-lg font-courier text-neutral-medium max-w-2xl mx-auto leading-relaxed">
                De l'apéritif au dîner gastronomique, en passant par le cocktail ou le buffet,
                nous adaptons notre cuisine à vos envies et vos besoins.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Service Traiteur */}
              <div className="bg-gradient-to-br from-ceruse-light to-white rounded-3xl p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-brand-primary/30">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center">
                    <RestaurantIcon size={32} className="text-brand-primary" />
                  </div>
                  <h3 className="text-3xl font-stencil font-bold text-neutral-dark">Service Traiteur</h3>
                </div>

                <p className="text-lg font-courier text-neutral-medium leading-relaxed mb-8">
                  Notre chef et son équipe se déplacent pour créer une expérience culinaire
                  unique chez vous ou sur le lieu de votre choix.
                </p>

                <div className="space-y-6 mb-10">
                  <div>
                    <h4 className="font-courier font-bold text-neutral-dark mb-4 flex items-center gap-2">
                      <CheckCircleIcon size={20} className="text-brand-primary" />
                      Parfait pour :
                    </h4>
                    <ul className="space-y-3 ml-7">
                    {[
                      "Mariages & anniversaires",
                      "Événements d'entreprise",
                      "Réceptions privées",
                      "Cocktails & buffets",
                      "Repas à domicile",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 font-courier text-neutral-medium">
                          <ArrowRightIcon size={14} className="text-brand-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                  <div>
                    <h4 className="font-courier font-bold text-neutral-dark mb-4 flex items-center gap-2">
                      <CheckCircleIcon size={20} className="text-brand-primary" />
                      Inclus dans la prestation :
                    </h4>
                    <ul className="space-y-3 ml-7">
                      {[
                        "Chef & équipe de cuisine",
                        "Matériel et vaisselle",
                        "Service en salle si besoin",
                        "Nettoyage complet",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 font-courier text-neutral-medium">
                          <ArrowRightIcon size={14} className="text-brand-primary" />
                          {item}
                        </li>
                      ))}
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
              <div className="bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-white rounded-3xl p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-brand-primary/30">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center">
                    <HomeIcon size={32} className="text-brand-primary" />
                  </div>
                  <h3 className="text-3xl font-stencil font-bold text-neutral-dark">Privatisation</h3>
                </div>

                <p className="text-lg font-courier text-neutral-medium leading-relaxed mb-8">
                  Louez notre restaurant en exclusivité et profitez d'un cadre chaleureux
                  et authentique pour votre événement.
                </p>

                <div className="space-y-6 mb-10">
                  <div>
                    <h4 className="font-courier font-bold text-neutral-dark mb-4 flex items-center gap-2">
                      <CheckCircleIcon size={20} className="text-brand-primary" />
                      Capacités d'accueil :
                    </h4>
                    <ul className="space-y-3 ml-7">
                      {[
                        "60 personnes assises",
                      "80 personnes en cocktail",
                      "Cuisine ouverte visible",
                        "Espace modulable",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 font-courier text-neutral-medium">
                          <ArrowRightIcon size={14} className="text-brand-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                  <div>
                    <h4 className="font-courier font-bold text-neutral-dark mb-4 flex items-center gap-2">
                      <CheckCircleIcon size={20} className="text-brand-primary" />
                      Services inclus :
                    </h4>
                    <ul className="space-y-3 ml-7">
                      {[
                        "Location exclusive du lieu",
                        "Équipement son & vidéo",
                        "Décoration personnalisable",
                        "Personnel dédié",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 font-courier text-neutral-medium">
                          <ArrowRightIcon size={14} className="text-brand-primary" />
                          {item}
                        </li>
                      ))}
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
            </div>
          </div>
        </section>

        {/* ==================== FORMULES TRAITEUR ==================== */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-ceruse-light to-white relative overflow-hidden">
          {/* Texture de fond - Ceruse CMJN (section importante) */}
          <div className="absolute inset-0 texture-ceruse-cmyk opacity-30" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 lg:mb-20">
                <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                  <ChefHatIcon size={16} />
                  Nos formules
                </div>
                <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6">
                  Des formules pour tous les{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                    budgets
                  </span>
                </h2>
                <p className="text-lg font-courier text-neutral-medium max-w-2xl mx-auto leading-relaxed">
                  Toutes nos formules sont personnalisables selon vos envies, vos préférences
                  alimentaires et votre budget. Ingrédients 100% bio et locaux garantis.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Formule Apéritif */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
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
                      {[
                        "8 pièces cocktail salées",
                        "2 pièces cocktail sucrées",
                        "Sélection de vins bio",
                        "Eaux & jus de fruits",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 font-courier text-neutral-medium">
                          <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Formule Buffet - POPULAIRE */}
                <div className="bg-white rounded-3xl overflow-visible shadow-2xl hover:shadow-2xl transition-all duration-500 scale-105 border-2 border-brand-primary relative">
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
                      {[
                        "Buffet d'entrées variées",
                        "3 plats chauds au choix",
                        "Accompagnements de saison",
                        "Buffet de desserts",
                        "Boissons incluses",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 font-courier text-neutral-medium">
                          <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Formule Prestige */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
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
                      {[
                        "Menu 5 services assis",
                        "Service à l'assiette",
                        "Accord mets-vins inclus",
                        "Personnel de service",
                        "Décoration de table",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 font-courier text-neutral-medium">
                          <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-16 bg-gradient-to-r from-brand-primary/10 to-brand-primary/5 rounded-2xl p-8 text-center border-2 border-brand-primary/20">
                <p className="font-courier text-neutral-dark mb-6 leading-relaxed text-lg">
                  <strong>Toutes nos formules sont entièrement personnalisables</strong> selon vos
                  préférences : végétarien, vegan, sans gluten, allergies, régimes spéciaux...
                  <br />
                  Nous nous adaptons à toutes vos contraintes!
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-brand-primary text-white px-10 py-5 rounded-full font-courier font-semibold text-lg hover:bg-brand-primary-dark transition-all hover:scale-105 shadow-xl"
                >
                  Demander un devis personnalisé
                  <ArrowRightIcon size={20} />
                </Link>
              </div>
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
                <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                  <LightbulbIcon size={16} />
                  Notre processus
                </div>
                <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6">
                  Comment ça{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                    marche
                  </span>
                  ?
                </h2>
                <p className="text-lg font-courier text-neutral-medium max-w-2xl mx-auto leading-relaxed">
                  Un accompagnement personnalisé à chaque étape pour garantir la réussite de
                  votre événement
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    etape: "1",
                    titre: "Premier contact",
                    description:
                      "Vous nous contactez par téléphone ou email pour nous parler de votre projet",
                  },
                  {
                    etape: "2",
                    titre: "Échange & devis",
                    description:
                      "Nous échangeons sur vos besoins, vos envies, votre budget. Devis gratuit sous 48h",
                  },
                  {
                    etape: "3",
                    titre: "Personnalisation",
                    description:
                      "Nous affinons ensemble le menu, les quantités, les options. Dégustation possible",
                  },
                  {
                    etape: "4",
                    titre: "Le jour J",
                    description:
                      "Notre équipe assure le service avec professionnalisme. Vous profitez pleinement!",
                  },
                ].map((step, index) => (
                  <div key={step.etape} className="text-center">
                    <div className="relative mb-8">
                      <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto text-white text-2xl font-stencil font-bold shadow-lg">
                        {step.etape}
                      </div>
                      {index < 3 && (
                        <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-brand-primary/30" />
                      )}
                    </div>
                    <h3 className="text-xl font-stencil font-bold text-neutral-dark mb-3">{step.titre}</h3>
                    <p className="font-courier text-neutral-medium leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-2 bg-ceruse-light rounded-2xl px-8 py-4">
                  <CalendarIcon size={24} className="text-brand-primary" />
                  <p className="font-courier text-neutral-dark font-semibold">
                    Délai recommandé : <span className="text-brand-primary">4-8 semaines</span>{" "}
                    avant votre événement
                  </p>
                </div>
              </div>
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
                <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                  <HeartIcon size={16} />
                  Nos engagements
                </div>
                <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6">
                  Une{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                    prestation
                  </span>{" "}
                  éco-responsable
              </h2>
                <p className="text-lg font-courier text-neutral-medium max-w-2xl mx-auto">
                  Même pour vos événements, nous ne transigeons pas sur nos valeurs
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: LeafIcon,
                    titre: "100% Bio & Local",
                    description:
                      "Tous nos produits sont issus de l'agriculture biologique et proviennent de producteurs locaux à moins de 50km. Qualité et traçabilité garanties.",
                  },
                  {
                    icon: RecycleIcon,
                    titre: "Zéro déchet",
                    description:
                      "Vaisselle compostable ou réutilisable, tri sélectif, compostage des déchets organiques. Votre événement sera éco-responsable de A à Z.",
                  },
                  {
                    icon: ChefHatIcon,
                    titre: "Chef présent",
                    description:
                      "Notre chef supervise personnellement chaque prestation pour garantir la qualité de nos plats et le respect de nos standards culinaires.",
                  },
                  {
                    icon: HandshakeIcon,
                    titre: "Accompagnement complet",
                    description:
                      "De la conception du menu à la réalisation, nous vous accompagnons à chaque étape. Un interlocuteur dédié pour votre sérénité.",
                  },
                ].map((engagement, index) => {
                  const IconComponent = engagement.icon;
                  return (
                  <div
                    key={engagement.titre}
                      className="bg-white rounded-2xl p-8 lg:p-10 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-neutral-light/20"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                          <IconComponent size={28} className="text-brand-primary" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark">
                      {engagement.titre}
                    </h3>
                      </div>
                      <p className="font-courier text-neutral-medium leading-relaxed text-lg">
                      {engagement.description}
                    </p>
                  </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== TÉMOIGNAGES ==================== */}
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
          {/* Texture de fond - Ceruse normal (section secondaire) */}
          <div className="absolute inset-0 texture-ceruse-light opacity-20" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                  <StarIcon size={16} />
                  Témoignages
                </div>
                <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6">
                Ils nous ont fait{" "}
                <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                  confiance
                </span>
              </h2>
                <div className="flex items-center justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} size={28} className="text-brand-primary" />
                  ))}
                  <span className="ml-3 text-xl font-stencil font-bold text-neutral-dark">5/5</span>
                  <span className="font-courier text-neutral-medium">(32 événements)</span>
                </div>
              </div>

              {/* Témoignage principal en vedette */}
              <div className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 border-2 border-brand-primary/30 rounded-3xl p-10 lg:p-12 mb-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} size={28} className="text-brand-primary" />
                  ))}
                </div>
                <p className="font-courier text-neutral-dark leading-relaxed mb-8 text-xl lg:text-2xl italic text-center max-w-4xl mx-auto">
                  "Une prestation absolument parfaite ! Les invités ne parlent que de ça. La qualité des produits bio, le service irréprochable et l'attention aux détails ont fait de notre mariage un moment magique. L'équipe a su s'adapter à nos besoins végétariens avec brio."
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-stencil font-bold text-2xl">M</span>
                  </div>
                  <div className="text-left">
                    <p className="font-courier font-bold text-neutral-dark text-lg">Marie & Thomas</p>
                    <p className="text-sm font-courier text-neutral-medium">Mariage - 80 invités - Juin 2024</p>
                  </div>
                </div>
              </div>

              {/* 3 autres témoignages */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    nom: "David L.",
                    événement: "Séminaire entreprise",
                    témoignage:
                      "Professionnalisme exemplaire et cuisine d'exception. On recommande les yeux fermés !",
                    note: 5,
                  },
                  {
                    nom: "Famille Dubois",
                    événement: "Anniversaire 60 ans",
                    témoignage:
                      "Les Récoltants ont dépassé toutes nos attentes ! Menu délicieux, service discret et efficace.",
                    note: 5,
                  },
                  {
                    nom: "Sophie M.",
                    événement: "Baptême",
                    témoignage:
                      "Un buffet magnifique et délicieux. L'approche zéro déchet parfaitement respectée !",
                    note: 5,
                  },
                ].map((témoignage, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 lg:p-8 border border-neutral-light/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(témoignage.note)].map((_, i) => (
                        <StarIcon key={i} size={16} className="text-brand-primary" />
                      ))}
                    </div>
                    <p className="font-courier text-neutral-dark leading-relaxed mb-6 italic">
                      "{témoignage.témoignage}"
                    </p>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-brand-primary font-stencil font-bold">
                          {témoignage.nom.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-courier font-bold text-neutral-dark text-sm">{témoignage.nom}</p>
                        <p className="text-xs font-courier text-neutral-medium">{témoignage.événement}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CTA FINAL ==================== */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-ceruse-light to-white relative overflow-hidden">
          <div className="absolute inset-0 texture-ceruse-cmyk opacity-30" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-primary/10 px-6 py-3 rounded-full font-courier text-sm font-semibold uppercase tracking-wider mb-8">
                <SparklesIcon size={16} className="text-brand-primary" />
                Un événement à venir ?
              </div>

              {/* Titre principal */}
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold mb-8 leading-tight text-neutral-dark">
                Parlons de votre projet
                <br />
                <span className="font-stencil font-light italic text-brand-primary">ensemble</span>
              </h2>

              {/* Description */}
              <p className="text-lg lg:text-xl font-courier text-neutral-dark leading-relaxed mb-12 max-w-2xl mx-auto">
                Que ce soit pour un mariage, un événement d'entreprise ou une célébration privée,
                nous serions ravis de créer une expérience culinaire mémorable pour vous.
              </p>

              {/* CTAs */}
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

              {/* Note */}
              <p className="text-sm font-courier text-neutral-medium mt-8">
                Devis gratuit sous 48h • Réponse personnalisée garantie
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
