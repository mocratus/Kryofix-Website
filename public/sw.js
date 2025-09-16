const CACHE_NAME = 'kryofix-pwa-v3';
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

// Interceptar requests - ESTRATEGIA NETWORK FIRST
self.addEventListener('fetch', (event) => {
  // Solo cachear requests GET
  if (event.request.method !== 'GET') return;

  // Para páginas HTML, usar Network First (siempre la versión más reciente)
  if (event.request.headers.get('accept')?.includes('text/html') ||
      event.request.url.includes('/calculadora') ||
      event.request.url.endsWith('/')) {

    event.respondWith(
      fetch(event.request)
        .then((response) => {
          console.log('SW: Network First - Sirviendo desde red:', event.request.url);

          // Cachear la nueva versión
          if (response && response.status === 200 && response.type === 'basic') {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
          }

          return response;
        })
        .catch(() => {
          // Si falla la red, usar caché como fallback
          console.log('SW: Network falló, usando cache:', event.request.url);
          return caches.match(event.request)
            .then((cachedResponse) => {
              if (cachedResponse) {
                return cachedResponse;
              }
              return new Response('Offline - Contenido no disponible', {
                status: 503,
                statusText: 'Service Unavailable'
              });
            });
        })
    );
  } else {
    // Para recursos estáticos (CSS, JS, imágenes), usar Cache First
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            console.log('SW: Cache First - Sirviendo desde cache:', event.request.url);
            return response;
          }

          return fetch(event.request)
            .then((response) => {
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }

              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });

              return response;
            });
        })
    );
  }
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
