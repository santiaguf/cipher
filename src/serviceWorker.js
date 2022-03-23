/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
const cipher = 'cipher-site-v1';
const assets = [
  '/',
  'index.html',
  'index.js',
  'cipher.js'
]

// eslint-disable-next-line arrow-parens
self.addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(cipher).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    }),
  );
});
