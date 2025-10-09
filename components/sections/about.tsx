export function AboutSection() {
  const stats = [
    { number: "500+", label: "Eventos" },
    { number: "15+", label: "Años" },
    { number: "100+", label: "Clientes" },
    { number: "50+", label: "Equipo" },
  ]

  return (
    <section id="nosotros" className="py-24 md:py-32 bg-black">
      <div className="container px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="title-stretched text-4xl md:text-6xl font-light text-white uppercase">
            Nuestra Trayectoria
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
          <p className="font-lato text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            Más de una década transformando ideas en experiencias memorables.
            Nuestra pasión por la excelencia nos ha llevado a establecer nuevos
            estándares en la industria del entretenimiento y eventos corporativos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="font-playfair text-5xl md:text-7xl font-light text-white mb-2 transition-all duration-300 group-hover:scale-110">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}