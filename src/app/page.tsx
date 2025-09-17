import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instalación, Mantenimiento y Reparación de Aires Acondicionados en CABA y GBA – Kryofix',
  description: 'Técnico matriculado en climatización. Kryofix ofrece instalación, mantenimiento y reparación de aires acondicionados split e inverter en Capital Federal y Gran Buenos Aires.',
  keywords: 'aire acondicionado CABA, instalación split, técnico matriculado, mantenimiento inverter, reparación aire acondicionado, climatización Buenos Aires, GBA',
  authors: [{ name: 'KryoFix' }],
  creator: 'KryoFix',
  publisher: 'KryoFix',
  robots: 'index, follow',
  openGraph: {
    title: 'Instalación, Mantenimiento y Reparación de Aires Acondicionados en CABA y GBA – Kryofix',
    description: 'Técnico matriculado en climatización. Kryofix ofrece instalación, mantenimiento y reparación de aires acondicionados split e inverter en Capital Federal y Gran Buenos Aires.',
    type: 'website',
    locale: 'es_AR',
    siteName: 'KryoFix',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instalación, Mantenimiento y Reparación de Aires Acondicionados en CABA y GBA – Kryofix',
    description: 'Técnico matriculado en climatización. Instalación, mantenimiento y reparación de aires acondicionados en Buenos Aires.',
  },
  alternates: {
    canonical: 'https://www.kryofix.com.ar',
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kryofix",
    "image": "https://www.kryofix.com.ar/logo-kryofix.png",
    "telephone": "+5491151353079",
    "email": "info@kryofix.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "CABA",
      "addressRegion": "Buenos Aires",
      "postalCode": "C1000",
      "addressCountry": "AR"
    },
    "areaServed": {
      "@type": "Place",
      "name": "CABA y Gran Buenos Aires"
    },
    "url": "https://www.kryofix.com.ar",
    "description": "Técnico matriculado en climatización. Instalación, mantenimiento y reparación de aires acondicionados split e inverter.",
    "serviceType": ["Instalación de aire acondicionado", "Mantenimiento de aire acondicionado", "Reparación de aire acondicionado"],
    "priceRange": "$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Franja superior */}
      <div className="bg-gray-900 text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span>
            <a href="#">
              <Image src="/hvac.png" alt="HVAC" width={20} height={20} className="h-5 w-auto object-contain" />
            </a>
          </span>
          <span>Servicios técnicos climatización para hogares y negocios</span>
        </div>
        <div className="flex gap-3">
          <Link href="https://www.facebook.com/share/1C5gX4skix/" target="_blank">
            <Image
              src="/icon-facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
              className="h-6 w-6 object-contain hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link href="https://www.instagram.com/kryofix.ar" target="_blank">
            <Image
              src="/icon-instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
              className="h-6 w-6 object-contain hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </div>

      {/* Encabezado principal */}
      <header className="bg-white shadow-md">
        {/* Layout para desktop */}
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-3 items-center py-4 px-6">
            <div className="flex justify-start">
              <Image
                src="/logo-kryofix.png"
                alt="Logo KryoFix"
                width={160}
                height={64}
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <a href="https://wa.me/5491151353079?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20KryoFix.%20¿Podrían%20ayudarme?" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-600 text-lg font-semibold hover:underline">
                <Image
                  src="https://img.icons8.com/ios-filled/24/25D366/whatsapp.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
                <span>11 5135-3079</span>
              </a>
            </div>
            <div className="flex justify-end">
              <Link href="/contacto" className="text-cyan-600 font-semibold hover:underline">SOLICITAR SERVICIO</Link>
            </div>
          </div>
        </div>

        {/* Layout para móvil */}
        <div className="md:hidden py-4 px-6">
          <div className="flex justify-between items-center mb-3">
            <Image
              src="/logo-kryofix.png"
              alt="Logo KryoFix"
              width={120}
              height={48}
              className="h-12 w-auto object-contain"
            />
            <a href="https://wa.me/5491151353079?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20KryoFix.%20¿Podrían%20ayudarme?" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors">
              <Image
                src="https://img.icons8.com/ios-filled/16/ffffff/whatsapp.png"
                alt="WhatsApp"
                width={16}
                height={16}
                className="h-4 w-4 object-contain"
              />
              <span>WhatsApp</span>
            </a>
          </div>
          <div className="flex justify-center">
            <Link href="/contacto" className="text-cyan-600 font-semibold hover:underline text-sm">SOLICITAR SERVICIO</Link>
          </div>
        </div>
        <nav className="bg-gray-700 text-white py-2">
          <div className="max-w-7xl mx-auto flex justify-center gap-6 text-sm font-semibold uppercase items-center">
            <Link href="/contacto" className="mx-2 hover:underline">Contacto</Link>
            <Link
              href="/calculadora"
              className="mx-2 hover:bg-blue-700 bg-blue-600 px-3 py-2 rounded transition-colors flex items-center gap-1"
              title="Calculadora de Balance Térmico"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2H11zm0-2a1 1 0 100 2h.01a1 1 0 100-2H11zm-2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm-2 0a1 1 0 100 2h.01a1 1 0 100-2H7z" clipRule="evenodd"></path>
              </svg>
              <span className="hidden sm:inline">Calculadora</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Sección 1: Fondo gris + imagen + texto */}
      <section className="bg-gray-600 text-white py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Soluciones Técnicas de Climatización que Marcan la Diferencia</h2>
            <p className="text-lg leading-relaxed">
              Kryofix se especializa en transformar tu espacio con nuestros servicios expertos en climatización. Desde la instalación de sistemas de aire acondicionado hasta su mantenimiento y reparación, nuestro equipo está preparado para ofrecer soluciones personalizadas que garantizan un ambiente confortable y eficiente.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/HogarAA.png"
              alt="Medición de presión en aire acondicionado"
              width={500}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Sección 2: Fondo blanco + imagen + texto */}
      <section className="bg-white text-gray-800 py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Soluciones Técnicas Especializadas en Climatización</h2>
            <p className="leading-relaxed">
              En KryoFix, tu comodidad y bienestar son nuestra prioridad. Nos especializamos en ofrecer servicios técnicos en climatización que garantizan ambientes óptimos tanto en hogares como en negocios. Desde la instalación precisa de aires acondicionados hasta el mantenimiento preventivo, brindamos soluciones adaptadas a cada cliente.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-md" style={{height: '300px'}}>
            <Image
              src="/public1.avif"
              alt="Reparación de aire acondicionado"
              width={500}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <Image
              src="/logo-kryofix.png"
              alt="KryoFix Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-sm leading-relaxed mb-4">
              En KryoFix ofrecemos servicios técnicos especializados en climatización. Nos dedicamos a la instalación, mantenimiento y reparación de aires acondicionados. Atendemos tanto a particulares como a negocios, ofreciendo soluciones rápidas, confiables y a medida.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="https://www.facebook.com/share/1C5gX4skix/" target="_blank">
                <Image
                  src="/icon-facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="https://www.instagram.com/kryofix.ar" target="_blank">
                <Image
                  src="/icon-instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contáctanos</h3>
            <p className="flex items-center gap-2">
              <Image
                src="https://img.icons8.com/ios-filled/20/25D366/whatsapp.png"
                alt="WhatsApp"
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
              <a href="https://wa.me/5491151353079?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20KryoFix.%20¿Podrían%20ayudarme?" target="_blank" rel="noopener noreferrer" className="hover:underline text-green-400">11 5135-3079</a>
            </p>
            <p className="flex items-center gap-2 mt-1">
              <Image
                src="https://img.icons8.com/ios-filled/20/ffffff/email.png"
                alt="Email"
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
              <a href="mailto:info@kryofix.com" className="hover:underline text-blue-300">info@kryofix.com</a>
            </p>
            <p className="flex items-center gap-2 mt-1">
              <Image
                src="https://img.icons8.com/ios-filled/20/ffffff/marker.png"
                alt="Ubicación"
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
              C.A.B.A. Y G.B.A.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center">
          <Link href="/" className="mx-2 hover:underline">Inicio</Link> |
          <Link href="/calculadora" className="mx-2 hover:underline">Calculadora</Link> |
          <Link href="/contacto" className="mx-2 hover:underline">Contacto</Link>
        </div>
      </footer>
    </>
  );
}