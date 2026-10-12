# Micro Health v22.3.30 — Alta por foto

En Mi día → Mi medicación → Añadir: hacer foto, elegir imagen o escribir nombre. «Identificar con IA» solicita consentimiento y llama al Worker configurado del Coach mediante `POST /analyze-medication`. **Esta ruta aún debe añadirse al Worker**: el ZIP de GitHub Pages por sí solo no habilita la identificación. Si la ruta no existe se muestra el error y puedes continuar manualmente.

Contrato esperado: JSON `{ "result": {"name":"...", "activeIngredient":"...", "strength":"...", "prescriptionText":"..."} }`. La IA solo propone identificación; dosis y horarios siempre se confirman manualmente. La imagen se adjunta a los documentos del medicamento una vez guardado.

Sin cambios en `miguel-evolucion-v4` o `micro-health-medicacion-v1`, ni en el historial de tomas y documentos. Antes de publicar, exporta copias JSON general y de medicación. No se publica ni se configura el Worker automáticamente.
