/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
      formats: ['image/avif', 'image/webp'],
      //domains: ['is3-ssl.mzstatic.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          //port: '',
          //pathname: '/image/thumb/**',
        },
      ],
  }
}

module.exports = nextConfig
