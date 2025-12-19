// app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AppPromo from "@/components/home/AppPromo";
import AboutLRT from "@/components/home/AboutLRT";
import Features from "@/components/home/Features";
import NewsSection from "@/components/home/NewsSection";
import FAQSection from "@/components/home/FAQSection";

const baseUrl =
  typeof process !== "undefined" && process.env.NEXT_PUBLIC_BASE_URL
    ? process.env.NEXT_PUBLIC_BASE_URL
    : "https://lrt-sumsel.id";

export const metadata: Metadata = {
  title: "LRT Sumatera Selatan - Transportasi Publik Modern & Ramah Lingkungan",
  description:
    "LRT Sumatera Selatan menyediakan layanan transportasi publik modern, cepat, dan ramah lingkungan di Palembang. Informasi lengkap tentang rute, jadwal keberangkatan, pembelian tiket, dan promo terbaru.",
  keywords: [
    "LRT Sumatera Selatan",
    "LRT Palembang",
    "transportasi publik",
    "kereta api ringan",
    "transportasi ramah lingkungan",
    "jadwal LRT",
    "tiket LRT",
    "rute LRT Palembang",
  ],
  alternates: {
    canonical: `${baseUrl}/`,
  },
  openGraph: {
    title:
      "LRT Sumatera Selatan - Transportasi Publik Modern & Ramah Lingkungan",
    description:
      "LRT Sumatera Selatan menyediakan layanan transportasi publik modern, cepat, dan ramah lingkungan di Palembang.",
    url: `${baseUrl}/`,
    images: ["/images/logo-lrt.png"],
  },
};

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LRT Sumatera Selatan",
    alternateName: "LRT Palembang",
    url: baseUrl,
    logo: `${baseUrl}/images/logo-lrt.png`,
    description:
      "LRT Sumatera Selatan menyediakan layanan transportasi publik modern, cepat, dan ramah lingkungan di Palembang.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Palembang",
      addressRegion: "Sumatera Selatan",
      addressCountry: "ID",
    },
    sameAs: [
      // Add social media links when available
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LRT Sumatera Selatan",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <main>
        <div id="hero">
          <Hero />
        </div>

        {/* <AppPromo /> */}
        <AboutLRT />
        <Features />
        <NewsSection />

        <div id="faq">
          <FAQSection />
        </div>
      </main>
    </>
  );
}
