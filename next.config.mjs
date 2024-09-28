// next.config.js
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export', // Habilitar exportación estática
  trailingSlash: true, // Opcional: habilita la barra diagonal al final de las URLs
  // distDir: 'dist', // Opcional: cambiar el directorio de salida
}

module.exports = nextConfig;
