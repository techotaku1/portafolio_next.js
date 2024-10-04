// app/sitemap.js
export default function sitemap() {
  const baseUrl = 'https://josedavidgonzalez-dev.onrender.com';

  return [
    {
      url: `${baseUrl}/`, // Página principal
      lastModified: new Date().toISOString(), // Fecha de última modificación
      changeFrequency: 'yearly', // Actualización anual para la home
      priority: 1.0,
    },
    {
      url: `${baseUrl}/dashboard/github`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly', // Actualización mensual para secciones cambiantes
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dashboard/doc`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
