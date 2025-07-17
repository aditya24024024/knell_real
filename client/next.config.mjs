/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[{
      protocol:"https",
      hostname:"**",
      port:"",
      pathname:"**",
      output: 'export'
    }]
  }
};

export default nextConfig;
