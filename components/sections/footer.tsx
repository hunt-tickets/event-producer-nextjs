import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-zinc-900">
      <div className="container px-4 md:px-6 py-6 md:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
          <div className="text-center sm:text-left">
            <Image
              src="https://62qhyx3jmc.ufs.sh/f/kS1daVeAXizt6FrL4wQpgsdtQ58PE7uwB2rqHeaRiW6cNOoZ"
              alt="Event Producer Logo"
              width={100}
              height={30}
              className="h-6 md:h-8 w-auto mb-2"
            />
            <p className="text-xs md:text-sm text-gray-400">
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