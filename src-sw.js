
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.3/workbox-sw.js');

workbox.routing.registerRoute(
  new RegExp('(unpkg|rawgit|google)'),
  workbox.strategies.cacheFirst()
);
// TODO more...

workbox.precaching.precacheAndRoute([]);
