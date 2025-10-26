"use client"

import ImageReveal, { type ImageData } from "@/components/ui/image-reveal"

// Content for the first column (left)
const servicesImages: ImageData[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1470&auto=format&fit=crop',
    alt: 'Producción de Eventos',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1470&auto=format&fit=crop',
    alt: 'Dirección Creativa',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop',
    alt: 'Gestión Técnica',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1474&auto=format&fit=crop',
    alt: 'Experiencias Inmersivas',
  },
]

// Content for the second column (right)
const experiencesImages: ImageData[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1474&auto=format&fit=crop',
    alt: 'Festivales Musicales',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1470&auto=format&fit=crop',
    alt: 'Eventos Corporativos',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1470&auto=format&fit=crop',
    alt: 'Lanzamientos de Marca',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1470&auto=format&fit=crop',
    alt: 'Experiencias Privadas',
  },
]

export function ImageRevealSection() {
  return (
    <section className="relative w-full min-h-screen bg-black py-20 px-6 md:px-12 z-10">
      {/* Grid with 2 columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Services */}
        <div className="w-full">
          <ImageReveal
            images={servicesImages}
            variant="default"
            size="compact"
            className="border-white/10 bg-black"
          />
        </div>

        {/* Right Column - Experiences */}
        <div className="w-full">
          <ImageReveal
            images={experiencesImages}
            variant="default"
            size="compact"
            className="border-white/10 bg-black"
          />
        </div>
      </div>
    </section>
  )
}
