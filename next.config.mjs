/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos'
      },
      {
        hostname: 'i.ibb.co'
      }
    ]
  }
};

export default nextConfig;
