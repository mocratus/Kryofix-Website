import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - Solicitar Servicio de Aire Acondicionado | KryoFix',
  description: 'Contacta a KryoFix para solicitar servicios de aire acondicionado. Formulario de contacto, WhatsApp y email. Atendemos CABA y Gran Buenos Aires. ¡Respuesta rápida garantizada!',
  keywords: 'contacto KryoFix, solicitar servicio aire acondicionado, presupuesto aire acondicionado, WhatsApp aire acondicionado, técnico Buenos Aires, contacto climatización',
  openGraph: {
    title: 'Contacto - KryoFix Servicios de Aire Acondicionado',
    description: 'Solicita tu servicio de aire acondicionado. Contactanos por WhatsApp, formulario o email. Atención en CABA y GBA.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://kryofix.com/contacto',
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
