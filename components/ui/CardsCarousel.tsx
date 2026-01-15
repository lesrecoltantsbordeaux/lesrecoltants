"use client";

import { useRef, useState, useEffect, useCallback, ReactNode } from "react";

interface CardsCarouselProps {
  children: ReactNode[];
  className?: string;
  desktopGridCols?: string;
  cardWidth?: string;
  gap?: string;
  showDotsOnMobile?: boolean;
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

export default function CardsCarousel({
  children,
  className = "",
  desktopGridCols = "md:grid-cols-2 lg:grid-cols-3",
  cardWidth = "w-[85%]",
  gap = "gap-4",
  showDotsOnMobile = true,
}: CardsCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const itemCount = children.length;

  // Vérifier la position du scroll
  const checkScrollPosition = useCallback(() => {
    if (!carouselRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculer l'index actuel basé sur la largeur de la carte
    const cardWidthPercent = parseInt(cardWidth.replace(/[^0-9]/g, "")) / 100;
    const itemWidth = clientWidth * cardWidthPercent + 12; // + gap
    const newIndex = Math.round(scrollLeft / itemWidth);
    setCurrentIndex(Math.min(newIndex, itemCount - 1));
  }, [cardWidth, itemCount]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener("scroll", checkScrollPosition, { passive: true });
    checkScrollPosition();

    return () => carousel.removeEventListener("scroll", checkScrollPosition);
  }, [checkScrollPosition]);

  // Navigation
  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;

    const cardWidthPercent = parseInt(cardWidth.replace(/[^0-9]/g, "")) / 100;
    const itemWidth = carouselRef.current.clientWidth * cardWidthPercent + 12;
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
    if (currentIndex < itemCount - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  return (
    <>
      {/* ==================== VERSION MOBILE - CARROUSEL ==================== */}
      <div className={`md:hidden relative ${className}`}>
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 pl-6 pr-4 gap-3"
        >
          {children.map((child, index) => (
            <div
              key={index}
              className={`snap-center flex-shrink-0 ${cardWidth}`}
            >
              {child}
            </div>
          ))}
        </div>

        {/* Flèche gauche */}
        {canScrollLeft && (
          <button
            onClick={scrollPrev}
            className="absolute left-1 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/95 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 z-20 shadow-lg border border-neutral-light/20"
            aria-label="Carte précédente"
          >
            <ChevronLeftIcon className="w-4 h-4 text-neutral-dark" />
          </button>
        )}

        {/* Flèche droite */}
        {canScrollRight && (
          <button
            onClick={scrollNext}
            className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/95 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 z-20 shadow-lg border border-neutral-light/20"
            aria-label="Carte suivante"
          >
            <ChevronRightIcon className="w-4 h-4 text-neutral-dark" />
          </button>
        )}

        {/* Indicateurs de pagination */}
        {showDotsOnMobile && itemCount > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {children.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-brand-primary w-5"
                    : "bg-neutral-dark/20 hover:bg-neutral-dark/40 w-2"
                }`}
                aria-label={`Aller à la carte ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ==================== VERSION DESKTOP - GRILLE ==================== */}
      <div className={`hidden md:grid ${desktopGridCols} ${gap} ${className}`}>
        {children}
      </div>
    </>
  );
}
