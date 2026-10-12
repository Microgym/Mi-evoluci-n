# Micro Health v22.3.32 + Worker v7.3 — IA para medicación

**Se requieren dos publicaciones independientes:**

1. **Cloudflare:** copia el contenido de `MicroHealth_Cloudflare_Worker_v7.3_Medicacion.js` en el **mismo Worker** del Coach (Edit code → Deploy). Conserva el secreto `OPENAI_API_KEY`, las variables y la URL actuales. Antes de reemplazar, exporta una copia del código actual. Este Worker se ha construido sobre la copia local **v7.2 Comidas**; si el Worker en producción contiene cambios posteriores, fusiona la ruta nueva en vez de reemplazarlo entero.
2. **GitHub Pages:** sube todos los archivos del ZIP `MicroHealth_v22.3.32_GitHub.zip` a la raíz del repositorio, en la rama `main`. No borres datos del navegador.

**Prueba:** en Mi día → Mi medicación → Añadir, haz una foto y pulsa «Identificar con IA»; revisa la propuesta y confirma dosis y horarios manualmente. Para un medicamento ya guardado, pulsa «✨ Análisis con IA». La revisión solo envía nombre y dosis de los medicamentos registrados, previa confirmación. La foto se envía al Worker solo cuando lo autorizas.

**Limitaciones:** no se ha ejecutado una llamada real a la API ni se ha desplegado el Worker. Las respuestas son orientativas y pueden contener errores. No son una comprobación certificada de interacciones ni sustituyen la valoración médica o farmacéutica. La app no modifica automáticamente pautas.

**Datos:** se conservan las claves `miguel-evolucion-v4` y `micro-health-medicacion-v1`, IndexedDB y el historial. Antes de actualizar, exporta copias JSON general y de medicación (incluye documentos). Las fotografías de progreso pueden requerir un respaldo separado.
