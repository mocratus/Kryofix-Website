import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Bella Nails Studio - Servicios de Manicuria y Nail Art",
  description: "Servicios profesionales de manicuria, pedicuria, nail art y esmaltado semipermanente. Reserva tu turno online.",
  keywords: "manicuria, pedicuria, nail art, esmaltado semipermanente, uñas, belleza, spa",
  authors: [{ name: "Bella Nails Studio" }],
  openGraph: {
    title: "Bella Nails Studio - Servicios de Manicuria",
    description: "Servicios profesionales de manicuria y nail art. Reserva tu turno online.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bella Nails Studio - Servicios de Manicuria",
    description: "Servicios profesionales de manicuria y nail art. Reserva tu turno online.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
