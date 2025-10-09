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
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            NUESTROS SERVICIOS
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg mt-4">
            Soluciones integrales para cada tipo de evento
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="border-black/10 hover:border-black/30 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
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