"use client";

import { useTranslations } from "next-intl";
import HeroCarousel from "@/components/ui/HeroCarousel";
import {
  ChefHatIcon,
  SparklesIcon,
} from "@/components/ui/Icons";

export default function TraiteurPrivatisation() {
  const t = useTranslations("privatisation");

  return (
    <main className="flex-1">
      {/* ==================== HERO CAROUSEL ==================== */}
      <HeroCarousel
        images={[
          "/images/traiteur/carrousel/carrousel-2.jpg",
          "/images/traiteur/carrousel/carrousel-3.jpg",
          "/images/traiteur/carrousel/carrousel-4.jpg",
          "/images/traiteur/carrousel/carrousel-5.jpg",
          "/images/traiteur/carrousel/carrousel-1.jpg",
        ]}
        title={t("hero.title")}
        highlightWord={t("hero.titleHighlight")}
        description={<span dangerouslySetInnerHTML={{ __html: t.raw("hero.description") }} />}
        badge={{
          icon: <SparklesIcon size={14} />,
          text: t("hero.badge"),
        }}
        cta={{
          primary: {
            text: t("hero.cta"),
            href: "/contact",
            icon: <ChefHatIcon size={20} />,
          },
        }}
      />
    </main>
  );
}
