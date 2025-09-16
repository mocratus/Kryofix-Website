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

      {/* Header simplificado para contacto */}
      <header className="bg-white shadow-lg border-b-4 border-cyan-600">
        {/* Header principal simplificado */}
        <div className="py-4 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Fila superior: Logo y botones */}
            <div className="flex items-center justify-between mb-3">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/logo-kryofix.png"
                  alt="Logo KryoFix"
                  width={140}
                  height={56}
                  className="h-14 w-auto object-contain hover:opacity-80 transition-opacity"
                  priority
                />
              </Link>

              {/* Botones compactos */}
              <div className="flex gap-2">
                <Link
                  href="/calculadora"
                  className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-blue-700 transition-colors"
                  title="Calculadora de Balance Térmico"
                >
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2H11zm0-2a1 1 0 100 2h.01a1 1 0 100-2H11zm-2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm-2 0a1 1 0 100 2h.01a1 1 0 100-2H7z" clipRule="evenodd"></path>
                  </svg>
                  <span className="hidden sm:inline">Calculadora</span>
                  <span className="sm:hidden">Calc</span>
                </Link>
                <a
                  href="https://wa.me/5491151353079?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20KryoFix.%20¿Podrían%20ayudarme?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-green-600 text-white px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-green-700 transition-colors"
                  onMouseDown={() => trackWhatsAppClick('header_mobile')}
                >
                  <Image
                    src="https://img.icons8.com/ios-filled/12/ffffff/whatsapp.png"
                    alt="WhatsApp"
                    width={12}
                    height={12}
                    className="h-3 w-3 object-contain"
                  />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Fila inferior: Título centrado */}
            <div className="text-center border-t border-gray-200 pt-3">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                Contáctanos
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">
                Solicita tu servicio técnico profesional
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="bg-gray-50 py-8 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-3 gap-8">
            {/* Información de contacto - Aparece segundo en móvil, primero en desktop */}
            <div className="bg-white p-6 rounded-lg shadow-md order-2 md:order-1">
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
                      src="https://img.icons8.com/ios-filled/20/0066cc/email.png"
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
                      src="https://img.icons8.com/ios-filled/20/cc0000/marker.png"
                      alt="Ubicación"
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Zona de Servicio</h3>
                    <p className="text-gray-600 text-sm">C.A.B.A. y G.B.A.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">¿Por qué elegirnos?</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Técnicos certificados
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Servicio rápido
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Presupuestos sin compromiso
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Garantía en trabajos
                  </li>
                </ul>
              </div>
            </div>

            {/* Formulario de contacto - Aparece primero en móvil, segundo en desktop */}
            <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md order-1 md:order-2">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Solicitar Servicio</h2>

              {isSubmitted ? (
                // Mensaje de confirmación
                <div className="text-center py-8">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">¡Consulta enviada exitosamente!</h3>
                    <p className="text-green-700 mb-4">
                      Gracias por contactarnos. Hemos recibido tu consulta y nos pondremos en contacto contigo a la brevedad.
                    </p>
                    <p className="text-sm text-green-600">
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
                  <input type="hidden" name="_subject" value="Nueva consulta desde KryoFix Web" />

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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="instalacion">Instalación</option>
                      <option value="mantenimiento">Mantenimiento</option>
                      <option value="reparacion">Reparación</option>
                      <option value="presupuesto">Solicitar presupuesto</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={3}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Describe tu consulta o el problema que necesitas resolver..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-cyan-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
      <footer className="bg-black text-white py-12 px-6">
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
              En KryoFix ofrecemos servicios técnicos especializados en climatización. Nos dedicamos a la instalación, mantenimiento y reparación de aires acondicionados.
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
