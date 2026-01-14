"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
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
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Texture de fond organique */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />

        {/* Lignes décoratives verticales */}
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-primary/10 to-transparent hidden xl:block" />
        <div className="absolute right-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-primary/10 to-transparent hidden xl:block" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* En-tête créatif */}
          <div className="max-w-4xl mx-auto mb-16 lg:mb-20">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-brand-primary" />
                <span className="text-brand-primary text-xs font-courier font-semibold uppercase tracking-[0.3em]">
                  {t("gallery.sectionLabel")}
                </span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-brand-primary" />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-stencil font-bold text-neutral-dark text-center leading-[0.95]">
                {t("gallery.title")}{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                    {t("gallery.titleHighlight")}
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-primary/20" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <path d="M0 6 Q 25 0, 50 6 T 100 6" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Grille mosaïque asymétrique */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-4">

              {/* Image 1 - Grande, verticale */}
              <ScrollReveal animation="fade-up" delay={0} className="col-span-1 lg:col-span-5 lg:row-span-2">
                <div className="group relative h-[280px] lg:h-[580px] overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-neutral-dark/5 group-hover:bg-transparent transition-all duration-700" />
                  <Image
                    src="/images/restaurant/carrousel/carrousel-1.jpg"
                    alt="Plat signature des Récoltants"
                    fill
                    sizes="(max-width: 1024px) 50vw, 40vw"
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Overlay élégant au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-block px-3 py-1 bg-white/90 text-neutral-dark text-xs font-courier uppercase tracking-wider">
                      {t("gallery.labels.creative")}
                    </span>
                  </div>
                  {/* Cadre décoratif */}
                  <div className="absolute inset-4 border border-white/0 group-hover:border-white/30 transition-all duration-500 pointer-events-none" />
                </div>
              </ScrollReveal>

              {/* Image 2 - Moyenne, horizontale */}
              <ScrollReveal animation="fade-up" delay={100} className="col-span-1 lg:col-span-4">
                <div className="group relative h-[180px] lg:h-[280px] overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-transparent transition-all duration-700" />
                  <Image
                    src="/images/restaurant/carrousel/carrousel-2.jpg"
                    alt="Détail de présentation"
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-block px-3 py-1 bg-white/90 text-neutral-dark text-xs font-courier uppercase tracking-wider">
                      {t("gallery.labels.local")}
                    </span>
                  </div>
                  <div className="absolute inset-3 lg:inset-4 border border-white/0 group-hover:border-white/30 transition-all duration-500 pointer-events-none" />
                </div>
              </ScrollReveal>

              {/* Image 3 - Petite, carrée */}
              <ScrollReveal animation="fade-up" delay={200} className="col-span-1 lg:col-span-3">
                <div className="group relative h-[180px] lg:h-[280px] overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-neutral-dark/5 group-hover:bg-transparent transition-all duration-700" />
                  <Image
                    src="/images/restaurant/carrousel/carrousel-3.jpg"
                    alt="Ambiance du restaurant"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-block px-3 py-1 bg-white/90 text-neutral-dark text-xs font-courier uppercase tracking-wider">
                      {t("gallery.labels.knowHow")}
                    </span>
                  </div>
                  <div className="absolute inset-3 lg:inset-4 border border-white/0 group-hover:border-white/30 transition-all duration-500 pointer-events-none" />
                </div>
              </ScrollReveal>

              {/* Image 4 - Moyenne */}
              <ScrollReveal animation="fade-up" delay={150} className="col-span-1 lg:col-span-3">
                <div className="group relative h-[200px] lg:h-[288px] overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-transparent transition-all duration-700" />
                  <Image
                    src="/images/restaurant/carrousel/carrousel-4.jpg"
                    alt="Le chef en cuisine"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-block px-3 py-1 bg-white/90 text-neutral-dark text-xs font-courier uppercase tracking-wider">
                      {t("gallery.labels.behindScenes")}
                    </span>
                  </div>
                  <div className="absolute inset-3 lg:inset-4 border border-white/0 group-hover:border-white/30 transition-all duration-500 pointer-events-none" />
                </div>
              </ScrollReveal>

              {/* Image 5 - Large */}
              <ScrollReveal animation="fade-up" delay={250} className="col-span-1 lg:col-span-4">
                <div className="group relative h-[200px] lg:h-[288px] overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-neutral-dark/5 group-hover:bg-transparent transition-all duration-700" />
                  <Image
                    src="/images/restaurant/carrousel/carrousel-5.jpg"
                    alt="Table dressée"
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-block px-3 py-1 bg-white/90 text-neutral-dark text-xs font-courier uppercase tracking-wider">
                      {t("gallery.labels.atmosphere")}
                    </span>
                  </div>
                  <div className="absolute inset-3 lg:inset-4 border border-white/0 group-hover:border-white/30 transition-all duration-500 pointer-events-none" />
                </div>
              </ScrollReveal>

            </div>
          </div>

          {/* Citation finale */}
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="mt-16 lg:mt-20 text-center">
              <p className="font-courier text-neutral-medium text-sm lg:text-base italic max-w-xl mx-auto">
                &quot;{t("gallery.quote")}&quot;
              </p>
            </div>
          </ScrollReveal>
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

            <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {/* Horaires */}
              <div className="reveal-item bg-ceruse-light rounded-2xl p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                    <CalendarIcon size={24} className="text-brand-primary" />
                  </div>
                  <h3 className="text-2xl font-stencil font-bold text-neutral-dark">{t("info.hours.title")}</h3>
                </div>
                <div className="space-y-5">
                  <div>
                    <p className="font-bold text-neutral-dark text-lg mb-2">{t("info.hours.mondayTuesday")}</p>
                    <p className="text-neutral-medium">{t("info.hours.mondayTuesdayHours")}</p>
                  </div>
                  <div className="h-px bg-neutral-light/30" />
                  <div>
                    <p className="font-bold text-neutral-dark text-lg mb-2">{t("info.hours.wednesdaySaturday")}</p>
                    <p className="text-neutral-medium">{t("info.hours.wednesdaySaturdayHours")}</p>
                  </div>
                  <div className="h-px bg-neutral-light/30" />
                  <div>
                    <p className="font-bold text-neutral-dark text-lg mb-2">{t("info.hours.sunday")}</p>
                    <p className="text-neutral-medium">{t("info.hours.closed")}</p>
                  </div>
                </div>
              </div>

              {/* Bon à savoir */}
              <div className="reveal-item bg-ceruse-light rounded-2xl p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                    <CheckCircleIcon size={24} className="text-brand-primary" />
                  </div>
                  <h3 className="text-2xl font-stencil font-bold text-neutral-dark">{t("info.goodToKnow.title")}</h3>
                  </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-medium">{t("info.goodToKnow.reservation")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-medium" dangerouslySetInnerHTML={{ __html: t.raw("info.goodToKnow.vegetarian") }} />
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-medium" dangerouslySetInnerHTML={{ __html: t.raw("info.goodToKnow.allergies") }} />
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-medium">{t("info.goodToKnow.children")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-medium">{t("info.goodToKnow.payment")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-medium">{t("info.goodToKnow.accessibility")}</p>
                  </div>
                </div>
              </div>

              {/* Menu Déjeuner */}
              <div className="reveal-item bg-ceruse-light rounded-2xl p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                    <RestaurantIcon size={24} className="text-brand-primary" />
                  </div>
                  <h3 className="text-2xl font-stencil font-bold text-neutral-dark">{t("info.menu.title")}</h3>
                </div>
                <p className="text-neutral-medium font-semibold mb-4">{t("info.menu.weekdays")}</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <p className="text-neutral-medium">{t("info.menu.starterMain")}</p>
                    <p className="font-bold text-brand-primary">20€</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-neutral-medium">{t("info.menu.fullMenu")}</p>
                    <p className="font-bold text-brand-primary">25€</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-neutral-medium">{t("info.menu.mainOnly")}</p>
                    <p className="font-bold text-brand-primary">16€</p>
                  </div>
                  <div className="h-px bg-neutral-light/30 my-4" />
                  <p className="text-neutral-medium">{t("info.menu.alaCarte")}</p>
                </div>
              </div>
            </RevealGroup>

          </div>
        </div>
      </section>


    </main>
  );
}
