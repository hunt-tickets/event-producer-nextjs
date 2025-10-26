import { Navbar } from "@/components/sections/navbar"
import { HeroSection } from "@/components/sections/hero"
import { ImageRevealSection } from "@/components/sections/image-reveal-section"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        {/* Hero with parallax - stays fixed in background */}
        <div className="fixed inset-0 w-full h-screen -z-10">
          <HeroSection />
        </div>

        {/* Content that scrolls over hero */}
        <div className="relative">
          {/* Spacer to show hero initially */}
          <div className="h-screen" />

          {/* Image reveal section scrolls on top */}
          <ImageRevealSection />
        </div>
      </main>
    </div>
  )
}