'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { trackWhatsAppClick, trackFormSubmission, trackEmailClick } from '@/components/GoogleAnalytics';

// Metadata se maneja en layout.tsx para páginas client-side

export default function Contacto() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xandwjre', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        // Rastrear conversión del formulario
        trackFormSubmission();
      } else {
        alert('Hubo un error al enviar el formulario. Por favor intenta nuevamente.');
      }
    } catch (error) {
      alert('Hubo un error al enviar el formulario. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contacto-page">
      {/* CSS para ocultar elementos CONTACTO duplicados */}
      <style jsx>{`
        /* Ocultar cualquier botón CONTACTO flotante o duplicado */
        .contacto-page nav a[href="/contacto"]:not(.solicitar-servicio) {
          display: none !important;
        }
        /* Ocultar elementos con texto CONTACTO en navegación */
        .contacto-page nav a:contains("CONTACTO") {
          display: none !important;
        }
        /* Asegurar que no hay elementos superpuestos */
        .contacto-page nav {
          position: relative;
          z-index: 10;
        }
      `}</style>
      
      {/* Franja superior */}
      <div className="bg-gray-900 text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span>
            <Link href="/">
              <Image src="/hvac.png" alt="HVAC" width={20} height={20} className="h-5 w-auto object-contain" />
            </Link>
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
                  priority
                />
              </Link>
            </div>
            <div className="flex justify-center">
              <a
              href="https://wa.me/5491151353079?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20KryoFix.%20¿Podrían%20ayudarme?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-600 text-lg font-semibold hover:underline"
              onMouseDown={() => trackWhatsAppClick('header_desktop')}
            >
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
              <Link href="/contacto" className="text-cyan-600 font-semibold hover:underline solicitar-servicio">SOLICITAR SERVICIO</Link>
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
                priority
              />
            </Link>
            <a
              href="https://wa.me/5491151353079?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20KryoFix.%20¿Podrían%20ayudarme?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors"
              onMouseDown={() => trackWhatsAppClick('header_mobile')}
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
          </div>
          <div className="flex justify-center">
            <Link href="/contacto" className="text-cyan-600 font-semibold hover:underline text-sm solicitar-servicio">SOLICITAR SERVICIO</Link>
          </div>
        </div>

        <nav className="bg-gray-700 text-white py-2">
          <div className="max-w-7xl mx-auto flex justify-center gap-6 text-sm font-semibold uppercase">
            <Link href="/" className="mx-2 hover:underline">Inicio</Link>
            <Link href="/nosotros" className="mx-2 hover:underline">Nosotros</Link>
            <Link href="/servicios" className="mx-2 hover:underline">Servicios</Link>
          </div>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="bg-gray-100 py-6 px-6 md:px-24 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">Contáctanos</h1>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Información de contacto - Aparece segundo en móvil, primero en desktop */}
            <div className="md:order-1 order-2 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Información de Contacto</h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Image
                      src="https://img.icons8.com/ios-filled/20/25D366/whatsapp.png"
                      alt="WhatsApp"
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">WhatsApp</h3>
                    <a href="https://wa.me/5491151353079?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20KryoFix.%20¿Podrían%20ayudarme?" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline text-sm" onMouseDown={() => trackWhatsAppClick('contact_section')}>
                      11 5135-3079
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Image
                      src="https://img.icons8.com/ios-filled/20/1f4e7/email.png"
                      alt="Email"
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Email</h3>
                    <a href="mailto:info@kryofix.com" className="text-blue-600 hover:underline text-sm" onMouseDown={() => trackEmailClick()}>
                      info@kryofix.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Image
                      src="https://img.icons8.com/ios-filled/20/fa314a/marker.png"
                      alt="Ubicación"
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Zona de Servicio</h3>
                    <p className="text-gray-600 text-sm">C.A.B.A y G.B.A</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <h3 className="font-medium text-gray-800 mb-2">¿Por qué elegirnos?</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Técnicos certificados</li>
                  <li>✓ Servicio rápido</li>
                  <li>✓ Presupuestos sin compromiso</li>
                  <li>✓ Garantía en trabajos</li>
                </ul>
              </div>
            </div>

            {/* Formulario de contacto - Aparece primero en móvil, segundo en desktop */}
            <div className="md:order-2 order-1 md:col-span-2 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Solicitar Servicio</h2>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    <strong>¡Gracias por tu consulta!</strong>
                    <p className="mt-2">
                      Hemos recibido tu mensaje y nos pondremos en contacto contigo a la brevedad.
                      Para consultas urgentes, también puedes contactarnos directamente por WhatsApp al{' '}
                      <a href="https://wa.me/5491151353079?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20KryoFix.%20¿Podrían%20ayudarme?" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" onMouseDown={() => trackWhatsAppClick('confirmation_message')}>
                        11 5135-3079
                      </a>.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-cyan-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Campo oculto para el asunto del email */}
                  <input type="hidden" name="_subject" value="Nueva consulta desde KryoFix.com.ar" />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Tu número de teléfono"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo de servicio *
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="instalacion">Instalación de aire acondicionado</option>
                      <option value="mantenimiento">Mantenimiento preventivo</option>
                      <option value="reparacion">Reparación</option>
                      <option value="limpieza">Limpieza de equipos</option>
                      <option value="presupuesto">Solicitar presupuesto</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="Describe tu consulta o el problema que necesitas resolver..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
                  </button>
                </form>
              )}

              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-700 text-center">
                  <strong>Respuesta rápida:</strong> También puedes contactarnos directamente por{' '}
                  <a href="https://wa.me/5491151353079?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20KryoFix.%20¿Podrían%20ayudarme?" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-green-600" onMouseDown={() => trackWhatsAppClick('quick_response')}>
                    WhatsApp
                  </a>{' '}
                  para una atención más inmediata.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">KryoFix</h3>
              <p className="text-gray-300 text-sm mb-4">
                Servicios técnicos especializados en climatización para hogares y negocios en CABA y GBA.
              </p>
              <div className="flex gap-4">
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
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <p className="flex items-center gap-2 text-gray-300 text-sm">
                <Image
                  src="https://img.icons8.com/ios-filled/20/25D366/whatsapp.png"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
                <a href="https://wa.me/5491151353079?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20KryoFix.%20¿Podrían%20ayudarme?" target="_blank" rel="noopener noreferrer" className="hover:underline text-green-400" onMouseDown={() => trackWhatsAppClick('footer')}>11 5135-3079</a>
              </p>
              <p className="flex items-center gap-2 mt-1">
                <Image
                  src="https://img.icons8.com/ios-filled/20/ffffff/email.png"
                  alt="Email"
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
                <a href="mailto:info@kryofix.com" className="hover:underline text-blue-300" onMouseDown={() => trackEmailClick()}>info@kryofix.com</a>
              </p>
              <p className="flex items-center gap-2 mt-1">
                <Image
                  src="https://img.icons8.com/ios-filled/20/ffffff/marker.png"
                  alt="Ubicación"
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
                <span className="text-gray-300 text-sm">C.A.B.A y G.B.A</span>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Instalación de aire acondicionado</li>
                <li>• Mantenimiento preventivo</li>
                <li>• Reparación de equipos</li>
                <li>• Limpieza de filtros</li>
                <li>• Carga de gas refrigerante</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>&copy; 2024 KryoFix. Todos los derechos reservados.</p>
          </div>
          <div className="mt-4 border-t border-gray-700 pt-4 text-sm text-center">
            <Link href="/" className="mx-2 hover:underline">Inicio</Link> |
            <Link href="/servicios" className="mx-2 hover:underline">Servicios</Link> |
            <Link href="/nosotros" className="mx-2 hover:underline">Nosotros</Link> |
            <Link href="/contacto" className="mx-2 hover:underline">Contacto</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
