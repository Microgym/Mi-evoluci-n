# Micro Health v22.2.65 — Coach 360º

Esta versión convierte el Asistente en un Coach 360º que cruza composición corporal, evolución, nutrición, energía, entrenamiento, fuerza, actividad y recuperación.

## Coach 360º

- El objetivo elegido en Perfil es una intención, no una orden: el Coach puede recomendar definir, recomposición, mantenimiento, ganancia muscular controlada o recuperación/mantenimiento temporal si las tendencias lo justifican.
- Usa tendencias de varias semanas y evita decidir por una sola medición BIA o un solo día.
- Nutrición completa: kcal, proteína, hidratos, grasas, fibra, azúcares totales/libres, comidas recientes y favoritos.
- Energía: TDEE y balance estimados por Micro Health, identificados como estimaciones.
- Actividad y entrenamiento: pasos, distancia, sesiones, ejercicios y evolución de fuerza.
- Recuperación: sueño y agua cuando existen registros.
- Composición corporal: usa las referencias activas de la Biblioteca de umbrales según el perfil.

## Dietas y planificación

El chat puede crear dietas/menús personalizados, completar lo que queda del día y adaptar la alimentación al objetivo y al entrenamiento. El Perfil incorpora objetivo principal, número habitual de comidas, tipo de alimentación, alimentos preferidos, alimentos a evitar y alergias/intolerancias. Las alergias/intolerancias se tratan como restricciones estrictas.

## Compatibilidad y datos

- La clave localStorage sigue siendo exactamente `miguel-evolucion-v4`.
- No se borran ni transforman mediciones históricas.
- Los perfiles antiguos siguen siendo válidos; los nuevos campos tienen valores por defecto.
- Se conserva íntegra la Biblioteca de umbrales de v22.2.64.
- `sw.js` usa la caché `micro-health-v22-2-65`.

## Cloudflare Worker requerido

Para activar plenamente Coach 360º, usar **MicroHealth Cloudflare Worker v7.0 Coach360** en el Worker existente `mi-evolucion-foof-ai`.

El Worker v7.0:
- conserva `/analyze-food`, `/analyze-cardio` y `/analyze-sleep` del Worker anterior;
- amplía `/assistant-chat` para estrategia, dietas y recomendaciones 360º;
- amplía `/coach` con estrategia recomendada, justificación y recuperación;
- amplía el contexto para evitar truncar el nuevo snapshot;
- no requiere cambiar el secret `OPENAI_API_KEY`.

## Validación

- JavaScript inline de `index.html`: `node --check` OK.
- Worker v7.0: `node --check` OK.
- Smoke tests locales de `/health`, protección por API key, `/assistant-chat` y `/coach`: OK.
