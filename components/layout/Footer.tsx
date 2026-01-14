"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/routing";
import { siteConfig } from "@/lib/seo/config";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/ui/Icons";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("navigation");
  const currentYear = new Date().getFullYear();

  const navigation = [
    { href: "/" as const, label: tNav("home") },
    { href: "/restaurant" as const, label: tNav("restaurant") },
    { href: "/la-ferme" as const, label: tNav("farm") },
    { href: "/traiteur-privatisation" as const, label: tNav("privatisation") },
    { href: "/contact" as const, label: tNav("contact") },
  ];

  return (
    <footer className="bg-neutral-dark text-white relative overflow-hidden">
      {/* Texture subtile */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-dark/95 to-neutral-dark" />

      {/* Section principale */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* Colonne 1: À propos */}
          <div className="space-y-6">
            {/* Logo Écosystème Bio */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logos/logo-ecosysteme.png"
              alt="Logo Écosystème Bio"
              className="h-20 w-auto brightness-0 invert"
            />

            <p className="font-courier text-white/60 text-sm leading-relaxed max-w-xs">
              <span className="text-brand-primary font-semibold">{t("tagline")}.</span> {t("description")}
            </p>

            {/* Logos Accréditations */}
            <div className="flex items-center gap-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logos/ecoatable.png"
                alt="Écotable - Restaurant engagé"
                className="h-24 w-auto brightness-0 invert"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logos/ocean-friendly.png"
                alt="Ocean Friendly Restaurants"
                className="h-24 w-auto brightness-0 invert object-contain"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logos/raisin.png"
                alt="Raisin - Vin naturel"
                className="h-24 w-auto"
              />
            </div>
          </div>

          {/* Colonne 2: Navigation */}
          <div>
            <h3 className="font-stencil text-brand-primary text-sm font-bold mb-6 uppercase tracking-wider">{t("navigation")}</h3>
            <ul className="space-y-3">
              {navigation.map((link) => (
                <li key={link.href}>
                <Link
                    href={link.href}
                    className="font-courier text-white/60 hover:text-brand-primary transition-colors text-sm inline-block"
                >
                    {link.label}
                </Link>
              </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Horaires */}
          <div>
            <h3 className="font-stencil text-brand-primary text-sm font-bold mb-6 uppercase tracking-wider">{t("hours")}</h3>
            <div className="space-y-3 font-courier text-sm">
              <div>
                <p className="text-white/80 font-medium">{t("mondayTuesday")}</p>
                <p className="text-white/50 text-xs">{t("lunchHours")}</p>
              </div>
              <div>
                <p className="text-white/80 font-medium">{t("wednesdaySaturday")}</p>
                <p className="text-white/50 text-xs">{t("lunchHours")} • {t("dinnerHours")}</p>
              </div>
              <div className="pt-2">
                <p className="text-white/40 text-xs">{t("closedSunday")}</p>
              </div>
            </div>
          </div>

          {/* Colonne 4: Contact */}
          <div>
            <h3 className="font-stencil text-brand-primary text-sm font-bold mb-6 uppercase tracking-wider">{t("contact")}</h3>
            <div className="space-y-4">
              {siteConfig.business.telephone && (
                  <a
                    href={`tel:${siteConfig.business.telephone}`}
                  className="flex items-center gap-3 group"
                  >
                  <PhoneIcon size={16} className="text-brand-primary flex-shrink-0" />
                  <span className="font-courier text-white/70 hover:text-brand-primary transition-colors text-sm">
                    {siteConfig.business.telephone}
                  </span>
                  </a>
              )}

              {siteConfig.business.email && (
                  <a
                    href={`mailto:${siteConfig.business.email}`}
                  className="flex items-center gap-3 group"
                  >
                  <MailIcon size={16} className="text-brand-primary flex-shrink-0" />
                  <span className="font-courier text-white/70 hover:text-brand-primary transition-colors text-sm break-all">
                    {siteConfig.business.email}
                  </span>
                </a>
              )}

              {siteConfig.business.address.streetAddress && (
                <div className="flex items-start gap-3">
                  <MapPinIcon size={16} className="text-brand-primary flex-shrink-0 mt-0.5" />
                  <address className="not-italic font-courier text-white/70 text-sm leading-relaxed">
                    {siteConfig.business.address.streetAddress}
                    <br />
                    {siteConfig.business.address.postalCode}{" "}
                    {siteConfig.business.address.addressLocality}
                  </address>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Séparateur */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="h-px bg-white/10" />
        </div>
      </div>

      {/* Barre du bas */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-courier">

            {/* Copyright */}
            <div className="text-white/40">
              © {currentYear} {siteConfig.name} • {t("allRightsReserved")}
            </div>

            {/* Propul'SEO */}
            <div className="text-white/40">
              {t("madeWithPassion")}{" "}
              <a
                href="https://propulseo-site.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:text-brand-primary-light transition-colors"
              >
                Propul&apos;SEO
              </a>
            </div>

            {/* Liens légaux */}
            <div className="flex items-center gap-4">
              <Link
                href="/mentions-legales"
                className="text-white/40 hover:text-brand-primary transition-colors"
              >
                {t("legalNotice")}
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-white/40 hover:text-brand-primary transition-colors"
              >
                {t("privacy")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
