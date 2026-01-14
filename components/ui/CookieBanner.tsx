"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function CookieBanner() {
  const t = useTranslations("cookies");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const refuseCookies = () => {
    localStorage.setItem("cookie-consent", "refused");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in-up">
      {/* Barre élégante pleine largeur */}
      <div className="bg-neutral-dark/95 backdrop-blur-md border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 py-4">
            {/* Icône cookie */}
            <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-brand-primary/20 flex-shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-brand-primary"
              >
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                <path d="M8.5 8.5v.01" />
                <path d="M16 15.5v.01" />
                <path d="M12 12v.01" />
                <path d="M11 17v.01" />
                <path d="M7 14v.01" />
              </svg>
            </div>

            {/* Texte */}
            <p className="flex-1 font-courier text-white/90 text-sm leading-relaxed">
              {t("message")}
            </p>

            {/* Boutons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={refuseCookies}
                className="px-5 py-2 text-white/70 font-courier text-sm hover:text-white transition-colors"
              >
                {t("decline")}
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-2 bg-brand-primary text-white font-courier font-semibold text-sm hover:bg-brand-primary-dark transition-all"
              >
                {t("accept")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
