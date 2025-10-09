import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
      <div className="container relative z-20 py-32 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          PRODUCCIÓN DE EVENTOS
          <span className="block text-2xl sm:text-3xl md:text-4xl mt-4 font-light">
            Excelencia en cada detalle
          </span>
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl mt-8">
          Más de 15 años creando experiencias inolvidables para marcas líderes y eventos exclusivos
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            Ver Portfolio
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
            Contactar
          </Button>
        </div>
      </div>
    </section>
  )
}