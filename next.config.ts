import type { NextConfig } from 'next';

const withTM = require('next-transpile-modules')(['react-pdf', 'pdfjs-dist']);

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    turbo: {
      resolveAlias: {
        canvas: './empty-module.ts',
      },
    },
  },
  swcMinify: false,
};

export default nextConfig;
