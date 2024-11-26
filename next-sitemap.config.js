/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://josedavid-portafolio.vercel.app/', // La URL base de tu sitio
    generateRobotsTxt: true, // Genera el archivo robots.txt automáticamente
    changefreq: 'monthly', // Frecuencia de cambios en el sitio
    priority: 0.7, // Prioridad de la página
    sitemapSize: 7000, // Tamaño máximo de archivos por sitemap
    alternateRefs: [
      {
        href: 'https://josedavid-portafolio.vercel.app/',
        hreflang: 'es',
      },
      {
        href: 'https://josedavid-portafolio.vercel.app/',
        hreflang: 'en',
      },
    ],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://josedavid-portafolio.vercel.app/sitemap.xml', // Añade más sitemaps si los tienes
      ],
    },
    transform: async (config, path) => {
      // Si necesitas agregar más lógica para modificar las URL's
      return {
        loc: path, // El path de la página, puede incluir lógica para excluir ciertos paths
        lastmod: new Date().toISOString(), // Fecha de la última modificación
        changefreq: 'monthly',
        priority: 0.7,
      };
    },
  };
  