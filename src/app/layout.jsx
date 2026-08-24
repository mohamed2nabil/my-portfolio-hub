import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Mohamed Nabil | IT Engineer',
  description: 'Portfolio hub for Mohamed Nabil, IT Engineer specializing in Data, Web Development, and Automation.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Load requested fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400..600&display=swap" rel="stylesheet" />
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
