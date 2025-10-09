export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-zinc-900">
      <div className="container px-4 md:px-6 py-6 md:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-base md:text-lg font-bold text-white">EVENT PRODUCER</h3>
            <p className="text-xs md:text-sm text-gray-400 mt-1">
              Excelencia en producción de eventos desde 2008
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-xs md:text-sm text-gray-400">
              © {new Date().getFullYear()} Event Producer. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}