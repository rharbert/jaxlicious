/* https://developers.google.com/web/tools/workbox/guides/get-started */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

// PRECACHE
workbox.precaching.precacheAndRoute([
  'user/pages/section-products-chocolate/chocolate-bar-jaxlicious-jax-dark.jpg',
  'user/pages/section-products-chocolate/chocolate-bar-jaxlicious-jes-dark.jpg',
  'user/pages/section-products-chocolate/chocolate-bar-jaxlicious-jen-dark.jpg',
  'user/pages/section-products-chocolate/chocolate-bar-jaxlicious-jay-dark.jpg'
]);

// CSS
workbox.routing.registerRoute(
  // Cache CSS files.
  /\.css$/,
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'css-cache',
  })
);

workbox.routing.registerRoute(
  // Cache CSS files.
  /\.js$/,
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'js-cache',
  })
);

workbox.routing.registerRoute(
  /.*(?:googleapis)\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'googleapis-cache',
  })
);

workbox.routing.registerRoute(
  /.*(?:snipcart)\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'snipcart-cache',
  })
);

// IMAGES
workbox.routing.registerRoute(
  // Cache image files.
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  // Use the cache if it's available.
  new workbox.strategies.CacheFirst({
    // Use a custom cache name.
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images.
        maxEntries: 200,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);

// FONTS
workbox.routing.registerRoute(
  // Cache font files.
  /\.(?:eot|svg|ttf|woff|woff2)$/,
  // Use the cache if it's available.
  new workbox.strategies.CacheFirst({
    // Use a custom cache name.
    cacheName: 'font-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 30 files.
        maxEntries: 30,
        // Cache for a maximum of a year.
        maxAgeSeconds: 365 * 24 * 60 * 60,
      })
    ],
  })
);