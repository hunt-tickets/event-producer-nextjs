export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold">EVENT PRODUCER</h3>
            <p className="text-sm text-gray-600 mt-1">
              Excelencia en producción de eventos desde 2008
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Event Producer. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}