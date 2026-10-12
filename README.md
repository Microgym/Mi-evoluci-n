# Micro Health v22.3.41 — Inicio y registro diario más sencillos

## Mejoras
- Nuevo panel compacto de Inicio con peso, calorías, proteínas y sueño, reutilizando las cifras reales que ya muestra la aplicación. Sin cálculos ni valores inventados.
- Cuatro accesos directos: registrar comida, registrar peso, entrenamiento y «Registrar más».
- Botón «Panel completo» para acceder a todas las tarjetas y métricas anteriores (no se elimina ninguna).
- En «Mi día», los cuatro registros más habituales están a primera vista; pasos y medicación permanecen disponibles en «Otros registros y herramientas».
- Al elegir «Medicación» se abre su apartado general, pero se mantienen plegadas las tarjetas individuales.
- No modifica las claves `miguel-evolucion-v4`, `micro-health-medicacion-v1`, ni fotos y documentos en IndexedDB; todos los formularios, cálculos y registros existentes se mantienen.
- Service Worker actualizado al caché v22.3.41; se preservan todos los recursos incorporados en v22.3.40.

## Publicación
1. En la versión actual exportar copia completa y las copias JSON general y medicación. Guardarlas de forma privada, nunca en GitHub.
2. Descomprimir y subir el contenido de este ZIP a la raíz de la rama `main` de GitHub Pages, conservando el resto del repositorio.
3. Comprobar en Safari/iPhone los accesos rápidos, los valores del resumen y el botón de vista completa.

No se han actualizado GitHub ni Cloudflare automáticamente. No se han probado registros reales del usuario.
