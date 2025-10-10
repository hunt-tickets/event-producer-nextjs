export function TextMarquee() {
  return (
    <section className="relative bg-black overflow-hidden py-20 md:py-28">
      <div className="relative">
        {/* Two duplicate tracks for seamless loop */}
        <div className="flex animate-marquee whitespace-nowrap items-center">
          <div className="flex items-center space-x-16 pr-16">
            <span className="font-playfair text-stretched inline-block text-8xl md:text-9xl lg:text-[11rem] xl:text-[14rem] text-white/10 uppercase font-extralight tracking-wider">
              Inside Creative Entertainment
            </span>
            <span className="text-8xl md:text-9xl lg:text-[11rem] xl:text-[14rem] text-white/10">•</span>
            <span className="font-playfair text-stretched inline-block text-8xl md:text-9xl lg:text-[11rem] xl:text-[14rem] text-white/10 uppercase font-extralight tracking-wider">
              Inside Creative Entertainment
            </span>
            <span className="text-8xl md:text-9xl lg:text-[11rem] xl:text-[14rem] text-white/10">•</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center space-x-16 pr-16">
            <span className="font-playfair text-stretched inline-block text-8xl md:text-9xl lg:text-[11rem] xl:text-[14rem] text-white/10 uppercase font-extralight tracking-wider">
              Inside Creative Entertainment
            </span>
            <span className="text-8xl md:text-9xl lg:text-[11rem] xl:text-[14rem] text-white/10">•</span>
            <span className="font-playfair text-stretched inline-block text-8xl md:text-9xl lg:text-[11rem] xl:text-[14rem] text-white/10 uppercase font-extralight tracking-wider">
              Inside Creative Entertainment
            </span>
            <span className="text-8xl md:text-9xl lg:text-[11rem] xl:text-[14rem] text-white/10">•</span>
          </div>
        </div>
      </div>
    </section>
  )
}