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
    remotePatterns: [{
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // for Google profile pictures
      },],
  },
}

export default nextConfig;
