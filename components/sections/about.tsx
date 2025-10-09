import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const stats = [
    { number: "500+", label: "Eventos realizados" },
    { number: "15+", label: "Años de experiencia" },
    { number: "100+", label: "Clientes satisfechos" },
    { number: "50+", label: "Profesionales" },
  ]

  const milestones = [
    { year: "2008", event: "Fundación de la empresa" },
    { year: "2015", event: "Expansión internacional" },
    { year: "2020", event: "Eventos virtuales híbridos" },
    { year: "2024", event: "Líderes del sector" },
  ]

  return (
    <section id="nosotros" className="py-16 md:py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            NUESTRA TRAYECTORIA
          </h2>
          <p className="mx-auto max-w-[280px] sm:max-w-[500px] md:max-w-[700px] text-gray-400 text-sm sm:text-base md:text-lg mt-3 md:mt-4">
            Una década y media de excelencia en la producción de eventos
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-12 md:mb-16">
          <div className="space-y-4 px-2 md:px-0">
            <h3 className="text-xl md:text-2xl font-bold text-white">Experiencia que marca la diferencia</h3>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Desde nuestra fundación en 2008, hemos trabajado con las marcas más prestigiosas
              del país, creando eventos que trascienden las expectativas. Nuestra filosofía se
              basa en la atención al detalle, la creatividad y la ejecución impecable.
            </p>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Cada evento es una oportunidad para demostrar nuestro compromiso con la excelencia
              y nuestra pasión por crear momentos inolvidables.
            </p>
          </div>

          <div className="space-y-4 px-2 md:px-0">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-4 border-l-4 border-white pl-4">
                <div className="font-bold text-lg md:text-xl text-white">{milestone.year}</div>
                <div className="text-sm md:text-base text-gray-400">{milestone.event}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-zinc-900 border-gray-800">
              <CardContent className="pt-4 md:pt-6">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                <p className="text-xs md:text-sm text-gray-400 mt-1 md:mt-2">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}