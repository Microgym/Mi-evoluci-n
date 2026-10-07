# Micro Health v22.2.66 — Coach 360º + PDF

Esta versión mantiene el Coach 360º de v22.2.65 y añade exportación local a PDF de sus consultas y evaluaciones.

## Novedades

- La sección visible se unifica como **Coach 360º** (la navegación muestra **Coach**).
- **PDF última consulta**: exporta la última pregunta y la respuesta asociada.
- **PDF conversación**: exporta el historial del chat guardado en el dispositivo.
- **PDF evaluación**: exporta la última evaluación estructurada de las 4 semanas.
- Los PDF incluyen el **logo vectorial de Micro Health**, fecha y hora de la consulta, fecha hasta la que llegan los datos analizados y nombre del perfil cuando existe.
- Cada nueva respuesta del Coach guarda `dataThrough` para que futuras exportaciones indiquen exactamente hasta qué fecha llegaba el contexto utilizado.
- La última evaluación estructurada se guarda localmente como `lastCoachEvaluation` para poder exportarla después.
- La generación del PDF se hace **localmente en el navegador**; el PDF no se envía a Cloudflare ni a servicios externos.

## Compatibilidad y datos

- La clave localStorage sigue siendo exactamente `miguel-evolucion-v4`.
- No se borran ni transforman mediciones históricas.
- Los perfiles y chats existentes siguen siendo válidos.
- Se conserva íntegra la Biblioteca de umbrales y el Coach 360º de v22.2.65.
- `sw.js` usa la caché `micro-health-v22-2-66`.

## Cloudflare

**No requiere cambios en Cloudflare respecto a v22.2.65.** Se mantiene el Worker v7.0 Coach360 ya instalado.

## Archivos a sustituir en GitHub Pages

- `index.html`
- `sw.js`
- `README.md` (recomendado)
- `manifest.webmanifest` no cambia, pero se incluye en el paquete por comodidad.
