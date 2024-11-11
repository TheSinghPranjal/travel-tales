/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/travel-tales",
    async rewrites() {
      return [
        {
          source: '/api/:path*',  // All requests to `/api/*`
          destination: 'https://piclumen.com/api/:path*', // Forward these requests to the external API
        },
      ];
    },
  };
  
  export default nextConfig;
  