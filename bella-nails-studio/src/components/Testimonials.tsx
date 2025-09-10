'use client';

import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Ana María López',
      role: 'Empresaria',
      rating: 5,
      text: 'Increíble atención y profesionalismo. Mis uñas nunca se vieron tan hermosas. El nail art que me hicieron superó todas mis expectativas.',
    },
    {
      id: 2,
      name: 'Sofía Rodríguez',
      role: 'Influencer',
      text: 'El mejor lugar para cuidar mis uñas. Siempre salgo feliz y con ganas de mostrar mis manos. ¡Totalmente recomendado!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Carla Fernández',
      role: 'Doctora',
      text: 'Profesionales de primera. El esmaltado semipermanente me dura exactamente lo que prometen. Excelente relación calidad-precio.',
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 text-primary-700 rounded-full text-sm font-medium mb-6">
            <Quote className="w-4 h-4 mr-2" />
            Testimonios
          </div>
          
          <h2 className="title-section mb-6">
            Lo que dicen nuestras
            <span className="gradient-text block">clientas felices</span>
          </h2>
          
          <p className="subtitle max-w-2xl mx-auto">
            La satisfacción de nuestras clientas es nuestra mayor recompensa. 
            Lee lo que opinan sobre nuestros servicios.
          </p>
          
          <div className="divider mt-8"></div>
        </div>

        {/* Grid de testimonios */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* Testimonial text */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary-200" />
                <p className="relative z-10 italic">"{testimonial.text}"</p>
              </blockquote>

              {/* Client info */}
              <div className="flex items-center">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Lista para vivir la experiencia?
          </h3>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Únete a cientos de clientas satisfechas y descubre por qué somos 
            el estudio de manicuria más recomendado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="btn-primary"
            >
              Reservar Mi Turno
            </a>
            <a
              href="tel:+5411123456789"
              className="btn-outline"
            >
              Llamar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
