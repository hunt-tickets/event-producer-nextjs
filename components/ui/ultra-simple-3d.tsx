"use client"

import React from "react"

export default function UltraSimple3D() {
  const [mounted, setMounted] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <p className="text-white">Montando componente...</p>
      </div>
    )
  }

  try {
    const { Canvas } = require("@react-three/fiber")

    return (
      <div className="w-full h-screen bg-black">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </Canvas>
      </div>
    )
  } catch (err: any) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center p-8">
          <h2 className="text-2xl mb-4">Error cargando 3D</h2>
          <p className="text-sm">{err?.message || "Error desconocido"}</p>
          <pre className="mt-4 text-xs text-left overflow-auto max-w-2xl">
            {err?.stack}
          </pre>
        </div>
      </div>
    )
  }
}
