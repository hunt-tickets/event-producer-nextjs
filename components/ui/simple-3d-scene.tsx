"use client"

import React from "react"

export default function Simple3DScene({ images = [] }: { images?: string[] }) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <p className="text-white">Preparando escena...</p>
      </div>
    )
  }

  // Solo importar en el cliente después de montar
  const { Canvas, useFrame } = require("@react-three/fiber")
  const { OrbitControls, Stars } = require("@react-three/drei")
  const React3 = require("react")
  const THREE = require("three")

  function RotatingGroup() {
    const groupRef = React3.useRef<any>()

    useFrame((state: any) => {
      if (groupRef.current) {
        groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      }
    })

    const positions = images.map((_, index) => {
      const angle = (index / images.length) * Math.PI * 2
      const radius = 5
      return {
        x: Math.cos(angle) * radius,
        z: Math.sin(angle) * radius,
      }
    })

    return React3.createElement(
      "group",
      { ref: groupRef },
      positions.map((pos, i) =>
        React3.createElement(
          "mesh",
          { key: i, position: [pos.x, 0, pos.z] },
          React3.createElement("planeGeometry", { args: [2.5, 1.5] }),
          React3.createElement("meshStandardMaterial", {
            color: `hsl(${(i * 360) / images.length}, 70%, 60%)`,
            side: THREE.DoubleSide,
          })
        )
      )
    )
  }

  return React3.createElement(
    "div",
    { className: "w-full h-screen bg-black" },
    React3.createElement(
      Canvas,
      { camera: { position: [0, 0, 10], fov: 60 } },
      React3.createElement("color", { attach: "background", args: ["#000000"] }),
      React3.createElement("ambientLight", { intensity: 0.5 }),
      React3.createElement("pointLight", { position: [10, 10, 10], intensity: 1 }),
      React3.createElement(Stars, {
        radius: 100,
        depth: 50,
        count: 5000,
        factor: 4,
        saturation: 0,
        fade: true,
      }),
      React3.createElement(RotatingGroup),
      React3.createElement(OrbitControls, {
        enableZoom: true,
        enablePan: false,
        minDistance: 5,
        maxDistance: 20,
        autoRotate: true,
        autoRotateSpeed: 0.5,
      })
    )
  )
}
