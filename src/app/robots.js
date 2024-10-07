export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://miportafolio-pied.vercel.app/sitemap.xml',
  }
}