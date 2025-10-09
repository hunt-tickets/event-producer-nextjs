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
    <section id="nosotros" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            NUESTRA TRAYECTORIA
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg mt-4">
            Una década y media de excelencia en la producción de eventos
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Experiencia que marca la diferencia</h3>
            <p className="text-gray-600">
              Desde nuestra fundación en 2008, hemos trabajado con las marcas más prestigiosas
              del país, creando eventos que trascienden las expectativas. Nuestra filosofía se
              basa en la atención al detalle, la creatividad y la ejecución impecable.
            </p>
            <p className="text-gray-600">
              Cada evento es una oportunidad para demostrar nuestro compromiso con la excelencia
              y nuestra pasión por crear momentos inolvidables.
            </p>
          </div>

          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-4 border-l-4 border-black pl-4">
                <div className="font-bold text-xl">{milestone.year}</div>
                <div className="text-gray-600">{milestone.event}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold">{stat.number}</div>
                <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}