// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Exportación estática
  trailingSlash: true, // Opcional: agregar una barra al final de las rutas
}

module.exports = nextConfig; // Exporta la configuración usando CommonJS
