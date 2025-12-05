import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import PageHero from "@/components/ui/PageHero";
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
  title: "Restaurant Bistronomique - Carte de Saison",
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
        {/* ==================== HERO ==================== */}
        <PageHero
          title="Une cuisine qui célèbre le terroir"
          highlightWord="terroir"
          description="Notre carte évolue au rythme des récoltes et des saisons. Chaque plat met en lumière un producteur, un savoir-faire, une histoire."
          imageSrc="/images/hero/hero-background.jpg"
          imageAlt="Plat gastronomique du restaurant Les Récoltants"
          badge={{
            text: "Carte de saison - Hiver 2025/2026",
          }}
          cta={{
            primary: {
              text: "Réserver une table",
              href: "/contact",
            },
            secondary: {
              text: "Voir la carte",
              href: "#carte",
            },
          }}
          imagePosition="left"
        />

        {/* ==================== NOTRE CUISINE ==================== */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-ceruse-light to-white relative overflow-hidden">
          {/* Texture de fond - Ceruse CMJN (section importante) */}
          <div className="absolute inset-0 texture-ceruse-cmyk opacity-35" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-semibold uppercase tracking-wider mb-6">
                <ChefHatIcon size={16} />
                Notre philosophie
              </div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-neutral-dark mb-6 leading-tight">
                La bistronomie à la{" "}
                <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                  bordelaise
                </span>
              </h2>
              <p className="text-lg lg:text-xl font-courier text-neutral-dark leading-relaxed">
                Une cuisine qui raconte des histoires. Chaque assiette célèbre un produit,
                un producteur, un moment de la saison. Rien de superflu, tout en saveur.
              </p>
            </div>

            {/* Grid caractéristiques */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  icon: CalendarIcon,
                  title: "Carte changeante",
                  description:
                    "La carte suit le rythme de la ferme, pas celui des tendances. Tous les 15 jours, de nouvelles créations selon ce qui pousse.",
                },
                {
                  icon: ChefHatIcon,
                  title: "100% fait maison",
                  description:
                    "Du pain pétri le matin aux desserts de l'après-midi. Ici, on ne réchauffe pas, on cuisine.",
                },
                {
                  icon: HeartIcon,
                  title: "Vins naturels",
                  description:
                    "Des vignerons qu'on connaît personnellement. Des vins vivants, sans artifice, qui ont du caractère.",
                },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/20"
                  >
                    <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                      <IconComponent size={32} className="text-brand-primary" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark mb-4 group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-courier text-neutral-dark leading-relaxed">{item.description}</p>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================== NOTRE CARTE ==================== */}
        <section id="carte" className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Intro menu */}
              <div className="text-center mb-16 lg:mb-20">
                <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-semibold uppercase tracking-wider mb-6 font-courier">
                  <RestaurantIcon size={16} />
                  Notre carte
                </div>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-neutral-dark mb-6 leading-tight">
                  Les{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                    saveurs
                  </span>{" "}
                  du moment
                </h2>
                <p className="text-lg lg:text-xl font-courier text-neutral-dark max-w-2xl mx-auto leading-relaxed">
                  Notre carte change au fil de ce qui arrive de la ferme.
                  <span className="font-bold text-brand-primary"> 100% bio, 100% local</span>, tout vient de moins de 50km.
                </p>
              </div>

              {/* PDF Menu Card */}
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
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-3xl lg:text-4xl font-stencil font-bold text-neutral-dark mb-4">
                      Téléchargez notre carte
                    </h3>
                    <p className="text-lg font-courier text-neutral-dark leading-relaxed mb-8">
                      Consultez notre carte complète : entrées, plats, desserts et nos suggestions du moment.
                      Tout change selon les arrivages de la ferme.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <a
                        href="/menu-les-recoltants.pdf"
                        download
                        className="group inline-flex items-center justify-center gap-3 bg-neutral-dark text-white px-8 py-4 font-courier font-semibold hover:bg-neutral-dark/90 transition-all hover:scale-105 shadow-lg"
                      >
                        <ArrowRightIcon size={20} />
                        Télécharger le PDF
                        <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
                      </a>
                      <a
                        href="/menu-les-recoltants.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 border-2 border-neutral-dark text-neutral-dark px-8 py-4 font-courier font-semibold hover:bg-neutral-dark hover:text-white transition-all"
                      >
                        Visualiser en ligne
                        <ArrowRightIcon size={18} />
                      </a>
                    </div>

                    <p className="text-sm font-courier text-neutral-medium mt-6">
                      <span className="text-brand-primary font-semibold">Format PDF</span> • Mise à jour : Hiver 2025/2026
                    </p>
                  </div>
                </div>
              </div>

              {/* Formules rapides */}
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
                <div className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 border-2 border-brand-primary/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center">
                      <RestaurantIcon size={24} className="text-white" />
                    </div>
                    <h4 className="text-2xl font-stencil font-bold text-neutral-dark">
                      Formule Déjeuner
                    </h4>
                  </div>
                  <p className="font-courier text-neutral-dark mb-6">
                    Du lundi au samedi • Service de midi uniquement
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-neutral-light/30">
                      <p className="font-courier text-neutral-dark font-medium">Entrée + Plat ou Plat + Dessert</p>
                      <p className="text-3xl font-stencil font-bold text-brand-primary">28€</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-courier text-neutral-dark font-medium">Entrée + Plat + Dessert</p>
                      <p className="text-3xl font-stencil font-bold text-brand-primary">35€</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-neutral-dark to-neutral-medium text-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center">
                        <SparklesIcon size={24} className="text-white" />
                      </div>
                      <h4 className="text-2xl font-stencil font-bold">Menu Découverte</h4>
                    </div>
                    <p className="text-white mb-4 font-courier font-semibold">
                      5 services • Laissez-vous surprendre
                    </p>
                    <p className="text-white/90 font-courier mb-8 leading-relaxed">
                      Le chef compose votre menu selon ce qui arrive de la ferme.
                      Chaque service raconte une histoire, chaque assiette est une surprise.
                    </p>
                    <div className="flex items-baseline gap-3">
                      <p className="text-4xl font-stencil font-bold text-brand-primary">55€</p>
                      <p className="text-white/70 font-courier">par personne</p>
                    </div>
                    <p className="text-sm font-courier text-white/60 mt-3">Accord mets-vins +25€</p>
                  </div>
                </div>
              </div>

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
                <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-semibold uppercase tracking-wider mb-6">
                  <CheckCircleIcon size={16} />
                  Informations pratiques
                </div>
                <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6">
                  Tout ce qu'il faut{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                    savoir
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                {/* Horaires */}
                <div className="bg-ceruse-light rounded-2xl p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                      <CalendarIcon size={24} className="text-brand-primary" />
                    </div>
                    <h3 className="text-2xl font-stencil font-bold text-neutral-dark">Horaires</h3>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <p className="font-bold text-neutral-dark text-lg mb-2">Déjeuner</p>
                      <p className="text-neutral-medium">Lundi, Mardi, Mercredi - Samedi : 12h00 - 14h00</p>
                    </div>
                    <div className="h-px bg-neutral-light/30" />
                    <div>
                      <p className="font-bold text-neutral-dark text-lg mb-2">Dîner</p>
                      <p className="text-neutral-medium">Lundi, Mardi, Mercredi - Samedi : 19h00 - 22h00</p>
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
                <div className="bg-ceruse-light rounded-2xl p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                      <CheckCircleIcon size={24} className="text-brand-primary" />
                    </div>
                    <h3 className="text-2xl font-stencil font-bold text-neutral-dark">Bon à savoir</h3>
                    </div>
                  <div className="space-y-4">
                    {[
                      "Réservation fortement conseillée",
                      "Options végétariennes disponibles",
                      "Adaptations possibles pour allergies",
                      "Menu enfant sur demande",
                      "Carte bancaire et espèces acceptées",
                      "Accès PMR",
                    ].map((info, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                        <p className="text-neutral-medium">{info}</p>
                    </div>
                    ))}
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
