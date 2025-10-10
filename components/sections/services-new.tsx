import {
  Mic,
  Monitor,
  Sparkles,
  Camera,
  Music,
  Globe
} from "lucide-react"

export function ServicesNewSection() {
  const services = [
    {
      icon: <Mic className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Corporativos",
      items: ["Conferencias", "Lanzamientos", "Convenciones"]
    },
    {
      icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Sociales",
      items: ["Bodas", "Galas", "Celebraciones"]
    },
    {
      icon: <Monitor className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Virtuales",
      items: ["Streaming", "Webinars", "Híbridos"]
    },
    {
      icon: <Camera className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Producción",
      items: ["Video", "Fotografía", "Contenido"]
    },
    {
      icon: <Music className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Entertainment",
      items: ["Shows", "Música", "Espectáculos"]
    },
    {
      icon: <Globe className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Experiencias",
      items: ["Activaciones", "Pop-ups", "Inmersivo"]
    }
  ]

  return (
    <section id="servicios" className="py-20 md:py-28 bg-black">
      <div className="container px-6 md:px-8 max-w-7xl mx-auto">
        {/* Compact header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="title-stretched text-4xl md:text-6xl font-light text-white uppercase mb-4">
            Servicios
          </h2>
          <p className="font-poppins text-gray-500 text-sm md:text-base uppercase tracking-widest">
            Todo lo que necesitas • Un solo lugar
          </p>
        </div>

        {/* Icon grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-900/20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-black p-8 md:p-10 hover:bg-zinc-950 transition-all duration-500"
            >
              {/* Icon container with hover effect */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-white/40 group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform">
                  {service.icon}
                </div>

                <h3 className="font-bebas text-lg md:text-xl text-white font-light uppercase tracking-wide">
                  {service.title}
                </h3>

                {/* Quick list - visible on hover on desktop, always visible on mobile */}
                <div className="space-y-1 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  {service.items.map((item, idx) => (
                    <p key={idx} className="font-poppins text-xs text-gray-500">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* Subtle border accent on hover */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
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