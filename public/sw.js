const CACHE_NAME = 'habib-helal-chef-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/manifest.json',
  '/favicon.ico',
];

// تثبيت Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {
        // تجاهل الأخطاء — قد لا تكون جميع الملفات متاحة
      });
    })
  );
  self.skipWaiting();
});

// تفعيل Service Worker
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
  clients.claim();
});

// معالج الطلبات — Cache-first للصور، Network-first للصفحات
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // تجاهل طلبات غير GET
  if (request.method !== 'GET') {
    return;
  }

  // Strategy 1: Cache-first للصور والخطوط والرموز
  if (
    request.destination === 'image' ||
    request.destination === 'font' ||
    url.pathname.includes('/icons/') ||
    url.pathname.endsWith('.webp') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.png')
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) {
          return cached;
        }
        return fetch(request).then((response) => {
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }
          // حفظ نسخة جديدة في الكاش
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        }).catch(() => {
          // لا صورة متاحة — ارجع الخطأ
          return new Response('Offline', { status: 503 });
        });
      })
    );
    return;
  }

  // Strategy 2: Network-first للصفحات والـ API
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }
        // حفظ في الكاش
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // جرب الكاش عند عدم توفر الشبكة
        return caches.match(request).then((cached) => {
          return cached || new Response('Offline page not available', { status: 503 });
        });
      })
  );
});

// معالج الرسائل من التطبيق
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
