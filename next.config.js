/** @type {import('next').NextConfig} */

const nextConfig = {
  siteUrl: "https://kairatorozobekov.dev",
  generateRobotsTxt: true,
  images: {
    domains: ["wakatime.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
