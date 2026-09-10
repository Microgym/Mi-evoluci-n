# Mi Evolución v22.2 — Análisis IA de fotos

La app ya puede analizar fotos de comida cuando se conecta al backend privado incluido.

## Cambios
- `Datos → IA para fotos de comida`
- campo para guardar la URL del backend
- botón `Probar conexión`
- `Analizar foto` ahora:
  1. reduce la foto del iPhone;
  2. la envía al backend;
  3. recibe descripción, kcal, proteína y desglose;
  4. rellena los campos;
  5. obliga a revisar y pulsar `Guardar`.

La clave de OpenAI no se guarda en la app.

No se modifica la clave de localStorage de tus datos existentes.
