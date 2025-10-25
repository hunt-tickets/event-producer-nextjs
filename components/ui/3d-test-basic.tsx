"use client"

import React from "react"
import dynamic from "next/dynamic"

const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
)

const OrbitControls = dynamic(
  () => import("@react-three/drei").then((mod) => mod.OrbitControls),
  { ssr: false }
)

// Versión ultra básica para probar
export function Test3DBasic() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <p className="text-white font-poppins">Inicializando...</p>
      </div>
    )
  }

  return (
    <div className="w-full h-screen bg-black">
      <Canvas>
        <ambientLight />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}