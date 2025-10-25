import { Navbar } from "@/components/sections/navbar"
import { HeroSection } from "@/components/sections/hero"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  )
}