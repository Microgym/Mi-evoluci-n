# Micro Health v22.2.68 — Corrección de Orientación nutricional

## Qué se corrige

- Orientación nutricional recibe las mismas variables `kt` y `pt` que el resumen superior de Comidas. Se elimina toda posibilidad de que esa tarjeta use otros campos de objetivos o sus valores de respaldo.
- La tarjeta muestra explícitamente «objetivos de Datos: X kcal / Y g proteína» y la versión «v22.2.68». Esto permite verificar que la PWA instalada está mostrando la versión nueva.
- La descripción del objetivo corporal se toma de «Objetivo principal» en Perfil, en vez de fijar «perder grasa manteniendo músculo» para todos los perfiles.
- No cambia el historial ni los objetivos guardados; no hay migración.

## Despliegue GitHub Pages

1. Exporta tu copia JSON antes de actualizar.
2. Sustituye los archivos **index.html** y **sw.js** de la raíz del repositorio (no subas la carpeta `github_v22.2.68` como una subcarpeta nueva).
3. Comprueba en Comidas que Orientación nutricional muestra «v22.2.68» y «objetivos de Datos: 2.000 kcal / 165 g proteína» si esos son tus objetivos actuales.
4. Si no aparece v22.2.68, el dispositivo todavía no ha cargado el código actualizado: revisa que GitHub Pages haya publicado los archivos y abre de nuevo la PWA con conexión. No borres datos ni reinstales.

`manifest.webmanifest` no cambia. `README.md` es opcional.

## Compatibilidad

- Clave localStorage sin cambios: `miguel-evolucion-v4`.
- No requiere modificar Cloudflare Worker.
- Mantiene Coach 360º, biblioteca de umbrales y exportación PDF.
