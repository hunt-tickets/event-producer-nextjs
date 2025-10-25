"use client"

import React from "react"
import { Timeline } from "@/components/ui/timeline"
import Image from "next/image"

export function ServicesTimelineSection() {
  const servicesData = [
    {
      title: "Dirección Creativa",
      content: (
        <div>
          <p className="font-poppins text-neutral-300 text-xs md:text-base font-light mb-8 leading-relaxed">
            Desarrollamos conceptos creativos únicos que dan vida a tu visión. Desde la ideación hasta la ejecución,
            creamos narrativas visuales que cautivan y transforman espacios en experiencias inolvidables.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Conceptualización y diseño de experiencias
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Desarrollo de identidad visual de eventos
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Dirección artística y escenográfica
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm">
              ✅ Storytelling y narrativa de marca
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1496024840928-4c417adf211d?w=800&q=80"
              alt="dirección creativa"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              alt="diseño conceptual"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Eventos Corporativos",
      content: (
        <div>
          <p className="font-poppins text-neutral-300 text-xs md:text-base font-light mb-8 leading-relaxed">
            Diseñamos y ejecutamos eventos corporativos de alto impacto que fortalecen tu marca y conectan con tu audiencia.
            Desde conferencias hasta lanzamientos de producto, creamos experiencias memorables.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Planificación estratégica integral
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Coordinación logística completa
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Producción audiovisual profesional
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm">
              ✅ Gestión de proveedores premium
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
              alt="evento corporativo"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"
              alt="conferencia"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Eventos Sociales",
      content: (
        <div>
          <p className="font-poppins text-neutral-300 text-xs md:text-base font-light mb-8 leading-relaxed">
            Transformamos tus celebraciones en momentos únicos e inolvidables. Bodas, galas, aniversarios y fiestas
            privadas diseñadas con elegancia y atención al detalle.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Diseño conceptual personalizado
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Ambientación y decoración exclusiva
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Coordinación day-of impecable
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm">
              ✅ Entretenimiento y catering de élite
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1519167758481-83f29da8c3d7?w=800&q=80"
              alt="boda"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
              alt="gala"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Producciones Digitales",
      content: (
        <div>
          <p className="font-poppins text-neutral-300 text-xs md:text-base font-light mb-8 leading-relaxed">
            Creamos experiencias virtuales e híbridas innovadoras que conectan audiencias globales. Streaming profesional,
            plataformas interactivas y contenido digital de última generación.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Streaming profesional 4K/HD
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Plataformas interactivas personalizadas
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Integración de realidad aumentada
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm">
              ✅ Análisis de engagement en tiempo real
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80"
              alt="streaming"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80"
              alt="virtual"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Producción Audiovisual",
      content: (
        <div>
          <p className="font-poppins text-neutral-300 text-xs md:text-base font-light mb-8 leading-relaxed">
            Capturamos la esencia de tu evento con producción audiovisual de alta calidad. Equipos profesionales,
            edición cinematográfica y contenido optimizado para todas las plataformas.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Video y fotografía profesional
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Edición cinematográfica premium
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Contenido multi-plataforma
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm">
              ✅ Cobertura en vivo y post-producción
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80"
              alt="producción"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80"
              alt="cámara"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Entertainment & Shows",
      content: (
        <div>
          <p className="font-poppins text-neutral-300 text-xs md:text-base font-light mb-8 leading-relaxed">
            Espectáculos en vivo, música, performances y entretenimiento de clase mundial. Conectamos con los mejores
            artistas y creamos shows personalizados para tu evento.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Booking de artistas internacionales
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Shows y performances personalizados
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Producción musical en vivo
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm">
              ✅ Diseño de escenografía y lighting
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80"
              alt="concierto"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80"
              alt="show"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Experiencias Inmersivas",
      content: (
        <div>
          <p className="font-poppins text-neutral-300 text-xs md:text-base font-light mb-8 leading-relaxed">
            Creamos activaciones de marca, pop-ups y experiencias inmersivas que generan conexión emocional.
            Tecnología, diseño y storytelling para eventos que dejan huella.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Activaciones de marca BTL
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Espacios pop-up temporales
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm mb-2">
              ✅ Experiencias con tecnología inmersiva
            </div>
            <div className="flex gap-2 items-center font-poppins text-neutral-400 text-xs md:text-sm">
              ✅ Instalaciones interactivas personalizadas
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1496024840928-4c417adf211d?w=800&q=80"
              alt="instalación"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              alt="experiencia"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ]

  return (
    <div id="servicios" className="w-full bg-black dark:bg-black">
      <Timeline data={servicesData} />
    </div>
  )
}
