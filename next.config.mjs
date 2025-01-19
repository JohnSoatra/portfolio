/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { hostname: "image.tmdb.org" },
      { hostname: "www.google.com" },
    ],
  },
};

export default nextConfig;
