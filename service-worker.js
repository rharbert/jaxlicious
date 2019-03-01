(function() {
  'use strict';

  //////////////////////////////////////////////////////////////////////////////
  // Cache the application shell
  //////////////////////////////////////////////////////////////////////////////
  var filesToCache = [
  '.',
  // Styles
  '/user/themes/bodigiti/style/css/styles.css',
  '/user/themes/bodigiti/style/css/snipcart-modal.css',
  'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css',
  // Scripts
  'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js',
  'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
  '/user/themes/bodigiti/js/dist/all.js',
  '/user/themes/bodigiti/js/dist/lazysizes.min.js',
  // Fonts
  '/user/themes/bodigiti/fonts/geomanist-bold-webfont.woff2',
  '/user/themes/bodigiti/fonts/geomanist-medium-webfont.woff2',
  '/user/themes/bodigiti/fonts/geomanist-regular-webfont.woff2',
  'https://cdn.snipcart.com/themes/2.0/base/fonts/snipcart/Snipcart.woff',
  // Images
  // Important: Do Not Include 'Manifest' Images/Icons here
  '/user/themes/bodigiti/images/logo-text-jaxlicious-regular.svg',
  '/user/themes/bodigiti/images/shopping-cart-white.svg',
  '/user/themes/bodigiti/images/chocolate-one-piece.png',
  '/user/pages/section-products-ideas/image-loading-600x600.gif',
  '/user/pages/section-products-chocolate/image-loading-800x382.gif'
];
// Incremental versioning of cached files via staticCacheName (used below for filesToCache)
var staticCacheName = 'cache-v6';

self.addEventListener('install', function(event) {
  // console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

//////////////////////////////////////////////////////////////////////////////
// Cache the application shell (intercept network requests)
//////////////////////////////////////////////////////////////////////////////
// Now that we have the files cached, we can intercept requests for those files
// from the network and respond with the files from the cache.
self.addEventListener('fetch', function(event) {
  // console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        // console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      // console.log('Network request for ', event.request.url);
      return fetch(event.request)

      // TODO 4 - Add fetched files to the cache
      .then(function(response) {

        // TODO 5 - Respond with custom 404 page
        /* single page = no 404 needed
        if (response.status === 404) {
          return caches.match('404.html');
        }
        */
        return caches.open(staticCacheName).then(function(cache) {
          if (event.request.url.indexOf('test') < 0) {
            cache.put(event.request.url, response.clone());
          }
          return response;
        });
      });

    }).catch(function(error) {

      // TODO 6 - Respond with custom offline page
      // console.log('Error, ', error);
      return caches.match('offline.html');
    })
  );
});

  // TODO 7 - delete unused caches
  self.addEventListener('activate', function(event) {
    // console.log('Activating new service worker...');

    var cacheWhitelist = [staticCacheName];

    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });

})();
