'use client';

import { Sparkles, Clock, Palette, Heart, Star } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Sparkles,
      title: 'Manicuria Clásica',
      description: 'Cuidado completo de uñas con esmaltado tradicional de larga duración.',
      price: 'Desde $2.500',
      duration: '45 min',
      popular: false,
    },
    {
      icon: Star,
      title: 'Esmaltado Semipermanente',
      description: 'Manicuria con gel que dura hasta 3 semanas sin descascararse.',
      price: 'Desde $4.500',
      duration: '60 min',
      popular: true,
    },
    {
      icon: Palette,
      title: 'Nail Art',
      description: 'Diseños únicos y personalizados para expresar tu estilo.',
      price: 'Desde $3.500',
      duration: '75 min',
      popular: false,
    },
    {
      icon: Heart,
      title: 'Pedicuria Spa',
      description: 'Tratamiento relajante completo para pies con exfoliación y masaje.',
      price: 'Desde $3.000',
      duration: '90 min',
      popular: false,
    },
  ];

  return (
    <section id="servicios" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Nuestros Servicios
          </div>
          
          <h2 className="title-section mb-6">
            Servicios que realzan
            <span className="gradient-text block">tu belleza natural</span>
          </h2>
          
          <p className="subtitle max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios profesionales con productos de primera calidad 
            y técnicas innovadoras para cuidar tus uñas.
          </p>
          
          <div className="divider mt-8"></div>
        </div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-service group relative">
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl mb-4 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary-600">
                    {service.price}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                </div>
                
                <a
                  href="#contacto"
                  className="w-full bg-gray-100 hover:bg-primary-500 text-gray-700 hover:text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  Reservar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
