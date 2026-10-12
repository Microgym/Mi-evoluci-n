# Micro Health v22.3.42 — Inicio integrado en Mi día

## Cambios
- Una única portada «☀️ Mi día» en la navegación principal. Se elimina la pestaña duplicada «Inicio».
- La vista compacta de peso, calorías, proteínas y sueño se muestra arriba de «Mi día» y utiliza los mismos valores reales de v22.3.41.
- Los botones de registros rápidos se mantienen en «＋ Registrar datos de hoy»: comida, peso, sueño y entrenamiento. «Otros registros y herramientas» sigue plegado.
- Las tarjetas antiguas de Inicio siguen disponibles sin duplicarse dentro del desplegable «📊 Panel completo y datos adicionales».
- Medicación, historial y demás bloques de Mi día siguen con sus desplegables anteriores.
- Los accesos al Inicio antiguo redirigen a «Mi día». El resto de navegación no cambia.
- No se cambian las claves `miguel-evolucion-v4` ni `micro-health-medicacion-v1`, ni IndexedDB de fotos/documentos. Sin migraciones ni cambios de datos.
- Service Worker: cache nueva `micro-health-v22-3-42`.

## Instalación y seguridad
1. Antes de publicar, exportar copia completa y copias JSON general y de medicación, guardadas fuera de GitHub.
2. Descomprimir y subir los archivos a la raíz del repositorio GitHub Pages (`main`). No se publica automáticamente.
3. Comprobar en Safari/iPhone Mi día, sus botones de registro, Panel completo, medicamentos, navegación y que los datos anteriores se visualicen correctamente.
