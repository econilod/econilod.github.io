var tomoriru_setsuna = [
  "index.thml",
  "/icon-192x192.png",
  "/icon-256x256.png",
  "/icon-384x384.png",
  "/icon-512x512.png",
  "/manifest.json"
]

self.addEventListener('install',function(e) {
  e.waitUntil(
    caches.open('chache_v1').then(function(cache) {
      return cache.addAll(tomoriru_setsuna)
    })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondwith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request)
    })
  )
})
