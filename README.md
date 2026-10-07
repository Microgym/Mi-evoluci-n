# Micro Health v22.2.63 — Corrección de umbrales hombre/mujer

Corrección sobre v22.2.62 para separar los motores de referencias corporales por sexo.

## Hombre
Se restauran exactamente los umbrales históricos de v22.2.61 para peso, IMC, grasa corporal, músculo, agua, masa ósea, BMR, proteína, grasa visceral, grasa subcutánea, grasa corporal en kg, peso muscular y proteína corporal en kg.

## Mujer
Se mantiene la lógica específica incorporada en v22.2.62: referencias por sexo/edad para grasa corporal, peso por altura/IMC, agua, cintura, grasa corporal en kg y referencia BMR personalizada. Las métricas sin clasificación femenina universal fiable siguen mostrándose como tendencia.

## Correcciones adicionales
- La lógica masculina y femenina queda separada para evitar que cambios futuros en un perfil modifiquen el otro.
- Las alertas de grasa reconocen las etiquetas de ambos motores.
- Service Worker actualizado a `micro-health-v22-2-63` para forzar la renovación de caché.

Storage: miguel-evolucion-v4 (sin cambios).
Cloudflare: sin cambios.
