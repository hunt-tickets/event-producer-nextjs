export function LogoCarousel() {
  // Placeholder logos - replace with actual client logos
  const logos = [
    { id: 1, name: "Client 1" },
    { id: 2, name: "Client 2" },
    { id: 3, name: "Client 3" },
    { id: 4, name: "Client 4" },
    { id: 5, name: "Client 5" },
    { id: 6, name: "Client 6" },
    { id: 7, name: "Client 7" },
    { id: 8, name: "Client 8" },
  ]

  return (
    <section className="bg-zinc-950 py-16 md:py-20 overflow-hidden">
      <div className="container px-6 md:px-8 max-w-7xl mx-auto mb-12">
        <h2 className="title-stretched text-3xl md:text-5xl font-light text-white uppercase text-center">
          Clientes
        </h2>
      </div>

      <div className="relative">
        {/* Logo carousel container */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          <div className="flex items-center space-x-12 md:space-x-20 px-6">
            {logos.map((logo) => (
              <div
                key={`first-${logo.id}`}
                className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-zinc-800/50 rounded-none flex items-center justify-center"
              >
                <span className="font-lato text-white/30 text-sm uppercase tracking-wider">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center space-x-12 md:space-x-20 px-6">
            {logos.map((logo) => (
              <div
                key={`second-${logo.id}`}
                className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-zinc-800/50 rounded-none flex items-center justify-center"
              >
                <span className="font-lato text-white/30 text-sm uppercase tracking-wider">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}