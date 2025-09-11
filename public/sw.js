const CACHE_NAME = 'kryofix-pwa-v1';
const urlsToCache = [
  '/',
  '/calculadora',
  '/servicios',
  '/nosotros',
  '/contacto',
  '/logo-kryofix.png',
  '/icons/whatsapp.svg',
  '/icons/email.svg',
  '/icons/location.svg',
  '/_next/static/css/app/layout.css',
  '/_next/static/chunks/webpack.js',
  '/_next/static/chunks/main-app.js'
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - devolver respuesta
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Actualizar Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
