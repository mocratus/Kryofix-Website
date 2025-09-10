'use client';

import { Star, Award, Users, Clock } from 'lucide-react';

export default function Hero() {
  const stats = [
    { icon: Users, value: '500+', label: 'Clientas Felices' },
    { icon: Award, value: '3+', label: 'Años de Experiencia' },
    { icon: Star, value: '4.9', label: 'Calificación' },
    { icon: Clock, value: '24h', label: 'Respuesta Rápida' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-200 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-300 rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Estudio de Manicuria Premium
            </div>
            
            <h1 className="title-display mb-6">
              Transforma tus
              <span className="gradient-text block">uñas en arte</span>
            </h1>
            
            <p className="subtitle mb-8 max-w-lg mx-auto lg:mx-0">
              Servicios profesionales de manicuria, pedicuria y nail art con los mejores productos 
              y técnicas más avanzadas. Tu belleza es nuestra pasión.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="#contacto" className="btn-primary">
                Reservar Turno
              </a>
              <a href="#galeria" className="btn-outline">
                Ver Trabajos
              </a>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-full mb-2">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="font-bold text-2xl text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen principal */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Imagen principal con placeholder */}
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">💅</span>
                    </div>
                    <p className="text-lg font-medium">Imagen Principal</p>
                    <p className="text-sm opacity-80">Manicuria Profesional</p>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-400 rounded-full opacity-80 animate-bounce-gentle"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-400 rounded-full opacity-70"></div>
            </div>

            {/* Card flotante con testimonial */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs hidden md:block">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                "Increíble trabajo, mis uñas nunca se vieron tan hermosas. ¡Totalmente recomendado!"
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-primary-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xs font-medium text-primary-700">M</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">María González</p>
                  <p className="text-xs text-gray-500">Cliente frecuente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
