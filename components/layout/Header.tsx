"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/lib/i18n/routing";
import { siteConfig } from "@/lib/seo/config";
import type { Locale } from "@/lib/i18n/config";

export default function Header() {
  const t = useTranslations("navigation");
  const tCommon = useTranslations("common");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);

  const navigation = [
    { label: t("home"), href: "/" as const },
    { label: t("restaurant"), href: "/restaurant" as const },
    { label: t("farm"), href: "/la-ferme" as const },
    { label: t("privatisation"), href: "/traiteur-privatisation" as const },
    { label: t("contact"), href: "/contact" as const },
  ];

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  // Toutes les pages avec un hero carousel ont besoin d'un header transparent
  const isTransparentPage = ["/", "/la-ferme", "/restaurant", "/traiteur-privatisation", "/contact"].includes(pathname);

  useEffect(() => {
    let ticking = false;
    const headerHeight = 96;
    const darkSections = ["charte-section", "bon-cadeau-section"];

    const updateHeader = () => {
      const heroHeight = window.innerHeight - headerHeight;
      setIsScrolled(window.scrollY > heroHeight);

      const isOverDark = darkSections.some((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top < headerHeight && rect.bottom > 0;
        }
        return false;
      });

      setIsOverDarkSection(isOverDark);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    updateHeader();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          isOverDarkSection
            ? "bg-transparent"
            : isTransparentPage && !isScrolled
            ? "bg-transparent"
            : "bg-white/98 backdrop-blur-lg shadow-sm border-b border-neutral-light/30"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="relative z-10 group flex items-center"
              aria-label={tCommon("backToHome")}
            >
              <Image
                src="/images/logos/logo-les-recoltants.png"
                alt="Les Récoltants - Restaurant bistronomique Bordeaux"
                width={180}
                height={60}
                priority
                className={`transition-all group-hover:opacity-80 h-12 lg:h-14 w-auto ${
                  isOverDarkSection || (isTransparentPage && !isScrolled) ? "brightness-0 invert" : ""
                }`}
                style={{ objectFit: "contain" }}
              />
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                <Link
                  key={item.href}
                  href={item.href}
                    className={`text-sm font-courier font-medium tracking-wide transition-all relative group ${
                      isOverDarkSection
                        ? isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                        : isActive
                        ? "text-brand-primary"
                        : isTransparentPage && !isScrolled
                        ? "text-white hover:text-brand-primary"
                        : "text-neutral-dark hover:text-brand-primary"
                  }`}
                >
                  {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 transition-all ${
                        isOverDarkSection ? "bg-white" : "bg-brand-primary"
                      } ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                </Link>
                );
              })}
            </nav>

            {/* CTA Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${siteConfig.business.telephone}`}
                className={`text-sm font-courier font-medium transition-colors ${
                  isOverDarkSection
                    ? "text-white hover:text-white/80"
                    : isTransparentPage && !isScrolled
                    ? "text-white hover:text-brand-primary-light"
                    : "text-neutral-dark hover:text-brand-primary"
                }`}
              >
                {siteConfig.business.telephone || "05 XX XX XX XX"}
              </a>

              <Link
                href="/contact"
                className={`px-6 py-2.5 rounded-full font-courier font-medium text-sm transition-all hover:scale-105 shadow-md ${
                  isOverDarkSection
                    ? "bg-white text-brand-primary hover:bg-white/90"
                    : "bg-brand-primary text-white hover:bg-brand-primary-dark"
                }`}
              >
                {tCommon("reserve")}
              </Link>

              {/* Language Switcher */}
              <div
                className={`flex items-center gap-1.5 text-sm font-courier font-medium transition-all px-3 py-1.5 rounded-full border ${
                  isOverDarkSection || (isTransparentPage && !isScrolled)
                    ? "border-white/50 text-white"
                    : "border-neutral-light text-neutral-dark"
                }`}
              >
                <button
                  onClick={() => switchLocale("fr")}
                  className={`transition-all hover:opacity-100 ${
                    locale === "fr" ? "font-bold" : "opacity-60 hover:text-brand-primary"
                  }`}
                  aria-label="Français"
                >
                  FR
                </button>
                <span className="opacity-40">|</span>
                <button
                  onClick={() => switchLocale("en")}
                  className={`transition-all hover:opacity-100 ${
                    locale === "en" ? "font-bold" : "opacity-60 hover:text-brand-primary"
                  }`}
                  aria-label="English"
                >
                  EN
                </button>
              </div>
            </div>

            {/* Burger Menu Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-colors ${
                isOverDarkSection || (isTransparentPage && !isScrolled) ? "text-white" : "text-neutral-dark"
              }`}
              aria-label={tCommon("menu")}
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`w-6 h-0.5 bg-current transition-all ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current transition-all ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current transition-all ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-neutral-dark/95 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <nav className="relative h-full flex flex-col items-center justify-center gap-6 px-8">
          {navigation.map((item, index) => {
            const isActive = pathname === item.href;
            return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-courier font-medium transition-colors animate-fade-in-up ${
                  isActive ? "text-brand-primary" : "text-white hover:text-brand-primary"
                }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </Link>
            );
          })}

          <div className="flex flex-col items-center gap-4 mt-8">
            <a
              href={`tel:${siteConfig.business.telephone}`}
              className="text-white text-lg font-courier hover:text-brand-primary transition-colors"
            >
              {siteConfig.business.telephone || "05 XX XX XX XX"}
            </a>

            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-brand-primary text-white px-8 py-3 rounded-full font-courier font-medium hover:bg-brand-primary-dark transition-all hover:scale-105 shadow-lg"
            >
              {tCommon("reserve")}
            </Link>

            {/* Language Switcher Mobile */}
            <div
              className="flex items-center gap-2 text-lg font-courier font-medium text-white border border-white/50 px-4 py-2 rounded-full"
            >
              <button
                onClick={() => {
                  switchLocale("fr");
                  setIsMobileMenuOpen(false);
                }}
                className={`transition-all ${
                  locale === "fr" ? "font-bold text-brand-primary" : "opacity-60"
                }`}
                aria-label="Français"
              >
                FR
              </button>
              <span className="opacity-40">|</span>
              <button
                onClick={() => {
                  switchLocale("en");
                  setIsMobileMenuOpen(false);
                }}
                className={`transition-all ${
                  locale === "en" ? "font-bold text-brand-primary" : "opacity-60"
                }`}
                aria-label="English"
              >
                EN
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
