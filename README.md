# Micro Health v22.3.25 — Mi medicación (primera versión)

**Dónde:** Mi día → Mi medicación. También hay acceso rápido al final de Registrar datos de hoy.

Permite registrar medicamentos, dosis según receta, horarios, frecuencia diaria, lunes a viernes o días personalizados, fechas de inicio/fin e indicaciones. Cada toma de hoy se puede confirmar como Tomado, Omitido o deshacer. Historial reciente de confirmaciones. Edición y eliminación de medicamentos con confirmación.

**Recordatorios:** avisos dentro de la app mientras está abierta; botón para pedir permiso de notificaciones del dispositivo. Las notificaciones del dispositivo funcionan únicamente mientras la app está abierta y visible. **NO** hay avisos push con la aplicación cerrada en esta versión: para ello hace falta infraestructura push adicional, incluida la configuración de iOS como web app instalada. No utilizar como único recordatorio de medicación.

**Datos y copias:** el apartado se guarda en una clave local independiente `micro-health-medicacion-v1` para no tocar el estado histórico `miguel-evolucion-v4`. El JSON general de Micro Health no incluye automáticamente estos datos nuevos: utiliza **Copia de medicación** y **Restaurar medicación** dentro de Mi medicación. Las fotos IndexedDB siguen requiriendo respaldo separado. No borres los datos del navegador.

Antes de publicar, exporta el JSON general y, si ya usas medicación, también su copia JSON.
