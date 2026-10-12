# Micro Health v22.3.35 — Toda la medicación plegada

- La sección completa «Mi medicación» aparece cerrada por defecto.
- Al abrirla, «Tomas de hoy», «Mis medicamentos», «Información oficial» e «Historial reciente» siguen cerrados hasta tocarlos.
- Cada medicamento individual también sigue plegado por defecto.
- «Añadir» y los formularios siguen disponibles dentro de la sección abierta.
- No cambia el almacenamiento `miguel-evolucion-v4`, `micro-health-medicacion-v1` ni IndexedDB.
- Caché del service worker renovada.
- Antes de publicar, exportar copia JSON general y copia JSON de medicación. Respaldar fotos de IndexedDB por separado si procede.
- Subir el contenido del ZIP a la raíz del repositorio, sin publicar automáticamente.
