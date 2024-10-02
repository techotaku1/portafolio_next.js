export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://josedavidgonzalez-dev.onrender.com/sitemap.xml',
  }
}