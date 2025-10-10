export function PortfolioSection() {
  const projects = [
    {
      title: "Tech Summit 2024",
      category: "Corporativo",
      year: "2024",
    },
    {
      title: "Gala de Innovación",
      category: "Social",
      year: "2024",
    },
    {
      title: "Festival Digital",
      category: "Virtual",
      year: "2023",
    },
    {
      title: "Lanzamiento Global",
      category: "Híbrido",
      year: "2023",
    },
    {
      title: "Convención Anual",
      category: "Corporativo",
      year: "2023",
    },
    {
      title: "Experiencia Inmersiva",
      category: "Creativo",
      year: "2022",
    },
  ]

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-black">
      <div className="container px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="title-stretched text-4xl md:text-6xl font-light text-white uppercase">
            Portfolio
          </h2>
        </div>

        <div className="grid gap-1 md:gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden bg-zinc-900 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 transform transition-transform duration-500 group-hover:scale-105">
                <div className="transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
                    {project.category} · {project.year}
                  </p>
                  <h3 className="font-bebas text-lg md:text-xl font-light text-white uppercase tracking-wide">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}