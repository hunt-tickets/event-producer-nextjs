import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "EVENTOS CORPORATIVOS",
      description: "Conferencias, lanzamientos y convenciones de alto nivel",
      features: [
        "Planificación estratégica",
        "Gestión integral del evento",
        "Producción audiovisual",
        "Catering premium"
      ]
    },
    {
      title: "EVENTOS SOCIALES",
      description: "Bodas y celebraciones exclusivas con estilo único",
      features: [
        "Diseño personalizado",
        "Coordinación completa",
        "Decoración exclusiva",
        "Entretenimiento de élite"
      ]
    },
    {
      title: "EVENTOS VIRTUALES",
      description: "Experiencias digitales innovadoras y engagement online",
      features: [
        "Streaming profesional",
        "Plataformas interactivas",
        "Producción remota",
        "Análisis de métricas"
      ]
    }
  ]

  return (
    <section id="servicios" className="py-16 md:py-20 bg-zinc-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            NUESTROS SERVICIOS
          </h2>
          <p className="mx-auto max-w-[280px] sm:max-w-[500px] md:max-w-[700px] text-gray-400 text-sm sm:text-base md:text-lg mt-3 md:mt-4">
            Soluciones integrales para cada tipo de evento
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="bg-black border-gray-800 hover:border-gray-600 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg md:text-xl text-white">{service.title}</CardTitle>
                <CardDescription className="text-sm md:text-base text-gray-400">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mt-0.5 flex-shrink-0 text-white" />
                      <span className="text-xs md:text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}