"use client"

import React, { lazy, Suspense } from "react"

// Lazy load the 3D component only on client side
const Gallery3D = lazy(() => {
  return new Promise((resolve) => {
    if (typeof window !== "undefined") {
      import("./3d-gallery-client").then((module) => {
        resolve(module)
      })
    }
  })
})

export function Gallery3DWrapper({ images }: { images?: string[] }) {
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
          <p className="text-white font-poppins mt-4">Cargando experiencia virtual...</p>
        </div>
      </div>
    )
  }

  return (
    <Suspense
      fallback={
        <div className="w-full h-screen bg-black flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
            <p className="text-white font-poppins mt-4">Inicializando 3D...</p>
          </div>
        </div>
      }
    >
      <Gallery3D images={images} />
    </Suspense>
  )
}