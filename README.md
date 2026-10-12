# Micro Health v22.3.33 — Usos de medicamentos y favoritos

- Identificar con IA presenta usos habituales y precauciones sin necesidad de leer la receta (requiere Worker v7.4). La información es orientativa, no explica la indicación particular del paciente ni sustituye AEMPS.
- Los medicamentos guardados pueden marcarse como favoritos con ⭐ y aparecen primero en la lista. El alta por foto también permite marcarlos como favoritos. El campo `favorite` se conserva al editar.
- Se mantienen claves `miguel-evolucion-v4` y `micro-health-medicacion-v1`, historial, documentos y fotografías.
- Antes de publicar, exportar copias de seguridad JSON general y de medicación, y respaldar el Worker actual. No se actualizan automáticamente ni GitHub ni Cloudflare.
- Si ya existe un Worker diferente del v7.3 suministrado, comparar cambios antes de sustituirlo.
