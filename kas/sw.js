const CACHE_NAME = 'kasir-v1';
const assets = [
  './',
  './index.html',
  './manifest.json'
];

// Menginstal Service Worker dan menyimpan file ke cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Mengambil file dari cache jika sedang offline
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});