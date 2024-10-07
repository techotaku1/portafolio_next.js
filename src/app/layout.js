// app/layout.js
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights";

export const metadata = {
  metadataBase: new URL('https://josedavidgonzalez-dev.onrender.com/'),
  title: 'Jose David Gonzalez Gonzalez - Desarrollador Full Stack y Publicidad Digital',
  description: 'Desarrollador Full Stack y diseñador de páginas web en Cali, Colombia. Especializado en React, Next.js, FastAPI, y publicidad digital para negocios.',
  keywords: [
    'Diseñador de páginas web',
    'Publicidad digital',
    'Desarrollo web',
    'Presentaciones profesionales',
    'Marketing digital',
    'Freelancer en Colombia',
    'Servicios web para negocios',
    'Consultoría digital',
    'SEO',
    'Diseño responsivo'
  ],
  openGraph: {
    title: 'Jose David Gonzalez Gonzalez - Desarrollador Full Stack y Publicidad Digital',
    description: 'Freelancer en Colombia con experiencia en diseño web, publicidad digital y presentaciones profesionales.',
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
    locale: 'es_CO',
    siteName: 'Jose David Gonzalez Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jose David Gonzalez Gonzalez - Desarrollador Full Stack y Publicidad Digital',
    description: 'Freelancer con experiencia en desarrollo web, marketing digital y creación de presentaciones.',
    image: '/mi-imagen2.jpg',
  },
  generator: 'Next.js',
  applicationName: 'Jose David Gonzalez Portfolio',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Jose David Gonzalez Gonzalez' }],
};

// Datos estructurados (JSON-LD) para SEO
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
  "description": "Desarrollador Full Stack y diseñador web en Colombia, especializado en React, Next.js, publicidad digital y presentaciones profesionales para negocios.",
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
        <SpeedInsights />
        <WebVitals />
        <Analytics />
      </body>
    </html>
  );
}
