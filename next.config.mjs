/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Habilita la exportación estática
  reactStrictMode: true,
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes
  },
};

export default nextConfig;
