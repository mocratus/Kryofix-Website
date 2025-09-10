'use client';

import { Camera } from 'lucide-react';

export default function Gallery() {
  const galleryItems = [
    { id: 1, category: 'Nail Art', title: 'Diseño Floral', color: 'from-pink-200 to-purple-200' },
    { id: 2, category: 'Semipermanente', title: 'Ombré Rosado', color: 'from-rose-200 to-pink-200' },
    { id: 3, category: 'Clásica', title: 'Rojo Elegante', color: 'from-red-200 to-rose-200' },
    { id: 4, category: 'Nail Art', title: 'Geométrico', color: 'from-blue-200 to-purple-200' },
    { id: 5, category: 'Pedicuria', title: 'Pies de Verano', color: 'from-yellow-200 to-orange-200' },
    { id: 6, category: 'Semipermanente', title: 'Nude Sofisticado', color: 'from-amber-200 to-yellow-200' },
  ];

  return (
    <section id="galeria" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-6">
            <Camera className="w-4 h-4 mr-2" />
            Nuestros Trabajos
          </div>
          
          <h2 className="title-section mb-6">
            Galería de
            <span className="gradient-text block">trabajos realizados</span>
          </h2>
          
          <p className="subtitle max-w-2xl mx-auto">
            Cada uña es una obra de arte. Descubre algunos de nuestros trabajos más destacados 
            y encuentra la inspiración para tu próximo diseño.
          </p>
          
          <div className="divider mt-8"></div>
        </div>

        {/* Grid de galería */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`group cursor-pointer ${
                index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${item.color}`}>
                {/* Placeholder para imagen */}
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">💅</span>
                    </div>
                    <p className="text-sm font-medium">{item.category}</p>
                    <p className="text-xs opacity-80">{item.title}</p>
                  </div>
                </div>
                
                {/* Overlay con información */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-2 py-1 bg-primary-500 text-xs font-medium rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas de trabajos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Trabajos Realizados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Diseños Únicos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-sm text-gray-600">Satisfacción</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">24h</div>
            <div className="text-sm text-gray-600">Respuesta</div>
          </div>
        </div>
      </div>
    </section>
  );
}
