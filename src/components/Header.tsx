import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  hideCalculatorLink?: boolean;
}

export default function Header({ hideCalculatorLink = false }: HeaderProps) {
  return (
    <>
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
            <Link href="/">
              <Image
                src="/logo-kryofix.png"
                alt="Logo KryoFix"
                width={120}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </Link>
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
            <Link href="/nosotros" className="mx-2 hover:underline">Nosotros</Link>
            <Link href="/servicios" className="mx-2 hover:underline">Servicios</Link>
            <Link href="/contacto" className="mx-2 hover:underline">Contacto</Link>
            {!hideCalculatorLink && (
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
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
