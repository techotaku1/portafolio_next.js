// app/about/page.js

export const metadata = {
  title: 'Sobre mí - Jose David Gonzalez Gonzalez',
  description: 'Conoce más sobre Jose David Gonzalez, desarrollador Full Stack, diseñador de páginas web y experto en publicidad digital en Colombia.',
  keywords: [
    'Sobre mí', 
    'Desarrollador Full Stack', 
    'Freelancer', 
    'Colombia', 
    'Jose David Gonzalez', 
    'Diseñador web', 
    'Publicidad digital'
  ],
  openGraph: {
    title: 'Sobre mí - Jose David Gonzalez Gonzalez',
    description: 'Desarrollador Full Stack en Colombia, especializado en React, Next.js, publicidad digital y presentaciones para negocios.',
    url: 'https://josedavidgonzalez-dev.onrender.com/about',
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
    title: 'Sobre mí - Jose David Gonzalez Gonzalez',
    description: 'Desarrollador Full Stack y experto en publicidad digital. Ayudo a negocios a mejorar su presencia digital.',
    image: '/mi-imagen2.jpg',
  },
};

const jsonLdAbout = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jose David Gonzalez Gonzalez",
  "jobTitle": "Desarrollador Full Stack",
  "url": "https://josedavidgonzalez-dev.onrender.com/about",
  "sameAs": [
    "https://www.linkedin.com/in/jjose18",
    "https://github.com/techotaku1"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Freelancer"
  },
  "description": "Desarrollador Full Stack con experiencia en React, Next.js, publicidad digital y creación de presentaciones para empresas.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cali",
    "addressRegion": "Cali",
    "postalCode": "760001",
    "addressCountry": "Colombia"
  }
};

export default function AboutPage() {
  return (
    <html lang="es">
      <head>
        <title>Sobre mí - Jose David Gonzalez</title>
        <meta name="description" content="Conoce más sobre Jose David Gonzalez, desarrollador Full Stack y experto en publicidad digital en Colombia." />
        {/* JSON-LD Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAbout) }}
        />
      </head>
      <body>
        <h1>Sobre mí</h1>
        <p>Hola, soy Jose David Gonzalez, un desarrollador Full Stack con experiencia en React, Next.js, FastAPI, HTML, CSS y JavaScript. Trabajo como freelancer en Colombia y ayudo a negocios a mejorar su presencia digital mediante publicidad digital efectiva y diseño de páginas web optimizadas.</p>
        
        <h2>Habilidades</h2>
        <ul>
          <li>Diseño y desarrollo de páginas web optimizadas para SEO</li>
          <li>Publicidad digital efectiva para negocios</li>
          <li>Creación de presentaciones visuales impactantes</li>
          <li>Consultoría en marketing digital para mejorar la presencia en línea</li>
          <li>Edición de video con CapCut</li>
          <li>Creación de presentaciones en Canva</li>
        </ul>

        <h2>Servicios que ofrezco</h2>
        <ul>
          <li>Diseño y desarrollo de páginas web modernas y funcionales</li>
          <li>Optimización SEO y mejora de la visibilidad en motores de búsqueda</li>
          <li>Publicidad digital dirigida a negocios locales y globales</li>
          <li>Consultoría en marketing digital y estrategia de contenido</li>
        </ul>

        <h2>Contacta conmigo</h2>
        <p>Puedes contactarme a través de mis perfiles de LinkedIn y GitHub, o enviarme un mensaje por WhatsApp al +573225727602.</p>
      </body>
    </html>
  );
}
