"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { ReactNode, useState, useEffect } from "react"

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 800)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {/* Overlay de transición */}
      <AnimatePresence>
        {isTransitioning && (
          <>
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ originY: 0 }}
              className="fixed inset-0 z-[100] bg-black"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="fixed inset-0 z-[101] flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="inline-flex flex-col"
              >
                {/* Línea superior */}
                <div className="h-[1px] w-full bg-white" />

                {/* Contenedor del texto con líneas laterales */}
                <div className="flex items-center">
                  {/* Línea izquierda */}
                  <div className="w-[1px] h-auto self-stretch bg-white" />

                  <span className="font-poppins text-white font-extralight text-3xl tracking-[0.05em] uppercase px-1">
                    Inside
                  </span>

                  {/* Línea derecha */}
                  <div className="w-[1px] h-auto self-stretch bg-white" />
                </div>

                {/* Línea inferior */}
                <div className="h-[1px] w-full bg-white" />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Contenido de la página */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
