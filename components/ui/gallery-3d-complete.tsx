"use client"

import React, { useRef, useMemo } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, Stars, Float, Text } from "@react-three/drei"
import * as THREE from "three"

interface ImagePlaneProps {
  imageUrl: string
  index: number
  totalImages: number
}

function ImagePlane({ imageUrl, index, totalImages }: ImagePlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const texture = useLoader(THREE.TextureLoader, imageUrl)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      const angle = (time * 0.15) + (index * Math.PI * 2) / totalImages
      const radius = 6

      meshRef.current.position.x = Math.cos(angle) * radius
      meshRef.current.position.z = Math.sin(angle) * radius
      meshRef.current.position.y = Math.sin(time * 0.3 + index) * 1.5

      // Hacer que las imágenes miren hacia el centro
      meshRef.current.lookAt(0, meshRef.current.position.y, 0)
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh ref={meshRef}>
        <planeGeometry args={[2.5, 1.8]} />
        <meshStandardMaterial
          map={texture}
          side={THREE.DoubleSide}
          transparent
          opacity={0.95}
        />
      </mesh>
    </Float>
  )
}

function ParticleSphere() {
  const particlesRef = useRef<THREE.Points>(null)

  const particlePositions = useMemo(() => {
    const positions = []
    const particleCount = 3000

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const radius = 4 + Math.random() * 3

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      positions.push(x, y, z)
    }

    return new Float32Array(positions)
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.015
    }
  })

  return (
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
        size={0.04}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

interface Gallery3DCompleteProps {
  images: string[]
}

export default function Gallery3DComplete({ images }: Gallery3DCompleteProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mb-4"></div>
          <p className="text-white font-poppins">Preparando experiencia 3D...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        {/* Fondo negro */}
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 10, 40]} />

        {/* Luces */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        <spotLight position={[0, 15, 0]} intensity={0.5} angle={0.3} penumbra={1} color="#3b82f6" />

        {/* Estrellas de fondo */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        {/* Partículas flotantes */}
        <ParticleSphere />

        {/* Imágenes orbitando */}
        {images.map((imageUrl, index) => (
          <ImagePlane
            key={index}
            imageUrl={imageUrl}
            index={index}
            totalImages={images.length}
          />
        ))}

        {/* Controles de órbita */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={6}
          maxDistance={25}
          autoRotate
          autoRotateSpeed={0.3}
          dampingFactor={0.05}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
