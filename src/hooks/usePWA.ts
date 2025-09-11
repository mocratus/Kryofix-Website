'use client';

import { useEffect } from 'react';

export function usePWA() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.workbox !== undefined
    ) {
      const wb = window.workbox;
      
      // Registrar service worker
      wb.register();

      // Escuchar actualizaciones
      wb.addEventListener('waiting', () => {
        console.log('Nueva versión disponible');
      });

      wb.addEventListener('controlling', () => {
        window.location.reload();
      });

    } else if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator
    ) {
      // Fallback para registrar manualmente
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registrado:', registration);
        })
        .catch((error) => {
          console.log('SW falló:', error);
        });
    }
  }, []);
}

// Declarar tipos para workbox
declare global {
  interface Window {
    workbox: any;
  }
}
