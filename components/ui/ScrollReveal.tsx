"use client";

import { useEffect, useRef, ReactNode } from "react";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade"
  | "scale"
  | "scale-up"
  | "blur";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = "",
  once = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Clear any pending timeout
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {
              element.classList.add("scroll-revealed");
            }, delay);

            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            // Clear timeout if element leaves before animation starts
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            element.classList.remove("scroll-revealed");
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [delay, threshold, once]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal-${animation} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Composant pour les animations en cascade (stagger)
interface StaggerRevealProps {
  children: ReactNode[];
  animation?: AnimationType;
  staggerDelay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  childClassName?: string;
}

export function StaggerReveal({
  children,
  animation = "fade-up",
  staggerDelay = 100,
  duration = 600,
  threshold = 0.1,
  className = "",
  childClassName = "",
}: StaggerRevealProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollReveal
          key={index}
          animation={animation}
          delay={index * staggerDelay}
          duration={duration}
          threshold={threshold}
          className={childClassName}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}

// Composant pour révéler un groupe d'éléments ensemble
interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export function RevealGroup({
  children,
  className = "",
  threshold = 0.1,
  once = false,
}: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("reveal-group-visible");
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            element.classList.remove("reveal-group-visible");
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div ref={ref} className={`reveal-group ${className}`}>
      {children}
    </div>
  );
}
