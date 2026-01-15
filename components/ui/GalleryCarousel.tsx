"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface GalleryImage {
  src: string;
  alt: string;
  label?: string;
  colSpan: string;
  rowSpan?: string;
  height: string;
  sizes: string;
}

interface GalleryCarouselProps {
  images: GalleryImage[];
  sectionLabel: string;
  title: string;
  titleHighlight: string;
  quote?: string;
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

export default function GalleryCarousel({
  images,
  sectionLabel,
  title,
  titleHighlight,
  quote,
}: GalleryCarouselProps) {
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
    const itemWidth = clientWidth * 0.85 + 12; // 85% width + gap
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

    const itemWidth = carouselRef.current.clientWidth * 0.85 + 12;
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
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Texture de fond organique */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

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
                {sectionLabel}
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-brand-primary" />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-stencil font-bold text-neutral-dark text-center leading-[0.95]">
              {title}{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                  {titleHighlight}
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-brand-primary/20"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 6 Q 25 0, 50 6 T 100 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* ==================== VERSION MOBILE - CARROUSEL ==================== */}
        <div className="md:hidden relative">
          {/* Container du carrousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 gap-3"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="snap-center flex-shrink-0 w-[85%]"
              >
                <div className="group relative h-[320px] overflow-hidden rounded-2xl cursor-pointer">
                  <div className="absolute inset-0 bg-neutral-dark/5 group-hover:bg-transparent transition-all duration-700" />
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading={index < 2 ? "eager" : "lazy"}
                    quality={85}
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="85vw"
                  />
                  {/* Overlay élégant */}
                  {image.label && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <span className="inline-block px-3 py-1 bg-white/90 text-neutral-dark text-xs font-courier uppercase tracking-wider">
                          {image.label}
                        </span>
                      </div>
                    </>
                  )}
                  {/* Cadre décoratif */}
                  <div className="absolute inset-3 border border-white/20 rounded-xl pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* Flèche gauche */}
          {canScrollLeft && (
            <button
              onClick={scrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 z-20 shadow-lg"
              aria-label="Image précédente"
            >
              <ChevronLeftIcon className="w-5 h-5 text-neutral-dark" />
            </button>
          )}

          {/* Flèche droite */}
          {canScrollRight && (
            <button
              onClick={scrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 z-20 shadow-lg"
              aria-label="Image suivante"
            >
              <ChevronRightIcon className="w-5 h-5 text-neutral-dark" />
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
                    : "bg-neutral-dark/20 hover:bg-neutral-dark/40"
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ==================== VERSION DESKTOP - GRILLE MOSAÏQUE ==================== */}
        <div className="hidden md:block max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-4">
            {images.map((image, index) => (
              <ScrollReveal
                key={index}
                animation="fade-up"
                delay={index * 50}
                className={`${image.colSpan} ${image.rowSpan || ""}`}
              >
                <div className={`group relative ${image.height} overflow-hidden cursor-pointer`}>
                  <div className="absolute inset-0 bg-neutral-dark/5 group-hover:bg-transparent transition-all duration-700" />
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={image.sizes}
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Overlay élégant au hover */}
                  {image.label && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="inline-block px-3 py-1 bg-white/90 text-neutral-dark text-xs font-courier uppercase tracking-wider">
                          {image.label}
                        </span>
                      </div>
                    </>
                  )}
                  {/* Cadre décoratif */}
                  <div className="absolute inset-3 lg:inset-4 border border-white/0 group-hover:border-white/30 transition-all duration-500 pointer-events-none" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Citation finale */}
        {quote && (
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="mt-16 lg:mt-20 text-center">
              <p className="font-courier text-neutral-medium text-sm lg:text-base italic max-w-xl mx-auto">
                &quot;{quote}&quot;
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
