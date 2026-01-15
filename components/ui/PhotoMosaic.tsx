"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface MosaicImage {
  src: string;
  alt: string;
  label: string;
  subtitle?: string;
  colSpan: string;
  rowSpan: string;
  sizes: string;
  gradient: string;
  labelPosition?: "bottom-left" | "bottom-right" | "top-left";
  hasCornerAccent?: "top-right" | "bottom-left";
  hasLineAccent?: boolean;
  hasVerticalBar?: boolean;
}

interface PhotoMosaicProps {
  images: MosaicImage[];
  sectionLabel: string;
  title: string;
  titleHighlight: string;
}

// Icone chevron gauche
function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  );
}

// Icone chevron droit
function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
}

// Fonction pour obtenir les classes de span tablette (grille 3 colonnes)
const getTabletSpanClass = (index: number): string => {
  // Images sur 2 colonnes : img2, img3, img9, img10
  const doubleSpanIndexes = [1, 2, 8, 9];
  // Image full width (3 colonnes) : img12
  const fullWidthIndex = 11;

  if (index === fullWidthIndex) return "col-span-3";
  if (doubleSpanIndexes.includes(index)) return "col-span-2";
  return "col-span-1";
};

export default function PhotoMosaic({
  images,
  sectionLabel,
  title,
  titleHighlight,
}: PhotoMosaicProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Vérifier la position du scroll pour masquer les flèches aux extrémités
  const checkScrollPosition = useCallback(() => {
    if (!carouselRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculer l'index actuel
    const itemWidth = clientWidth;
    const newIndex = Math.round(scrollLeft / itemWidth);
    setCurrentIndex(newIndex);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener("scroll", checkScrollPosition, { passive: true });
    checkScrollPosition();

    return () => carousel.removeEventListener("scroll", checkScrollPosition);
  }, [checkScrollPosition]);

  // Navigation avec les flèches
  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;

    const itemWidth = carouselRef.current.clientWidth;
    carouselRef.current.scrollTo({
      left: index * itemWidth,
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const scrollNext = () => {
    if (currentIndex < images.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  return (
    <section className="relative py-16 lg:py-24 bg-[#1a1916] overflow-hidden">
      {/* Texture de fond subtile */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* En-tête de section */}
        <ScrollReveal animation="fade-up" className="mb-12 lg:mb-16">
          <div className="flex items-center gap-6 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />
            <span className="text-brand-primary font-courier text-xs uppercase tracking-[0.4em]">
              {sectionLabel}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-stencil font-bold text-white text-center leading-tight">
            {title} <span className="text-brand-primary">{titleHighlight}</span>
          </h2>
        </ScrollReveal>

        {/* ==================== VERSION MOBILE - CARROUSEL ==================== */}
        <div className="md:hidden relative">
          {/* Container du carrousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
            style={{ scrollPaddingLeft: "1rem", scrollPaddingRight: "1rem" }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="snap-center flex-shrink-0 w-[85%] mr-3 first:ml-0 last:mr-0"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading={index < 2 ? "eager" : "lazy"}
                    quality={85}
                    className="object-cover"
                    sizes="85vw"
                  />
                  <div className={`absolute inset-0 ${image.gradient}`} />
                  {/* Label */}
                  <div
                    className={`absolute p-4 ${
                      image.labelPosition === "bottom-right"
                        ? "bottom-0 right-0 text-right"
                        : image.labelPosition === "top-left"
                        ? "top-0 left-0"
                        : "bottom-0 left-0"
                    }`}
                  >
                    {image.hasVerticalBar && (
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-1 h-6 bg-brand-primary rounded-full" />
                        <span className="text-white/90 font-courier text-xs uppercase tracking-wider">
                          {image.label}
                        </span>
                      </div>
                    )}
                    {!image.hasVerticalBar && (
                      <>
                        {image.subtitle && (
                          <span className="inline-block px-3 py-1 bg-brand-primary/90 text-white text-xs font-courier uppercase tracking-wider rounded-full mb-2">
                            {image.label}
                          </span>
                        )}
                        {!image.subtitle && (
                          <span className="text-white/80 font-courier text-xs uppercase tracking-wider">
                            {image.label}
                          </span>
                        )}
                      </>
                    )}
                    {image.subtitle && (
                      <h3 className="text-lg font-stencil font-bold text-white">
                        {image.subtitle}
                      </h3>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Flèche gauche */}
          {canScrollLeft && (
            <button
              onClick={scrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 z-20"
              aria-label="Image précédente"
            >
              <ChevronLeftIcon className="w-5 h-5 text-white" />
            </button>
          )}

          {/* Flèche droite */}
          {canScrollRight && (
            <button
              onClick={scrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 z-20"
              aria-label="Image suivante"
            >
              <ChevronRightIcon className="w-5 h-5 text-white" />
            </button>
          )}

          {/* Indicateurs de pagination (dots) */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-brand-primary w-6"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ==================== VERSION TABLETTE - GRILLE 3 COLONNES ==================== */}
        <div className="hidden md:block lg:hidden">
          <div className="bg-[#1a3a2f] p-[3px] rounded-2xl">
            <div className="grid grid-cols-3 gap-[3px]">
              {images.map((image, index) => {
                // Hauteurs selon le type d'image
                const heightClass = index === 11
                  ? "h-[180px]"
                  : getTabletSpanClass(index) === "col-span-2"
                    ? "h-[240px]"
                    : "h-[220px]";

                // Coins arrondis selon la position
                const roundedClass = `${index === 0 ? "rounded-tl-2xl" : ""} ${
                  index === 1 ? "rounded-tr-2xl" : ""
                } ${index === 11 ? "rounded-b-2xl" : ""}`;

                return (
                  <ScrollReveal
                    key={index}
                    animation="fade-up"
                    delay={index * 40}
                    className={`${getTabletSpanClass(index)} ${heightClass}`}
                  >
                    <div className={`relative w-full h-full group overflow-hidden ${roundedClass}`}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        loading="lazy"
                        quality={85}
                        className="object-cover transition-all duration-700 group-hover:scale-105"
                        sizes="(min-width: 768px) 33vw, 100vw"
                      />
                      <div className={`absolute inset-0 ${image.gradient}`} />
                      <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors duration-500" />

                      {/* Label */}
                      <div
                        className={`absolute p-3 ${
                          image.labelPosition === "bottom-right"
                            ? "bottom-0 right-0 text-right"
                            : image.labelPosition === "top-left"
                            ? "top-0 left-0"
                            : "bottom-0 left-0"
                        }`}
                      >
                        {image.hasVerticalBar ? (
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-5 bg-brand-primary rounded-full" />
                            <span className="text-white/90 font-courier text-[10px] uppercase tracking-wider">
                              {image.label}
                            </span>
                          </div>
                        ) : image.subtitle ? (
                          <>
                            <span className="inline-block px-2 py-0.5 bg-brand-primary/90 text-white text-[10px] font-courier uppercase tracking-wider rounded-full mb-1">
                              {image.label}
                            </span>
                            <h3 className="text-sm font-stencil font-bold text-white">
                              {image.subtitle}
                            </h3>
                          </>
                        ) : (
                          <span className="text-white/80 font-courier text-[10px] uppercase tracking-wider">
                            {image.label}
                          </span>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* ==================== VERSION DESKTOP - GRILLE MOSAÏQUE 4 COLONNES ==================== */}
        <div className="hidden lg:grid grid-cols-12 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <ScrollReveal
              key={index}
              animation="fade-up"
              delay={index * 50}
              className={`${image.colSpan} ${image.rowSpan} relative group overflow-hidden rounded-2xl`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                quality={85}
                className="object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                sizes={image.sizes}
              />
              <div className={`absolute inset-0 ${image.gradient}`} />
              <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors duration-700" />

              {/* Contenu selon le type d'image */}
              {image.subtitle ? (
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-brand-primary/90 text-white text-xs font-courier uppercase tracking-wider rounded-full mb-3">
                    {image.label}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-stencil font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {image.subtitle}
                  </h3>
                </div>
              ) : image.hasVerticalBar ? (
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-1 h-8 bg-brand-primary rounded-full" />
                  <span className="text-white/90 font-courier text-xs uppercase tracking-wider">
                    {image.label}
                  </span>
                </div>
              ) : (
                <div
                  className={`absolute p-4 ${
                    image.labelPosition === "bottom-right"
                      ? "bottom-0 right-0 text-right"
                      : image.labelPosition === "top-left"
                      ? "top-0 left-0"
                      : "bottom-0 left-0"
                  }`}
                >
                  <span className="text-white/80 font-courier text-xs uppercase tracking-wider">
                    {image.label}
                  </span>
                </div>
              )}

              {/* Corner accents */}
              {image.hasCornerAccent === "top-right" && (
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}
              {image.hasCornerAccent === "bottom-left" && (
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/20 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}

              {/* Line accent */}
              {image.hasLineAccent && (
                <div className="absolute top-6 left-6 w-8 h-px bg-brand-primary/60 group-hover:w-16 transition-all duration-500" />
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
