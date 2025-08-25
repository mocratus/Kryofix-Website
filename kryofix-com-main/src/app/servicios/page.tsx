import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios de Aire Acondicionado - Instalación, Reparación y Mantenimiento | KryoFix',
  description: 'Servicios completos de climatización: instalación de split y multisplit, reparación de aires acondicionados, mantenimiento preventivo y limpieza. Técnicos certificados en CABA y GBA.',
  keywords: 'instalación aire acondicionado, reparación aire acondicionado, mantenimiento aire acondicionado, limpieza aire acondicionado, split, multisplit, técnico certificado, Buenos Aires',
  openGraph: {
    title: 'Servicios de Aire Acondicionado - KryoFix',
    description: 'Instalación, reparación, mantenimiento y limpieza de aires acondicionados. Técnicos certificados en Buenos Aires.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://kryofix.com/servicios',
  },
};

export default function Servicios() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Franja superior */}
      <div className="bg-gray-900 text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/hvac.png" alt="HVAC" width={20} height={20} />
          <span>Servicios técnicos climatización para hogares y negocios</span>
        </div>
        <div className="flex gap-3">
          <Link href="https://www.facebook.com/share/1C5gX4skix/" target="_blank">
            <Image src="/icon-facebook.svg" alt="Facebook" width={24} height={24} />
          </Link>
          <Link href="https://www.instagram.com/kryofix.ar" target="_blank">
            <Image src="/icon-instagram.svg" alt="Instagram" width={24} height={24} />
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6 space-y-4 md:space-y-0">
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <Link href="/">
              <Image src="/logo-kryofix.png" alt="Logo KryoFix" width={160} height={64} className="h-16 w-auto object-contain" />
            </Link>
          </div>
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <Link href="/contacto" className="text-cyan-600 font-semibold hover:underline">
              SOLICITAR SERVICIO
            </Link>
          </div>
        </div>
        <nav className="bg-gray-700 text-white py-2">
          <div className="max-w-7xl mx-auto flex justify-center gap-6 text-sm font-semibold uppercase">
            <Link href="/" className="mx-2 hover:underline">Inicio</Link>
            <Link href="/nosotros" className="mx-2 hover:underline">Nosotros</Link>
            <Link href="/contacto" className="mx-2 hover:underline">Contacto</Link>
          </div>
        </nav>
      </header>

      {/* Sección principal de servicios */}
      <section className="bg-white py-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Nuestros Servicios</h1>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Instalación */}
            <div className="group">
              <div
                className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                style={{
                  height: '280px',
                  backgroundImage: 'url(/InstalacionAA.png)',
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
                role="img"
                aria-label="Instalación de aire acondicionado"
              />
              <h2 className="text-xl font-semibold mt-4 mb-2">Instalación</h2>
              <p className="text-gray-700">
                Colocación profesional de sistemas split, multisplit y más, garantizando eficiencia, estética y seguridad técnica.
              </p>
            </div>

            {/* Mantenimiento */}
            <div className="group">
              <div
                className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                style={{
                  height: '280px',
                  backgroundImage: 'url(/MantenimeintoAA.jpg)',
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
                role="img"
                aria-label="Mantenimiento de aire acondicionado"
              />
              <h2 className="text-xl font-semibold mt-4 mb-2">Mantenimiento</h2>
              <p className="text-gray-700">
                Chequeos periódicos, limpieza interna, medición de presiones y control eléctrico para prolongar la vida útil del equipo.
              </p>
            </div>

            {/* Reparación */}
            <div className="group">
              <div
                className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                style={{
                  height: '280px',
                  backgroundImage: 'url(/ReparacionAA.png)',
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
                role="img"
                aria-label="Reparación de aire acondicionado"
              />
              <h2 className="text-xl font-semibold mt-4 mb-2">Reparación</h2>
              <p className="text-gray-700">
                Diagnóstico preciso y reparación de fallas con repuestos originales, garantizando el funcionamiento seguro del equipo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 mt-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <Link href="/">
              <Image src="/logo-kryofix.png" alt="KryoFix Logo" width={120} height={40} className="h-10 w-auto object-contain mb-4" />
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              En KryoFix ofrecemos servicios técnicos especializados en climatización.
              Nos dedicamos a la instalación, mantenimiento y reparación de aires acondicionados.
              Atendemos tanto a particulares como a negocios, ofreciendo soluciones rápidas, confiables y a medida.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="https://www.facebook.com/share/1C5gX4skix/" target="_blank">
                <Image src="/icon-facebook.svg" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="https://www.instagram.com/kryofix.ar" target="_blank">
                <Image src="/icon-instagram.svg" alt="Instagram" width={24} height={24} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contáctanos</h3>
            <p className="flex items-center gap-2">
              <Image src="https://img.icons8.com/ios-filled/20/25D366/whatsapp.png" alt="WhatsApp" width={20} height={20} />
              <Link href="https://wa.me/5491151353079?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20KryoFix.%20¿Podrían%20ayudarme?" target="_blank" className="hover:underline text-green-400">11 5135-3079</Link>
            </p>
            <p className="flex items-center gap-2 mt-1">
              <Image src="https://img.icons8.com/ios-filled/20/ffffff/email.png" alt="Email" width={20} height={20} />
              <a href="mailto:info@kryofix.com" className="hover:underline text-blue-300">info@kryofix.com</a>
            </p>
            <p className="flex items-center gap-2 mt-1">
              <Image src="https://img.icons8.com/ios-filled/20/ffffff/marker.png" alt="Ubicación" width={20} height={20} />
              C.A.B.A. Y G.B.A.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center">
          <Link href="/" className="mx-2 hover:underline">Inicio</Link> |
          <Link href="/servicios" className="mx-2 hover:underline">Servicios</Link> |
          <Link href="/nosotros" className="mx-2 hover:underline">Nosotros</Link> |
          <Link href="/contacto" className="mx-2 hover:underline">Contacto</Link>
        </div>
      </footer>
    </div>
  );
}
