"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const Gallery3DComplete = dynamic(() => import("@/components/ui/gallery-3d-complete"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mb-4"></div>
        <p className="text-white font-poppins">Cargando experiencia 3D...</p>
      </div>
    </div>
  ),
})

export default function ExperienciaVirtualPage() {
  const portfolioImages = [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
  ]

  return (
    <main className="relative">
      {/* Back button */}
      <div className="absolute top-6 left-6 z-20 pointer-events-auto">
        <Link
          href="/"
          className="group flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg border border-white/20 transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 text-white group-hover:translate-x-[-4px] transition-transform duration-300" />
          <span className="font-poppins text-sm font-medium text-white">Volver</span>
        </Link>
      </div>

      {/* Title overlay */}
      <div className="absolute top-8 left-0 right-0 z-10 text-center pointer-events-none">
        <h1 className="font-poppins text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Experiencia Virtual
        </h1>
        <p className="font-poppins text-lg md:text-xl text-white/80 mt-4 drop-shadow-md">
          Explora nuestros eventos en 3D
        </p>
      </div>

      {/* 3D Gallery - Versión completa con imágenes orbitando */}
      <Gallery3DComplete images={portfolioImages} />

      {/* Instructions overlay */}
      <div className="absolute bottom-8 left-0 right-0 z-10 text-center pointer-events-none">
        <p className="font-poppins text-sm md:text-base text-white/60">
          Arrastra para rotar • Scroll para zoom • Las imágenes orbitan automáticamente
        </p>
      </div>
    </main>
  )
}
