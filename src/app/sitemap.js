export default function sitemap() {
  const baseUrl = 'https://my-portfolio-hub-theta.vercel.app';
  return ['/', '/web-dev', '/data-analysis', '/data-engineer', '/ai-automation'].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency: 'monthly', priority: path === '/' ? 1 : 0.8 }));
}
