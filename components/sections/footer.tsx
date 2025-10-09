export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-zinc-900">
      <div className="container px-4 md:px-6 py-6 md:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-lg md:text-xl mb-2">
              INSIDE
            </h3>
            <p className="text-xs md:text-sm text-gray-400">
              Excelencia en producción de eventos desde 2008
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-xs md:text-sm text-gray-400">
              © {new Date().getFullYear()} Inside Creative Entertainment. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}