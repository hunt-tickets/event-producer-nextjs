"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contacto" className="py-24 md:py-32 bg-zinc-950">
      <div className="container px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="title-stretched text-4xl md:text-6xl font-light text-white uppercase">
            Contacto
          </h2>
        </div>

        <div className="grid gap-12 md:gap-16 lg:grid-cols-2 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-light text-white mb-6 uppercase tracking-wide">
                Hablemos
              </h3>
              <p className="font-lato text-gray-400 leading-relaxed mb-8 font-light">
                Transformemos tu visión en una experiencia inolvidable.
                Estamos aquí para hacer realidad eventos extraordinarios.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="block w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</p>
                  <p className="font-lato text-white font-light">hello@inside.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="block w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Teléfono</p>
                  <p className="font-lato text-white font-light">+1 (555) 000-0000</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="block w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Ubicación</p>
                  <p className="font-lato text-white font-light">Ciudad de México</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-0 border-b border-gray-700 rounded-none px-0 py-3 text-white placeholder:text-gray-500 focus:border-white transition-colors"
                  placeholder="Nombre"
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-0 border-b border-gray-700 rounded-none px-0 py-3 text-white placeholder:text-gray-500 focus:border-white transition-colors"
                  placeholder="Email"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-0 border-b border-gray-700 rounded-none px-0 py-3 text-white placeholder:text-gray-500 focus:border-white transition-colors min-h-[120px] resize-none"
                  placeholder="Mensaje"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200 py-6 text-sm uppercase tracking-wider transition-all duration-300"
              >
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}