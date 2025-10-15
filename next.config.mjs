/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
        {
            protocol: "https",
            hostname: "randomuser.me",
          },
          {
            protocol: 'https',
            hostname: 'www.pinterest.com',
          },
      ],
    },
  };
  
  export default nextConfig;
  