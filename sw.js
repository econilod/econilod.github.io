var cache_name = "tomoriru-setsuna"

var cache_list = [
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
      return cache.addAll(cache_list)
    })
  )
})

self.addEventListener('fetch', function(e) {
})
