export function ServicesSection() {
  const services = [
    {
      title: "Eventos Corporativos",
      description: "Conferencias y convenciones de alto impacto",
      features: [
        "Planificación estratégica integral",
        "Producción audiovisual premium",
        "Gestión logística completa",
        "Experiencias inmersivas"
      ]
    },
    {
      title: "Eventos Sociales",
      description: "Celebraciones exclusivas con estilo único",
      features: [
        "Diseño conceptual personalizado",
        "Coordinación de proveedores",
        "Ambientación y decoración",
        "Entretenimiento de élite"
      ]
    },
    {
      title: "Producciones Digitales",
      description: "Experiencias virtuales e híbridas innovadoras",
      features: [
        "Streaming profesional 4K",
        "Plataformas interactivas",
        "Realidad aumentada",
        "Análisis de engagement"
      ]
    }
  ]

  return (
    <section id="servicios" className="py-24 md:py-32 bg-zinc-950">
      <div className="container px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight text-white uppercase">
            Nuestros Servicios
          </h2>
        </div>

        <div className="grid gap-8 md:gap-12 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-black/50 backdrop-blur-sm border border-gray-800 p-8 md:p-10 hover:border-gray-600 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <h3 className="text-xl md:text-2xl font-light text-white mb-3 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 mb-8">
                  {service.description}
                </p>

                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="block w-1 h-1 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}