# Micro Health v22.3.34 — Medicamentos plegados

- En «Mis medicamentos», todas las fichas guardadas aparecen plegadas al abrir la pantalla.
- Cada cabecera muestra nombre, dosis, horarios y favorito ⭐.
- Tocar la cabecera despliega los detalles, documentos, editar, favoritos, AEMPS, IA y eliminar.
- Se mantienen las tomas de hoy y el historial, sin cambios.
- Se conserva la clave de datos `miguel-evolucion-v4`, la de medicación `micro-health-medicacion-v1` y las fotografías en IndexedDB.
- Incluye `sw.js` con nueva versión de caché y `manifest.webmanifest`.
- Antes de publicar: exportar copias JSON de datos generales y medicación. Las fotos en IndexedDB pueden requerir respaldo aparte.
- Subir el contenido del ZIP a la raíz de la rama `main` de GitHub Pages. No se ha publicado automáticamente.
- La consulta AEMPS/CIMA y el análisis IA conservan el comportamiento de la versión anterior.
