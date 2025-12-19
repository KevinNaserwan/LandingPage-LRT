import type { Metadata } from "next";
import RouteInfo from "@/components/informasi-rute/RouteInfo";

const baseUrl = typeof process !== 'undefined' && process.env.NEXT_PUBLIC_BASE_URL 
  ? process.env.NEXT_PUBLIC_BASE_URL 
  : 'https://lrt-sumsel.id';

export const metadata: Metadata = {
  title: 'Informasi Rute LRT Sumatera Selatan - Peta & Stasiun',
  description: 'Informasi lengkap tentang rute LRT Sumatera Selatan, peta jalur, daftar stasiun, dan informasi penting lainnya untuk perjalanan Anda dengan LRT Palembang.',
  keywords: ['rute LRT', 'peta LRT Palembang', 'stasiun LRT', 'rute LRT Sumatera Selatan', 'informasi rute LRT', 'jalur LRT Palembang'],
  alternates: {
    canonical: `${baseUrl}/informasi-rute`,
  },
  openGraph: {
    title: 'Informasi Rute LRT Sumatera Selatan - Peta & Stasiun',
    description: 'Informasi lengkap tentang rute LRT Sumatera Selatan, peta jalur, dan daftar stasiun untuk perjalanan Anda dengan LRT Palembang.',
    url: `${baseUrl}/informasi-rute`,
    images: ['/images/lrt-map.png'],
  },
};

export default function InformasiRutePage() {
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
        name: 'Informasi Rute',
        item: `${baseUrl}/informasi-rute`,
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
        <RouteInfo />
      </main>
    </>
  );
}