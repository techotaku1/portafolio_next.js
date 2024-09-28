/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './my-loader.js', // Cambia a .js si hiciste el cambio
  },
}

module.exports = nextConfig;
