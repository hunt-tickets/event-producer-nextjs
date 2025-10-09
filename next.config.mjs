/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '62qhyx3jmc.ufs.sh',
        pathname: '/f/**',
      },
    ],
  },
};

export default nextConfig;