# Micro Health v22.3.56 — Regreso desde informe de Farmacia

- Se añade «Volver a MicroHealth» a la pantalla del informe de Farmacia antes de imprimir o guardar el PDF.
- Regresa a la aplicación original si el navegador lo permite; si no, abre la aplicación en la pestaña del informe.
- El botón no se imprime en el PDF.
- Conserva las mejoras de la v22.3.55 y los datos locales.

Versión v22.3.57: Golf permite registrar putts y golpes de búnker por hoyo. Datos incluidos en la tarjeta y el PDF.

Versión v22.3.58: PDF de Golf con columnas de putts y búnker; referencia orientativa de nivel respecto al par al completar 9 o 18 hoyos (no hándicap oficial WHS).


## v22.3.59 Golf
- Course Rating y Slope Rating para una combinación seleccionada de 18 hoyos (dos recorridos de 9), guardados por campo y combinación.
- Diferencial orientativo = (113/Slope) × (golpes brutos − Course Rating), mostrado en partida, tarjeta y PDF; requiere 18 hoyos completos. No es índice WHS oficial; no incluye ajustes por hoyo, PCC ni historial.
- Se conserva la información existente y el registro de putts y búnker.

## v22.3.60 · Evolución de hándicap estimado
- Evolución visual de un índice orientativo usando las últimas 20 vueltas de 18 hoyos válidas con Rating y Slope guardados en cada partida.
- Tabla de partidas con diferencial y evolución calculada, con selección reducida según el número de resultados.
- No modifica tarjetas guardadas, datos existentes ni calcula un índice oficial WHS; excluye 9 hoyos, vueltas parciales y bolas levantadas.

## v22.3.61 · Golf 9 hoyos
- Course Rating y Slope para recorrido de 9 hoyos, independientemente de los 18 hoyos.
- Diferencial recreativo de 9 hoyos: (113/Slope9) × (golpes - CR9). Equivalencia a 18 = 2 × diferencial9. NO equivale al método WHS oficial para 9 hoyos.
- Se muestra en resumen, tarjeta, PDF e historial orientativo. Se mantienen las rondas anteriores.

## v22.3.62 · Golf independiente
- Golf tiene pestaña propia en navegación principal y en menú clásico.
- Pantalla dedicada con Jugar, Mis campos, Mis partidas y Mi evolución.
- Se retiran los accesos duplicados de Golf de Entrenamiento; las pantallas de captura, tarjetas y estadísticas se reutilizan.
- El historial de Golf se consulta directamente desde su nueva sección.
- Se mantienen todos los datos y claves de almacenamiento; no se migran registros.


## v22.3.63
- Golf: botones rediseñados en tarjetas más limpias y legibles.
- Navegación inferior: barra compacta en una sola fila con desplazamiento horizontal, evitando que ocupe dos filas en móvil.


## v22.3.64
- Golf: corregidos accesos Jugar una partida y Mis campos desde su nueva sección; el formulario se abre activando el contexto de Entrenamientos y vuelve a Golf al cerrarlo.
- Menú inferior: seis botones sin scroll horizontal; Coach pasa junto a la foto de perfil.


## v22.3.65
- Golf: acceso directo sin volver a elegir deporte.
- Selector de campo con opción Nuevo campo integrada y guardado utilizando la configuración existente.
- Los nuevos recorridos requieren completar par e índice antes de jugar.


## v22.3.66
- Golf > Jugar: pantalla inicial simplificada a campo, recorridos e Iniciar partida.
- Los ajustes generales de entrenamiento y la edición de campos no se muestran durante el inicio rápido.
- Golf > Mis campos conserva los formularios de configuración y la lectura de tarjeta por foto.
- No se modifican claves ni registros guardados.


## v22.3.67
- Golf: botón Eliminar partida durante la vuelta con confirmación.
- Descarta los datos de la partida activa y elimina su borrador persistido; no guarda en historial ni borra partidas ya terminadas.
- Vuelve a Golf y mantiene los campos registrados.


## v22.3.68
- Crear campo nuevo en Golf: primero nombre y luego elección entre foto de la tarjeta o creación manual.
- Si se sube una foto, la app intenta leer pares, hándicaps y metros por hoyo al crear el campo.
- Si la lectura falla o es parcial, el campo se guarda igualmente para poder completarlo manualmente.


## v22.3.69
Objetivos diarios editables de hidratos, fibra y azúcares totales. Mi día: objetivo, consumido hoy y porcentaje para calorías, proteínas, hidratos, fibra, azúcares y pasos.


## v22.3.70
- Importación por fotos de 18 hoyos, con aviso de hoyos faltantes.
- Variantes de barras de salida agrupadas bajo un mismo campo; selector de barras antes de jugar.
- Revisión manual necesaria de pares, hándicaps, metros, Rating y Slope.
