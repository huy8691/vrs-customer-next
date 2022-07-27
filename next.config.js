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
  
}

module.exports = nextConfig
