const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/index.js",
    "/indexedDb.js",
    "/style.css",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png",
    "manifest.webmanifest",
  ];
  const CACHE_NAME = "static-cache-v2";
  const DATA_CACHE = "data-cache-v1";
  // install
  self.addEventListener("install", function (evt) {
    evt.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(FILES_TO_CACHE);
      })
    );
    self.skipWaiting();
  });