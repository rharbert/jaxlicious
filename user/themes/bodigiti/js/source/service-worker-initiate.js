/* Service Worker Initiate */
/*
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
    console.log('Service Worker registration successful with scope: ', registration.scope);
    })
    .catch(function(err) {
    console.log('Service Worker registration failed: ', err);
    });
}
*/

/* Workbox Initiate Service Worker */
// Check that service workers are registered
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}