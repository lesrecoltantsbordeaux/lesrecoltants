"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/**
 * Bouton CTA flottant pour réservation
 * Apparaît après scroll, toujours visible
 */
export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher après 300px de scroll
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Link
        href="/contact"
        className="flex items-center gap-3 bg-brand-primary text-white px-6 py-4 rounded-full font-medium text-sm shadow-lg hover:bg-brand-primary-dark hover:scale-105 transition-all group"
      >
        <svg
          className="w-5 h-5 group-hover:rotate-12 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="hidden sm:inline">Réserver une table</span>
        <span className="sm:hidden">Réserver</span>
      </Link>
    </div>
  );
}
