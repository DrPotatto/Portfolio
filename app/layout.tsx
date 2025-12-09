import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Oussama Ben Marzouk | E-commerce & Marketing Design',
    template: '%s | OBM Design'
  },
  description: 'Design systems that increase conversion rates by 40-215% for e-commerce companies. Founder of KifKif.space with 5,000+ users.',
  keywords: ['e-commerce design', 'marketing design', 'conversion optimization', 'OBM', 'Oussama Ben Marzouk'],
  authors: [{ name: 'Oussama Ben Marzouk' }],
  metadataBase: new URL('https://oussama-ben-marzouk.netlify.app'),
  
  openGraph: {
    type: 'website',
    url: 'https://oussama.design',
    title: 'Oussama Ben Marzouk | E-commerce & Marketing Design',
    description: 'Design systems that deliver measurable business growth',
    siteName: 'OBM Design',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Oussama Ben Marzouk - E-commerce Design',
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Oussama Ben Marzouk | E-commerce & Marketing Design',
    description: 'Design systems that deliver measurable business growth',
    images: ['/og-image.jpg'],
    creator: '@oussama_bm',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}