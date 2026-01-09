self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("women-safety-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/dashboard.html",
        "/laws.html"
      ]);
    })
  );
});
