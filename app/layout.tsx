import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-bebas'
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
      <body className={`${poppins.className} ${poppins.variable} ${bebas.variable} antialiased`}>{children}</body>
    </html>
  );
}