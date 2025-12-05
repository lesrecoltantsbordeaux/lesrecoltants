import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleur principale
        "brand-primary": "#e14a16",
        "brand-primary-dark": "#c03e11",
        "brand-primary-light": "#ff6b2c",

        // Fonds texturés
        "ceruse-light": "#f8f6f3",
        "ceruse-contrast": "#e8e4dc",
        "terracotta-light": "#fdf4f0",
        "terracotta-dark": "#f4e5dc",

        // Couleurs neutres
        "neutral-dark": "#2d2820",
        "neutral-medium": "#6b6355",
        "neutral-light": "#b8b0a3",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        courier: ["var(--font-courier-prime)", "monospace"],
        stencil: ["var(--font-vtg-stencil)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
