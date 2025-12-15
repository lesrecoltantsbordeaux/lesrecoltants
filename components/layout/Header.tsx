"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/seo/config";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Le Restaurant", href: "/restaurant" },
  { label: "La Ferme", href: "/la-ferme" },
  { label: "Traiteur & Privatisation", href: "/traiteur-privatisation" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);
  const [currentLang, setCurrentLang] = useState<"FR" | "EN">("FR");
  const pathname = usePathname();

  const toggleLanguage = () => {
    setCurrentLang(currentLang === "FR" ? "EN" : "FR");
    // TODO: Implémenter la logique de changement de langue (i18n)
  };
  // Toutes les pages avec un hero carousel ont besoin d'un header transparent
  const isTransparentPage = ["/", "/la-ferme", "/restaurant", "/traiteur-privatisation", "/contact"].includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 96; // h-24 = 6rem = 96px
      // Le hero fait généralement 100vh, on considère qu'on est sorti du hero quand on a scrollé au-delà
      const heroHeight = window.innerHeight - headerHeight;
      setIsScrolled(window.scrollY > heroHeight);

      // Détecter si le header est au-dessus d'une section sombre (fond vert)
      const darkSections = ["charte-section", "bon-cadeau-section"];

      const isOverDark = darkSections.some((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top < headerHeight && rect.bottom > 0;
        }
        return false;
      });

      setIsOverDarkSection(isOverDark);
    };
    // Check initial scroll position
    handleScroll();
    window.addEventListener("scroll", handleScroll);
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
              aria-label="Retour à l'accueil"
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
                Réserver
              </Link>

              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-1.5 text-sm font-courier font-medium transition-all px-3 py-1.5 rounded-full border ${
                  isOverDarkSection || (isTransparentPage && !isScrolled)
                    ? "border-white/50 text-white hover:bg-white/10"
                    : "border-neutral-light text-neutral-dark hover:border-brand-primary hover:text-brand-primary"
                }`}
                aria-label="Changer de langue"
              >
                <span className={currentLang === "FR" ? "font-bold" : "opacity-60"}>FR</span>
                <span className="opacity-40">|</span>
                <span className={currentLang === "EN" ? "font-bold" : "opacity-60"}>EN</span>
              </button>
            </div>

            {/* Burger Menu Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-colors ${
                isOverDarkSection || (isTransparentPage && !isScrolled) ? "text-white" : "text-neutral-dark"
              }`}
              aria-label="Menu"
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
              Réserver
            </Link>

            {/* Language Switcher Mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-lg font-courier font-medium text-white border border-white/50 px-4 py-2 rounded-full hover:bg-white/10 transition-all"
              aria-label="Changer de langue"
            >
              <span className={currentLang === "FR" ? "font-bold text-brand-primary" : "opacity-60"}>FR</span>
              <span className="opacity-40">|</span>
              <span className={currentLang === "EN" ? "font-bold text-brand-primary" : "opacity-60"}>EN</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
