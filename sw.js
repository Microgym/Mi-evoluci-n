const CACHE='mi-evolucion-v22-1-46';
const ASSETS=["./", "./index.html", "./manifest.webmanifest", "./assets/exercises_v22146/chest_press_machine.png", "./assets/exercises_v22146/incline_chest_press_machine.png", "./assets/exercises_v22146/bench_press_barbell.png", "./assets/exercises_v22146/incline_bench_press_dumbbell.png", "./assets/exercises_v22146/cable_crossover_high.png", "./assets/exercises_v22146/assisted_dips_chest.png", "./assets/exercises_v22146/crunch_machine.png", "./assets/exercises_v22146/cable_crunch.png", "./assets/exercises_v22146/hanging_knee_raise.png", "./assets/exercises_v22146/ab_wheel.png"];
self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(r=>{
      const copy=r.clone(); caches.open(CACHE).then(c=>c.put('./index.html',copy)); return r;
    }).catch(()=>caches.match('./index.html')));
  }else{
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
  }
});
