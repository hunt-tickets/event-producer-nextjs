"use client"

import React, { useRef, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryItem {
  type: 'image' | 'video'
  src: string
  alt?: string
}

interface FolderVideoProps {
  src: string
  className?: string
  galleryItems?: GalleryItem[]
  currentIndex?: number
}

export default function FolderVideo({
  src,
  className = "",
  galleryItems = [],
  currentIndex = 0
}: FolderVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const modalVideoRef = useRef<HTMLVideoElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeIndex, setActiveIndex] = useState(currentIndex)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Pequeño delay para asegurar que el video está visible
    const timer = setTimeout(() => {
      video.play().catch((err) => {
        console.log("Video play error:", err)
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isOpen) {
      setActiveIndex(currentIndex)
    }
  }, [isOpen, currentIndex])

  // Auto-play modal video when it becomes active
  useEffect(() => {
    if (isOpen && modalVideoRef.current && galleryItems[activeIndex]?.type === 'video') {
      modalVideoRef.current.play().catch((err) => {
        console.log("Modal video play error:", err)
      })
    }
  }, [isOpen, activeIndex, galleryItems])

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    console.log("Video clicked!")
    setIsOpen(true)
  }

  const handleClose = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation()
    }
    setIsOpen(false)
  }

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : galleryItems.length - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveIndex((prev) => (prev < galleryItems.length - 1 ? prev + 1 : 0))
  }

  const handleThumbnailClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveIndex(index)
  }

  const activeItem = galleryItems[activeIndex] || { type: 'video' as const, src }

  const modalContent = isOpen && mounted ? (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black/95 p-4"
      style={{ zIndex: 99999 }}
      onClick={handleClose}
    >
      {/* Close button */}
      <button
        className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors z-[100000]"
        onClick={handleClose}
      >
        <X className="w-10 h-10" />
      </button>

      {/* Navigation arrows - only show if gallery has items */}
      {galleryItems.length > 1 && (
        <>
          <button
            className="absolute left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all duration-300 z-[100000] hover:scale-110"
            onClick={handlePrevious}
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          <button
            className="absolute right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all duration-300 z-[100000] hover:scale-110"
            onClick={handleNext}
          >
            <ChevronRight className="w-12 h-12" />
          </button>
        </>
      )}

      {/* Main content area */}
      <div className="flex-1 flex items-center justify-center w-full">
        {activeItem.type === 'video' ? (
          <video
            key={activeIndex}
            ref={modalVideoRef}
            loop
            playsInline
            controls
            className="max-w-[90vw] max-h-[70vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          >
            <source src={activeItem.src} type="video/mp4" />
          </video>
        ) : (
          <img
            src={activeItem.src}
            alt={activeItem.alt || "Gallery item"}
            className="max-w-[90vw] max-h-[70vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        )}
      </div>

      {/* Thumbnails preview - only show if gallery has items */}
      {galleryItems.length > 1 && (
        <div className="flex gap-3 mt-6 pb-4 overflow-x-auto max-w-[90vw]">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
                index === activeIndex
                  ? 'ring-2 ring-white scale-110'
                  : 'ring-1 ring-white/30 hover:ring-white/60 opacity-60 hover:opacity-100'
              }`}
              onClick={(e) => handleThumbnailClick(index, e)}
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  className="w-20 h-20 object-cover rounded"
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt || `Thumbnail ${index + 1}`}
                  className="w-20 h-20 object-cover rounded"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  ) : null

  return (
    <>
      {/* Thumbnail/Preview */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="auto"
        className={`cursor-pointer ${className}`}
        style={{ pointerEvents: 'auto' }}
        onClick={handleVideoClick}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Modal rendered in portal */}
      {mounted && modalContent && createPortal(modalContent, document.body)}
    </>
  )
}
