const CACHE_NAME = 'kryofix-pwa-v2';
const urlsToCache = [
  '/',
  '/calculadora',
  '/manifest.json',
  '/logo-kryofix.png',
  '/icons/pwa-icon-192.png',
  '/icons/pwa-icon-512.png',
  '/icons/whatsapp.svg',
  '/icons/email.svg',
  '/icons/location.svg'
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
  console.log('SW: Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('SW: Cache abierto');
        return cache.addAll(urlsToCache).catch((error) => {
          console.error('SW: Error cacheando recursos:', error);
          // Cachear recursos uno por uno para identificar problemas
          return Promise.allSettled(
            urlsToCache.map(url =>
              cache.add(url).catch(err => console.error(`SW: Error cacheando ${url}:`, err))
            )
          );
        });
      })
      .then(() => {
        console.log('SW: Instalación completa');
        return self.skipWaiting(); // Activar inmediatamente
      })
  );
});

// Interceptar requests
self.addEventListener('fetch', (event) => {
  // Solo cachear requests GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - devolver respuesta
        if (response) {
          console.log('SW: Sirviendo desde cache:', event.request.url);
          return response;
        }

        // No está en cache - intentar fetch y cachear
        console.log('SW: Fetching:', event.request.url);
        return fetch(event.request)
          .then((response) => {
            // Solo cachear respuestas exitosas
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Cachear la respuesta para futuras requests
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Si falla el fetch y es la calculadora, mostrar página offline
            if (event.request.url.includes('/calculadora')) {
              return caches.match('/calculadora');
            }
            return new Response('Offline - Contenido no disponible', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});

// Actualizar Service Worker
self.addEventListener('activate', (event) => {
  console.log('SW: Activando...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('SW: Eliminando cache viejo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('SW: Activado y listo');
      return self.clients.claim(); // Tomar control inmediatamente
    })
  );
});
