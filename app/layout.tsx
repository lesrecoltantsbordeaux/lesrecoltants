import type { Metadata } from "next";
import { Geist, Courier_Prime } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { defaultMetadata } from "@/lib/seo/config";
import ZenchefWidget from "@/components/ui/ZenchefWidget";

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

export const metadata: Metadata = defaultMetadata;

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

type Props = {
  children: React.ReactNode;
  params?: Promise<{ locale?: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const resolvedParams = params ? await params : {};
  const locale = resolvedParams.locale || 'fr';

  return (
    <html lang={locale} className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
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
        <ZenchefWidget />
      </body>
    </html>
  );
}
