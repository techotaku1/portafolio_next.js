// app/layout.js

export const metadata = {
  metadataBase: new URL('https://josedavidgonzalez-dev.onrender.com/'),
  title: 'Jose David Gonzalez Gonzalez - Desarrollador Full Stack',
  description: 'Desarrollador de software en Colombia especializado en React, Next.js, FastAPI, HTML, CSS y JavaScript. Freelancer con amplia experiencia.',
  keywords: [
    'Desarrollador Full Stack',
    'React',
    'Next.js',
    'FastAPI',
    'Colombia',
    'Freelancer',
    'Portafolio',
    'Edición de video',
    'CapCut',
    'Presentaciones',
    'Canva'
  ],
  openGraph: {
    title: 'Jose David Gonzalez Gonzalez - Desarrollador Full Stack',
    description: 'Freelancer en Colombia con experiencia en desarrollo frontend y backend.',
    url: 'https://josedavidgonzalez-dev.onrender.com/',
    type: 'website',
    images: [
      {
        url: '/mi-imagen2.jpg',
        width: 1200,
        height: 630,
        alt: 'Jose David Gonzalez Gonzalez',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jose David Gonzalez Gonzalez - Desarrollador Full Stack',
    description: 'Freelancer en Colombia con experiencia en React, Next.js, y FastAPI.',
    image: '/mi-imagen2.jpg', // Corregido el nombre de la imagen
  },
  generator: 'Next.js',
  applicationName: 'Jose David Gonzalez Portfolio',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// Viewport para mejorar la experiencia en dispositivos móviles
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// Añadir datos estructurados (JSON-LD) para mejorar el SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jose David Gonzalez Gonzalez",
  "jobTitle": "Desarrollador Full Stack",
  "url": "https://josedavidgonzalez-dev.onrender.com/",
  "sameAs": [
    "https://www.linkedin.com/in/jjose18",
    "https://github.com/techotaku1"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Freelancer"
  },
  "additionalType": "https://schema.org/CreativeWork",
  "description": "Desarrollador Full Stack con experiencia en React, Next.js y FastAPI. Edición de video en CapCut y presentaciones en Canva.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cali",
    "addressRegion": "Cali",
    "postalCode": "760001",
    "addressCountry": "Colombia"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+573225727602",
    "contactType": "WhatsApp"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Renderizando JSON-LD como script dentro de head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
