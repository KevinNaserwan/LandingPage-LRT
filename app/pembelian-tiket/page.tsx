// app/beli-tiket/page.tsx
import type { Metadata } from "next";
import TicketHeader from "@/components/pembelian-tiket/TicketHeader";
import PurchaseGuide from "@/components/pembelian-tiket/PurchaseGuide";
import RelatedArticles from "@/components/pembelian-tiket/RelatedArticles";

const baseUrl = typeof process !== 'undefined' && process.env.NEXT_PUBLIC_BASE_URL 
  ? process.env.NEXT_PUBLIC_BASE_URL 
  : 'https://lrt-sumsel.id';

export const metadata: Metadata = {
  title: 'Pembelian Tiket LRT Sumatera Selatan - Panduan Lengkap',
  description: 'Panduan lengkap cara membeli tiket LRT Sumatera Selatan. Informasi metode pembayaran, cara menggunakan aplikasi, dan tips pembelian tiket LRT Palembang.',
  keywords: ['beli tiket LRT', 'pembelian tiket LRT', 'cara beli tiket LRT', 'tiket LRT Palembang', 'pembayaran tiket LRT', 'aplikasi LRT', 'tiket LRT online'],
  alternates: {
    canonical: `${baseUrl}/pembelian-tiket`,
  },
  openGraph: {
    title: 'Pembelian Tiket LRT Sumatera Selatan - Panduan Lengkap',
    description: 'Panduan lengkap cara membeli tiket LRT Sumatera Selatan. Informasi metode pembayaran dan cara menggunakan aplikasi LRT.',
    url: `${baseUrl}/pembelian-tiket`,
    images: ['/images/logo-lrt.png'],
  },
};

export default function BeliTiketPage() {
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
        name: 'Pembelian Tiket',
        item: `${baseUrl}/pembelian-tiket`,
      },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Cara Membeli Tiket LRT Sumatera Selatan',
    description: 'Panduan lengkap cara membeli tiket LRT Sumatera Selatan melalui aplikasi atau loket',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Download Aplikasi LRT',
        text: 'Download aplikasi resmi LRT Sumatera Selatan dari Google Play Store atau App Store',
      },
      {
        '@type': 'HowToStep',
        name: 'Registrasi Akun',
        text: 'Buat akun baru atau login ke aplikasi LRT',
      },
      {
        '@type': 'HowToStep',
        name: 'Pilih Rute',
        text: 'Pilih rute perjalanan yang diinginkan (Bandara ke DJKA atau sebaliknya)',
      },
      {
        '@type': 'HowToStep',
        name: 'Pilih Metode Pembayaran',
        text: 'Pilih metode pembayaran yang tersedia (E-Money atau Tunai)',
      },
      {
        '@type': 'HowToStep',
        name: 'Konfirmasi Pembelian',
        text: 'Konfirmasi pembelian dan lakukan pembayaran',
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <TicketHeader />
        
        {/* Purchase Guide Section */}
        <PurchaseGuide />
        
        {/* Related Articles Section */}
        <RelatedArticles />
      </div>
    </main>
    </>
  );
}