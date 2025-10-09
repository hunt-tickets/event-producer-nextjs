import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* GIF de fondo */}
      <img
        src="https://62qhyx3jmc.ufs.sh/f/kS1daVeAXiztV28keXmYNLfTBPpFXiyVa5tkUHW1b8M9w3DK"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Contenido simplificado: solo título y botones */}
      <div className="container relative z-10 text-center px-4 md:px-6">
        <h1 className="font-playfair text-stretched text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 md:mb-12 uppercase font-light">
          Inside Entertainment
        </h1>

        <div className="flex flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-black border border-white hover:bg-gray-100 px-8 py-6 text-base md:text-lg transition-all font-medium"
          >
            Ver Servicios
          </Button>
          <Button
            size="lg"
            className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 px-8 py-6 text-base md:text-lg transition-all"
          >
            Contactar
          </Button>
        </div>
      </div>
    </section>
  )
}