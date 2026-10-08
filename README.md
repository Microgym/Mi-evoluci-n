# Micro Health v22.2.83 — Campos de golf

**GitHub Pages:** sustituir `index.html` y `sw.js` de esta carpeta. No borrar datos, caché del navegador ni reinstalar la PWA.

**Cloudflare Worker:** para habilitar la lectura de tarjetas por foto, desplegar también `MicroHealth_Cloudflare_Worker_v7.1_Golf.js` (entregado por separado). El resto de endpoints y la clave secreta `OPENAI_API_KEY` permanecen sin cambios. Sin actualizar el Worker, crear y editar campos manualmente sigue funcionando, pero el botón de foto mostrará error 404.

Incluye campo Escorpión con Masía, Lagos y Nuevos, permite crear campos de 9, 18 o 27 hoyos, renombrar campos y recorridos, editar pares/hcp/metros y barras de salida, y analizar una foto para proponer datos que deben revisarse antes de guardar. Evolución por campo y recorrido.

Se mantiene `const KEY='miguel-evolucion-v4';` y los entrenamientos y partidas previos. Exportar copia JSON antes de actualizar.
