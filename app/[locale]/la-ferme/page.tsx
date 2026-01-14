"use client";

import { useTranslations } from "next-intl";
import HeroCarousel from "@/components/ui/HeroCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import {
  BasketIcon,
  LeafIcon,
  SparklesIcon,
  HeartIcon,
} from "@/components/ui/Icons";

export default function LaFerme() {
  const t = useTranslations("farm");

  const stats = [
    { value: t("hero.stats.bio.value"), label: t("hero.stats.bio.label"), sublabel: t("hero.stats.bio.sublabel") },
    { value: t("hero.stats.local.value"), label: t("hero.stats.local.label"), sublabel: t("hero.stats.local.sublabel") },
    { value: t("hero.stats.pesticide.value"), label: t("hero.stats.pesticide.label"), sublabel: t("hero.stats.pesticide.sublabel") },
    { value: t("hero.stats.seasonal.value"), label: t("hero.stats.seasonal.label"), sublabel: t("hero.stats.seasonal.sublabel") },
  ];

  const charterItems = t.raw("charter.items") as string[];

  return (
    <main className="flex-1">
      {/* ==================== HERO CAROUSEL ==================== */}
      <HeroCarousel
        images={[
          "/images/ferme/carrousel/carrousel-1.jpg",
          "/images/ferme/carrousel/carrousel-2.jpg",
          "/images/ferme/carrousel/carrousel-3.jpg",
          "/images/ferme/carrousel/carrousel-4.jpg",
        ]}
        title={t("hero.title")}
        highlightWord={t("hero.titleHighlight")}
        description={<span dangerouslySetInnerHTML={{ __html: t.raw("hero.description") }} />}
        badge={{
          text: t("hero.badge"),
        }}
        cta={{
          primary: {
            text: t("hero.cta"),
            href: "/contact",
            icon: <BasketIcon size={20} />,
          },
        }}
        stats={stats}
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
              loading="lazy"
              quality={75}
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <ScrollReveal animation="fade-up">
                <p className="text-brand-primary font-courier text-sm uppercase tracking-[0.3em] mb-6">
                  {t("story.location")}
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-stencil font-bold text-white leading-[1.1] mb-8">
                  {t("story.mainTitle")}
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
                        <span className="text-8xl lg:text-9xl font-stencil font-bold text-brand-primary/10 leading-none block">{t("story.section1.number")}</span>
                        <h3 className="text-3xl lg:text-4xl font-stencil font-bold text-neutral-dark -mt-8 lg:-mt-12 relative z-10">
                          {t("story.section1.title")}
                        </h3>
                      </div>
                    </div>
                    <div className="lg:col-span-8">
                      <p className="text-xl lg:text-2xl font-courier text-neutral-dark leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t.raw("story.section1.intro") }} />
                      <p className="text-lg font-courier text-neutral-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("story.section1.description") }} />
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
                      <p className="text-xl lg:text-2xl font-courier text-neutral-dark leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t.raw("story.section2.intro") }} />
                      <p className="text-lg font-courier text-neutral-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("story.section2.description") }} />
                    </div>
                    <div className="lg:col-span-4 lg:order-1">
                      <div className="lg:sticky lg:top-32">
                        <span className="text-8xl lg:text-9xl font-stencil font-bold text-brand-primary/10 leading-none block">{t("story.section2.number")}</span>
                        <h3 className="text-3xl lg:text-4xl font-stencil font-bold text-neutral-dark -mt-8 lg:-mt-12 relative z-10">
                          {t("story.section2.title")}
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
                        <span className="text-8xl lg:text-9xl font-stencil font-bold text-brand-primary/10 leading-none block">{t("story.section3.number")}</span>
                        <h3 className="text-3xl lg:text-4xl font-stencil font-bold text-neutral-dark -mt-8 lg:-mt-12 relative z-10">
                          {t("story.section3.title")}
                        </h3>
                      </div>
                    </div>
                    <div className="lg:col-span-8">
                      <p className="text-xl lg:text-2xl font-courier text-neutral-dark leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t.raw("story.section3.intro") }} />
                      <p className="text-lg font-courier text-neutral-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("story.section3.description") }} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>


            </div>
          </div>
        </div>
      </section>

      {/* ==================== MOSAÏQUE IMMERSIVE ==================== */}
      <section className="relative py-16 lg:py-24 bg-[#1a1916] overflow-hidden">
        {/* Texture de fond subtile */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* En-tête de section */}
          <ScrollReveal animation="fade-up" className="mb-12 lg:mb-16">
            <div className="flex items-center gap-6 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />
              <span className="text-brand-primary font-courier text-xs uppercase tracking-[0.4em]">{t("mosaic.sectionLabel")}</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-stencil font-bold text-white text-center leading-tight">
              {t("mosaic.title")} <span className="text-brand-primary">{t("mosaic.titleHighlight")}</span>
            </h2>
          </ScrollReveal>

          {/* Grille Bento Box */}
          <div className="grid grid-cols-12 gap-3 lg:gap-4 auto-rows-[140px] md:auto-rows-[180px] lg:auto-rows-[200px]">

            {/* Image 1 - Hero grande (gauche) */}
            <ScrollReveal
              animation="fade-up"
              delay={0}
              className="col-span-12 md:col-span-7 row-span-2 relative group overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/ecosysteme/ecosysteme-1.jpg"
                alt="L'écosystème de la ferme"
                fill
                loading="lazy"
                quality={85}
                className="object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors duration-700" />
              {/* Légende */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-brand-primary/90 text-white text-xs font-courier uppercase tracking-wider rounded-full mb-3">
                  {t("mosaic.labels.farm")}
                </span>
                <h3 className="text-xl lg:text-2xl font-stencil font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {t("mosaic.labels.exceptional")}
                </h3>
              </div>
              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </ScrollReveal>

            {/* Image 2 - Carrée haute droite */}
            <ScrollReveal
              animation="fade-up"
              delay={100}
              className="col-span-6 md:col-span-5 row-span-1 relative group overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/ecosysteme/ecosysteme-2.jpg"
                alt="Nos légumes bio"
                fill
                loading="lazy"
                quality={85}
                className="object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />
              <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors duration-700" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white/80 font-courier text-xs uppercase tracking-wider">{t("mosaic.labels.vegetables")}</span>
              </div>
            </ScrollReveal>

            {/* Image 3 - Verticale droite */}
            <ScrollReveal
              animation="fade-up"
              delay={150}
              className="col-span-6 md:col-span-5 row-span-2 relative group overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/ecosysteme/ecosysteme-3.jpg"
                alt="Le potager"
                fill
                loading="lazy"
                quality={85}
                className="object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
              <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors duration-700" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-white/80 font-courier text-xs uppercase tracking-wider">{t("mosaic.labels.garden")}</span>
              </div>
              {/* Ligne décorative */}
              <div className="absolute top-6 left-6 w-8 h-px bg-brand-primary/60 group-hover:w-16 transition-all duration-500" />
            </ScrollReveal>

            {/* Image 4 - Horizontale bas gauche */}
            <ScrollReveal
              animation="fade-up"
              delay={200}
              className="col-span-12 md:col-span-7 row-span-1 relative group overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/ecosysteme/ecosysteme-4.jpg"
                alt="La récolte"
                fill
                loading="lazy"
                quality={85}
                className="object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
              <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors duration-700" />
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-brand-primary rounded-full" />
                <span className="text-white/90 font-courier text-xs uppercase tracking-wider">{t("mosaic.labels.harvest")}</span>
              </div>
            </ScrollReveal>

            {/* Image 5 - Petite carrée */}
            <ScrollReveal
              animation="fade-up"
              delay={250}
              className="col-span-6 md:col-span-4 row-span-1 relative group overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/ecosysteme/ecosysteme-5.jpg"
                alt="Le terroir"
                fill
                loading="lazy"
                quality={85}
                className="object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors duration-700" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white/80 font-courier text-xs uppercase tracking-wider">{t("mosaic.labels.terroir")}</span>
              </div>
            </ScrollReveal>

            {/* Image 6 - Large finale */}
            <ScrollReveal
              animation="fade-up"
              delay={300}
              className="col-span-6 md:col-span-8 row-span-1 relative group overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/ecosysteme/ecosysteme-6.jpg"
                alt="Notre équipe"
                fill
                loading="lazy"
                quality={85}
                className="object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 67vw"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-black/40" />
              <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors duration-700" />
              <div className="absolute bottom-4 right-4 text-right">
                <span className="text-white/80 font-courier text-xs uppercase tracking-wider">{t("mosaic.labels.team")}</span>
              </div>
              {/* Corner accent */}
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/20 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ==================== NOS PRODUCTEURS - MANIFESTE ==================== */}
      <section className="relative py-24 lg:py-32 bg-[#f8f6f3] overflow-hidden">
        {/* Motif décoratif de fond */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="diagonal-lines" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="20" stroke="#2d2820" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* En-tête avec grande citation */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 lg:mb-24">
            {/* Colonne gauche - Numéro décoratif */}
            <div className="lg:col-span-2 hidden lg:block">
              <ScrollReveal animation="fade-right">
                <div className="sticky top-32">
                  <span className="text-[12rem] font-stencil font-bold text-brand-primary/10 leading-none select-none">
                    &amp;
                  </span>
                </div>
              </ScrollReveal>
            </div>

            {/* Colonne droite - Citation manifeste */}
            <div className="lg:col-span-10">
              <ScrollReveal animation="fade-up">
                <p className="text-brand-primary font-courier text-sm uppercase tracking-[0.3em] mb-6">
                  {t("producers.sectionLabel")}
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <blockquote className="relative">
                  <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-neutral-dark leading-[1.15] mb-8">
                    {t("producers.title")}
                    <span className="text-brand-primary"> {t("producers.titleHighlight")} </span>
                    {t("producers.title2")}
                  </p>
                  <div className="w-24 h-1 bg-brand-primary"></div>
                </blockquote>
              </ScrollReveal>
            </div>
          </div>

          {/* Section intro - Relation directe */}
          <ScrollReveal animation="fade-up" className="mb-16 lg:mb-24">
            <div className="relative">
              {/* Ligne décorative gauche */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-primary to-transparent hidden lg:block" />

              <div className="lg:pl-12 lg:ml-8">
                <div className="flex items-start gap-6">
                  <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-brand-primary/10 items-center justify-center">
                    <HeartIcon size={28} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark mb-4">
                      {t("producers.relationTitle")}
                    </h3>
                    <p className="font-courier text-neutral-medium leading-relaxed max-w-3xl">
                      {t("producers.relationDescription")}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mt-6">
                      <span className="px-4 py-2 bg-neutral-dark/5 rounded-full font-courier text-sm text-neutral-dark">
                        {t("producers.tags.shortCircuit")}
                      </span>
                      <span className="px-4 py-2 bg-neutral-dark/5 rounded-full font-courier text-sm text-neutral-dark">
                        {t("producers.tags.directRelation")}
                      </span>
                      <span className="px-4 py-2 bg-neutral-dark/5 rounded-full font-courier text-sm text-neutral-dark">
                        {t("producers.tags.craftsmanship")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Grille des piliers - Layout asymétrique */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Pilier 1 - Grand format */}
            <ScrollReveal animation="fade-up" delay={0} className="md:row-span-2">
              <div className="h-full bg-neutral-dark rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-bl-[100px] transition-all duration-500 group-hover:w-40 group-hover:h-40" />

                <div className="relative z-10 h-full flex flex-col">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary/20 text-brand-primary font-stencil font-bold text-xl mb-6">
                    {t("producers.pillar1.number")}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-stencil font-bold text-white mb-4">
                    {t("producers.pillar1.title")}
                  </h3>
                  <p className="font-courier text-white/80 leading-relaxed mb-6">
                    {t("producers.pillar1.description")}
                  </p>
                  {/* Points clés */}
                  <ul className="space-y-3 flex-grow">
                    {(t.raw("producers.pillar1.points") as string[]).map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-primary/30 flex items-center justify-center mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
                        </span>
                        <span className="font-courier text-white/70 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Ligne décorative bas */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <span className="text-brand-primary font-courier text-sm uppercase tracking-wider">{t("producers.pillar1.label")}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Pilier 2 - Format moyen */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_24px_rgba(45,40,32,0.06)] relative overflow-hidden group h-full">
                {/* Bordure accent */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-brand-primary transition-all duration-500 group-hover:h-full" />

                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary font-stencil font-bold text-xl mb-6">
                  {t("producers.pillar2.number")}
                </span>
                <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark mb-4">
                  {t("producers.pillar2.title")}
                </h3>
                <p className="font-courier text-neutral-medium leading-relaxed">
                  {t("producers.pillar2.description")}
                </p>
              </div>
            </ScrollReveal>

            {/* Pilier 3 - Format moyen */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-3xl p-8 lg:p-10 relative overflow-hidden group h-full border border-brand-primary/20">
                {/* Icon décoratif */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10">
                  <LeafIcon size={96} className="text-brand-primary" />
                </div>

                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary/20 text-brand-primary font-stencil font-bold text-xl mb-6">
                  {t("producers.pillar3.number")}
                </span>
                <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark mb-4">
                  {t("producers.pillar3.title")}
                </h3>
                <p className="font-courier text-neutral-medium leading-relaxed">
                  {t("producers.pillar3.description")}
                </p>
              </div>
            </ScrollReveal>
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
                      {t("charter.title")}
                    </textPath>
                  </text>
                </svg>
              </div>
            </ScrollReveal>

            {/* Liste des principes */}
            <ul className="space-y-1 lg:space-y-2">
              {charterItems.map((item, index) => (
                <li key={index}>
                  {index > 0 && (
                    <div className="flex items-center justify-center">
                      <span className="text-white font-courier text-lg lg:text-xl">—</span>
                    </div>
                  )}
                  <div className="flex items-center justify-center">
                    <p className="font-courier text-white text-lg lg:text-xl leading-relaxed text-center" dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}
