"use client";

import { useTranslations } from "next-intl";
import ContactForm from "@/components/ui/ContactForm";
import HeroCarousel from "@/components/ui/HeroCarousel";
import ScrollReveal, { RevealGroup } from "@/components/ui/ScrollReveal";
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

const CheckIcon = CheckCircleIcon;

export default function Contact() {
  const t = useTranslations("contact");

  const faqItems = t.raw("faq.items") as Array<{ question: string; answer: string }>;

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

      {/* CONTACT GRID MODERNE */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Texture de fond - Ceruse normal (section secondaire) */}
        <div className="absolute inset-0 texture-ceruse-light opacity-15" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-16">
              <ScrollReveal animation="fade-up">
                <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6">
                  {t("coordinates.title")}{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                    {t("coordinates.titleHighlight")}
                  </span>
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <p className="text-xl font-courier text-neutral-medium max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: t.raw("coordinates.subtitle") }} />
              </ScrollReveal>
            </div>

            <RevealGroup className="grid md:grid-cols-3 gap-8">
              {/* Téléphone */}
              <a
                href={`tel:${siteConfig.business.telephone}`}
                className="reveal-item group bg-gradient-to-br from-ceruse-light to-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/30 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-xl">
                    <PhoneIcon size={32} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-stencil font-bold text-neutral-dark mb-4">{t("coordinates.phone.title")}</h3>

                  <p className="text-2xl font-stencil text-brand-primary font-bold mb-4">
                    {siteConfig.business.telephone || "05 56 XX XX XX"}
                  </p>

                  <div className="bg-white rounded-xl p-4 text-sm font-courier text-neutral-medium">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <ClockIcon size={16} />
                      <span className="font-semibold">{t("coordinates.phone.availability")}</span>
                    </div>
                    <p>{t("coordinates.phone.days")}</p>
                    <p className="font-medium text-neutral-dark">{t("coordinates.phone.hours")}</p>
                  </div>

                  <div className="mt-4 text-sm font-courier text-brand-primary font-semibold">
                    {t("coordinates.phone.cta")} →
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.business.email}`}
                className="reveal-item group bg-gradient-to-br from-ceruse-light to-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/30 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-xl">
                    <MailIcon size={32} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-stencil font-bold text-neutral-dark mb-4">{t("coordinates.email.title")}</h3>

                  <p className="font-courier text-brand-primary font-bold break-all mb-4 text-sm lg:text-base">
                    {siteConfig.business.email || "contact@lesrecoltants.fr"}
                  </p>

                  <div className="bg-white rounded-xl p-4 text-sm font-courier text-neutral-medium">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <SparklesIcon size={16} />
                      <span className="font-semibold">{t("coordinates.email.guarantee")}</span>
                    </div>
                    <p className="font-medium text-neutral-dark">{t("coordinates.email.responseTime")}</p>
                    <p className="text-xs mt-1">{t("coordinates.email.days")}</p>
                  </div>

                  <div className="mt-4 text-sm font-courier text-brand-primary font-semibold">
                    {t("coordinates.email.cta")} →
                  </div>
                </div>
              </a>

              {/* Adresse */}
              <div className="reveal-item group bg-gradient-to-br from-ceruse-light to-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-xl">
                    <MapPinIcon size={32} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-stencil font-bold text-neutral-dark mb-4">{t("coordinates.address.title")}</h3>

                  <address className="not-italic font-courier text-neutral-medium mb-4">
                    <p className="font-medium text-neutral-dark mb-1">
                      {siteConfig.business.address.streetAddress || "[Adresse à compléter]"}
                    </p>
                    <p>
                      {siteConfig.business.address.postalCode || "33000"} {siteConfig.business.address.addressLocality}
                    </p>
                  </address>

                  <div className="bg-white rounded-xl p-4 text-sm font-courier text-neutral-medium mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <MapPinIcon size={16} />
                      <span className="font-semibold">{t("coordinates.address.access")}</span>
                    </div>
                    <p>{t("coordinates.address.tram")}</p>
                    <p className="text-xs mt-1">{t("coordinates.address.parking")}</p>
                  </div>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${siteConfig.business.geo.latitude},${siteConfig.business.geo.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-courier text-brand-primary font-semibold hover:underline"
                  >
                    {t("coordinates.address.cta")} →
                  </a>
                </div>
              </div>
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* FORMULAIRE + MAP */}
      <section id="formulaire" className="py-24 lg:py-32 bg-gradient-to-br from-ceruse-light to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* Formulaire */}
            <div className="order-2 lg:order-1">
              <ScrollReveal animation="fade-right">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-brand-primary/20 border border-brand-primary/30 text-brand-primary px-4 py-2 rounded-full text-sm font-courier font-semibold mb-6">
                    <MailIcon size={14} />
                    {t("form.badge")}
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-4">
                    {t("form.title")}{" "}
                    <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                      {t("form.titleHighlight")}
                    </span>
                  </h2>

                  <p className="text-lg font-courier text-neutral-medium leading-relaxed">
                    {t("form.description")}
                    <br />
                    <span className="text-sm">{t("form.required")}</span>
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={100}>
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-neutral-light/20">
                  <ContactForm />
                </div>
              </ScrollReveal>

              {/* Trust indicators */}
              <ScrollReveal animation="fade-up" delay={200}>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-courier text-neutral-medium">
                  <div className="flex items-center gap-2">
                    <CheckIcon size={16} className="text-brand-primary" />
                    <span>{t("form.trust.secure")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon size={16} className="text-brand-primary" />
                    <span>{t("form.trust.fast")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon size={16} className="text-brand-primary" />
                    <span>{t("form.trust.noSpam")}</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Map + Infos */}
            <div className="space-y-8 order-1 lg:order-2">
              {/* Google Map */}
              <ScrollReveal animation="fade-left">
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-light/20">
                <div className="aspect-[4/3] relative">
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
                <div className="p-6 bg-gradient-to-br from-neutral-dark to-neutral-dark/90 text-white">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=18+rue+Sainte-Colombe+33000+Bordeaux"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 text-white hover:text-brand-primary transition-colors font-courier font-semibold group"
                  >
                    <MapPinIcon size={20} />
                    <span>{t("map.openInMaps")}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
                </div>
              </ScrollReveal>

              {/* Horaires détaillés */}
              <ScrollReveal animation="fade-left" delay={100}>
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-neutral-light/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                    <ClockIcon size={24} className="text-brand-primary" />
                  </div>
                  <h3 className="text-2xl font-stencil font-bold text-neutral-dark">
                    {t("hours.title")}
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* Lundi & Mardi */}
                  <div className="bg-gradient-to-br from-ceruse-light to-white rounded-2xl p-6 border border-brand-primary/10">
                    <div className="flex items-center gap-2 mb-4">
                      <RestaurantIcon size={20} className="text-brand-primary" />
                      <span className="text-lg font-courier font-bold text-neutral-dark">{t("hours.mondayTuesday")}</span>
                    </div>
                    <div className="space-y-3 font-courier text-neutral-medium">
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                          {t("hours.lunch")}
                        </span>
                        <span className="font-semibold text-neutral-dark">{t("hours.lunchTime")}</span>
                      </div>
                    </div>
                  </div>

                  {/* Mercredi - Samedi */}
                  <div className="bg-gradient-to-br from-ceruse-light to-white rounded-2xl p-6 border border-brand-primary/10">
                    <div className="flex items-center gap-2 mb-4">
                      <BasketIcon size={20} className="text-brand-primary" />
                      <span className="text-lg font-courier font-bold text-neutral-dark">{t("hours.wednesdaySaturday")}</span>
                    </div>
                    <div className="space-y-3 font-courier text-neutral-medium">
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                          {t("hours.lunch")}
                        </span>
                        <span className="font-semibold text-neutral-dark">{t("hours.lunchTime")}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                          {t("hours.dinner")}
                        </span>
                        <span className="font-semibold text-neutral-dark">{t("hours.dinnerTime")}</span>
                      </div>
                    </div>
                  </div>

                  {/* Fermé */}
                  <div className="bg-red-50 border-2 border-red-100 rounded-2xl p-4 text-center">
                    <p className="text-sm font-courier text-red-900 font-semibold flex items-center justify-center gap-2">
                      <ClockIcon size={16} className="text-red-600" />
                      {t("hours.closedSunday")}
                    </p>
                  </div>
                </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Texture de fond - Ceruse normal (section secondaire) */}
        <div className="absolute inset-0 texture-ceruse-light opacity-15" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <ScrollReveal animation="fade-up">
                <div className="inline-flex items-center gap-2 bg-brand-primary/20 border border-brand-primary/30 text-brand-primary px-4 py-2 rounded-full text-sm font-courier font-semibold mb-6">
                  <MessageCircleIcon size={14} />
                  {t("faq.badge")}
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={100}>
                <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6">
                  {t("faq.title")}{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                    {t("faq.titleHighlight")}
                  </span>{" "}
                  ?
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <p className="text-xl font-courier text-neutral-medium" dangerouslySetInnerHTML={{ __html: t.raw("faq.subtitle") }} />
              </ScrollReveal>
            </div>

            <RevealGroup className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="reveal-item bg-gradient-to-br from-ceruse-light to-white rounded-2xl p-8 border border-neutral-light/30 hover:shadow-xl transition-all duration-300 group">
                  <h3 className="text-xl font-stencil font-bold text-neutral-dark mb-4 flex items-start gap-3 group-hover:text-brand-primary transition-colors">
                    <span className="flex-shrink-0 w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary font-stencil font-bold text-sm group-hover:scale-110 transition-transform">
                      ?
                    </span>
                    {item.question}
                  </h3>
                  <p className="font-courier text-neutral-medium leading-relaxed pl-11" dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>
    </main>
  );
}
