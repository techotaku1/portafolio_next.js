// app/sitemap.js
export default function sitemap() {
    const baseUrl = 'https://josedavidgonzalez-dev.onrender.com/'; // Cambia esto a tu URL base
  
    return [
      {
        url: baseUrl, // URL principal
        lastModified: '2024-10-02',
        changeFrequency: 'yearly', // Frecuencia de cambio
        priority: 1, // Prioridad
      },
      {
        url: `${baseUrl}/dashboard/github`, // Ruta de GitHub
        lastModified: '2024-10-02',
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/dashboard/doc`, // Ruta de Documentación
        lastModified: '2024-10-02',
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    ];
  }
  