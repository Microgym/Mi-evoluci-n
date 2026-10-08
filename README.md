# Micro Health v22.2.73 — Registro de entreno flotante

Corrige el fallo de v22.2.72: los botones de navegación estaban dentro del paso 3 y quedaban ocultos durante los pasos 1 y 2. Ahora los botones están fuera de todas las pantallas.

- El registro se abre en una ventana flotante con fondo oscurecido, desplazamiento interno y botón Cerrar.
- Fecha/hora actuales y Gimnasio Atalanta por defecto.
- Paso 1 → Tipo → Selección de ejercicio → Series (3 iniciales).
- Los registros antiguos y la clave localStorage `miguel-evolucion-v4` no cambian.
- Para desplegar: sustituir `index.html` y `sw.js` en GitHub Pages. Cloudflare no cambia.
