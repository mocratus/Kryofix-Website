'use client';

import { useEffect } from 'react';

export function usePWA() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      // Registrar service worker
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('✅ SW registrado exitosamente:', registration.scope);

          // Verificar si hay actualizaciones
          registration.addEventListener('updatefound', () => {
            console.log('🔄 Nueva versión del SW encontrada');
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  console.log('✨ Nueva versión lista - recarga para actualizar');
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error('❌ Error registrando SW:', error);
        });

      // Escuchar mensajes del SW
      navigator.serviceWorker.addEventListener('message', (event) => {
        console.log('📨 Mensaje del SW:', event.data);
      });

      // Verificar si ya hay un SW controlando
      if (navigator.serviceWorker.controller) {
        console.log('🎮 SW ya está controlando la página');
      }

      // Escuchar cuando el SW toma control
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('🔄 SW tomó control - recargando...');
        window.location.reload();
      });
    } else {
      console.warn('⚠️ Service Workers no soportados en este navegador');
    }
  }, []);
}

// Declarar tipos para workbox
declare global {
  interface Window {
    workbox: any;
  }
}
