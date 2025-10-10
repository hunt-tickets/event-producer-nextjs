export function TextMarquee() {
  return (
    <section className="relative bg-black overflow-hidden py-8 md:py-12 border-y-4 border-yellow-500">
      <div className="relative">
        {/* Street poster style with warning tape aesthetic */}
        <div className="flex animate-marquee-fast whitespace-nowrap items-center">
          <div className="flex items-center space-x-8 pr-8">
            <span className="font-bebas text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-yellow-500 uppercase tracking-wider [text-shadow:_3px_3px_0_rgb(0_0_0)]">
              INSIDE CREATIVE ENTERTAINMENT
            </span>
            <span className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-red-500">★</span>
            <span className="font-bebas text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-white uppercase tracking-wider [text-shadow:_3px_3px_0_rgb(0_0_0)]">
              INSIDE CREATIVE ENTERTAINMENT
            </span>
            <span className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-red-500">★</span>
            <span className="font-bebas text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-yellow-500 uppercase tracking-wider [text-shadow:_3px_3px_0_rgb(0_0_0)]">
              INSIDE CREATIVE ENTERTAINMENT
            </span>
            <span className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-red-500">★</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center space-x-8 pr-8">
            <span className="font-bebas text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-yellow-500 uppercase tracking-wider [text-shadow:_3px_3px_0_rgb(0_0_0)]">
              INSIDE CREATIVE ENTERTAINMENT
            </span>
            <span className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-red-500">★</span>
            <span className="font-bebas text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-white uppercase tracking-wider [text-shadow:_3px_3px_0_rgb(0_0_0)]">
              INSIDE CREATIVE ENTERTAINMENT
            </span>
            <span className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-red-500">★</span>
            <span className="font-bebas text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-yellow-500 uppercase tracking-wider [text-shadow:_3px_3px_0_rgb(0_0_0)]">
              INSIDE CREATIVE ENTERTAINMENT
            </span>
            <span className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-red-500">★</span>
          </div>
        </div>
      </div>
    </section>
  )
}