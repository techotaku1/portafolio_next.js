// app/layout.js

export const metadata = {
  metadataBase: new URL('https://portafolio-next-js-1.onrender.com/'),
  title: 'Portafolio de José David González - Freelancer en Colombia',
  description: 'Desarrollador de software en Colombia especializado en React, Next.js, FastAPI, HTML, CSS y JavaScript.',
  openGraph: {
    title: 'Portafolio de José David González - Freelancer en Colombia',
    description: 'Portafolio web para mostrar proyectos de desarrollo frontend y backend.',
    url: 'https://portafolio-next-js-1.onrender.com/',
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
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'José David González',
    jobTitle: 'Desarrollador de Software',
    description: 'Freelancer en Colombia especializado en frontend con React y backend con FastAPI, además de habilidades en HTML, CSS y JavaScript.',
    url: 'https://portafolio-next-js-1.onrender.com/',
    image: '/images/profile.png',
    sameAs: [
      'https://www.linkedin.com/in/jjose18/', // Enlace a tu perfil de LinkedIn
    ],
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
