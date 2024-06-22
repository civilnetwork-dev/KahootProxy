importScripts('/uv/uv.bundle.js');
importScripts('/uv/uv.config.js');
importScripts(__uv$config.sw || '/uv/uv.sw.js');

const uv = new UVServiceWorker();

let userKey = new URL(location).searchParams.get('userkey');

self.addEventListener('fetch', (event) => {
  event.respondWith(
    (async function () {
      if (event.request.url.startsWith(location.origin + '/i/')) {
        return await uv.fetch(event)
      }

      return await fetch(event.request)
    })()
  );
});