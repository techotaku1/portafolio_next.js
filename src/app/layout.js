// app/layout.js

export const metadata = {
  title: 'Portafolio de José David González',
  description: 'Desarrollador de software especializado en React, Next.js y FastAPI.',
  openGraph: {
    title: 'Portafolio de José David González',
    description: 'Portafolio web para mostrar proyectos de desarrollo frontend y backend.',
    url: 'https://mi-portafolio.com',
    images: [
      {
        url: '/mi-imagen2.jpg',
        width: 800,
        height: 600,
        alt: 'Imagen de Portafolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tu_usuario',
    title: 'Portafolio de José David González',
    description: 'Desarrollador de software especializado en React, Next.js y FastAPI.',
    image: '/images/og-image.png',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'José David González',
    jobTitle: 'Desarrollador de Software',
    description: 'Especializado en frontend con React y backend con FastAPI.',
    url: 'https://mi-portafolio.com',
    image: '/images/profile.png',
  };

  return (
    <html lang="es">
      <body>
        <main>{children}</main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
