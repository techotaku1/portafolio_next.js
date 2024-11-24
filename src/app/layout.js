import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';

const SITE_URL = 'https://josedavid-portafolio.vercel.app/';
const SITE_NAME = 'Jose David Gonzalez Portfolio';
const AUTHOR_NAME = 'Jose David Gonzalez Gonzalez';
const AUTHOR_ROLE = 'Desarrollador Full Stack y Publicidad Digital';

export const generateMetadata = () => ({
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${AUTHOR_NAME} - ${AUTHOR_ROLE}`,
    template: `%s | ${SITE_NAME}`,
  },
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
    'Diseño responsivo',
  ],
  openGraph: {
    title: `${AUTHOR_NAME} - ${AUTHOR_ROLE}`,
    description: 'Freelancer en Colombia con experiencia en diseño web, publicidad digital y presentaciones profesionales.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'es_CO',
    type: 'website',
    images: [{
      url: `${SITE_URL}mi-imagen2.webp`,
      width: 1200,
      height: 630,
      alt: AUTHOR_NAME,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${AUTHOR_NAME} - ${AUTHOR_ROLE}`,
    description: 'Freelancer con experiencia en desarrollo web, marketing digital y creación de presentaciones.',
    images: [`${SITE_URL}mi-imagen2.webp`],
    creator: '@tuTwitter',
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'es-CO': SITE_URL,
    },
  },
  applicationName: SITE_NAME,
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  category: 'technology',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'AGpNPOb2L1Z4p1pOdNGsInrVPMiVKBk020FAa0TxGV0',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      "url": SITE_URL,
      "name": SITE_NAME,
      "description": "Portafolio de Jose David Gonzalez, Desarrollador Full Stack y especialista en publicidad digital",
      "publisher": {
        "@id": `${SITE_URL}#person`
      },
      "inLanguage": "es-CO"
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      "name": AUTHOR_NAME,
      "jobTitle": AUTHOR_ROLE,
      "url": SITE_URL,
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
        "addressRegion": "Valle del Cauca",
        "postalCode": "760001",
        "addressCountry": "CO"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+573225727602",
        "contactType": "customer support",
        "areaServed": "CO",
        "availableLanguage": ["Spanish", "English"]
      }
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}#webpage`,
      "url": SITE_URL,
      "name": `${AUTHOR_NAME} - ${AUTHOR_ROLE}`,
      "isPartOf": {
        "@id": `${SITE_URL}#website`
      },
      "about": {
        "@id": `${SITE_URL}#person`
      },
      "description": "Desarrollador Full Stack y diseñador de páginas web en Cali, Colombia. Especializado en React, Next.js, FastAPI, y publicidad digital para negocios.",
      "inLanguage": "es-CO"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="/mi-imagen2.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

