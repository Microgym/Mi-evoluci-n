# Micro Health v22.3.53 — Corrección de Farmacia

- Se corrige la invisibilidad del calendario de medicación y visitas médicas y del informe PDF entre fechas en Farmacia.
- Causa: el contenedor heredaba una regla global CSS `section { display:none }`. Se sustituye exclusivamente ese contenedor por un `div`, conservando sus controles y el código existente.
- Se mantienen los medicamentos, las tomas, las citas médicas y las claves de almacenamiento sin cambios.
- Antes de publicar, realizar una copia de seguridad completa. No borrar ni reinstalar la aplicación.
