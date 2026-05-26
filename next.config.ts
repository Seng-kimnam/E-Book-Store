import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const path = require('path')
module.exports = {
  turbopack: {
    root: path.join(__dirname, '..'),
  },
   images: {
    remotePatterns: [new URL('https://images-na.ssl-images-amazon.com/images/I/**')],
  },
}

export default nextConfig;
