# Micro Health v22.3.28 — Consulta farmacológica oficial (fase 1)

Mi día → Mi medicación → Consultar en AEMPS en cada ficha, o buscador de CIMA bajo la lista.

Busca por nombre directamente en la API pública CIMA de la AEMPS. El usuario confirma la presentación y abre secciones 4.1 (indicaciones), 4.8 (reacciones adversas) y 4.5 (interacciones) de la ficha técnica oficial, con enlaces al prospecto y ficha completa. Si el navegador bloquea la conexión o la API no responde, ofrece enlaces a CIMA. No hay claves privadas ni envíos de recetas a terceros.

**Alcance real:** consulta de fuentes oficiales, NO es todavía IA generativa, OCR ni motor automático de interacciones entre medicamentos. Esas funciones requieren un backend seguro, configuración de proveedor, autorización del usuario y verificación farmacológica. No presentar esta versión como revisión médica personalizada.

Mantiene la clave histórica miguel-evolucion-v4, la clave independiente micro-health-medicacion-v1 y las fotos de IndexedDB. No se migran ni borran datos. Exportar copias antes de publicar.
