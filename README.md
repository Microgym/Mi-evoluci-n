# Micro Health v22.3.26 — Varias tomas y documentos

- Cada medicamento puede tener varias horas al día. Cada toma se confirma, omite o deshace individualmente.
- Se conservan las tomas y medicamentos creados en v22.3.25. Los registros antiguos de una sola toma siguen vinculados a su hora.
- En la ficha del medicamento, botón **Añadir foto, receta o instrucciones**. Se aceptan imágenes y PDF de hasta 8 MB por archivo. Se pueden abrir y eliminar individualmente.
- Los archivos se guardan en IndexedDB separado: `micro-health-medication-files-v1`.
- La **Copia de medicación** ahora incluye los documentos adjuntos; puede ocupar bastante espacio. También acepta copias antiguas sin documentos.
- Las notificaciones del iPhone siguen limitadas a cuando la app está abierta y visible. No confiar exclusivamente en ellas para medicación.
- No se modifica `miguel-evolucion-v4` ni los registros o fotos de otros apartados.

Antes de actualizar, exporta copia JSON general y copia de medicación; fotos históricas de otros apartados requieren respaldo aparte.
