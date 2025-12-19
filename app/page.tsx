// app/page.tsx
import Hero from "@/components/home/Hero"
import AppPromo from "@/components/home/AppPromo"
import AboutLRT from "@/components/home/AboutLRT"
import Features from "@/components/home/Features"
import NewsSection from "@/components/home/NewsSection"
import FAQSection from "@/components/home/FAQSection"

export default function Home() {
  return (
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
  )
}
