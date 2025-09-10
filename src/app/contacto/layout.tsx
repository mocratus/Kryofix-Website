import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto – Kryofix Servicio Técnico',
  description: 'Contactá a Kryofix, técnico matriculado en aire acondicionado, para instalación, mantenimiento y reparación en CABA y GBA.',
  keywords: 'contacto KryoFix, técnico matriculado, aire acondicionado CABA, GBA, WhatsApp, presupuesto climatización',
  openGraph: {
    title: 'Contacto – Kryofix Servicio Técnico',
    description: 'Contactá a técnico matriculado en aire acondicionado. Servicio en CABA y GBA.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.kryofix.com.ar/contacto',
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
