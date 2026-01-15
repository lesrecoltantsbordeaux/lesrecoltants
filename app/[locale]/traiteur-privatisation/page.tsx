"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function TraiteurPrivatisation() {
  const t = useTranslations("privatisation");

  return (
    <main className="flex-1">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* Image mobile */}
          <Image
            src="https://lh3.googleusercontent.com/pw/AP1GczNBjAw4QwVL4BRyVwbQkCFb2UNRhO4vWrKYyrfAlGrVBmn7fTguKEOf2bsfl2sdjjEgp0SZ2ls6FtajH1RMI1OO2FX2XPRfAOlkEO_eCxCvTAf3e5c_9VRXcRbs7cg1ZxMtaCqk3rTND-13MXSHlU5VmA=w638-h958-s-no-gm?authuser=0"
            alt=""
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover lg:hidden"
            style={{ objectPosition: "35% 35%" }}
          />
          {/* Image desktop */}
          <Image
            src="https://lh3.googleusercontent.com/pw/AP1GczOJnrCHevUNsi-HpzQIS7FiC02M43oPHCj5z8Y1aWXQVOe6yAtdOdeUInTBLxVlpTzBXZdWMBVSTtRf8s5hXUL4EapHGzp2lohDxUPX0gs-zpKIIA4M_2EjOAuKRPdULW10XzmMNFhlvdDJsrdQLxSKVQ=w1439-h958-s-no-gm?authuser=0"
            alt=""
            fill
            priority
            quality={80}
            sizes="100vw"
            className="hidden lg:block object-cover"
            style={{ objectPosition: "center" }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-24 lg:pb-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-stencil font-bold text-white leading-[1.1] mb-8">
              {t("hero.title")}{" "}
              <span className="text-brand-primary">
                {t("hero.titleHighlight")}
              </span>
            </h1>
            <div 
              className="text-xl lg:text-2xl font-courier text-white/90 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.raw("hero.description") }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
