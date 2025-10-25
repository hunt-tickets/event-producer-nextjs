"use client"

import AutoScroll from "embla-carousel-auto-scroll"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

interface Logo {
  id: string
  description: string
  image: string
  className?: string
}

interface LogosProps {
  heading?: string
  logos?: Logo[]
}

const defaultLogos: Logo[] = [
  {
    id: "logo-1",
    description: "Cliente 1",
    image: "https://62qhyx3jmc.ufs.sh/f/kS1daVeAXiztsXuzTjxhEZlz374ignj0m6MJSfcNyDYQqLKH",
    className: "h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300",
  },
  {
    id: "logo-2",
    description: "Cliente 2",
    image: "https://62qhyx3jmc.ufs.sh/f/kS1daVeAXizt3BSKQXZGHPmejipErckovVY5RTfILC8tu4Jn",
    className: "h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300",
  },
  {
    id: "logo-3",
    description: "Cliente 3",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=80&fit=crop&q=80",
    className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
  },
  {
    id: "logo-4",
    description: "Cliente 4",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&h=80&fit=crop&q=80",
    className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
  },
  {
    id: "logo-5",
    description: "Cliente 5",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=80&fit=crop&q=80",
    className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
  },
  {
    id: "logo-6",
    description: "Cliente 6",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=80&fit=crop&q=80",
    className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
  },
  {
    id: "logo-7",
    description: "Cliente 7",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=80&fit=crop&q=80",
    className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
  },
  {
    id: "logo-8",
    description: "Cliente 8",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=80&fit=crop&q=80",
    className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
  },
]

export function LogosSection({
  heading = "Confían en nosotros",
  logos = defaultLogos,
}: LogosProps) {
  return (
    <section className="py-20 md:py-28 bg-zinc-950 border-y border-gray-800">
      <div className="container px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-poppins text-3xl md:text-5xl font-light text-white uppercase tracking-wide">
            {heading}
          </h2>
        </div>

        <div className="relative mx-auto flex items-center justify-center">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="mx-8 md:mx-12 flex shrink-0 items-center justify-center">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-zinc-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-zinc-950 to-transparent" />
        </div>
      </div>
    </section>
  )
}
