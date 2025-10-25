"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Box, Sphere } from "@react-three/drei"
import { Suspense } from "react"

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]}>
        <meshStandardMaterial color="orange" />
      </Box>
      <Sphere position={[1.2, 0, 0]}>
        <meshStandardMaterial color="hotpink" />
      </Sphere>
      <OrbitControls />
    </>
  )
}

export function OrbitGallery3DSimple() {
  return (
    <div className="w-full h-screen bg-black">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-white">Cargando experiencia 3D...</p>
        </div>
      }>
        <Canvas>
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  )
}