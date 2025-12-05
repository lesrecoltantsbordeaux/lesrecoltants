import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimisations
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 an
  },

  // Compression
  compress: true,

  // React optimisations
  reactStrictMode: true,

  // Experimental features pour performance
  experimental: {
    optimizePackageImports: ['lucide-react'], // Si on utilise des icônes
  },

  // Headers pour SEO et sécurité
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ];
  },
};

export default nextConfig;
