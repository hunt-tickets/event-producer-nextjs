"use client"

import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface ServiceItem {
  id: number
  title: string
  image: string
  description: string
  features: string[]
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Eventos Corporativos",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    description: "Diseñamos y ejecutamos eventos corporativos de alto impacto que fortalecen tu marca y conectan con tu audiencia. Desde conferencias hasta lanzamientos de producto, creamos experiencias memorables.",
    features: [
      "Planificación estratégica integral",
      "Coordinación logística completa",
      "Producción audiovisual profesional",
      "Gestión de proveedores premium"
    ]
  },
  {
    id: 2,
    title: "Eventos Sociales",
    image: "https://images.unsplash.com/photo-1519167758481-83f29da8c3d7?w=800&q=80",
    description: "Transformamos tus celebraciones en momentos únicos e inolvidables. Bodas, galas, aniversarios y fiestas privadas diseñadas con elegancia y atención al detalle.",
    features: [
      "Diseño conceptual personalizado",
      "Ambientación y decoración exclusiva",
      "Coordinación day-of impecable",
      "Entretenimiento y catering de élite"
    ]
  },
  {
    id: 3,
    title: "Producciones Digitales",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
    description: "Creamos experiencias virtuales e híbridas innovadoras que conectan audiencias globales. Streaming profesional, plataformas interactivas y contenido digital de última generación.",
    features: [
      "Streaming profesional 4K/HD",
      "Plataformas interactivas personalizadas",
      "Integración de realidad aumentada",
      "Análisis de engagement en tiempo real"
    ]
  },
  {
    id: 4,
    title: "Producción Audiovisual",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80",
    description: "Capturamos la esencia de tu evento con producción audiovisual de alta calidad. Equipos profesionales, edición cinematográfica y contenido optimizado para todas las plataformas.",
    features: [
      "Video y fotografía profesional",
      "Edición cinematográfica premium",
      "Contenido multi-plataforma",
      "Cobertura en vivo y post-producción"
    ]
  },
  {
    id: 5,
    title: "Entertainment & Shows",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    description: "Espectáculos en vivo, música, performances y entretenimiento de clase mundial. Conectamos con los mejores artistas y creamos shows personalizados para tu evento.",
    features: [
      "Booking de artistas internacionales",
      "Shows y performances personalizados",
      "Producción musical en vivo",
      "Diseño de escenografía y lighting"
    ]
  },
  {
    id: 6,
    title: "Experiencias Inmersivas",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    description: "Creamos activaciones de marca, pop-ups y experiencias inmersivas que generan conexión emocional. Tecnología, diseño y storytelling para eventos que dejan huella.",
    features: [
      "Activaciones de marca BTL",
      "Espacios pop-up temporales",
      "Experiencias con tecnología inmersiva",
      "Instalaciones interactivas personalizadas"
    ]
  }
]

export function ServicesNewSection() {
  const [activeTabId, setActiveTabId] = useState<number>(1)
  const [activeImage, setActiveImage] = useState(services[0].image)

  return (
    <section id="servicios" className="py-20 md:py-32 bg-black">
      <div className="container px-6 md:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-poppins text-3xl md:text-5xl font-light text-white uppercase tracking-wide mb-4">
            Servicios
          </h2>
          <p className="font-poppins text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Transformamos tus ideas en experiencias extraordinarias. Conoce nuestra gama completa de servicios especializados.
          </p>
        </div>

        {/* Accordion + Image Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Accordion Side */}
          <div className="w-full lg:w-1/2">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {services.map((service) => (
                <AccordionItem
                  key={service.id}
                  value={`item-${service.id}`}
                  className="border-b border-gray-800"
                >
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(service.image)
                      setActiveTabId(service.id)
                    }}
                    className="cursor-pointer py-6 !no-underline transition hover:no-underline"
                  >
                    <h3
                      className={`font-poppins text-xl md:text-2xl font-light uppercase tracking-wide text-left transition-colors ${
                        service.id === activeTabId
                          ? "text-white"
                          : "text-gray-500"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pt-2 pb-6">
                      <p className="font-poppins text-sm md:text-base text-gray-400 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features list */}
                      <div className="space-y-3">
                        <p className="font-poppins text-xs uppercase tracking-wider text-gray-500">
                          Incluye:
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="block w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="font-poppins text-sm text-gray-300">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Mobile image */}
                      <div className="mt-6 lg:hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Image Side - Desktop only */}
          <div className="hidden lg:block w-1/2 sticky top-8">
            <div className="relative overflow-hidden rounded-lg border border-gray-800">
              <img
                src={activeImage}
                alt="Service preview"
                className="w-full h-[600px] object-cover transition-all duration-500"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 md:mt-20">
          <p className="font-poppins text-gray-400 mb-6">
            ¿Listo para crear algo extraordinario?
          </p>
          <button className="px-8 py-3 bg-white text-black font-poppins text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors">
            Cotiza tu evento
          </button>
        </div>
      </div>
    </section>
  )
}