"use client"

import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from "three"

interface ImageSpriteProps {
  imageUrl: string
  index: number
  totalImages: number
}

function ImageSprite({ imageUrl, index, totalImages }: ImageSpriteProps) {
  const spriteRef = useRef<THREE.Sprite>(null)
  const texture = useLoader(THREE.TextureLoader, imageUrl)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (spriteRef.current) {
      const angle = (time * 0.2) + (index * Math.PI * 2) / totalImages
      const radius = 6
      spriteRef.current.position.x = Math.cos(angle) * radius
      spriteRef.current.position.z = Math.sin(angle) * radius
      spriteRef.current.position.y = Math.sin(time * 0.3 + index) * 2
      spriteRef.current.lookAt(0, spriteRef.current.position.y, 0)
    }
  })

  return (
    <sprite ref={spriteRef} scale={[3, 2, 1]}>
      <spriteMaterial map={texture} transparent opacity={0.9} />
    </sprite>
  )
}

interface ParticleSphereProps {
  images?: string[]
}

function ParticleSphere({ images = [] }: ParticleSphereProps) {
  const particlesRef = useRef<THREE.Points>(null)

  // Generate particle positions on a sphere
  const particlePositions = useMemo(() => {
    const positions = []
    const particleCount = 2000

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const radius = 5 + Math.random() * 2

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      positions.push(x, y, z)
    }

    return new Float32Array(positions)
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    // Rotate particles
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05
      particlesRef.current.rotation.x = time * 0.02
    }
  })

  return (
    <group>
      {/* Particle sphere */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#ffffff"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      {/* Orbiting images */}
      {images.map((imageUrl, index) => (
        <ImageSprite
          key={index}
          imageUrl={imageUrl}
          index={index}
          totalImages={images.length}
        />
      ))}
    </group>
  )
}

export function OrbitGallery3D({ images }: { images?: string[] }) {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={8}
          maxDistance={25}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleSphere images={images} />
      </Canvas>
    </div>
  )
}
