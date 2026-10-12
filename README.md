# Micro Health v22.3.46 — Corrección de objetivos en Mi día

- La tarjeta «Objetivos de mi perfil» lee directamente de `miguel-evolucion-v4` → `profile`, sin depender de que se abra antes la pantalla Datos.
- Muestra calorías, proteína y pasos guardados; si faltan, presenta un mensaje útil y no deja «Cargando…» indefinidamente.
- Se actualiza al guardar el perfil, volver a la pantalla o recibir actualizaciones del resumen original.
- Conserva las correcciones móviles v22.3.45 y la sección Farmacia.
- No modifica las claves de almacenamiento ni cambia los objetivos guardados.
- Actualizada versión de caché del service worker.
- Antes de subir los archivos a GitHub, exporta una copia de seguridad completa y conserva otra copia anterior.
- Pendiente de probar visualmente en Safari/iPhone con datos reales.
