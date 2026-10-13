# Micro Health v22.3.49 — Confirmar próxima toma desde Mi día y Farmacia

- Los avisos de próxima toma muestran «✓ Hecho» y «Omitir» cuando la dosis corresponde a hoy.
- Ambos avisos registran en el mismo historial de medicación existente, sin crear una copia de los datos.
- Al confirmar u omitir, ambos avisos pasan a mostrar la siguiente dosis pendiente.
- «Omitir» solicita confirmación para evitar pulsaciones accidentales.
- Las dosis de días futuros se muestran, pero no pueden registrarse anticipadamente.
- Conserva las claves de almacenamiento existentes: `miguel-evolucion-v4`, `micro-health-medicacion-v1`, `micro-health-citas-medicas-v1` y las fotografías en IndexedDB.
- No incluye cambios al Worker ni publicación automática.
- Antes de publicar, crear una copia completa y conservar también las copias JSON anteriores.
