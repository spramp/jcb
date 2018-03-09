importScripts('/cache-polyfill.js');
self.addEventListener('install', function(e) {
e.waitUntil(
caches.open('jcb').then(function(cache) {
return cache.addAll([
'/',
'/layouts/index.html',
'/css/',
'/js/',
''
]);
})
);
});

self.addEventListener('fetch', function(event) {
console.log(event.request.url);
});
