"use client";

import ScrollReveal, { RevealGroup } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  LeafIcon,
  ArrowRightIcon,
  SparklesIcon,
  HandshakeIcon,
  RecycleIcon,
  HeartIcon,
  StarIcon,
  UsersIcon,
} from "@/components/ui/Icons";
import CardsCarousel from "@/components/ui/CardsCarousel";

export default function Home() {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");

  const stats = [
    { key: "organic" },
    { key: "local" },
    { key: "pesticide" },
    { key: "seasonal" },
  ];

  const valueCards = [
    { key: "card1", icon: LeafIcon },
    { key: "card2", icon: HandshakeIcon },
    { key: "card3", icon: RecycleIcon },
    { key: "card4", icon: UsersIcon },
  ];

  return (
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
            quality={80}
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
                {t("pageLabel")}
              </div>
            </div>

            {/* Contenu principal avec marge commune */}
            <div className="pt-8 lg:pt-0 space-y-6 lg:space-y-8 text-center lg:text-left lg:ml-0">

              {/* Surtitre style magazine */}
              <div className="inline-block animate-fade-in-up">
                <div className="flex items-center gap-3 text-brand-primary font-courier text-xs uppercase tracking-[0.3em] font-bold">
                  <div className="w-12 h-px bg-brand-primary"></div>
                  {t("heroSubtitle")}
                </div>
              </div>

              {/* Titre Principal */}
              <div className="animate-fade-in-up stagger-1">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-stencil font-bold text-white leading-[0.95] tracking-tighter">
                  {t("heroTitle1")}
                </h1>
                <div className="relative inline-block mt-2">
                  <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-stencil font-bold text-white leading-[0.95] tracking-tighter">
                    {t("heroTitle2")}{" "}
                    <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                      {t("heroTitle3")}
                    </span>
                  </h1>
                  <div className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-brand-primary/30 rounded-full"></div>
                </div>
              </div>

              {/* Description */}
              <div className="max-w-xl animate-fade-in-up stagger-2">
                <p className="text-lg lg:text-xl font-courier text-white leading-relaxed">
                  {t("heroDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in stagger-5">
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-xs font-courier uppercase tracking-widest font-medium">{tCommon("discover")}</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ==================== STATS BANNER ==================== */}
      <section className="py-12 lg:py-16 bg-white border-y-2 border-neutral-light/20">
        <div className="container mx-auto px-4 lg:px-8">
          <RevealGroup className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center reveal-item">
                <div className="text-5xl lg:text-6xl font-stencil font-bold text-brand-primary mb-3">
                  {t(`stats.${stat.key}.value`)}
                </div>
                <div className="font-courier font-bold text-neutral-dark mb-1">
                  {t(`stats.${stat.key}.label`)}
                </div>
                <div className="text-sm font-courier text-neutral-medium">
                  {t(`stats.${stat.key}.sublabel`)}
                </div>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ==================== NOS VALEURS ==================== */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-ceruse-light to-white relative overflow-hidden">
        <div className="absolute inset-0 texture-ceruse-cmyk opacity-40" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* En-tête de section */}
          <div className="text-center mb-16 lg:mb-20">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                <HeartIcon size={16} />
                {t("values.sectionLabel")}
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-neutral-dark mb-4 leading-tight max-w-3xl mx-auto">
                {t("values.title")}{" "}
                <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                  {t("values.titleHighlight")}
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <p
                className="text-lg lg:text-xl font-courier text-neutral-dark leading-relaxed max-w-4xl mx-auto mb-4"
                dangerouslySetInnerHTML={{ __html: t.raw("values.description1") }}
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p
                className="text-lg lg:text-xl font-courier text-neutral-dark leading-relaxed max-w-5xl mx-auto"
                dangerouslySetInnerHTML={{ __html: t.raw("values.description2") }}
              />
            </ScrollReveal>
          </div>

          {/* Grid des valeurs */}
          <CardsCarousel
            desktopGridCols="md:grid-cols-2 lg:grid-cols-4"
            gap="gap-6 lg:gap-8"
            cardWidth="w-[80%]"
          >
            {valueCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-500 md:hover:-translate-y-2 border border-neutral-light/20 h-full">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent size={24} className="text-brand-primary lg:hidden" />
                    <IconComponent size={28} className="text-brand-primary hidden lg:block" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-stencil font-bold text-brand-primary mb-2 lg:mb-3">
                    {t(`values.${card.key}.title`)}
                  </h3>
                  <p
                    className="font-courier text-neutral-dark leading-relaxed text-sm lg:text-base"
                    dangerouslySetInnerHTML={{ __html: t.raw(`values.${card.key}.description`) }}
                  />
                </div>
              );
            })}
          </CardsCarousel>
        </div>
      </section>

      {/* ==================== LA CHARTE DES RÉCOLTANTS ==================== */}
      <section id="charte-section" className="py-16 lg:py-32 texture-terracotta-cmyk-image relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Titre principal - Version mobile */}
            <ScrollReveal animation="fade-up" duration={800}>
              <h2 className="md:hidden text-2xl sm:text-3xl font-stencil font-bold text-white text-center uppercase tracking-wider mb-8">
                {t("charter.title")}
              </h2>
            </ScrollReveal>

            {/* Titre principal - Version desktop avec arc */}
            <ScrollReveal animation="scale" duration={800}>
              <div className="hidden md:flex mb-6 justify-center">
                <svg viewBox="0 0 1100 200" className="w-full max-w-5xl h-auto">
                  <defs>
                    <path id="arc-path" d="M 30 150 Q 550 30 1070 150" fill="none" />
                  </defs>
                  <text className="text-white font-stencil font-bold uppercase" fontSize="70" fill="currentColor">
                    <textPath href="#arc-path" startOffset="50%" textAnchor="middle">
                      {t("charter.title")}
                    </textPath>
                  </text>
                </svg>
              </div>
            </ScrollReveal>

            {/* Liste des principes */}
            <ul className="space-y-2 lg:space-y-2">
              {(t.raw("charter.items") as string[]).map((item: string, index: number) => (
                <li key={index}>
                  {index > 0 && (
                    <div className="flex items-center justify-center py-1">
                      <span className="text-white/60 font-courier text-base lg:text-xl">—</span>
                    </div>
                  )}
                  <div className="flex items-center justify-center px-2">
                    <p
                      className="font-courier text-white text-sm sm:text-base lg:text-xl leading-relaxed text-center"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ==================== NOS SERVICES ==================== */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-ceruse-light to-white relative overflow-hidden">
        <div className="absolute inset-0 texture-ceruse-cmyk opacity-30" />
        <div className="container mx-auto px-0 lg:px-4 relative z-10">
          {/* Intro Section */}
          <div className="max-w-5xl mx-auto text-center mb-16 lg:mb-20 px-4 lg:px-0">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                <SparklesIcon size={16} />
                {t("ecosystem.sectionLabel")}
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-neutral-dark mb-6 leading-tight">
                {t("ecosystem.title1")}
                <br />
                <span className="text-neutral-dark font-stencil font-bold">
                  {t("ecosystem.title2")}{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent font-bold">
                    {t("ecosystem.titleHighlight")}
                  </span>
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p
                className="text-lg lg:text-xl font-courier text-neutral-dark leading-relaxed max-w-5xl mx-auto mb-6"
                dangerouslySetInnerHTML={{ __html: t.raw("ecosystem.description1") }}
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={250}>
              <p
                className="text-lg lg:text-xl font-courier text-neutral-dark leading-relaxed max-w-5xl mx-auto mb-6"
                dangerouslySetInnerHTML={{ __html: t.raw("ecosystem.description2") }}
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300}>
              <p
                className="text-lg lg:text-xl font-courier text-neutral-dark leading-relaxed max-w-5xl mx-auto"
                dangerouslySetInnerHTML={{ __html: t.raw("ecosystem.description3") }}
              />
            </ScrollReveal>
          </div>

          {/* Grille d'images - Carrousel mobile / Grille desktop */}
          <div className="mt-10 lg:mt-16 w-full">
            {/* Version mobile - Carrousel horizontal */}
            <CardsCarousel
              desktopGridCols="grid-cols-3"
              gap="gap-2 lg:gap-3"
              cardWidth="w-[70%]"
              showDotsOnMobile={true}
            >
              {[
                "/images/ecosysteme/ecosysteme-1.jpg",
                "/images/ecosysteme/ecosysteme-2.jpg",
                "/images/ecosysteme/ecosysteme-3.jpg",
                "/images/ecosysteme/ecosysteme-4.jpg",
                "/images/ecosysteme/ecosysteme-5.jpg",
                "/images/ecosysteme/ecosysteme-6.jpg",
              ].map((src, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden relative group rounded-lg"
                >
                  <Image
                    src={src}
                    alt={`Ecosystem ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 70vw, (max-width: 1024px) 33vw, 400px"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    quality={80}
                    loading="lazy"
                  />
                </div>
              ))}
            </CardsCarousel>
          </div>
        </div>
      </section>

      {/* ==================== TÉMOIGNAGES ==================== */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 texture-ceruse-light opacity-15" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* En-tête */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                <StarIcon size={16} />
                {t("testimonials.sectionLabel")}
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6 leading-tight">
                {t("testimonials.title")}{" "}
                <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                  {t("testimonials.titleHighlight")}
                </span>{" "}
                {t("testimonials.title2")}
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="flex items-center justify-center gap-2 text-2xl">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} size={28} className="text-brand-primary" />
                ))}
                <a
                  href="https://www.google.com/search?q=Les+R%C3%A9coltants+Avis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 text-lg font-stencil font-bold text-neutral-dark hover:text-brand-primary transition-colors underline"
                >
                  4,8/5
                </a>
                <a
                  href="https://www.google.com/search?q=Les+R%C3%A9coltants+Avis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-courier text-neutral-dark hover:text-brand-primary transition-colors underline"
                >
                  (1 423 {tCommon("reviews")})
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Grid témoignages - Les témoignages restent en français car ce sont de vrais avis */}
          <CardsCarousel
            desktopGridCols="md:grid-cols-2 lg:grid-cols-3"
            gap="gap-6 lg:gap-8"
            cardWidth="w-[85%]"
          >
            {/* Témoignage 1 */}
            <div className="bg-ceruse-light rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
              <div className="flex gap-1 mb-3 lg:mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} size={16} className="text-brand-primary" />
                ))}
              </div>
              <p className="font-courier text-neutral-dark leading-relaxed mb-5 lg:mb-6 italic text-sm lg:text-base">
                &quot;J&apos;ai adoré cette table rue Sainte Colombe ! On a l&apos;impression vu de l&apos;extérieur que la salle est relativement petite, eh bien sachez que le restaurant est tout en longueur avec une autre salle très spacieuse au fond. J&apos;ai choisi un dahl de graines de sarrasin + œuf parfait, accompagné d&apos;un jus maison gingembre, pomme et carotte. Je me suis régalée !&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-brand-primary font-stencil font-bold text-sm lg:text-base">LM</span>
                </div>
                <div>
                  <p className="font-stencil font-bold text-neutral-dark text-sm lg:text-base">Laurence M.</p>
                  <p className="text-xs lg:text-sm font-courier text-neutral-dark">{tCommon("googleReview")}</p>
                </div>
              </div>
            </div>

            {/* Témoignage 2 */}
            <div className="bg-ceruse-light rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
              <div className="flex gap-1 mb-3 lg:mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} size={16} className="text-brand-primary" />
                ))}
              </div>
              <p className="font-courier text-neutral-dark leading-relaxed mb-5 lg:mb-6 italic text-sm lg:text-base">
                &quot;Nous avons adoré notre expérience chez Les Récoltants. La cuisine est vraiment excellente, avec des produits ultra-frais qui viennent directement de leur ferme ou de producteurs locaux.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-brand-primary font-stencil font-bold text-sm lg:text-base">HR</span>
                </div>
                <div>
                  <p className="font-stencil font-bold text-neutral-dark text-sm lg:text-base">Helma Ravenel</p>
                  <p className="text-xs lg:text-sm font-courier text-neutral-dark">{tCommon("googleReview")}</p>
                </div>
              </div>
            </div>

            {/* Témoignage 3 */}
            <div className="bg-ceruse-light rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
              <div className="flex gap-1 mb-3 lg:mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} size={16} className="text-brand-primary" />
                ))}
              </div>
              <p className="font-courier text-neutral-dark leading-relaxed mb-5 lg:mb-6 italic text-sm lg:text-base">
                &quot;Quel plaisir de pouvoir attribuer une note excellente à un restaurant qui le mérite vraiment ! Nous avons adoré cette expérience en famille : de l&apos;accueil chaleureux à la qualité des plats.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-brand-primary font-stencil font-bold text-sm lg:text-base">C</span>
                </div>
                <div>
                  <p className="font-stencil font-bold text-neutral-dark text-sm lg:text-base">Catherine</p>
                  <p className="text-xs lg:text-sm font-courier text-neutral-dark">{tCommon("googleReview")}</p>
                </div>
              </div>
            </div>
          </CardsCarousel>
        </div>
      </section>

      {/* ==================== BON CADEAU ==================== */}
      <section id="bon-cadeau-section" className="py-20 lg:py-28 texture-terracotta-cmyk-image relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2 text-white/80 text-sm font-courier font-semibold uppercase tracking-wider mb-6">
                <HeartIcon size={16} />
                {t("giftCard.sectionLabel")}
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-white mb-6 leading-tight">
                {t("giftCard.title")}
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-xl lg:text-2xl font-courier text-white/90 leading-relaxed mb-10">
                {t("giftCard.description")}
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
                {t("giftCard.cta")}
                <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
