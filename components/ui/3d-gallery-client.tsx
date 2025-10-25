"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Stars, Image as DreiImage } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function RotatingImages({ images = [] }: { images: string[] }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {images.map((url, index) => {
        const angle = (index / images.length) * Math.PI * 2
        const radius = 5
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius

        return (
          <Float
            key={index}
            speed={1}
            rotationIntensity={0.5}
            floatIntensity={0.5}
          >
            <DreiImage
              url={url}
              position={[x, 0, z]}
              scale={[3, 2]}
              transparent
            />
          </Float>
        )
      })}
    </group>
  )
}

export default function Gallery3D({ images = [] }: { images?: string[] }) {
  const defaultImages = [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
  ]

  const displayImages = images.length > 0 ? images : defaultImages

  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 10, 30]} />

        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <RotatingImages images={displayImages} />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={5}
          maxDistance={20}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}