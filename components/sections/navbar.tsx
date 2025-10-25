"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [hasScrolled, setHasScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/experiencia-virtual", label: "Experiencia" },
  ]

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ${
      hasScrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex h-20 md:h-24 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group relative flex flex-col items-center gap-0.5"
          >
            <div className="h-[1px] w-full bg-white transition-all duration-300" />
            <span className="font-poppins text-white font-extralight text-2xl md:text-3xl tracking-[0.05em] uppercase transition-all duration-300 group-hover:tracking-[0.1em]">
              Inside
            </span>
            <div className="h-[1px] w-full bg-white transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative font-poppins text-sm font-light text-white/70 hover:text-white transition-all duration-300 tracking-wider uppercase"
              >
                {item.label}
                <div className="absolute bottom-[-4px] left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <Link
              href="#contacto"
              className="relative font-poppins text-sm font-light text-white px-6 py-2.5 border border-white/20 hover:border-white/40 rounded-full transition-all duration-300 hover:bg-white/5 tracking-wider uppercase overflow-hidden group"
            >
              <span className="relative z-10">Contacto</span>
              <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 py-8 space-y-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block font-poppins text-lg font-light text-white/70 hover:text-white transition-colors tracking-wider uppercase"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center font-poppins text-sm font-light text-white px-6 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-all tracking-wider uppercase"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  )
}