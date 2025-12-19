import type { Metadata } from "next";
import PromoGrid from "@/components/promo/PromoGrid";
import EventGrid from "@/components/promo/EventGrid";

const baseUrl = typeof process !== 'undefined' && process.env.NEXT_PUBLIC_BASE_URL 
  ? process.env.NEXT_PUBLIC_BASE_URL 
  : 'https://lrt-sumsel.com';

export const metadata: Metadata = {
  title: 'Promo & Event LRT Sumatera Selatan - Diskon & Penawaran Spesial',
  description: 'Dapatkan promo dan event terbaru dari LRT Sumatera Selatan. Diskon tiket, penawaran spesial, dan event menarik untuk pengguna LRT Palembang.',
  keywords: ['promo LRT', 'diskon LRT', 'event LRT', 'promo LRT Palembang', 'penawaran LRT', 'promo tiket LRT', 'event LRT Sumatera Selatan'],
  alternates: {
    canonical: `${baseUrl}/promo`,
  },
  openGraph: {
    title: 'Promo & Event LRT Sumatera Selatan - Diskon & Penawaran Spesial',
    description: 'Dapatkan promo dan event terbaru dari LRT Sumatera Selatan. Diskon tiket dan penawaran spesial untuk pengguna LRT Palembang.',
    url: `${baseUrl}/promo`,
    images: ['/images/promo1.png'],
  },
};

export default function PromoPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Beranda',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Promo & Event',
        item: `${baseUrl}/promo`,
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Promo Harian Section */}
        <PromoGrid />
        
        {/* Events Section */}
        <EventGrid />
      </div>
    </main>
    </>
  );
}