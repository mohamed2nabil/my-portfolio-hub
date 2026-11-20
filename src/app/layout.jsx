import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  metadataBase: new URL('https://my-portfolio-hub-theta.vercel.app'),
  title: { default: 'Mohamed Nabil | Software, Data & AI', template: '%s | Mohamed Nabil' },
  description: 'Mohamed Nabil builds web applications, data products, backend services, and AI automation systems.',
  openGraph: { title: 'Mohamed Nabil | Software, Data & AI', description: 'Web applications, data products, backend services, and AI automation systems.', images: ['/images/mohamed-nabil-main.jpeg'] },
  icons: {
    icon: '/fav.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400..600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen flex flex-col selection:bg-ink-blue selection:text-white">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
