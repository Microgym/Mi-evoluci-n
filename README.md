# Micro Health v22.3.22 — Registrar sueño y pasos

Se corrige la presentación de los formularios originales de Sueño y Pasos desde Registrar y Mi día.

Causa: la v22.3.17 mostraba las tarjetas de registro como `display:flex`, aunque sus componentes internos fueron diseñados para un contenedor de cuadrícula. En móviles, esto comprimía el formulario y podía dejarlo casi invisible.

Corrección: tarjeta en bloque, formulario desplegado por defecto al pulsar, campos en una columna en móviles, anchura completa. Se siguen usando los mismos inputs y funciones originales de guardado. No hay duplicación de datos.

Se conserva la clave `miguel-evolucion-v4`. Exportar JSON antes de actualizar; las fotos de IndexedDB requieren respaldo aparte.
