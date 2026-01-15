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
import GalleryCarousel from "@/components/ui/GalleryCarousel";

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
        <div className="bg-neutral-dark py-12 lg:py-32 relative">
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
                <p className="text-brand-primary font-courier text-xs lg:text-sm uppercase tracking-[0.2em] lg:tracking-[0.3em] mb-4 lg:mb-6">
                  {t("story.location")}
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-stencil font-bold text-white leading-[1.15] lg:leading-[1.1] mb-6 lg:mb-8">
                  {t("story.mainTitle")}
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-left" delay={200}>
                <div className="w-16 lg:w-24 h-1 bg-brand-primary"></div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Contenu éditorial - Style magazine */}
        <div className="bg-white py-12 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">

              {/* Section 1 - À la ferme (texte large + accent) */}
              <ScrollReveal animation="fade-up">
                <div className="mb-12 lg:mb-16">
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                    <div className="lg:col-span-4">
                      <div className="lg:sticky lg:top-32 flex items-baseline gap-3 lg:block">
                        <span className="text-6xl lg:text-9xl font-stencil font-bold text-brand-primary/10 leading-none lg:block">{t("story.section1.number")}</span>
                        <h3 className="text-2xl lg:text-4xl font-stencil font-bold text-neutral-dark lg:-mt-12 relative z-10">
                          {t("story.section1.title")}
                        </h3>
                      </div>
                    </div>
                    <div className="lg:col-span-8">
                      <p className="text-lg lg:text-2xl font-courier text-neutral-dark leading-relaxed mb-4 lg:mb-6" dangerouslySetInnerHTML={{ __html: t.raw("story.section1.intro") }} />
                      <p className="text-base lg:text-lg font-courier text-neutral-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("story.section1.description") }} />
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
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                    <div className="lg:col-span-8 lg:order-2 order-2">
                      <p className="text-lg lg:text-2xl font-courier text-neutral-dark leading-relaxed mb-4 lg:mb-6" dangerouslySetInnerHTML={{ __html: t.raw("story.section2.intro") }} />
                      <p className="text-base lg:text-lg font-courier text-neutral-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("story.section2.description") }} />
                    </div>
                    <div className="lg:col-span-4 lg:order-1 order-1">
                      <div className="lg:sticky lg:top-32 flex items-baseline gap-3 lg:block">
                        <span className="text-6xl lg:text-9xl font-stencil font-bold text-brand-primary/10 leading-none lg:block">{t("story.section2.number")}</span>
                        <h3 className="text-2xl lg:text-4xl font-stencil font-bold text-neutral-dark lg:-mt-12 relative z-10">
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
                <div className="mb-8 lg:mb-16">
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                    <div className="lg:col-span-4">
                      <div className="lg:sticky lg:top-32 flex items-baseline gap-3 lg:block">
                        <span className="text-6xl lg:text-9xl font-stencil font-bold text-brand-primary/10 leading-none lg:block">{t("story.section3.number")}</span>
                        <h3 className="text-2xl lg:text-4xl font-stencil font-bold text-neutral-dark lg:-mt-12 relative z-10">
                          {t("story.section3.title")}
                        </h3>
                      </div>
                    </div>
                    <div className="lg:col-span-8">
                      <p className="text-lg lg:text-2xl font-courier text-neutral-dark leading-relaxed mb-4 lg:mb-6" dangerouslySetInnerHTML={{ __html: t.raw("story.section3.intro") }} />
                      <p className="text-base lg:text-lg font-courier text-neutral-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("story.section3.description") }} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>


            </div>
          </div>
        </div>
      </section>

      {/* ==================== GALERIE PHOTO ==================== */}
      <GalleryCarousel
        sectionLabel={t("mosaic.sectionLabel")}
        title={t("mosaic.title")}
        titleHighlight={t("mosaic.titleHighlight")}
        images={[
          {
            src: "/images/ecosysteme/ecosysteme-1.jpg",
            alt: "L'écosystème de la ferme",
            colSpan: "col-span-1 lg:col-span-5",
            rowSpan: "lg:row-span-2",
            height: "h-[280px] lg:h-[580px]",
            sizes: "(max-width: 1024px) 50vw, 40vw",
          },
          {
            src: "/images/ecosysteme/ecosysteme-2.jpg",
            alt: "Nos légumes bio",
            colSpan: "col-span-1 lg:col-span-4",
            height: "h-[180px] lg:h-[280px]",
            sizes: "(max-width: 1024px) 50vw, 33vw",
          },
          {
            src: "/images/ecosysteme/ecosysteme-3.jpg",
            alt: "Le potager",
            colSpan: "col-span-1 lg:col-span-3",
            height: "h-[180px] lg:h-[280px]",
            sizes: "(max-width: 1024px) 50vw, 25vw",
          },
          {
            src: "/images/ecosysteme/ecosysteme-4.jpg",
            alt: "La récolte",
            colSpan: "col-span-1 lg:col-span-3",
            height: "h-[200px] lg:h-[288px]",
            sizes: "(max-width: 1024px) 50vw, 25vw",
          },
          {
            src: "/images/ecosysteme/ecosysteme-5.jpg",
            alt: "Le terroir",
            colSpan: "col-span-1 lg:col-span-4",
            height: "h-[200px] lg:h-[288px]",
            sizes: "(max-width: 1024px) 50vw, 33vw",
          },
        ]}
      />

      {/* ==================== NOS PRODUCTEURS ==================== */}
      <section className="py-16 lg:py-32 bg-[#f8f6f3]">
        <div className="container mx-auto px-4 lg:px-8">
          {/* En-tête */}
          <div className="max-w-6xl mx-auto mb-12 lg:mb-20">
            <ScrollReveal animation="fade-up">
              <p className="text-brand-primary font-courier text-xs lg:text-sm uppercase tracking-[0.2em] lg:tracking-[0.3em] mb-4 lg:mb-6">
                {t("producers.sectionLabel")}
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-neutral-dark leading-[1.1]">
                {t("producers.title")}
                <span className="text-brand-primary"> {t("producers.titleHighlight")} </span>
                {t("producers.title2")}
              </h2>
            </ScrollReveal>
          </div>

          {/* Contenu avec layout 01/02/03 */}
          <div className="max-w-6xl mx-auto">
            {/* Section 01 - Rémunération juste */}
            <ScrollReveal animation="fade-up">
              <div className="mb-12 lg:mb-16">
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                  <div className="lg:col-span-4">
                    <div className="lg:sticky lg:top-32 flex items-baseline gap-3 lg:block">
                      <span className="text-6xl lg:text-9xl font-stencil font-bold text-brand-primary/10 leading-none lg:block">{t("producers.pillar1.number")}</span>
                      <h3 className="text-2xl lg:text-4xl font-stencil font-bold text-neutral-dark lg:-mt-12 relative z-10">
                        {t("producers.pillar1.title")}
                      </h3>
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-base lg:text-lg font-courier text-neutral-medium leading-relaxed">
                      {t("producers.pillar1.description")}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Séparateur visuel */}
            <div className="flex items-center gap-4 mb-12 lg:mb-16">
              <div className="flex-1 h-px bg-neutral-light"></div>
              <HeartIcon size={24} className="text-brand-primary" />
              <div className="flex-1 h-px bg-neutral-light"></div>
            </div>

            {/* Section 02 - Agriculture paysanne (inversé) */}
            <ScrollReveal animation="fade-up">
              <div className="mb-12 lg:mb-16">
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                  <div className="lg:col-span-8 lg:order-2 order-2">
                    <p className="text-base lg:text-lg font-courier text-neutral-medium leading-relaxed">
                      {t("producers.pillar2.description")}
                    </p>
                  </div>
                  <div className="lg:col-span-4 lg:order-1 order-1">
                    <div className="lg:sticky lg:top-32 flex items-baseline gap-3 lg:block">
                      <span className="text-6xl lg:text-9xl font-stencil font-bold text-brand-primary/10 leading-none lg:block">{t("producers.pillar2.number")}</span>
                      <h3 className="text-2xl lg:text-4xl font-stencil font-bold text-neutral-dark lg:-mt-12 relative z-10">
                        {t("producers.pillar2.title")}
                      </h3>
                    </div>
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

            {/* Section 03 - Races & variétés anciennes */}
            <ScrollReveal animation="fade-up">
              <div>
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                  <div className="lg:col-span-4">
                    <div className="lg:sticky lg:top-32 flex items-baseline gap-3 lg:block">
                      <span className="text-6xl lg:text-9xl font-stencil font-bold text-brand-primary/10 leading-none lg:block">{t("producers.pillar3.number")}</span>
                      <h3 className="text-2xl lg:text-4xl font-stencil font-bold text-neutral-dark lg:-mt-12 relative z-10">
                        {t("producers.pillar3.title")}
                      </h3>
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-base lg:text-lg font-courier text-neutral-medium leading-relaxed">
                      {t("producers.pillar3.description")}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ==================== CHARTE DES RÉCOLTANTS ==================== */}
      <section className="py-16 lg:py-32 texture-terracotta-cmyk-image relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Titre principal - Version mobile */}
            <ScrollReveal animation="fade-up" duration={800}>
              <h2 className="md:hidden text-3xl font-stencil font-bold text-white text-center uppercase tracking-wider mb-8">
                {t("charter.title")}
              </h2>
            </ScrollReveal>

            {/* Titre principal - Version desktop avec arc */}
            <ScrollReveal animation="scale" duration={800}>
              <div className="hidden md:flex mb-6 justify-center">
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
            <ul className="space-y-2 lg:space-y-2">
              {charterItems.map((item, index) => (
                <li key={index}>
                  {index > 0 && (
                    <div className="flex items-center justify-center py-1">
                      <span className="text-white/60 font-courier text-base lg:text-xl">—</span>
                    </div>
                  )}
                  <div className="flex items-center justify-center px-2">
                    <p className="font-courier text-white text-base lg:text-xl leading-relaxed text-center" dangerouslySetInnerHTML={{ __html: item }} />
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
