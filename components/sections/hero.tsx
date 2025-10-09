import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Video de fondo sin overlay */}
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

      {/* Contenido simplificado: solo título y botones */}
      <div className="container relative z-10 text-center px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 md:mb-12">
          PRODUCCIÓN DE EVENTOS
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-base md:text-lg"
          >
            Ver Portfolio
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black px-8 py-6 text-base md:text-lg"
          >
            Contactar
          </Button>
        </div>
      </div>
    </section>
  )
}