"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/ui/Icons";

interface HeroCarouselProps {
  images: string[];
  title: string;
  highlightWord?: string;
  description: string;
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
}

export default function HeroCarousel({
  images,
  title,
  highlightWord,
  description,
  badge,
  cta,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-screen background carousel */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`${title} - Image ${index + 1}`}
              fill
              priority={index === 0}
              quality={90}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "center" }}
            />
          </div>
        ))}

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all z-20 shadow-lg"
          aria-label="Image précédente"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all z-20 shadow-lg"
          aria-label="Image suivante"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75 w-2"
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content on top */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl pt-32 lg:pt-40 pb-24">
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border-2 border-white text-neutral-dark px-5 py-2.5 text-sm font-courier font-semibold mb-8 animate-fade-in uppercase tracking-widest shadow-lg">
              {badge.icon}
              {badge.text}
            </div>
          )}

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-stencil font-bold text-white leading-[1.05] tracking-tight mb-8 animate-fade-in-up stagger-1 drop-shadow-2xl">
            {highlightWord ? (
              <>
                {title.split(highlightWord)[0]}
                <span className="text-brand-primary drop-shadow-2xl">
                  {highlightWord}
                </span>
                {title.split(highlightWord)[1]}
              </>
            ) : (
              title
            )}
          </h1>

          {/* Description */}
          <p className="text-xl lg:text-2xl font-courier text-white leading-relaxed mb-10 animate-fade-in-up stagger-2 drop-shadow-lg">
            {description}
          </p>

          {/* CTAs */}
          {cta && (
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
              {cta.primary && (
                <Link
                  href={cta.primary.href}
                  className="inline-flex items-center justify-center gap-3 bg-white text-neutral-dark px-8 py-4 font-courier font-semibold hover:bg-white/90 transition-all group shadow-xl"
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
                  className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 font-courier font-semibold hover:bg-white hover:text-neutral-dark transition-all shadow-xl backdrop-blur-sm"
                >
                  {cta.secondary.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

