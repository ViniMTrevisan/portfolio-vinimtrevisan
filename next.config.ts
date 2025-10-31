import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";
import { securityHeaders } from './src/config/security';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95]
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: securityHeaders,
    },
  ],
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
