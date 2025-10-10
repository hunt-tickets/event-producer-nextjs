export function TextMarquee() {
  return (
    <section className="relative bg-black overflow-hidden py-12 md:py-16">
      <div className="relative">
        {/* Neon pixel street sign style */}
        <div className="flex animate-marquee-fast whitespace-nowrap items-center">
          <div className="flex items-center space-x-12 pr-12">
            <span className="font-mono text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-red-500 uppercase tracking-wider drop-shadow-[0_0_30px_rgba(239,68,68,0.8)] brightness-125">
              INSIDE ENTERTAINMENT
            </span>
            <span className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-red-400 drop-shadow-[0_0_20px_rgba(248,113,113,0.8)]">×</span>
            <span className="font-mono text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-red-500 uppercase tracking-wider drop-shadow-[0_0_30px_rgba(239,68,68,0.8)] brightness-125">
              INSIDE ENTERTAINMENT
            </span>
            <span className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-red-400 drop-shadow-[0_0_20px_rgba(248,113,113,0.8)]">×</span>
            <span className="font-mono text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-red-500 uppercase tracking-wider drop-shadow-[0_0_30px_rgba(239,68,68,0.8)] brightness-125">
              INSIDE ENTERTAINMENT
            </span>
            <span className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-red-400 drop-shadow-[0_0_20px_rgba(248,113,113,0.8)]">×</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center space-x-12 pr-12">
            <span className="font-mono text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-red-500 uppercase tracking-wider drop-shadow-[0_0_30px_rgba(239,68,68,0.8)] brightness-125">
              INSIDE ENTERTAINMENT
            </span>
            <span className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-red-400 drop-shadow-[0_0_20px_rgba(248,113,113,0.8)]">×</span>
            <span className="font-mono text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-red-500 uppercase tracking-wider drop-shadow-[0_0_30px_rgba(239,68,68,0.8)] brightness-125">
              INSIDE ENTERTAINMENT
            </span>
            <span className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-red-400 drop-shadow-[0_0_20px_rgba(248,113,113,0.8)]">×</span>
            <span className="font-mono text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-red-500 uppercase tracking-wider drop-shadow-[0_0_30px_rgba(239,68,68,0.8)] brightness-125">
              INSIDE ENTERTAINMENT
            </span>
            <span className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-red-400 drop-shadow-[0_0_20px_rgba(248,113,113,0.8)]">×</span>
          </div>
        </div>
      </div>
    </section>
  )
}