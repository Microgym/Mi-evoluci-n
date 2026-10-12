# Micro Health v22.3.44 — Farmacia independiente

## Cambios

- Nueva pestaña principal **💊 Farmacia**, al lado de Registrar.
- Toda la gestión de medicamentos reunida en Farmacia: tomas de hoy, medicamentos y favoritos, horarios, avisos, documentos, consultas AEMPS/CIMA, historial, análisis IA y copias de medicación.
- El menú **Registrar** contiene peso, comidas y agua, sueño y energía y pasos; ya no incluye medicación.
- La pantalla Mi día no contiene gestión de medicación.
- Los detalles de Farmacia y las fichas de medicamentos permanecen **cerrados al abrir**, salvo cuando pulsas «Añadir medicamento».
- No se reescriben ni migran datos. Se mantienen exactamente las claves `miguel-evolucion-v4` y `micro-health-medicacion-v1`, documentos y fotografías IndexedDB.
- Versión renovada de caché `micro-health-v22-3-44`.

## Publicar

1. **Antes de actualizar**, exporta la copia completa y conserva también los JSON de datos y medicación. Guárdalos fuera de GitHub; la copia completa puede contener información privada.
2. Descomprime el ZIP y sube todos sus archivos a la raíz de la rama `main` de GitHub Pages, sustituyendo la versión anterior.
3. Recarga la app instalada y comprueba la pestaña Farmacia: abrir fichas, añadir medicamento y consultar tomas.
4. Si hay archivos multimedia en IndexedDB, conserva la copia completa verificada antes de borrar datos de Safari.

No se actualiza GitHub ni el Worker de IA automáticamente.
