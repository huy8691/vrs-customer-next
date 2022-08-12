/** @type {import('next').NextConfig} */
const withImages = require("next-images");
const withLess = require("next-with-less");
const nextConfig = {
  withImages,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "imgix",
    path: "",
  },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  rules: [
    {
      test: /\.less$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader", // translates CSS into CommonJS
        },
        {
          loader: "less-loader", // compiles Less to CSS
        },
      ],
    },
  ],
  
};

module.exports =withLess(nextConfig) ;
