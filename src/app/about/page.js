// app/about/page.js

export const metadata = {
  title: {
    absolute: 'Sobre mí - Jose David Gonzalez Gonzalez',
  },
  description: 'Conoce más sobre Jose David Gonzalez, desarrollador Full Stack con experiencia en React, Next.js y FastAPI. Freelance en Colombia.',
  keywords: ['Sobre mí', 'Desarrollador Full Stack', 'Freelancer', 'Colombia', 'Jose David Gonzalez'],
  openGraph: {
    title: 'Sobre mí - Jose David Gonzalez Gonzalez',
    description: 'Desarrollador Full Stack con amplia experiencia en tecnologías web modernas como React y Next.js.',
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
    description: 'Desarrollador Full Stack con experiencia en React, Next.js y FastAPI.',
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
        <meta name="description" content="Conoce más sobre Jose David Gonzalez, desarrollador Full Stack en Colombia." />
        {/* JSON-LD Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAbout) }}
        />
      </head>
      <body>
        <h1>Sobre mí</h1>
        <p>Hola, soy Jose David Gonzalez, un desarrollador Full Stack con experiencia en React, Next.js, FastAPI, HTML, CSS y JavaScript. Trabajo como freelancer en Colombia y tengo un gran interés en crear soluciones innovadoras.</p>
        
        <h2>Habilidades</h2>
        <ul>
          <li>Desarrollo Frontend con React y Next.js</li>
          <li>Desarrollo Backend con FastAPI</li>
          <li>Diseño de interfaces amigables y responsivas</li>
          <li>Optimización SEO y rendimiento de aplicaciones web</li>
          <li>Edición de video con CapCut</li>
          <li>Creación de presentaciones impactantes en Canva</li>
        </ul>

        <h2>Proyectos Destacados</h2>
        <p>Aquí puedes mencionar algunos de tus proyectos más relevantes o incluso incluir enlaces a ellos.</p>
        
        <h2>Contacta conmigo</h2>
        <p>Puedes contactarme a través de mis perfiles de LinkedIn y GitHub, o enviarme un mensaje por WhatsApp al +573225727602.</p>
        {/* Más contenido relevante sobre ti */}
      </body>
    </html>
  );
}
