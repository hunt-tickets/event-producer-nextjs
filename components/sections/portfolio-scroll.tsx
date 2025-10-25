"use client"

import React from "react"
import { FullScreenScrollFX } from "@/components/ui/full-screen-scroll-fx"

const portfolioSections = [
  {
    leftLabel: "Corporativo",
    title: "Tech Summit 2024",
    rightLabel: "2024",
    background: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80",
  },
  {
    leftLabel: "Social",
    title: "Gala de Innovación",
    rightLabel: "2024",
    background: "https://images.unsplash.com/photo-1519167758481-83f29da8c3d7?w=1920&q=80",
  },
  {
    leftLabel: "Virtual",
    title: "Festival Digital",
    rightLabel: "2023",
    background: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1920&q=80",
  },
  {
    leftLabel: "Híbrido",
    title: "Lanzamiento Global",
    rightLabel: "2023",
    background: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1920&q=80",
  },
  {
    leftLabel: "Corporativo",
    title: "Convención Anual",
    rightLabel: "2023",
    background: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=80",
  },
  {
    leftLabel: "Creativo",
    title: "Experiencia Inmersiva",
    rightLabel: "2022",
    background: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80",
  },
]

export function PortfolioScrollSection() {
  return (
    <div id="portfolio">
      <FullScreenScrollFX
        sections={portfolioSections}
        header={
          <>
            <div>Nuestro</div>
            <div>Portfolio</div>
          </>
        }
        showProgress
        durations={{ change: 0.7, snap: 800 }}
        colors={{
          text: "rgba(245,245,245,0.95)",
          overlay: "rgba(0,0,0,0.4)",
          pageBg: "#000000",
          stageBg: "#000000",
        }}
      />
    </div>
  )
}
