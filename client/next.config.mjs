/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // ✅ ADD THIS LINE
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
      }
    ]
  }
};

export default nextConfig;

