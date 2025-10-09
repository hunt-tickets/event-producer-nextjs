"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const menuItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur">
      <div className="container px-4 md:px-6">
        <div className="flex h-14 md:h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="https://62qhyx3jmc.ufs.sh/f/kS1daVeAXizt6FrL4wQpgsdtQ58PE7uwB2rqHeaRiW6cNOoZ"
              alt="Event Producer Logo"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button className="ml-4 bg-white text-black hover:bg-gray-200">
              Contactar
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="border-gray-700 bg-black">
                <Menu className="h-5 w-5 text-white" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-l border-gray-800">
              <div className="flex flex-col space-y-6 mt-8">
                <Image
                  src="https://62qhyx3jmc.ufs.sh/f/kS1daVeAXizt6FrL4wQpgsdtQ58PE7uwB2rqHeaRiW6cNOoZ"
                  alt="Event Producer Logo"
                  width={100}
                  height={40}
                  className="h-8 w-auto mb-4"
                />
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="w-full bg-white text-black hover:bg-gray-200">
                  Contactar
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}