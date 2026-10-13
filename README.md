# Micro Health v22.3.54 — Seleccionar contenido del PDF de Farmacia

En **Farmacia → Informe PDF entre fechas** se incorpora un selector de contenido:

- **Todo** (por defecto): tomas programadas, realizadas y omitidas, más citas médicas.
- **Solo medicamentos**: únicamente tomas de medicación, con sus estados y resumen.
- **Solo citas médicas**: únicamente las visitas registradas y su resumen.

El intervalo «Desde / Hasta» se mantiene para los tres informes. El calendario no cambia. La generación del PDF solo consulta los registros existentes y no los altera.

Se conservan los datos guardados en `miguel-evolucion-v4`, `micro-health-medicacion-v1`, `micro-health-citas-medicas-v1` y IndexedDB. Caché renovada a v22.3.54.

Antes de actualizar, hacer copia de seguridad completa. Subir el contenido de este ZIP a la raíz de GitHub Pages; no se publica automáticamente.
