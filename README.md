# Micro Health v22.2.78 — Duración y calorías al registrar Fuerza

- En «Validar y guardar» se abre un último paso para **confirmar duración e intensidad** antes de guardar.
- Para una sesión iniciada hoy, se propone el tiempo transcurrido desde la fecha y hora indicadas; puedes corregirlo. Si es una sesión antigua o no puede calcularse, se pide introducir la duración.
- El gasto aproximado usa el peso corporal registrado, MET de Fuerza e intensidad; si falta peso, las kcal quedan sin estimar (no se inventa un peso).
- Duración y kcal se distribuyen entre los ejercicios registrados en la misma sesión, sin duplicar el gasto al sumarlos en Inicio, TDEE, Coach e informes.
- El entrenamiento se guarda únicamente al confirmar el último paso, con cierre de la ventana y confirmación verde.
- No se modifican registros anteriores ni la clave `miguel-evolucion-v4`.
- GitHub: sustituir `index.html` y `sw.js`. Cloudflare: sin cambios.
