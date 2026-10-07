# Micro Health v22.2.64 — Biblioteca central de umbrales

Esta versión sustituye el enfoque de umbrales dispersos por una biblioteca central consultable desde **Peso > Biblioteca de umbrales**.

## Cambios principales

- El Perfil selecciona automáticamente las referencias aplicables según sexo, edad, altura y peso, solo cuando cada métrica necesita esas variables.
- Grasa corporal: rangos por sexo y edad (Omron BF511, basados en Gallagher/McCarthy).
- Músculo esquelético: rangos por sexo y edad (Omron BF511).
- IMC y peso derivado: referencias adultas OMS; el peso se calcula desde altura + cortes de IMC.
- Cintura: referencias por sexo de riesgo metabólico OMS.
- Agua corporal: rango orientativo adulto por sexo de Tanita.
- Masa ósea: referencia orientativa por sexo y tramo de peso de Tanita.
- Grasa visceral: escala Omron 1–30 (1–9 normal, 10–14 alto, 15–30 muy alto).
- BMR: referencia personalizada Mifflin–St Jeor, sin clasificarlo como “bueno/malo”.
- Proteína, grasa subcutánea y peso muscular: se prioriza tendencia cuando no existe una referencia universal independiente del modelo de báscula.
- Los umbrales masculinos históricos de Micro Health v22.2.61 se conservan dentro de la biblioteca para consulta y comparación.

## Datos y compatibilidad

- No se modifican mediciones históricas.
- La clave localStorage sigue siendo exactamente `miguel-evolucion-v4`.
- No hay migración de datos.
- No requiere cambios en Cloudflare Worker.
- `sw.js` usa la caché `micro-health-v22-2-64` para forzar la actualización de la PWA.

## Archivos de GitHub

Sustituir `index.html`, `sw.js`, `README.md` y `manifest.webmanifest` por los incluidos en este paquete. Mantener los iconos existentes del repositorio.
