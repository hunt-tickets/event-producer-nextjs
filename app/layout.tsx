import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-lato'
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '700', '900']
});

export const metadata: Metadata = {
  title: "Event Producer | Producción Profesional de Eventos",
  description: "Producción de eventos corporativos y sociales con más de 15 años de experiencia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${lato.className} ${lato.variable} ${playfair.variable} antialiased`}>{children}</body>
    </html>
  );
}