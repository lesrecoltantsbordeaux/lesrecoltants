import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale, localePrefix } from '@/lib/i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
});

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Static files
  // - _next (Next.js internals)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
