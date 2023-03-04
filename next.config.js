/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/appointments': { page: '/appointments' },
      '/auth': { page: '/auth' },
      '/blog': { page: '/blog' },
      '/chat': { page: '/chat' },
      '/faq': { page: '/faq' },
      '/feed': { page: '/feed' },
      '/hotsite': { page: '/hotsite' },
      '/places': { page: '/places' },
      '/redefine-password': { page: '/redefine-password' },
      '/upload': { page: '/upload' },
      '/users/patients/profile': { page: '/users/patients/profile' },
      '/users/professionals/profile': { page: '/users/professionals/profile' },
      '/users/professionals': { page: '/users/professionals' }
    }
  },
  pageExtensions: ['tsx'],
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
