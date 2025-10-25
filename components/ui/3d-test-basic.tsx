"use client"

import React from "react"

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

  // Solo después de montar, intentamos cargar React Three Fiber
  const { Canvas } = require("@react-three/fiber")
  const { OrbitControls } = require("@react-three/drei")

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