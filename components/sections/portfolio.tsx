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
    <section id="portfolio" className="py-16 md:py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            PORTFOLIO
          </h2>
          <p className="mx-auto max-w-[280px] sm:max-w-[500px] md:max-w-[700px] text-gray-400 text-sm sm:text-base md:text-lg mt-3 md:mt-4">
            Algunos de nuestros eventos más destacados
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-zinc-900 border-gray-800 hover:border-gray-600 transition-all duration-300">
              <div className="h-32 sm:h-40 md:h-48 bg-gradient-to-br from-zinc-800 to-zinc-700" />
              <CardContent className="p-4 md:p-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-base md:text-lg text-white">{project.title}</h3>
                  <div className="flex justify-between text-xs md:text-sm text-gray-400">
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