import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@platform/ui', '@platform/analytics', '@platform/config', '@platform/utils'],
};

export default nextConfig;
