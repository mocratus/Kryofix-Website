import CalculadoraClient from '@/components/CalculadoraClient';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function CalculadoraPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header simplificado para calculadora */}
      <header className="bg-white shadow-lg border-b-4 border-cyan-600">
        {/* Franja superior */}
        <div className="bg-gray-900 text-white text-sm py-2 px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span>
              <Image src="/hvac.png" alt="HVAC" width={20} height={20} className="h-5 w-auto object-contain" />
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

        {/* Header principal simplificado */}
        <div className="py-6 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo y título */}
            <div className="flex items-center gap-4">
              <Link href="/">
                <Image
                  src="/logo-kryofix.png"
                  alt="Logo KryoFix"
                  width={120}
                  height={48}
                  className="h-12 w-auto object-contain hover:opacity-80 transition-opacity"
                />
              </Link>
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Calculadora de Balance Térmico
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Herramienta profesional según normas CACAAV
                </p>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5491151353079?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20KryoFix.%20¿Podrían%20ayudarme?"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
              >
                <Image
                  src="https://img.icons8.com/ios-filled/16/ffffff/whatsapp.png"
                  alt="WhatsApp"
                  width={16}
                  height={16}
                  className="h-4 w-4 object-contain"
                />
                <span>WhatsApp</span>
              </a>
              <Link
                href="/contacto"
                className="bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-700 transition-colors text-center"
              >
                Solicitar Servicio
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <CalculadoraClient />

          <div className="mt-12 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              ¿Necesitas una instalación profesional?
            </h2>
            <p className="text-blue-700 mb-4">
              En KryoFix contamos con técnicos matriculados por CACAAV para realizar
              instalaciones de aire acondicionado que cumplan con todas las normas técnicas.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <a
                href="/contacto"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold text-center"
              >
                Solicitar Presupuesto
              </a>
              <a
                href="/servicios"
                className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors font-semibold text-center"
              >
                Ver Nuestros Servicios
              </a>
            </div>
          </div>


        </div>
      </div>
      <Footer />
    </div>
  );
}

export const metadata = {
  title: 'Calculadora de Balance Térmico | KryoFix',
  description: 'Calcula la capacidad de refrigeración necesaria para tu ambiente con nuestra herramienta profesional basada en normas CACAAV.',
  keywords: 'balance térmico, calculadora aire acondicionado, BTU, frigorías, CACAAV, refrigeración',
};