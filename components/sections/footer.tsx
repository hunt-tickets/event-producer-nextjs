export function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-black">
      <div className="container px-6 md:px-8 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bebas text-white font-light text-2xl md:text-3xl tracking-wider uppercase">
              Inside
            </h3>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-600 uppercase tracking-widest">
              © {new Date().getFullYear()} Inside Creative Entertainment
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-wider">
              Instagram
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-wider">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}