import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  highlightWord?: string; // Mot à mettre en orange
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  badge?: {
    icon?: ReactNode;
    text: string;
  };
  cta?: {
    primary?: {
      text: string;
      href: string;
      icon?: ReactNode;
    };
    secondary?: {
      text: string;
      href: string;
    };
  };
  imagePosition?: "left" | "right";
}

export default function PageHero({
  title,
  highlightWord,
  subtitle,
  description,
  imageSrc,
  imageAlt = "",
  badge,
  cta,
  imagePosition = "left",
}: PageHeroProps) {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[80vh] flex items-center bg-white pt-20 lg:pt-24">
      <div className="container mx-auto px-0 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-16 items-center max-w-[1600px] mx-auto">
          {/* Image Column */}
          <div
            className={`relative h-[35vh] lg:h-[75vh] ${
              imagePosition === "right" ? "lg:order-2" : ""
            }`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              quality={75}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "center" }}
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-white/10 via-transparent to-transparent" />
          </div>

          {/* Content Column */}
          <div
            className={`px-6 lg:px-12 py-16 lg:py-24 ${
              imagePosition === "right" ? "lg:order-1" : ""
            }`}
          >
            <div className="max-w-xl">
              {/* Badge */}
              {badge && (
                <div className="inline-flex items-center gap-2 border-2 border-neutral-light text-neutral-dark px-5 py-2.5 text-sm font-courier font-semibold mb-8 animate-fade-in uppercase tracking-widest">
                  {badge.icon}
                  {badge.text}
                </div>
              )}

              {/* Subtitle */}
              {subtitle && (
                <p className="text-sm font-courier text-neutral-medium uppercase tracking-[0.3em] mb-4 animate-fade-in-up">
                  {subtitle}
                </p>
              )}

              {/* Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-stencil font-bold text-neutral-dark leading-[1.05] tracking-tight mb-8 animate-fade-in-up stagger-1">
                {highlightWord ? (
                  <>
                    {title.split(highlightWord)[0]}
                    <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                      {highlightWord}
                    </span>
                    {title.split(highlightWord)[1]}
                  </>
                ) : (
                  title
                )}
              </h1>

              {/* Description */}
              <p className="text-xl lg:text-2xl font-courier text-neutral-medium leading-relaxed mb-10 animate-fade-in-up stagger-2">
                {description}
              </p>

              {/* CTAs */}
              {cta && (
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
                  {cta.primary && (
                    <Link
                      href={cta.primary.href}
                      className="inline-flex items-center justify-center gap-3 bg-neutral-dark text-white px-8 py-4 font-courier font-semibold hover:bg-neutral-dark/90 transition-all group"
                    >
                      {cta.primary.icon}
                      {cta.primary.text}
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  )}
                  {cta.secondary && (
                    <Link
                      href={cta.secondary.href}
                      className="inline-flex items-center justify-center gap-3 border-2 border-neutral-dark text-neutral-dark px-8 py-4 font-courier font-semibold hover:bg-neutral-dark hover:text-white transition-all"
                    >
                      {cta.secondary.text}
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
