# Micro Health v22.2.75 — Registro de Fuerza: series sin valores heredados

- En entrenamientos **nuevos**, cada ejercicio comienza con 3 series vacías. Ya no se cargan automáticamente los kg ni las repeticiones de sesiones anteriores del mismo gimnasio.
- Introducir repeticiones por serie es obligatorio; el peso puede quedar vacío si el ejercicio no lo necesita.
- La validación indica **qué serie** tiene un valor pendiente o inválido y lleva el foco al campo.
- Botón opcional «Copiar serie 1 a las demás» para repetir una misma combinación de peso y repeticiones, y «Añadir serie» crea una fila vacía.
- Editar entrenamientos existentes mantiene sus series originales.
- No cambia `miguel-evolucion-v4`, registros previos ni Cloudflare.

## Actualización
Exporta antes el JSON de seguridad. Sustituye `index.html` y `sw.js` en GitHub Pages. No reinstales la PWA ni borres los datos locales.
