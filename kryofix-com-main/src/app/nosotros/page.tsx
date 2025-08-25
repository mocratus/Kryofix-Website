import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre KryoFix - Técnicos Especializados en Aire Acondicionado',
  description: 'Conoce a KryoFix, empresa especializada en servicios de climatización. Técnicos certificados con experiencia en instalación y reparación de aires acondicionados en Buenos Aires.',
  keywords: 'KryoFix, técnicos aire acondicionado, empresa climatización, servicios técnicos, Buenos Aires, CABA, GBA, experiencia, certificados',
  openGraph: {
    title: 'Sobre KryoFix - Especialistas en Climatización',
    description: 'Empresa especializada en servicios de aire acondicionado. Técnicos certificados en Buenos Aires.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://kryofix.com/nosotros',
  },
};

export default function Nosotros() {
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

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6 space-y-4 md:space-y-0">
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <Link href="/">
              <Image
                src="/logo-kryofix.png"
                alt="Logo KryoFix"
                width={160}
                height={64}
                className="h-16 w-auto object-contain"
              />
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
            <Link href="/servicios" className="mx-2 hover:underline">Servicios</Link>
            <Link href="/contacto" className="mx-2 hover:underline">Contacto</Link>
          </div>
        </nav>
      </header>

      {/* Sección principal */}
      <section className="bg-gray-50 py-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Sobre KryoFix</h1>
            <p className="text-gray-700 text-lg mb-4">
              En KryoFix nos dedicamos a ofrecer soluciones de climatización personalizadas,
              con enfoque técnico, compromiso y responsabilidad.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Valoramos la honestidad, el profesionalismo y la atención directa.
              Nuestro objetivo es que cada cliente se sienta acompañado desde la primera consulta hasta la solución final.
            </p>
            <p className="text-gray-700 text-lg">
              Estamos en constante capacitación para brindarte el mejor servicio,
              con herramientas y procedimientos actualizados.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/Tecnico Trabajando.png"
              alt="Técnico trabajando en aire acondicionado"
              width={400}
              height={300}
              className="w-full h-72 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 mt-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <Link href="/">
              <Image
                src="/logo-kryofix.png"
                alt="KryoFix Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain mb-4"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              En KryoFix ofrecemos servicios técnicos especializados en climatización.
              Nos dedicamos a la instalación, mantenimiento y reparación de aires acondicionados.
              Atendemos tanto a particulares como a negocios, ofreciendo soluciones rápidas, confiables y a medida.
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
