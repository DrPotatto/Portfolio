// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Add any external image domains here
    unoptimized: process.env.NODE_ENV === 'development', // For Netlify
  },
  output: 'standalone', // Recommended for Netlify
}

module.exports = nextConfig