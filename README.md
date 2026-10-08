# Micro Health v22.2.76 — Historial de entrenamientos accesible

- **Historial reciente**: botones visibles **Ver detalles** y **Modificar** (para entrenamientos individuales). El botón Ver detalles abre y desplaza a Entrenamientos registrados, mostrando las series individuales.
- **Entrenamientos registrados**: ahora abierto por defecto y visible (se corrige el selector CSS que ocultaba los grupos), con registros separados en **Por rutina** y **Entrenamientos individuales**, y opciones para modificar/eliminar.
- Al guardar un entrenamiento de fuerza se actualizan explícitamente ambas vistas del historial.
- Se mantiene el asistente flotante de registro, con series en blanco por defecto.
- No se modifica el modelo de datos ni la clave local `miguel-evolucion-v4`.
- GitHub: sustituir `index.html` y `sw.js`. Cloudflare no cambia.
