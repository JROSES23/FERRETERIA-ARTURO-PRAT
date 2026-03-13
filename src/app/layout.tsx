import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ferretería Arturo Prat | Herramientas y Materiales en La Araucanía",
  description:
    "Tu ferretería de confianza en La Araucanía, Chile. Herramientas, materiales de construcción, pinturas, gasfitería y más. 3 sucursales: Padre Las Casas, Pueblo Nuevo y Pedro de Valdivia. Cotiza rápido por WhatsApp.",
  keywords: [
    "ferretería",
    "Temuco",
    "Padre Las Casas",
    "La Araucanía",
    "herramientas",
    "materiales de construcción",
    "pinturas",
    "ferretería Arturo Prat",
  ],
  openGraph: {
    title: "Ferretería Arturo Prat | La Araucanía",
    description:
      "Todo para tu obra y hogar en un solo lugar. 3 sucursales en La Araucanía. Cotiza rápido por WhatsApp.",
    type: "website",
    locale: "es_CL",
    siteName: "Ferretería Arturo Prat",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
