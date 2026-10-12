const CACHE='micro-health-v22-3-09';
const CORE=['./','./index.html','./anatomia-diseno1-front.png','./anatomia-diseno1-back.png','./muscle-front-base.webp','./muscle-back-base.webp','./muscle-front-pectorales.png','./muscle-front-deltoides.png','./muscle-front-biceps.png','./muscle-front-cuádriceps.png','./muscle-back-deltoides.png','./muscle-back-dorsales.png','./muscle-back-gluteos.png','./muscle-back-isquiotibiales.png','./manifest.webmanifest','./apple-touch-icon.png','./icon-192.png','./icon-512.png','./favicon-32.png'];

self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(cache=>cache.addAll(CORE))
  );
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('message',event=>{
  if(event.data && event.data.type==='SKIP_WAITING'){
    self.skipWaiting();
  }
});

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return;

  const url=new URL(req.url);

  // Solo gestionamos con SW los recursos del mismo origen.
  if(url.origin!==self.location.origin)return;

  event.respondWith((async()=>{
    try{
      // NETWORK-FIRST: evita que la app instalada se quede con HTML/fotos antiguas.
      const fresh=await fetch(req,{cache:'no-store'});
      if(fresh && fresh.ok){
        const copy=fresh.clone();
        const cache=await caches.open(CACHE);
        cache.put(req,copy).catch(()=>{});
      }
      return fresh;
    }catch(err){
      // Si no hay red, seguimos teniendo modo offline.
      const cached=await caches.match(req);
      if(cached)return cached;

      if(req.mode==='navigate'){
        const fallback=await caches.match('./index.html');
        if(fallback)return fallback;
      }
      throw err;
    }
  })());
});
