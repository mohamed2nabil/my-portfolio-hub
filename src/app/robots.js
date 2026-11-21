export default function robots() {
  return { rules: { userAgent: '*', allow: '/', disallow: '/admin' }, sitemap: 'https://nabilworks.vercel.app/sitemap.xml' };
}
