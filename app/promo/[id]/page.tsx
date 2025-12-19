// app/promo/[id]/page.tsx
import { notFound } from 'next/navigation';
import type { Metadata } from "next";
import PromoDetail from '@/components/promo/PromoDetail';

const baseUrl = typeof process !== 'undefined' && process.env.NEXT_PUBLIC_BASE_URL 
  ? process.env.NEXT_PUBLIC_BASE_URL 
  : 'https://lrt-sumsel.id';

// Data dummy untuk promo dan event
const promoData = [
  {
    id: '1',
    title: 'LRT SUGAR RUSH!',
    description: `Buat perjalanan pulangmu lebih manis dengan promo spesial dari Ponut Donat Kentang! 🍩✨ 
Dapatkan 6 donat lembut bertabur gula halus hanya dengan Rp48K dari harga normal Rp58K. Promo ini berlaku setiap hari mulai pukul 19.00 hingga closing.
Nikmati kelembutan donat kentang yang fresh dan lezat, cocok untuk teman perjalanan atau camilan santai di rumah! 
Jangan sampai kelewatan, promo ini hanya berlaku untuk take away dan tidak dapat digabung dengan promo lainnya.
Yuk, mampir ke Ponut sebelum pulang dan rasakan manisnya perjalanan dengan LRT! 🚆💛 
#SugarRushPromo #PonutDonatKentang #LRTPalembang`,
    images: ['/images/promo4.png', '/images/promo3.png'],
    hashtags: ['SugarRushPromo', 'PonutDonatKentang', 'LRTPalembang'],
    type: 'promo'
  },
  {
    id: '2',
    title: 'Dough Lab',
    description: `Nikmati kelezatan cookies premium dari Dough Lab dengan promo spesial Buy 1 Get 1! 🍪✨
Promo berlaku untuk semua varian cookies, termasuk Chocolate Chip, Double Chocolate, dan Matcha Cookies.
Promo berlaku setiap hari Selasa-Kamis dari jam 10.00 hingga 17.00.
Yuk, manjakan lidahmu dengan kelezatan cookies yang lembut di dalam dan renyah di luar, sempurna untuk teman perjalanan dengan LRT! 🚆🍪`,
    images: ['/images/promo1.png', '/images/promo2.png'],
    hashtags: ['DoughLabPromo', 'CookiesLover', 'LRTPalembang'],
    type: 'promo'
  },

];

interface PromoDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const promo = promoData.find(item => item.id === params.id);

  if (!promo) {
    return {
      title: 'Promo Tidak Ditemukan',
    };
  }

  const cleanTitle = promo.title.replace(/[🚆🌿🍩✨🍪]/g, '').trim();
  const description = promo.description.substring(0, 160) || 
    `Dapatkan promo spesial ${cleanTitle} dari LRT Sumatera Selatan. Penawaran terbatas untuk pengguna LRT Palembang.`;

  return {
    title: `${cleanTitle} - Promo LRT Sumatera Selatan`,
    description: description,
    keywords: ['promo LRT', 'diskon LRT', promo.title, 'promo LRT Palembang', 'penawaran LRT', ...promo.hashtags],
    alternates: {
      canonical: `${baseUrl}/promo/${params.id}`,
    },
    openGraph: {
      title: `${cleanTitle} - Promo LRT Sumatera Selatan`,
      description: description,
      url: `${baseUrl}/promo/${params.id}`,
      type: 'article',
      images: promo.images.map(img => ({
        url: img,
        width: 1200,
        height: 630,
        alt: cleanTitle,
      })),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cleanTitle} - Promo LRT Sumatera Selatan`,
      description: description,
      images: promo.images,
    },
  };
}

export default function PromoDetailPage({ params }: PromoDetailPageProps) {
  const { id } = params;
  const promo = promoData.find(item => item.id === id);
  if (!promo) {
    notFound();
  }

  const cleanTitle = promo.title.replace(/[🚆🌿🍩✨🍪]/g, '').trim();
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
      {
        '@type': 'ListItem',
        position: 3,
        name: cleanTitle,
        item: `${baseUrl}/promo/${id}`,
      },
    ],
  };

  const offerSchema = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: cleanTitle,
    description: promo.description.substring(0, 200),
    seller: {
      '@type': 'Organization',
      name: 'LRT Sumatera Selatan',
    },
    category: 'Transportation',
    image: promo.images.map(img => `${baseUrl}${img}`),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <PromoDetail
            title={promo.title}
            description={promo.description}
            images={promo.images}
            hashtags={promo.hashtags}
          />
        </div>
      </main>
    </>
  );
}