importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/8b0775831335c12213c5.js",
    "revision": "20c8bc55f9eb2c88e7cf87c05a68f2ef"
  },
  {
    "url": "/_nuxt/b81a8ae05c91a7e7399f.js",
    "revision": "1151c921391a85091bcd12d1c23f9ce5"
  },
  {
    "url": "/_nuxt/b9e6ea387202264a9c86.js",
    "revision": "12dbac7a8f455e2dfeb8a02c8061bbee"
  },
  {
    "url": "/_nuxt/d139e49a38e144d5b7f3.js",
    "revision": "297000fceb6ee55a2f7d2d877945fe23"
  },
  {
    "url": "/_nuxt/d8c4bf1c262bb022bc27.js",
    "revision": "868cef10396de5f7826818504392dbb9"
  }
], {
  "cacheId": "nx01",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
