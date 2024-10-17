export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://josedavid-portafolio.vercel.app/sitemap.xml',
  }
}