"use client"

import dynamic from "next/dynamic"

// Lazy load the 3D component only on client side
const Gallery3D = dynamic(() => import("./3d-gallery-client"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
        <p className="text-white font-poppins mt-4">Cargando 3D...</p>
      </div>
    </div>
  )
})

export function Gallery3DWrapper({ images }: { images?: string[] }) {
  return <Gallery3D images={images} />
}