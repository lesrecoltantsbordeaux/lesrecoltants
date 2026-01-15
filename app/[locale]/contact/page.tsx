"use client";

import { useTranslations } from "next-intl";
import ContactForm from "@/components/ui/ContactForm";
import HeroCarousel from "@/components/ui/HeroCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/seo/config";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  MessageCircleIcon,
  RestaurantIcon,
  BasketIcon,
  SparklesIcon,
} from "@/components/ui/Icons";
import CardsCarousel from "@/components/ui/CardsCarousel";

const CheckIcon = CheckCircleIcon;

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <main className="flex-1">
      {/* ==================== HERO CAROUSEL ==================== */}
      <HeroCarousel
        images={[
          "/images/contact/carrousel/carrousel-1.jpg",
          "/images/contact/carrousel/carrousel-2.jpg",
          "/images/contact/carrousel/carrousel-3.jpg",
          "/images/contact/carrousel/carrousel-4.jpg",
          "/images/contact/carrousel/carrousel-5.jpg",
        ]}
        title={t("hero.title")}
        highlightWord={t("hero.titleHighlight")}
        description={<span dangerouslySetInnerHTML={{ __html: t.raw("hero.description") }} />}
        badge={{
          icon: <MessageCircleIcon size={14} />,
          text: t("hero.badge"),
        }}
        cta={{
          primary: {
            text: t("hero.ctaPrimary"),
            href: `tel:${siteConfig.business.telephone}`,
            icon: <PhoneIcon size={20} />,
          },
          secondary: {
            text: t("hero.ctaSecondary"),
            href: "#formulaire",
          },
        }}
      />

      {/* CONTACT COMPACT + FORMULAIRE */}
      <section id="formulaire" className="py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 texture-ceruse-light opacity-15" />
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">

            {/* Formulaire + Map côte à côte */}
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
              {/* Formulaire */}
              <div className="lg:col-span-3">
                <ScrollReveal animation="fade-up">
                  <div className="mb-6">
                    <h2 className="text-2xl lg:text-3xl font-stencil font-bold text-neutral-dark">
                      {t("form.title")}{" "}
                      <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                        {t("form.titleHighlight")}
                      </span>
                    </h2>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={100}>
                  <div className="bg-white rounded-2xl p-5 lg:p-8 shadow-xl border border-neutral-light/20">
                    <ContactForm />
                  </div>
                </ScrollReveal>

                {/* Trust indicators */}
                <ScrollReveal animation="fade-up" delay={200}>
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs lg:text-sm font-courier text-neutral-medium">
                    <div className="flex items-center gap-1.5">
                      <CheckIcon size={14} className="text-brand-primary" />
                      <span>{t("form.trust.secure")}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckIcon size={14} className="text-brand-primary" />
                      <span>{t("form.trust.fast")}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckIcon size={14} className="text-brand-primary" />
                      <span>{t("form.trust.noSpam")}</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Map + Horaires compacts */}
              <div className="lg:col-span-2 space-y-6">
                {/* Google Map */}
                <ScrollReveal animation="fade-up" delay={150}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-neutral-light/20">
                    <div className="aspect-[16/10] lg:aspect-[4/3] relative">
                      <iframe
                        src="https://maps.google.com/maps?q=18+rue+Sainte-Colombe+33000+Bordeaux&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Carte Google Maps - Les Récoltants Bordeaux"
                        className="absolute inset-0"
                      />
                    </div>
                    <div className="p-3 lg:p-4 bg-gradient-to-br from-neutral-dark to-neutral-dark/90 text-white">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=18+rue+Sainte-Colombe+33000+Bordeaux"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-white hover:text-brand-primary transition-colors font-courier font-semibold text-sm"
                      >
                        <MapPinIcon size={16} />
                        <span>{t("map.openInMaps")}</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Informations pratiques */}
                <ScrollReveal animation="fade-up" delay={200}>
                  <div className="bg-white rounded-2xl p-5 lg:p-6 shadow-xl border border-neutral-light/20">
                    {/* Horaires */}
                    <div className="space-y-2 font-courier text-sm mb-5">
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-dark">{t("hours.mondayTuesday")}</span>
                        <span className="text-neutral-dark">{t("hours.lunchTime")}</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-neutral-dark">{t("hours.wednesdaySaturday")}</span>
                        <div className="text-right text-neutral-dark">
                          <span className="block">{t("hours.lunchTime")} et {t("hours.dinnerTime")}</span>
                        </div>
                      </div>
                      <div className="text-neutral-medium">
                        {t("hours.closedSunday")}
                      </div>
                    </div>

                    {/* Séparateur */}
                    <div className="h-px bg-neutral-light mb-5" />

                    {/* Coordonnées */}
                    <div className="space-y-3 font-courier text-sm">
                      <div className="flex items-start gap-3">
                        <MapPinIcon size={16} className="text-brand-primary mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-dark">
                          {siteConfig.business.address.streetAddress}, {siteConfig.business.address.postalCode} {siteConfig.business.address.addressLocality}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <PhoneIcon size={16} className="text-brand-primary flex-shrink-0" />
                        <a href={`tel:${siteConfig.business.telephone}`} className="text-neutral-dark hover:text-brand-primary transition-colors">
                          Tél. {siteConfig.business.telephone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <MailIcon size={16} className="text-brand-primary flex-shrink-0" />
                        <a href={`mailto:${siteConfig.business.email}`} className="text-neutral-dark hover:text-brand-primary transition-colors">
                          {siteConfig.business.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
