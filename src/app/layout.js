// app/layout.js
export const metadata = {
  metadataBase: new URL('https://josedavidgonzalez-dev.onrender.com/'),
  title: 'Portafolio de José David González - Freelancer en Colombia',
  description: 'Desarrollador de software en Colombia especializado en React, Next.js, FastAPI, HTML, CSS y JavaScript.'
  }

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'José David González',
    jobTitle: 'Desarrollador de Software',
    description: 'Freelancer en Colombia especializado en frontend con React y backend con FastAPI, además de habilidades en HTML, CSS y JavaScript.',
    url: 'https://josedavidgonzalez-dev.onrender.com/',
    image: '/mi-imagen.jpg',
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
