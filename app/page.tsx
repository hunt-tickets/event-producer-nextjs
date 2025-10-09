import { Navbar } from "@/components/sections/navbar"
import { HeroSection } from "@/components/sections/hero"
import { TextMarquee } from "@/components/sections/text-marquee"
import { AboutSection } from "@/components/sections/about"
import { ServicesNewSection } from "@/components/sections/services-new"
import { LogoCarousel } from "@/components/sections/logo-carousel"
import { PortfolioSection } from "@/components/sections/portfolio"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TextMarquee />
        <AboutSection />
        <ServicesNewSection />
        <LogoCarousel />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}