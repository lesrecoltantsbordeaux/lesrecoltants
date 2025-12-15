import type { Metadata } from "next";
import { Geist, Courier_Prime } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { defaultMetadata } from "@/lib/seo/config";
import { getRestaurantStructuredData, getOrganizationStructuredData } from "@/lib/seo/structured-data";
import CookieBanner from "@/components/ui/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const vtgStencil = localFont({
  src: [
    {
      path: "../public/fonts/VtgStencil/VtgStencil DIN-02-Pro Alt.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/VtgStencil/VtgStencilDIN-52-Alt-Fabric.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-vtg-stencil",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

// Métadonnées SEO optimisées pour Bordeaux
export const metadata: Metadata = defaultMetadata;

// Viewport séparé (recommandation Next.js)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Données structurées pour SEO local
  const restaurantData = getRestaurantStructuredData();
  const organizationData = getOrganizationStructuredData();

  return (
    <html lang="fr" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        {/* Données structurées Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationData),
          }}
        />

        {/* Preconnect pour optimiser le chargement */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${courierPrime.variable} ${vtgStencil.variable} antialiased`}
        suppressHydrationWarning
      >
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
        <CookieBanner />
      </body>
    </html>
  );
}
