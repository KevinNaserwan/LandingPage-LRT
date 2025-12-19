import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArtikelDetail from "@/components/artikel/ArticleDetail";

const baseUrl =
  typeof process !== "undefined" && process.env.NEXT_PUBLIC_BASE_URL
    ? process.env.NEXT_PUBLIC_BASE_URL
    : "https://lrt-sumsel.id";

// Data dummy untuk artikel
const artikelData = [
  {
    id: "1",
    title:
      "Kolaborasi LRT Palembang dengan Komunitas Lokal untuk Transportasi Berkelanjutan 🚆🌿",
    date: "20 Maret 2025",
    imagePath: "/images/gambar1-lrt.png",
    likes: 24,
    shares: 12,
    content: [
      {
        paragraphs: [
          "Palembang – LRT Sumatera Selatan terus berinovasi dalam meningkatkan peran transportasi publik yang berkelanjutan dengan menggandeng komunitas lokal dalam berbagai kolaboratif. Langkah ini diharapkan dapat lebih banyak menarik minat warga untuk beralih ke transportasi publik yang lebih ramah lingkungan serta tidak terjebak dengan kemacetan.",
          "Dalam beberapa bulan terakhir, LRT Palembang telah memulai kerja sama dengan berbagai komunitas, mulai dari komunitas seni, pegiat literasi, hingga aktivis lingkungan. Program ini diharapkan berbagai kegiatan, seperti pameran seni di stasiun LRT, kampanye literasi di dalam gerbong, serta gerakan pengurangan sampah plastik di area jalur LRT.",
        ],
      },
      {
        subtitle: "Transportasi Publik dan Peran Komunitas",
        paragraphs: [
          "Salah satu inisiatif yang mendapat respons positif adalah LRT Green Movement, sebuah program penghijauan yang melibatkan komunitas lingkungan dan mahasiswa dari beberapa universitas di Palembang. Dalam program ini, para relawan menanam pohon di sekitar jalur dan stasiun LRT untuk mengurangi polusi udara serta menciptakan ruang hijau di area perkotaan.",
          "Selain itu, LRT Palembang juga berkolaborasi dengan pegiat literasi dalam program Gerbong Baca, dimana penumpang dapat membaca buku selama perjalanan. Rak-rak kecil berisi buku bacaan telah ditempatkan di beberapa gerbong, memberikan pengalaman yang lebih bermanfaat bagi para pengguna transportasi publik.",
          "Kami ingin menggalakkan masyarakat untuk lebih sadar akan pentingnya transportasi publik dan bagaimana kita bisa menjadikannya sebagai bagian dari gaya hidup yang lebih baik, kata Dina Rahmawati, koordinator program literasi.",
        ],
      },
      {
        subtitle: "Dukungan untuk Transportasi Berkelanjutan",
        paragraphs: [
          "Pemerintah daerah turut mendorong inovasi ini dan LRT Palembang dalam memperkuat keterlibatan komunitas lokal. Kepala Dinas Perhubungan Sumatera Selatan, Hendriansyah, menyebut bahwa inovasi ini bisa menjadi contoh bagi kota-kota lain dalam mengelola transportasi publik yang lebih inklusif dan berkelanjutan.",
          "Kita ingin mendorong lebih banyak masyarakat untuk beralih ke transportasi publik. Dengan adanya inovasi seperti ini, LRT tidak hanya menjadi alat transportasi, tetapi juga menjadi pusat edukasi dan aktivitas komunitas, ujar Hendriansyah.,",
          "Ke depan, LRT Palembang berencana memperkuat kolaborasi dengan lebih banyak komunitas, termasuk sektor UMKM, untuk menghadirkan pasar kreatif di area stasiun. Dengan langkah ini, diharapkan LRT dapat semakin berperan dalam kehidupan modern bagi warga Palembang. Sebagai contoh transportasi berbasis rel di luar Pulau Jawa, LRT Palembang terus meningkatkan pengelolaan teknis tugas menjalankannya. Melalui kolaborasi dengan komunitas, LRT tidak hanya menjadi solusi mobilitas tetapi juga bagian dari identitas kota yang lebih hijau, inovatif, dan berkelanjutan.",
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Perpanjangan Jam Operasional LRT Palembang",
    date: "15 Maret 2025",
    imagePath: "/images/gambar2-lrt.png",
    likes: 18,
    shares: 8,
    content: [
      {
        paragraphs: [
          "Demi meningkatkan pelayanan kepada masyarakat, LRT Sumatera Selatan kini memperpanjang jam operasionalnya hingga pukul 22.00 WIB. Perubahan ini bertujuan untuk memberikan fleksibilitas lebih bagi para pengguna transportasi publik.",
          "Perpanjangan jam operasional ini mulai berlaku sejak 1 Maret 2025 dan berlaku untuk seluruh rute LRT Palembang. Keputusan ini diambil setelah melalui kajian mendalam terkait permintaan masyarakat dan analisis pola pergerakan penumpang.",
        ],
      },
      {
        subtitle: "Respon Terhadap Kebutuhan Masyarakat",
        paragraphs: [
          "Direktur Operasional LRT Palembang, Ahmad Faisal, menjelaskan bahwa keputusan ini merupakan respons terhadap kebutuhan masyarakat Palembang yang semakin dinamis. Banyak pengguna yang meminta layanan LRT hingga malam hari, terutama para pekerja shift malam dan mahasiswa yang kuliah di malam hari, ujarnya.",
          "Selain memperpanjang jam operasional, LRT Palembang juga menambah frekuensi keberangkatan pada jam sibuk, yaitu pagi hari (06.00-08.00 WIB) dan sore hari (16.00-19.00 WIB). Kereta akan beroperasi setiap 10 menit sekali pada jam sibuk dan setiap 15 menit sekali di luar jam sibuk.",
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Promo Akhir Tahun: Diskon Tiket LRT hingga 50%!",
    date: "10 Maret 2025",
    imagePath: "/images/gambar3-lrt.png",
    likes: 18,
    shares: 9,
    content: [
      {
        paragraphs: [
          "Dalam rangka menyambut pergantian tahun, LRT Sumatera Selatan menghadirkan promo spesial bertajuk “Promo Akhir Tahun” dengan memberikan potongan harga tiket hingga 50%. Promo ini berlaku sepanjang bulan Desember 2025 dan menjadi kesempatan emas bagi masyarakat untuk menikmati perjalanan hemat menggunakan moda transportasi modern dan ramah lingkungan ini.",
          "Diskon ini khusus diberikan kepada pengguna yang membeli tiket melalui aplikasi resmi LRT Sumsel. Aplikasi tersebut tidak hanya memudahkan pembelian tiket secara digital, tetapi juga menyediakan berbagai fitur pendukung seperti informasi jadwal keberangkatan, estimasi waktu tiba, dan notifikasi real-time yang memudahkan mobilitas sehari-hari.",
          "Pihak manajemen LRT Sumatera Selatan menyampaikan bahwa promo ini merupakan bentuk apresiasi atas dukungan masyarakat selama ini terhadap layanan transportasi publik yang aman, nyaman, dan bebas polusi. Dengan hadirnya potongan harga ini, diharapkan semakin banyak masyarakat yang beralih ke LRT, terutama selama musim liburan akhir tahun.",
          "Tidak hanya ditujukan bagi warga lokal, promo ini juga bisa dinikmati oleh wisatawan yang tengah berkunjung ke Palembang dan ingin menjelajahi kota dengan lebih efisien. LRT Sumsel terus berkomitmen untuk menjadi solusi transportasi masa depan yang praktis dan berkelanjutan.",
          "Segera manfaatkan promo akhir tahun ini dan nikmati diskon tiket LRT hingga 50% selama bulan Desember! Unduh aplikasi resmi LRT Sumsel sekarang, rencanakan perjalanan Anda, dan rasakan pengalaman transportasi publik yang cepat, hemat, dan ramah lingkungan.",
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Promo Akhir Tahun: Diskon Tiket LRT hingga 50%!",
    date: "10 Maret 2025",
    imagePath: "/images/gambar3-lrt.png",
    likes: 18,
    shares: 9,
    content: [
      {
        paragraphs: [
          "Dalam upaya memberikan layanan transportasi publik yang aman dan nyaman, LRT Palembang secara konsisten melakukan perawatan rutin terhadap jalur dan armada kereta. Langkah ini menjadi bagian penting dari komitmen LRT Sumatera Selatan untuk menjaga standar operasional dan meningkatkan kualitas pelayanan kepada seluruh penumpang.",
          "Tim teknis yang berpengalaman diturunkan secara berkala untuk melakukan pemeriksaan menyeluruh. Proses perawatan meliputi pengecekan kebersihan, sistem kelistrikan, serta performa kereta. Setiap komponen diuji agar tetap berada dalam kondisi optimal, guna memastikan perjalanan berjalan lancar tanpa hambatan.",
          "Kebersihan menjadi perhatian utama, terutama di masa pascapandemi di mana standar kebersihan publik semakin tinggi. Selain itu, sistem kelistrikan yang menjadi tulang punggung operasional LRT juga terus dimonitor untuk mencegah gangguan teknis yang dapat menghambat perjalanan. Tak kalah penting, performa kereta dicek secara detail agar setiap perjalanan terasa nyaman, tenang, dan tepat waktu bagi para penumpang.",
          "Dengan adanya perawatan rutin ini, LRT Palembang berupaya menjaga kepercayaan masyarakat terhadap layanan transportasi modern yang ramah lingkungan ini. Upaya ini juga menunjukkan bahwa keamanan dan kenyamanan penumpang tetap menjadi prioritas utama dalam setiap aspek operasional.",
        ],
      },
    ],
  },
];

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const artikel = artikelData.find((item) => item.id === params.id);

  if (!artikel) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  const cleanTitle = artikel.title.replace(/[🚆🌿🍩✨🍪]/g, "").trim();
  const description =
    artikel.content[0]?.paragraphs?.[0]?.substring(0, 160) ||
    `Baca artikel lengkap tentang ${cleanTitle} dari LRT Sumatera Selatan. Informasi terbaru tentang transportasi publik di Palembang.`;

  return {
    title: cleanTitle,
    description: description,
    keywords: [
      "LRT Sumatera Selatan",
      "LRT Palembang",
      "artikel LRT",
      "transportasi publik",
      "berita LRT",
      cleanTitle,
    ],
    alternates: {
      canonical: `${baseUrl}/artikel/${params.id}`,
    },
    openGraph: {
      title: cleanTitle,
      description: description,
      url: `${baseUrl}/artikel/${params.id}`,
      type: "article",
      publishedTime: artikel.date,
      images: [
        {
          url: artikel.imagePath,
          width: 1200,
          height: 630,
          alt: cleanTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description: description,
      images: [artikel.imagePath],
    },
  };
}

export default function Page({ params }: { params: { id: string } }) {
  const artikel = artikelData.find((item) => item.id === params.id);

  if (!artikel) {
    notFound();
  }

  const cleanTitle = artikel.title.replace(/[🚆🌿🍩✨🍪]/g, "").trim();
  const firstParagraph = artikel.content[0]?.paragraphs?.[0];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: cleanTitle,
    image: `${baseUrl}${artikel.imagePath}`,
    datePublished: artikel.date,
    dateModified: artikel.date,
    author: {
      "@type": "Organization",
      name: "LRT Sumatera Selatan",
    },
    publisher: {
      "@type": "Organization",
      name: "LRT Sumatera Selatan",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo-lrt.png`,
      },
    },
    description: firstParagraph ? firstParagraph.substring(0, 160) : "",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <ArtikelDetail
            title={artikel.title}
            date={artikel.date}
            imagePath={artikel.imagePath}
            content={artikel.content}
            likes={artikel.likes}
            shares={artikel.shares}
          />
        </div>
      </main>
    </>
  );
}
