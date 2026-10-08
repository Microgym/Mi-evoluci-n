# Micro Health v22.2.79 — Cardio guiado

Actualiza en GitHub Pages únicamente `index.html` y `sw.js`. Mantiene la clave localStorage `miguel-evolucion-v4` y los datos anteriores. No modificar Cloudflare Worker.

## Novedades
- Cardio guiado: fecha/hora/gimnasio → tipo Cardio → actividad, duración, intensidad y métricas opcionales → revisión de kcal y confirmación.
- Las kcal proceden de la máquina si se ha leído una cifra; de lo contrario, estimación MET por actividad, peso real registrado, duración e intensidad. Si falta peso, no inventa kcal.
- Guardado seguro con cierre, confirmación y acceso a historial, sin duplicar sesiones ni kcal.
- Modificación de registros cardio con campos de FC, potencia, cadencia y kcal de máquina.
- Fuerza y demás tipos conservan sus flujos existentes.

Antes de actualizar, exporta copia de seguridad JSON desde la aplicación. No borres datos, ni desinstales la PWA.
