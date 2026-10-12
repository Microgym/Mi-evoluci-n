# Micro Health v22.3.40 — Seguridad y modo offline

## Cambios
- Nueva **Copia de seguridad completa** en **Sincronización y copias de seguridad**. El exportador reúne datos generales (`miguel-evolucion-v4`), medicación (`micro-health-medicacion-v1`), fotos de progreso (IndexedDB `mi-evolucion-progress-photos`) y documentos de medicación (IndexedDB `micro-health-medication-files-v1`).
- Botón para comprobar estado y cantidad de medicamentos, fotos y documentos. Se informa de cuándo se preparó la última descarga, **no** de si el archivo se guardó correctamente.
- Restauración explícita mediante selección de JSON y confirmación. Sustituye las dos colecciones generales, pero **no borra** otras fotos y documentos. Debes guardar una copia de los datos actuales antes de importar.
- Exportar/Importar JSON existentes y sincronización con el Worker se mantienen como antes: **solo datos generales**. Copia de medicación original también se mantiene.
- Recursos offline recuperados: imágenes base anatómicas originales desde v22.3.29 y 4 iconos generados a partir del logotipo de la app. Todos los recursos listados en `sw.js` se incluyen ahora en el ZIP. Caché `micro-health-v22-3-40`.

## Seguridad y limitaciones
- Las copias contienen información privada de salud y fotos. **No subir la copia JSON a GitHub**. Guárdala de forma privada fuera de la app (Archivos/iCloud/ordenador).
- Archivos con muchas fotos pueden ocupar mucha memoria en iPhone. El exportador avisa cuando las fotos/documentos superan unos 100 MB. Puede fallar por falta de memoria; mantén las copias existentes.
- La exportación genera la descarga pero el navegador no permite confirmar que quedó guardada. Verifica el archivo manualmente.
- Si una restauración falla por falta de espacio, algunas fotos o documentos podrían haberse añadido antes del fallo. Los datos generales solo se escriben al terminar todos los archivos.
- Se conservan las claves y las fotos anteriores; este paquete no incluye ni conoce tus registros personales, que residen en tu dispositivo.
- No se ha publicado nada en GitHub ni modificado el Worker Cloudflare.

## Instalar
1. Antes de instalar, exporta los JSON **general y de medicación** desde la versión actual. Conserva todas las copias que tengas.
2. Sube **el contenido descomprimido** a la raíz de `main` de tu repositorio GitHub Pages.
3. Espera la publicación; abre Micro Health y revisa la nueva opción **Copia de seguridad completa**, en el panel de sincronización y copias. Confirma que se descarga el archivo y está en Archivos.
4. Prueba que la app se abre sin red. La IA/AEMPS requieren conexión; el modo offline cubre la interfaz y los recursos locales, no los servicios externos.

## Pruebas hechas
- Integridad del ZIP, presencia de todos los recursos CORE y análisis sintáctico de los bloques JavaScript. Queda pendiente una prueba completa en Safari/iPhone con datos reales y una restauración en entorno de prueba.
