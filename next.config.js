/** @type {import('next').NextConfig} */
const withImages = require('next-images')
const nextConfig = {
  withImages,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'imgix',
    path: '',
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}

module.exports = nextConfig
