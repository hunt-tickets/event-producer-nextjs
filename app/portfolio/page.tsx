"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Folder } from "@/components/ui/folder"
import ImageModal from "@/components/portfolio/image-modal"
import FolderVideo from "@/components/portfolio/folder-video"
import { GlassFilter } from "@/components/ui/liquid-glass"

export default function PortfolioPage() {
  const [isFolderOpenParadisio, setIsFolderOpenParadisio] = useState(false)
  const [isFolderOpenMaria, setIsFolderOpenMaria] = useState(false)

  // Define gallery items for Dirección Creativa
  const galleryItemsCreativa = [
    { type: 'video' as const, src: 'https://62qhyx3jmc.ufs.sh/f/kS1daVeAXizt0qnmnb8eJRWis7wYqGp8H1VNE39rLtj6FOam' },
    { type: 'image' as const, src: 'https://62qhyx3jmc.ufs.sh/f/kS1daVeAXiztiJofgnhPpCDuAJRMWznwKO1IbUB4HfcertTa', alt: 'Paradisio Fest' },
    { type: 'image' as const, src: 'https://62qhyx3jmc.ufs.sh/f/kS1daVeAXiztriubYrSfHVjU9si46Jxhp1PXLDnArFGQZSdR', alt: 'Paradisio Fest' },
    { type: 'image' as const, src: 'https://62qhyx3jmc.ufs.sh/f/kS1daVeAXiztSBj6EywGmiuJnXKwIezZW3RjUHcld78TxfDF', alt: 'Paradisio Fest' },
    { type: 'image' as const, src: 'https://62qhyx3jmc.ufs.sh/f/kS1daVeAXiztqCrivIEPMkG59g1IDzLaRY06fq8HsmiotU23', alt: 'Paradisio Fest' },
    { type: 'image' as const, src: 'https://62qhyx3jmc.ufs.sh/f/kS1daVeAXiztu1aZHiIYAfGTHhCEUS8o4n7QRem06xWsZ5qa', alt: 'Paradisio Fest' },
    { type: 'image' as const, src: 'https://62qhyx3jmc.ufs.sh/f/kS1daVeAXiztBbTDG1aP26fOr9KsHQEUagjFybvS3kRdYGJ7', alt: 'Paradisio Fest' },
    { type: 'video' as const, src: 'https://62qhyx3jmc.ufs.sh/f/kS1daVeAXiztiD1szjhPpCDuAJRMWznwKO1IbUB4HfcertTa' },
    { type: 'image' as const, src: 'https://62qhyx3jmc.ufs.sh/f/kS1daVeAXiztmFI6R4J0Jlcw0zVdouSr7Kse4LRq6yZODA1n', alt: 'Paradisio Fest' },
    { type: 'video' as const, src: 'https://62qhyx3jmc.ufs.sh/f/kS1daVeAXizthNvuRe3Esd7MfBpSuXiIG8cFNyob0awQlxWq' },
    { type: 'image' as const, src: 'https://62qhyx3jmc.ufs.sh/f/kS1daVeAXiztaWruppMPZMqyBKdTWfRrLn4z3CQgEkX6Atjh', alt: 'Paradisio Fest' },
    { type: 'image' as const, src: 'https://62qhyx3jmc.ufs.sh/f/kS1daVeAXizt3vicdvZGHPmejipErckovVY5RTfILC8tu4Jn', alt: 'Paradisio Fest' },
  ]

  // Define gallery items for Producción (empty for now, you can add items later)
  const galleryItemsProduccion: Array<{ type: 'image' | 'video', src: string, alt?: string }> = []

  // Maria Helena Amador gallery items
  const mariaGalleryItemsCreativa: Array<{ type: 'image' | 'video', src: string, alt?: string }> = []
  const mariaGalleryItemsProduccion: Array<{ type: 'image' | 'video', src: string, alt?: string }> = []

  return (
    <div className="relative w-full h-screen bg-black overflow-y-scroll snap-y snap-mandatory">
      {/* Glass Filter for SVG effects */}
      <GlassFilter />

      {/* Section 1: Paradisio Fest */}
      <section className="relative w-full h-screen bg-black snap-start snap-always">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://62qhyx3jmc.ufs.sh/f/kS1daVeAXiztV8JkkqTmYNLfTBPpFXiyVa5tkUHW1b8M9w3D" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className={`absolute inset-0 transition-all duration-300 pointer-events-none ${isFolderOpenParadisio ? 'bg-black/60' : 'bg-black/20'}`} />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex-shrink-0 px-8 md:px-12 pt-8">
            {/* Back button */}
            <Link
              href="/"
              className="group inline-flex items-center gap-3 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-[-4px] transition-all duration-300" />
              <span className="font-poppins text-sm font-light text-white/70 hover:text-white transition-all duration-300 tracking-wider uppercase">
                Volver
              </span>
            </Link>

            {/* Paradisio Logo */}
            <div className="mt-12 flex justify-center">
              <div className="flex flex-col items-center gap-0.5">
                <div className="h-[1px] w-full bg-white" />
                <span className="font-poppins text-white font-extralight text-4xl md:text-6xl tracking-[0.05em] uppercase">
                  Paradisio Fest
                </span>
                <div className="h-[1px] w-full bg-white" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex items-center justify-between px-8 md:px-16">
            {/* Left - Project Name */}
            <div className="text-left">
              <div className="flex flex-col items-start gap-0.5">
                <div className="h-[1px] w-full bg-white" />
                <span className="font-poppins text-white font-extralight text-2xl md:text-3xl tracking-[0.05em] uppercase">
                  Paradisio Fest
                </span>
                <div className="h-[1px] w-full bg-white" />
              </div>
            </div>

            {/* Center - Empty for now */}
            <div className="flex-1"></div>

            {/* Right - Folders */}
            <div className="flex flex-col items-center justify-center gap-12">
              {/* Producción Folder */}
              <Folder
                color="#FFFFFF"
                size={1.2}
                label="Producción"
                onOpenChange={setIsFolderOpenParadisio}
                items={galleryItemsProduccion.map((item, index) => {
                  if (item.type === 'video') {
                    return (
                      <FolderVideo
                        key={`folder-prod-${index}`}
                        src={item.src}
                        className="w-full h-full object-cover"
                        galleryItems={galleryItemsProduccion}
                        currentIndex={index}
                      />
                    )
                  } else {
                    return (
                      <ImageModal
                        key={`folder-prod-${index}`}
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                        galleryItems={galleryItemsProduccion}
                        currentIndex={index}
                      />
                    )
                  }
                })}
              />

              {/* Dirección Creativa Folder */}
              <Folder
                color="#FFFFFF"
                size={1.2}
                label="Dirección Creativa"
                onOpenChange={setIsFolderOpenParadisio}
                items={galleryItemsCreativa.map((item, index) => {
                  if (item.type === 'video') {
                    return (
                      <FolderVideo
                        key={`folder-creativa-${index}`}
                        src={item.src}
                        className="w-full h-full object-cover"
                        galleryItems={galleryItemsCreativa}
                        currentIndex={index}
                      />
                    )
                  } else {
                    return (
                      <ImageModal
                        key={`folder-creativa-${index}`}
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                        galleryItems={galleryItemsCreativa}
                        currentIndex={index}
                      />
                    )
                  }
                })}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Maria Helena Amador */}
      <section className="relative w-full h-screen bg-black snap-start snap-always">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://62qhyx3jmc.ufs.sh/f/kS1daVeAXiztV8JkkqTmYNLfTBPpFXiyVa5tkUHW1b8M9w3D" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className={`absolute inset-0 transition-all duration-300 pointer-events-none ${isFolderOpenMaria ? 'bg-black/60' : 'bg-black/20'}`} />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex-shrink-0 px-8 md:px-12 pt-8">
            {/* Back button */}
            <Link
              href="/"
              className="group inline-flex items-center gap-3 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-[-4px] transition-all duration-300" />
              <span className="font-poppins text-sm font-light text-white/70 hover:text-white transition-all duration-300 tracking-wider uppercase">
                Volver
              </span>
            </Link>

            {/* Logo */}
            <div className="mt-12 flex justify-center">
              <div className="flex flex-col items-center gap-0.5">
                <div className="h-[1px] w-full bg-white" />
                <span className="font-poppins text-white font-extralight text-4xl md:text-6xl tracking-[0.05em] uppercase">
                  Maria Helena Amador
                </span>
                <div className="h-[1px] w-full bg-white" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex items-center justify-between px-8 md:px-16">
            {/* Left - Project Name */}
            <div className="text-left">
              <div className="flex flex-col items-start gap-0.5">
                <div className="h-[1px] w-full bg-white" />
                <span className="font-poppins text-white font-extralight text-2xl md:text-3xl tracking-[0.05em] uppercase">
                  Maria Helena Amador
                </span>
                <div className="h-[1px] w-full bg-white" />
              </div>
            </div>

            {/* Center - Empty for now */}
            <div className="flex-1"></div>

            {/* Right - Folders */}
            <div className="flex flex-col items-center justify-center gap-12">
              {/* Producción Folder */}
              <Folder
                color="#FFFFFF"
                size={1.2}
                label="Producción"
                onOpenChange={setIsFolderOpenMaria}
                items={mariaGalleryItemsProduccion.map((item, index) => {
                  if (item.type === 'video') {
                    return (
                      <FolderVideo
                        key={`folder-maria-prod-${index}`}
                        src={item.src}
                        className="w-full h-full object-cover"
                        galleryItems={mariaGalleryItemsProduccion}
                        currentIndex={index}
                      />
                    )
                  } else {
                    return (
                      <ImageModal
                        key={`folder-maria-prod-${index}`}
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                        galleryItems={mariaGalleryItemsProduccion}
                        currentIndex={index}
                      />
                    )
                  }
                })}
              />

              {/* Dirección Creativa Folder */}
              <Folder
                color="#FFFFFF"
                size={1.2}
                label="Dirección Creativa"
                onOpenChange={setIsFolderOpenMaria}
                items={mariaGalleryItemsCreativa.map((item, index) => {
                  if (item.type === 'video') {
                    return (
                      <FolderVideo
                        key={`folder-maria-creativa-${index}`}
                        src={item.src}
                        className="w-full h-full object-cover"
                        galleryItems={mariaGalleryItemsCreativa}
                        currentIndex={index}
                      />
                    )
                  } else {
                    return (
                      <ImageModal
                        key={`folder-maria-creativa-${index}`}
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                        galleryItems={mariaGalleryItemsCreativa}
                        currentIndex={index}
                      />
                    )
                  }
                })}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
