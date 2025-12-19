// app/layout.tsx
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AppPromoWrapper from "@/components/layout/AppPromoWrapper";

const sfPro = localFont({
  src: [
    {
      path: './fonts/SFPRODISPLAYREGULAR.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SFPRODISPLAYMEDIUM.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/SFPRODISPLAYBOLD.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-sf-pro',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins'
});

const baseUrl = typeof process !== 'undefined' && process.env.NEXT_PUBLIC_BASE_URL 
  ? process.env.NEXT_PUBLIC_BASE_URL 
  : 'https://lrt-sumsel.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'LRT Sumatera Selatan - Transportasi Publik Modern & Ramah Lingkungan',
    template: '%s | LRT Sumatera Selatan'
  },
  description: 'LRT Sumatera Selatan menyediakan layanan transportasi publik modern, cepat, dan ramah lingkungan di Palembang. Informasi rute, jadwal keberangkatan, pembelian tiket, dan promo terbaru.',
  keywords: ['LRT Sumatera Selatan', 'LRT Palembang', 'transportasi publik', 'kereta api ringan', 'transportasi ramah lingkungan', 'jadwal LRT', 'tiket LRT', 'rute LRT'],
  authors: [{ name: 'LRT Sumatera Selatan' }],
  creator: 'LRT Sumatera Selatan',
  publisher: 'LRT Sumatera Selatan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/logo-lrt.png',
    shortcut: '/images/logo-lrt.png',
    apple: '/images/logo-lrt.png',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: baseUrl,
    siteName: 'LRT Sumatera Selatan',
    title: 'LRT Sumatera Selatan - Transportasi Publik Modern & Ramah Lingkungan',
    description: 'LRT Sumatera Selatan menyediakan layanan transportasi publik modern, cepat, dan ramah lingkungan di Palembang.',
    images: [
      {
        url: '/images/logo-lrt.png',
        width: 1200,
        height: 630,
        alt: 'LRT Sumatera Selatan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LRT Sumatera Selatan - Transportasi Publik Modern & Ramah Lingkungan',
    description: 'LRT Sumatera Selatan menyediakan layanan transportasi publik modern, cepat, dan ramah lingkungan di Palembang.',
    images: ['/images/logo-lrt.png'],
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
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${sfPro.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/images/logo-lrt.png" type="image/png" />
      </head>
      <body className="sfPro">
        <Navbar />
        <main>
          {children}
        </main>
        <AppPromoWrapper />
        <Footer />
      </body>
    </html>
  );
}