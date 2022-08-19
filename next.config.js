/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  eslint: {
      ignoreDuringBuilds: true,
  },
  compiler: {
      styledComponents: true,
  },
}

module.exports = nextConfig
