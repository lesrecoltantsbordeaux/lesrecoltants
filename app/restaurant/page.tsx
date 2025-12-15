import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import HeroCarousel from "@/components/ui/HeroCarousel";
import ScrollReveal, { RevealGroup } from "@/components/ui/ScrollReveal";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarIcon,
  LeafIcon,
  RestaurantIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  HeartIcon,
  ChefHatIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Le Restaurant - Carte de Saison",
  description:
    "Découvrez notre carte bistronomique qui change au fil des saisons. Cuisine créative, produits bio et locaux à moins de 50km de Bordeaux. Réservation en ligne.",
  keywords: [
    "restaurant bordeaux",
    "bistronomie bordeaux",
    "carte restaurant",
    "menu bio bordeaux",
    "restaurant locavore",
  ],
};

export default function Restaurant() {
  return (
    <>
      <Header />
      <FloatingCTA />

      <main className="flex-1">
        {/* ==================== HERO CAROUSEL ==================== */}
        <HeroCarousel
          images={[
            "/images/restaurant/carrousel/carrousel-1.jpg",
            "/images/restaurant/carrousel/carrousel-2.jpg",
            "/images/restaurant/carrousel/carrousel-3.jpg",
            "/images/restaurant/carrousel/carrousel-4.jpg",
            "/images/restaurant/carrousel/carrousel-5.jpg",
            "/images/restaurant/carrousel/carrousel-6.jpg",
          ]}
          title="Une cuisine qui célèbre le terroir"
          highlightWord="terroir"
          description={<>Notre carte évolue au rythme des <span className="text-brand-primary font-semibold">récoltes</span> et des <span className="text-brand-primary font-semibold">saisons</span>. Chaque plat met en lumière un <span className="text-brand-primary font-semibold">producteur</span>, un savoir-faire, une histoire.</>}
          badge={{
            text: "Cuisine d'auteur – produits bruts du terroir",
          }}
          cta={{
            primary: {
              text: "Réserver une table",
              href: "/contact",
              icon: <RestaurantIcon size={20} />,
            },
            secondary: {
              text: "Voir la carte",
              href: "#carte",
            },
          }}
        />

        {/* ==================== NOTRE CUISINE ==================== */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-ceruse-light to-white relative overflow-hidden">
          {/* Texture de fond - Ceruse CMJN (section importante) */}
          <div className="absolute inset-0 texture-ceruse-cmyk opacity-35" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
              <ScrollReveal animation="fade-up">
                <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-semibold uppercase tracking-wider mb-6">
                  <ChefHatIcon size={16} />
                  Notre philosophie
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-neutral-dark mb-6 leading-tight">
                  Dans l'{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                    assiette
                  </span>
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={200}>
                <p className="text-lg lg:text-xl font-courier text-neutral-dark leading-relaxed">
                  Une cuisine qui raconte des histoires. Chaque assiette célèbre un <span className="text-brand-primary font-semibold">produit</span>, un <span className="text-brand-primary font-semibold">producteur</span>, un moment de la <span className="text-brand-primary font-semibold">saison</span>. Rien de superflu, tout en saveur.
                </p>
              </ScrollReveal>
            </div>

            {/* Grid caractéristiques */}
            <RevealGroup className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* Carte changeante */}
              <div className="reveal-item group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <CalendarIcon size={32} className="text-brand-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark mb-4 group-hover:text-brand-primary transition-colors">
                  Carte changeante
                </h3>
                <p className="font-courier text-neutral-dark leading-relaxed">
                  Notre carte change chaque jour, au rythme des <span className="text-brand-primary font-semibold">récoltes</span>, des <span className="text-brand-primary font-semibold">saisons</span>.
                </p>
              </div>

              {/* 100% maison */}
              <div className="reveal-item group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <ChefHatIcon size={32} className="text-brand-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark mb-4 group-hover:text-brand-primary transition-colors">
                  100% maison
                </h3>
                <p className="font-courier text-neutral-dark leading-relaxed">
                  En cuisine, nous nous adaptons à ce qu'on récolte dans nos <span className="text-brand-primary font-semibold">champs</span>, à ce que nos <span className="text-brand-primary font-semibold">producteurs</span> nous livrent, jamais l'inverse.
                </p>
              </div>

              {/* Vins naturels */}
              <div className="reveal-item group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <HeartIcon size={32} className="text-brand-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark mb-4 group-hover:text-brand-primary transition-colors">
                  Vins naturels
                </h3>
                <p className="font-courier text-neutral-dark leading-relaxed">
                  Des <span className="text-brand-primary font-semibold">vignerons</span> qu'on connaît personnellement. Des vins <span className="text-brand-primary font-semibold">vivants</span>, sans artifice, qui ont du caractère.
                </p>
              </div>
            </RevealGroup>
          </div>
        </section>

        {/* ==================== NOTRE CARTE ==================== */}
        <section id="carte" className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Intro menu */}
              <div className="text-center mb-16 lg:mb-20">
                <ScrollReveal animation="fade-up">
                  <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-semibold uppercase tracking-wider mb-6 font-courier">
                    <RestaurantIcon size={16} />
                    Notre carte
                  </div>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={100}>
                  <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-neutral-dark mb-6 leading-tight">
                    Les{" "}
                    <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                      saveurs
                    </span>{" "}
                    du moment
                  </h2>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={200}>
                  <p className="text-lg lg:text-xl font-courier text-neutral-dark max-w-6xl mx-auto leading-relaxed">
                    Notre cuisine défend l'<span className="text-brand-primary font-semibold">agriculture paysanne locale</span>. Simple et sincère mais pas simpliste, elle est guidée par la qualité des produits que nous travaillons. Ici, tout est <span className="text-brand-primary font-semibold">local</span>, en direct de notre <span className="text-brand-primary font-semibold">ferme</span> et de nos <span className="text-brand-primary font-semibold">producteurs partenaires</span>, sans exception.
                  </p>
                </ScrollReveal>
              </div>

              {/* PDF Menu Card */}
              <ScrollReveal animation="scale-up">
                <div className="bg-gradient-to-br from-ceruse-light to-white rounded-3xl p-10 lg:p-16 shadow-xl border-2 border-neutral-light/30 mb-16">
                  <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  {/* PDF Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-40 lg:w-40 lg:h-48 bg-white rounded-2xl shadow-lg border-2 border-neutral-light/50 flex flex-col items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-brand-primary/10 rounded-bl-3xl"></div>
                      <RestaurantIcon size={56} className="text-brand-primary mb-3" />
                      <span className="text-xs font-courier font-bold text-neutral-dark uppercase tracking-widest">PDF</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center">
                    <h3 className="text-3xl lg:text-4xl font-stencil font-bold text-neutral-dark mb-4">
                      Un exemple de nos menus
                    </h3>
                    <p className="text-lg font-courier text-neutral-dark leading-relaxed mb-8">
                      Notre carte change régulièrement en fonction de la <span className="text-brand-primary font-semibold">saison</span>, des <span className="text-brand-primary font-semibold">produits</span> et des conditions météorologiques.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="#menu-dejeuner"
                        className="group inline-flex items-center justify-center gap-3 bg-neutral-dark text-white px-8 py-4 font-courier font-semibold hover:bg-neutral-dark/90 transition-all hover:scale-105 shadow-lg"
                      >
                        Le déjeuner
                        <ArrowRightIcon size={20} />
                      </a>
                      <a
                        href="#a-la-carte"
                        className="inline-flex items-center justify-center gap-3 border-2 border-neutral-dark text-neutral-dark px-8 py-4 font-courier font-semibold hover:bg-neutral-dark hover:text-white transition-all"
                      >
                        A la carte
                        <ArrowRightIcon size={18} />
                      </a>
                    </div>

                    <p className="text-sm font-courier text-neutral-medium mt-6">
                      <span className="text-brand-primary font-semibold">Format PDF</span> • Mise à jour : Hiver 2025/2026
                    </p>
                  </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Formules rapides */}
              <RevealGroup className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
                <div id="menu-dejeuner" className="reveal-item bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 border-2 border-brand-primary/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 scroll-mt-24">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center">
                      <RestaurantIcon size={24} className="text-white" />
                    </div>
                    <h4 className="text-2xl font-stencil font-bold text-neutral-dark">
                      Menu déjeuner : du lundi au vendredi midi
                    </h4>
                  </div>
                  <p className="font-courier text-neutral-dark mb-6 leading-relaxed">
                    Le midi, vous avez le choix entre trois entrées, trois plats et trois desserts. Nous vous proposons, toujours, des <span className="text-brand-primary font-semibold">légumes de notre champ</span>, des produits <span className="text-brand-primary font-semibold">locaux</span>, <span className="text-brand-primary font-semibold">bio</span>, <span className="text-brand-primary font-semibold">frais</span>, et de <span className="text-brand-primary font-semibold">saison</span>. Et ça ne changera jamais !
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-neutral-light/30">
                      <p className="font-courier text-neutral-dark font-medium">Entrée - Plat ou Plat - Dessert</p>
                      <p className="text-3xl font-stencil font-bold text-brand-primary">20€</p>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-neutral-light/30">
                      <p className="font-courier text-neutral-dark font-medium">Entrée - Plat - Dessert</p>
                      <p className="text-3xl font-stencil font-bold text-brand-primary">25€</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-courier text-neutral-dark font-medium">Plat seul</p>
                      <p className="text-3xl font-stencil font-bold text-brand-primary">16€</p>
                    </div>
                  </div>
                </div>

                <div id="a-la-carte" className="reveal-item bg-gradient-to-br from-neutral-dark to-neutral-medium text-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden scroll-mt-24">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                        <SparklesIcon size={24} className="text-white" />
                      </div>
                      <h4 className="text-2xl font-stencil font-bold text-white">A la carte : du mercredi au samedi soir (et samedi midi)</h4>
                    </div>
                    <p className="text-white/90 font-courier leading-relaxed mb-6 text-center">
                      Laissez-vous surprendre. Le chef et son équipe composent le menu en fonction du <span className="text-brand-primary font-semibold">panier du jour</span>.
                    </p>
                    <div className="space-y-3 flex flex-col items-center">
                      <div className="flex items-center gap-3">
                        <LeafIcon size={18} className="text-brand-primary flex-shrink-0" />
                        <p className="text-white/80 font-courier text-sm"><span className="text-brand-primary font-semibold">Produits frais</span> du marché et de notre <span className="text-brand-primary font-semibold">ferme</span></p>
                      </div>
                      <div className="flex items-center gap-3">
                        <SparklesIcon size={18} className="text-brand-primary flex-shrink-0" />
                        <p className="text-white/80 font-courier text-sm">Carte renouvelée chaque service</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <HeartIcon size={18} className="text-brand-primary flex-shrink-0" />
                        <p className="text-white/80 font-courier text-sm">Accords mets & <span className="text-brand-primary font-semibold">vins naturels</span> sur demande</p>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealGroup>

            </div>
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

        {/* ==================== INFOS PRATIQUES ==================== */}
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
          {/* Texture de fond - Ceruse normal (section secondaire) */}
          <div className="absolute inset-0 texture-ceruse-light opacity-15" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <ScrollReveal animation="fade-up">
                  <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-semibold uppercase tracking-wider mb-6">
                    <CheckCircleIcon size={16} />
                    Informations pratiques
                  </div>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={100}>
                  <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6">
                    Tout ce qu'il faut{" "}
                    <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                      savoir
                    </span>
                  </h2>
                </ScrollReveal>
              </div>

              <RevealGroup className="grid md:grid-cols-2 gap-12 lg:gap-16">
                {/* Horaires */}
                <div className="reveal-item bg-ceruse-light rounded-2xl p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                      <CalendarIcon size={24} className="text-brand-primary" />
                    </div>
                    <h3 className="text-2xl font-stencil font-bold text-neutral-dark">Horaires</h3>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <p className="font-bold text-neutral-dark text-lg mb-2">Lundi & Mardi</p>
                      <p className="text-neutral-medium">12h00 - 14h00 (déjeuner uniquement)</p>
                    </div>
                    <div className="h-px bg-neutral-light/30" />
                    <div>
                      <p className="font-bold text-neutral-dark text-lg mb-2">Mercredi, Jeudi & Vendredi</p>
                      <p className="text-neutral-medium">12h00 - 14h00 • 19h00 - 21h00</p>
                    </div>
                    <div className="h-px bg-neutral-light/30" />
                    <div>
                      <p className="font-bold text-neutral-dark text-lg mb-2">Samedi</p>
                      <p className="text-neutral-medium">10h00 - 14h00 • 19h00 - 21h00</p>
                    </div>
                    <div className="h-px bg-neutral-light/30" />
                    <div>
                      <p className="font-bold text-neutral-dark text-lg mb-2">Fermé</p>
                      <p className="text-neutral-medium">Dimanche</p>
                      <p className="text-sm text-neutral-medium/70 mt-1">
                        (sauf événements privés)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bon à savoir */}
                <div className="reveal-item bg-ceruse-light rounded-2xl p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                      <CheckCircleIcon size={24} className="text-brand-primary" />
                    </div>
                    <h3 className="text-2xl font-stencil font-bold text-neutral-dark">Bon à savoir</h3>
                    </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-medium">Réservation fortement conseillée</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-medium">Menu <span className="text-brand-primary font-semibold">végétarien</span> tous les jours</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-medium">Adaptations possibles pour <span className="text-brand-primary font-semibold">allergies et intolérances</span></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-medium">Plat enfant en portion réduite</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-medium">Carte bancaire et espèces acceptées</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-medium">Accès PMR</p>
                    </div>
                  </div>
                </div>
              </RevealGroup>

            </div>
          </div>
        </section>


      </main>

      <Footer />
    </>
  );
}
