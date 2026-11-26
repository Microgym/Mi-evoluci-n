const CACHE='microhealth-beta72-shell-v1';
const PAGE=new URL('./microhealth-23-beta7.2.html',self.location.href).href;
const SDK='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
self.addEventListener('install',e=>e.waitUntil((async()=>{const c=await caches.open(CACHE);await c.add(new Request(PAGE,{cache:'reload'}));const r=await fetch(SDK,{mode:'cors',cache:'reload'});if(!r.ok)throw Error('SDK unavailable');await c.put(SDK,r);await self.skipWaiting();})()));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=e.request.url;if(u!==PAGE&&u!==SDK)return;e.respondWith((async()=>{const c=await caches.open(CACHE);const cached=await c.match(u);return cached||fetch(e.request);})());});
