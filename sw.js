const CACHE_NAME = "pwa-cache-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

// Required to pass PWA installation criteria
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response("Offline mode not fully configured yet.");
    })
  );
});
