// app/sitemap.js
export default function sitemap() {
    const baseUrl = 'https://portafolio-next-js.onrender.com'; // Cambia esto a tu URL base
  
    return [
      {
        url: baseUrl, // URL principal
        lastModified: new Date(),
        changeFrequency: 'daily', // Frecuencia de cambio
        priority: 1, // Prioridad
      },
      {
        url: `${baseUrl}/dashboard/github`, // Ruta de GitHub
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/dashboard/doc`, // Ruta de Documentación
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    ];
  }
  