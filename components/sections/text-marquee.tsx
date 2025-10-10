export function TextMarquee() {
  return (
    <section className="relative bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden py-16 md:py-20">
      <div className="relative">
        {/* Retro Japanese neon sign style */}
        <div className="flex animate-marquee-fast whitespace-nowrap items-center">
          <div className="flex items-center space-x-16 pr-16">
            <span className="font-bebas text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] text-transparent bg-clip-text bg-gradient-to-b from-pink-400 to-pink-600 uppercase tracking-[0.2em] drop-shadow-[0_0_40px_rgba(236,72,153,0.9)] filter saturate-150">
              INSIDE
            </span>
            <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.9)] animate-pulse">◆</span>
            <span className="font-bebas text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-600 uppercase tracking-[0.2em] drop-shadow-[0_0_40px_rgba(34,211,238,0.9)] filter saturate-150">
              ENTERTAINMENT
            </span>
            <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-pink-400 drop-shadow-[0_0_30px_rgba(236,72,153,0.9)] animate-pulse">◆</span>
            <span className="font-bebas text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-600 uppercase tracking-[0.2em] drop-shadow-[0_0_40px_rgba(168,85,247,0.9)] filter saturate-150">
              インサイド
            </span>
            <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.9)] animate-pulse">◆</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center space-x-16 pr-16">
            <span className="font-bebas text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] text-transparent bg-clip-text bg-gradient-to-b from-pink-400 to-pink-600 uppercase tracking-[0.2em] drop-shadow-[0_0_40px_rgba(236,72,153,0.9)] filter saturate-150">
              INSIDE
            </span>
            <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.9)] animate-pulse">◆</span>
            <span className="font-bebas text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-600 uppercase tracking-[0.2em] drop-shadow-[0_0_40px_rgba(34,211,238,0.9)] filter saturate-150">
              ENTERTAINMENT
            </span>
            <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-pink-400 drop-shadow-[0_0_30px_rgba(236,72,153,0.9)] animate-pulse">◆</span>
            <span className="font-bebas text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-600 uppercase tracking-[0.2em] drop-shadow-[0_0_40px_rgba(168,85,247,0.9)] filter saturate-150">
              インサイド
            </span>
            <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.9)] animate-pulse">◆</span>
          </div>
        </div>
      </div>
    </section>
  )
}