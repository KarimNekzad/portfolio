import type { NextConfig } from 'next';

const withTM = require('next-transpile-modules')(['react-pdf', 'pdfjs-dist']);

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        canvas: './empty-module.ts',
      },
    },
  },
  swcMinify: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
