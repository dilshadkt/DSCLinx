/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "assets-global.website-files.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
