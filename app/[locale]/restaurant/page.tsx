"use client";

import { useTranslations } from "next-intl";
import HeroCarousel from "@/components/ui/HeroCarousel";
import ScrollReveal, { RevealGroup } from "@/components/ui/ScrollReveal";
import {
  CalendarIcon,
  RestaurantIcon,
  CheckCircleIcon,
  HeartIcon,
  ChefHatIcon,
  ArrowRightIcon,
} from "@/components/ui/Icons";
import GalleryCarousel from "@/components/ui/GalleryCarousel";
import CardsCarousel from "@/components/ui/CardsCarousel";

export default function Restaurant() {
  const t = useTranslations("restaurant");

  return (
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
        title={t("hero.title")}
        highlightWord={t("hero.titleHighlight")}
        description={<span dangerouslySetInnerHTML={{ __html: t.raw("hero.description") }} />}
        badge={{
          text: t("hero.badge"),
        }}
      />

      {/* ==================== NOTRE CUISINE - MANIFESTE ==================== */}
      <section className="py-24 lg:py-40 bg-ceruse-light relative overflow-hidden">
        {/* Fond texturé subtil */}
        <div className="absolute inset-0 texture-ceruse-cmyk opacity-40" />

        {/* Élément décoratif - Grande feuille stylisée */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.04] pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full fill-brand-primary">
            <path d="M100 10 C60 40 20 80 30 130 C40 180 80 190 100 190 C120 190 160 180 170 130 C180 80 140 40 100 10 M100 30 C100 30 100 170 100 170" />
          </svg>
        </div>

        {/* Ligne verticale décorative */}
        <div className="absolute left-8 lg:left-16 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-brand-primary/20 to-transparent hidden lg:block" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* En-tête avec badge décalé */}
          <div className="max-w-5xl mx-auto mb-20 lg:mb-28">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-brand-primary" />
                <span className="text-brand-primary text-sm font-courier font-semibold uppercase tracking-[0.2em]">
                  {t("philosophy.sectionLabel")}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <h2 className="text-5xl lg:text-7xl xl:text-8xl font-stencil font-bold text-neutral-dark leading-[0.9] mb-8">
                {t("philosophy.title")}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                    {t("philosophy.titleHighlight")}
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-brand-primary/30 -skew-x-12" />
                </span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Contenu principal - Layout asymétrique */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

              {/* Colonne gauche - Premier paragraphe avec grande citation */}
              <div className="lg:col-span-7">
                <ScrollReveal animation="fade-left" delay={200}>
                  <div className="relative">
                    {/* Grande guillemet décorative */}
                    <span className="absolute -top-8 -left-4 lg:-left-8 text-[120px] lg:text-[180px] font-stencil text-brand-primary/10 leading-none select-none pointer-events-none">
                      &quot;
                    </span>

                    <div className="relative bg-white/80 backdrop-blur-sm p-8 lg:p-12 border-l-4 border-brand-primary">
                      <p
                        className="text-lg lg:text-xl font-courier text-neutral-dark leading-[1.9] relative z-10"
                        dangerouslySetInnerHTML={{ __html: t.raw("philosophy.paragraph1") }}
                      />
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Colonne droite - Deuxième paragraphe avec accent */}
              <div className="lg:col-span-5 lg:mt-24">
                <ScrollReveal animation="fade-right" delay={400}>
                  <div className="relative">
                    {/* Accent décoratif */}
                    <div className="absolute -top-6 right-0 flex items-center gap-2">
                      <span className="text-xs font-courier uppercase tracking-[0.3em] text-neutral-medium">{t("philosophy.commitmentLabel")}</span>
                      <div className="h-px w-8 bg-brand-primary" />
                    </div>

                    <div className="bg-gradient-to-br from-brand-primary to-brand-primary-dark p-8 lg:p-10 relative overflow-hidden group">
                      {/* Pattern de fond subtil */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
                        }} />
                      </div>

                      <p
                        className="text-lg lg:text-xl font-courier text-white leading-[1.9] relative z-10"
                        dangerouslySetInnerHTML={{ __html: t.raw("philosophy.paragraph2") }}
                      />

                      {/* Signature décorative */}
                      <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-3">
                        <ChefHatIcon size={20} className="text-white/70" />
                        <span className="font-stencil text-white/80 text-sm tracking-wide">Les Récoltants</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Citation finale centrée */}
            <ScrollReveal animation="fade-up" delay={600}>
              <div className="mt-20 lg:mt-28 text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-4 text-neutral-medium">
                  <div className="h-px w-12 bg-neutral-light" />
                  <p className="font-courier text-sm lg:text-base italic">
                    &quot;{t("philosophy.quote")}&quot;
                  </p>
                  <div className="h-px w-12 bg-neutral-light" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== GALERIE PHOTO ==================== */}
      <GalleryCarousel
        sectionLabel={t("gallery.sectionLabel")}
        title={t("gallery.title")}
        titleHighlight={t("gallery.titleHighlight")}
        quote={t("gallery.quote")}
        images={[
          {
            src: "/images/restaurant/carrousel/carrousel-1.jpg",
            alt: "Plat signature des Récoltants",
            label: t("gallery.labels.creative"),
            colSpan: "col-span-1 lg:col-span-5",
            rowSpan: "lg:row-span-2",
            height: "h-[280px] lg:h-[580px]",
            sizes: "(max-width: 1024px) 50vw, 40vw",
          },
          {
            src: "/images/restaurant/carrousel/carrousel-2.jpg",
            alt: "Détail de présentation",
            label: t("gallery.labels.local"),
            colSpan: "col-span-1 lg:col-span-4",
            height: "h-[180px] lg:h-[280px]",
            sizes: "(max-width: 1024px) 50vw, 33vw",
          },
          {
            src: "/images/restaurant/carrousel/carrousel-3.jpg",
            alt: "Ambiance du restaurant",
            label: t("gallery.labels.knowHow"),
            colSpan: "col-span-1 lg:col-span-3",
            height: "h-[180px] lg:h-[280px]",
            sizes: "(max-width: 1024px) 50vw, 25vw",
          },
          {
            src: "/images/restaurant/carrousel/carrousel-4.jpg",
            alt: "Le chef en cuisine",
            label: t("gallery.labels.behindScenes"),
            colSpan: "col-span-1 lg:col-span-3",
            height: "h-[200px] lg:h-[288px]",
            sizes: "(max-width: 1024px) 50vw, 25vw",
          },
          {
            src: "/images/restaurant/carrousel/carrousel-5.jpg",
            alt: "Table dressée",
            label: t("gallery.labels.atmosphere"),
            colSpan: "col-span-1 lg:col-span-4",
            height: "h-[200px] lg:h-[288px]",
            sizes: "(max-width: 1024px) 50vw, 33vw",
          },
        ]}
      />


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

      {/* ==================== INFOS PRATIQUES ==================== */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Texture de fond - Ceruse normal (section secondaire) */}
        <div className="absolute inset-0 texture-ceruse-light opacity-15" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <ScrollReveal animation="fade-up">
                <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-semibold uppercase tracking-wider mb-6">
                  <CheckCircleIcon size={16} />
                  {t("info.sectionLabel")}
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6">
                  {t("info.title")}{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                    {t("info.titleHighlight")}
                  </span>
            </h2>
              </ScrollReveal>
            </div>

            <CardsCarousel
              desktopGridCols="md:grid-cols-2 lg:grid-cols-3"
              gap="gap-8 lg:gap-10"
              cardWidth="w-[85%]"
            >
              {/* Horaires */}
              <div className="bg-ceruse-light rounded-2xl p-6 lg:p-10 h-full">
                <div className="flex items-center gap-3 mb-5 lg:mb-6">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                    <CalendarIcon size={20} className="text-brand-primary lg:hidden" />
                    <CalendarIcon size={24} className="text-brand-primary hidden lg:block" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark">{t("info.hours.title")}</h3>
                </div>
                <div className="space-y-4 lg:space-y-5">
                  <div>
                    <p className="font-bold text-neutral-dark text-base lg:text-lg mb-1 lg:mb-2">{t("info.hours.mondayTuesday")}</p>
                    <p className="text-neutral-medium text-sm lg:text-base">{t("info.hours.mondayTuesdayHours")}</p>
                  </div>
                  <div className="h-px bg-neutral-light/30" />
                  <div>
                    <p className="font-bold text-neutral-dark text-base lg:text-lg mb-1 lg:mb-2">{t("info.hours.wednesdaySaturday")}</p>
                    <p className="text-neutral-medium text-sm lg:text-base" dangerouslySetInnerHTML={{ __html: t.raw("info.hours.wednesdaySaturdayHours") }} />
                  </div>
                  <div className="h-px bg-neutral-light/30" />
                  <div>
                    <p className="font-bold text-neutral-dark text-base lg:text-lg mb-1 lg:mb-2">{t("info.hours.sunday")}</p>
                    <p className="text-neutral-medium text-sm lg:text-base">{t("info.hours.closed")}</p>
                  </div>
                </div>
              </div>

              {/* Bon à savoir */}
              <div className="bg-ceruse-light rounded-2xl p-6 lg:p-10 h-full">
                <div className="flex items-center gap-3 mb-5 lg:mb-6">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                    <CheckCircleIcon size={20} className="text-brand-primary lg:hidden" />
                    <CheckCircleIcon size={24} className="text-brand-primary hidden lg:block" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark">{t("info.goodToKnow.title")}</h3>
                </div>
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-start gap-2 lg:gap-3">
                    <CheckCircleIcon size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-medium text-sm lg:text-base">{t("info.goodToKnow.reservation")}</p>
                  </div>
                  <div className="flex items-start gap-2 lg:gap-3">
                    <CheckCircleIcon size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-medium text-sm lg:text-base">{t("info.goodToKnow.vegetarian")}</p>
                  </div>
                  <div className="flex items-start gap-2 lg:gap-3">
                    <CheckCircleIcon size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-medium text-sm lg:text-base">{t("info.goodToKnow.allergies")}</p>
                  </div>
                  <div className="flex items-start gap-2 lg:gap-3">
                    <CheckCircleIcon size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-medium text-sm lg:text-base">{t("info.goodToKnow.children")}</p>
                  </div>
                  <div className="flex items-start gap-2 lg:gap-3">
                    <CheckCircleIcon size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-medium text-sm lg:text-base">{t("info.goodToKnow.payment")}</p>
                  </div>
                  <div className="flex items-start gap-2 lg:gap-3">
                    <CheckCircleIcon size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-medium text-sm lg:text-base">{t("info.goodToKnow.accessibility")}</p>
                  </div>
                </div>
              </div>

              {/* Menu Déjeuner */}
              <div className="bg-ceruse-light rounded-2xl p-6 lg:p-10 h-full">
                <div className="flex items-center gap-3 mb-5 lg:mb-6">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                    <RestaurantIcon size={20} className="text-brand-primary lg:hidden" />
                    <RestaurantIcon size={24} className="text-brand-primary hidden lg:block" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-stencil font-bold text-neutral-dark">{t("info.menu.title")}</h3>
                </div>
                <p className="text-neutral-medium font-semibold mb-3 lg:mb-4 text-sm lg:text-base">{t("info.menu.weekdays")}</p>
                <div className="space-y-2 lg:space-y-3">
                  <div className="flex justify-between items-center">
                    <p className="text-neutral-medium text-sm lg:text-base">{t("info.menu.starterMain")}</p>
                    <p className="font-bold text-brand-primary">20€</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-neutral-medium text-sm lg:text-base">{t("info.menu.fullMenu")}</p>
                    <p className="font-bold text-brand-primary">25€</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-neutral-medium text-sm lg:text-base">{t("info.menu.mainOnly")}</p>
                    <p className="font-bold text-brand-primary">16€</p>
                  </div>
                  <div className="h-px bg-neutral-light/30 my-3 lg:my-4" />
                  <p className="text-neutral-medium font-semibold text-sm lg:text-base">{t("info.menu.alaCarte")}</p>
                </div>
              </div>
            </CardsCarousel>

          </div>
        </div>
      </section>


    </main>
  );
}
