/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:file(kevin-portrait.jpg|simpsons-chalkboard.png|infographic-payroll.png|infographic-tdd.png|infographic-copilot.png)",
          destination: "https://raw.githubusercontent.com/Keso1219/portfolio/main/public/:file",
        },
      ],
    };
  },
};

export default nextConfig;
