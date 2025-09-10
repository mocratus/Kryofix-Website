'use client';

import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Bella Nails</h3>
                <p className="text-sm text-gray-400">Studio</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Tu estudio de manicuria de confianza. Transformamos tus uñas en obras de arte 
              con profesionalismo y dedicación.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Av. Corrientes 1234</p>
                  <p className="text-gray-300">CABA, Buenos Aires</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+5411123456789"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  +54 11 1234-5678
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:info@bellanailsstudio.com"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  info@bellanailsstudio.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-300">Manicuria Clásica</span></li>
              <li><span className="text-gray-300">Esmaltado Semipermanente</span></li>
              <li><span className="text-gray-300">Nail Art</span></li>
              <li><span className="text-gray-300">Pedicuria Spa</span></li>
              <li><span className="text-gray-300">Extensiones de Uñas</span></li>
              <li><span className="text-gray-300">Tratamientos Especiales</span></li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Horarios</h4>
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
              <div className="text-gray-300">
                <p>Lun - Vie: 9:00 - 19:00</p>
                <p>Sáb: 9:00 - 17:00</p>
                <p>Dom: Cerrado</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h5 className="font-medium mb-4">Reserva tu turno</h5>
              <a
                href="tel:+5411123456789"
                className="btn-primary inline-block"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Bella Nails Studio.</span>
              <span>Todos los derechos reservados.</span>
            </div>
            
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>para nuestras clientas</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
