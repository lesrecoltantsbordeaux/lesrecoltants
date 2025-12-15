import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/seo/config";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/ui/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-white relative overflow-hidden">
      {/* Texture subtile */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-dark/95 to-neutral-dark" />

      {/* Section principale */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* Colonne 1: À propos */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <div className="relative w-40 h-16 transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/images/logos/logo-les-recoltants.png"
                  alt="Les Récoltants"
                  fill
                  sizes="160px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="font-courier text-white/60 text-sm leading-relaxed max-w-xs">
              <span className="text-brand-primary font-semibold">De la fourche à la fourchette.</span> Restaurant bistronomique & marché fermier <span className="text-brand-primary font-semibold">bio</span> à Bordeaux.
            </p>
          </div>

          {/* Colonne 2: Navigation */}
          <div>
            <h3 className="font-stencil text-brand-primary text-sm font-bold mb-6 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/restaurant", label: "Le Restaurant" },
                  { href: "/la-ferme", label: "La Ferme" },
                { href: "/traiteur-privatisation", label: "Traiteur" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-courier text-white/60 hover:text-brand-primary transition-colors text-sm inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Horaires */}
          <div>
            <h3 className="font-stencil text-brand-primary text-sm font-bold mb-6 uppercase tracking-wider">Horaires</h3>
            <div className="space-y-3 font-courier text-sm">
              <div>
                <p className="text-white/80 font-medium">Lundi & Mardi</p>
                <p className="text-white/50 text-xs">12h - 14h</p>
              </div>
              <div>
                <p className="text-white/80 font-medium">Mercredi - Vendredi</p>
                <p className="text-white/50 text-xs">12h - 14h • 19h - 21h</p>
              </div>
              <div>
                <p className="text-white/80 font-medium">Samedi</p>
                <p className="text-white/50 text-xs">10h - 14h • 19h - 21h</p>
              </div>
              <div className="pt-2">
                <p className="text-white/40 text-xs">Fermé dimanche</p>
              </div>
            </div>
          </div>

          {/* Colonne 4: Contact */}
          <div>
            <h3 className="font-stencil text-brand-primary text-sm font-bold mb-6 uppercase tracking-wider">Contact</h3>
            <div className="space-y-4">
              {siteConfig.business.telephone && (
                <a
                  href={`tel:${siteConfig.business.telephone}`}
                  className="flex items-center gap-3 group"
                >
                  <PhoneIcon size={16} className="text-brand-primary flex-shrink-0" />
                  <span className="font-courier text-white/70 hover:text-brand-primary transition-colors text-sm">
                    {siteConfig.business.telephone}
                  </span>
                </a>
              )}

              {siteConfig.business.email && (
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="flex items-center gap-3 group"
                >
                  <MailIcon size={16} className="text-brand-primary flex-shrink-0" />
                  <span className="font-courier text-white/70 hover:text-brand-primary transition-colors text-sm break-all">
                    {siteConfig.business.email}
                  </span>
                </a>
              )}

              {siteConfig.business.address.streetAddress && (
                <div className="flex items-start gap-3">
                  <MapPinIcon size={16} className="text-brand-primary flex-shrink-0 mt-0.5" />
                  <address className="not-italic font-courier text-white/70 text-sm leading-relaxed">
                    {siteConfig.business.address.streetAddress}
                    <br />
                    {siteConfig.business.address.postalCode}{" "}
                    {siteConfig.business.address.addressLocality}
                  </address>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Séparateur */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="h-px bg-white/10" />
        </div>
      </div>

      {/* Barre du bas */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-courier">

            {/* Copyright */}
            <div className="text-white/40">
              © {currentYear} {siteConfig.name} • Tous droits réservés
            </div>

            {/* Propul'SEO */}
            <div className="text-white/40">
              Fait avec Passion par{" "}
              <a
                href="https://propulseo-site.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:text-brand-primary-light transition-colors"
              >
                Propul'SEO
              </a>
            </div>

            {/* Liens légaux */}
            <div className="flex items-center gap-4">
              <Link
                href="/mentions-legales"
                className="text-white/40 hover:text-brand-primary transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-white/40 hover:text-brand-primary transition-colors"
              >
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
