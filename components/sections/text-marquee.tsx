export function TextMarquee() {
  return (
    <section className="relative bg-black overflow-hidden py-12 md:py-16">
      <div className="relative">
        {/* Two duplicate tracks for seamless loop */}
        <div className="flex animate-marquee whitespace-nowrap">
          <div className="flex items-center space-x-8 pr-8">
            <span className="font-playfair text-6xl md:text-8xl lg:text-9xl text-white/10 uppercase font-light">
              Inside Creative Entertainment
            </span>
            <span className="text-6xl md:text-8xl lg:text-9xl text-white/10">•</span>
            <span className="font-playfair text-6xl md:text-8xl lg:text-9xl text-white/10 uppercase font-light">
              Inside Creative Entertainment
            </span>
            <span className="text-6xl md:text-8xl lg:text-9xl text-white/10">•</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center space-x-8 pr-8">
            <span className="font-playfair text-6xl md:text-8xl lg:text-9xl text-white/10 uppercase font-light">
              Inside Creative Entertainment
            </span>
            <span className="text-6xl md:text-8xl lg:text-9xl text-white/10">•</span>
            <span className="font-playfair text-6xl md:text-8xl lg:text-9xl text-white/10 uppercase font-light">
              Inside Creative Entertainment
            </span>
            <span className="text-6xl md:text-8xl lg:text-9xl text-white/10">•</span>
          </div>
        </div>
      </div>
    </section>
  )
}