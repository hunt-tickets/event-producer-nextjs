import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://62qhyx3jmc.ufs.sh/f/kS1daVeAXiztPplsPYKvlFRrAEOCxqoU4Dnp1VuhSYgZy3it"
          type="video/mp4"
        />
      </video>

      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 z-10" />

      {/* Contenido */}
      <div className="container relative z-20 py-20 md:py-32 text-center px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          PRODUCCIÓN DE EVENTOS
          <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 md:mt-4 font-light text-gray-200">
            Excelencia en cada detalle
          </span>
        </h1>
        <p className="mx-auto max-w-[280px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[700px] text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mt-6 md:mt-8">
          Más de 15 años creando experiencias inolvidables para marcas líderes y eventos exclusivos
        </p>
        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 sm:px-0">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto px-6 md:px-8"
          >
            Ver Portfolio
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white bg-white/10 hover:bg-white hover:text-black w-full sm:w-auto px-6 md:px-8"
          >
            Contactar
          </Button>
        </div>
      </div>
    </section>
  )
}