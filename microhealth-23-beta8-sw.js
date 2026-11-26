const CACHE='microhealth-beta8-shell-v1';
const PAGE=new URL('./microhealth-23-beta8.html',self.location.href).href;
const SDK='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.49.4/dist/umd/supabase.js';
self.addEventListener('install',e=>e.waitUntil((async()=>{const c=await caches.open(CACHE);await c.add(new Request(PAGE,{cache:'reload'}));const r=await fetch(SDK,{mode:'cors',cache:'reload'});if(!r.ok)throw Error('SDK unavailable');await c.put(SDK,r);await self.skipWaiting();})()));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=e.request.url;if(u!==PAGE&&u!==SDK)return;e.respondWith((async()=>{const c=await caches.open(CACHE);const cached=await c.match(u);if(u===PAGE){try{const r=await fetch(e.request);if(r.ok){await c.put(PAGE,r.clone());return r;}return cached||r;}catch(err){if(cached)return cached;throw err;}}return cached||fetch(e.request);})());});
