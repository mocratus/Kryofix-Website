import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
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
        <Link href="/servicios" className="mx-2 hover:underline">Servicios</Link> |
        <Link href="/nosotros" className="mx-2 hover:underline">Nosotros</Link> |
        <Link href="/contacto" className="mx-2 hover:underline">Contacto</Link>
      </div>
    </footer>
  );
}
