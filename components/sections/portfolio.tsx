import { Card, CardContent } from "@/components/ui/card"

export function PortfolioSection() {
  const projects = [
    {
      title: "Conferencia Tech 2024",
      category: "Corporativo",
      attendees: "2,000+",
    },
    {
      title: "Gala Benéfica Anual",
      category: "Social",
      attendees: "500+",
    },
    {
      title: "Summit Virtual Global",
      category: "Virtual",
      attendees: "10,000+",
    },
    {
      title: "Lanzamiento de Producto",
      category: "Corporativo",
      attendees: "800+",
    },
    {
      title: "Boda de Lujo",
      category: "Social",
      attendees: "300+",
    },
    {
      title: "Festival de Innovación",
      category: "Híbrido",
      attendees: "5,000+",
    },
  ]

  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            PORTFOLIO
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg mt-4">
            Algunos de nuestros eventos más destacados
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-700" />
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{project.category}</span>
                    <span>{project.attendees} asistentes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}