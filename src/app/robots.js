export default function robots() {
  return { rules: { userAgent: '*', allow: '/', disallow: '/admin' }, sitemap: 'https://my-portfolio-hub-theta.vercel.app/sitemap.xml' };
}
