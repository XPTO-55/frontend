/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  pageExtensions: ['tsx'],
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
