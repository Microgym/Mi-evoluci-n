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


## v22.3.71
- Corregido bloqueo del módulo Golf al abrir los campos: colisión entre función y variable de variantes de barras.
- Sin cambios en registros ni almacenamiento.


## v22.3.72
- Mis campos: eliminar campos personalizados con confirmación.
- El campo base no puede borrarse, ni uno con borrador activo; no se eliminan partidas históricas.


## v22.3.73
- Golf > Mis campos: listado visible de campos y recorridos, con acciones Editar y Eliminar en cada tarjeta.
- Protege el campo predeterminado y las partidas históricas.


## v22.3.74
- Se puede eliminar también Club de Golf Escorpión desde Mis campos.
- Se admite dejar la lista sin campos; Escorpión no reaparece al recargar.
- Se mantienen las tarjetas de partidas guardadas y se confirma antes de borrar.


## v22.3.75
- Eliminar campo con borrador: confirmación conjunta que permite borrar tanto el campo como su partida inacabada, sin tocar las partidas históricas.


## v22.3.76
- El calendario de «Mis pequeños hábitos» muestra la semana de lunes a domingo (ya no siete días móviles).
- El resumen semanal cuenta los días registrados en esa misma semana, incluido hoy.
- Se conservan todas las fechas e históricos anteriores.


## v22.3.77
- Crear campo desde Mis campos sin iniciar partida.
- Datos opcionales: dirección, provincia, país, greenfee y teléfono.
- Tras crear, ofrece jugar ahora o volver a Mis campos.
- Consulta automática de datos del club pendiente de integrar y verificar; no se inventan datos.


## v22.3.78
- Ficha sencilla de Mis campos: un campo con datos del club y tarjetas agrupadas por color de barras.
- Los colores no se presentan como campos diferentes.
- Edición opcional de datos del club; configuración avanzada de tarjeta desde un botón específico.


## v22.3.79
- Tarjeta del campo en dos tablas compactas tipo scorecard: ida (1–9) y vuelta (10–18).
- Ver/guardar como PDF usando la impresión del navegador, sin enviar los datos a servicios externos.


## v22.3.80
- Botón Editar / Ver abre directamente la ficha del campo seleccionado, sin pasar por iniciar partida.
- Asociación por ID de campo, sin depender del orden de la lista.


## v22.3.81
- Reimportar una foto actualiza los mismos hoyos del campo y color en lugar de duplicarlos.
- Se revisan par y hándicap persistidos para decidir qué hoyos faltan, incluso tras sucesivas lecturas.
- Validación explícita de los hoyos 10–18 y limpieza del selector de imágenes.


## v22.3.82
- El importador muestra hoyos completos en lugar de contar valores individuales como hoyos.
- Acceso Editar / Ver reforzado, sin abrir entrenamiento.
- No se alteran datos anteriores.


## v22.3.83
- El botón Ver/guardar PDF produce un archivo PDF descargable de la ficha del campo.
- Editar tarjeta y barras abre un editor independiente con 9/18/27 hoyos por filas compactas, sin golpes ni pantalla de entrenamientos.
- Barras adicionales en el mismo campo.


## v22.3.84
- La lectura de tarjeta horizontal envía a la IA recortes separados de la ida (1–9) y la vuelta (10–18), preservando etiquetas de filas cuando es posible.
- Una lectura 1–9 de la segunda mitad se asigna a los hoyos 10–18. Confirmar datos tras importar.
- Editar tarjeta y barras abre con prioridad el editor propio de 18 hoyos, sin el antiguo formulario de entrenamientos.


## v22.3.85
- Se desactiva el recorte automático de fotografías que provocaba cero hoyos reconocidos.
- Nunca se renumeran artificialmente 1-9 como 10-18 al recibir la foto completa.
- El reconocimiento de los hoyos 10-18 depende aún del servicio IA y NO está garantizado.


## v22.3.86
- Se incorpora una tarjeta de referencia de El Bosque (barras azules) transcrita de la captura proporcionada por el usuario: 18 hoyos completos, par 72, 5.336 m, Course Rating 69,6 y Slope 131.
- Botón opcional dentro de la ficha para aplicar estos datos confirmados sin depender del lector IA. No afecta a otras barras ni a partidas históricas.
- La extracción automática de otras tarjetas sigue pendiente de reparación del servicio remoto.


## v22.3.87
- El botón Editar tarjeta y barras llama directamente al editor dentro de la ficha.
- Se eliminan capturas de clic superpuestas y la navegación al formulario antiguo de Entrenamientos.


## v22.3.88
- Al iniciar partida, el desplegable de campo solo muestra el nombre del campo, nunca el color de barras añadido automáticamente.
- El selector independiente de barras aparece también cuando solo hay una variante guardada.
- Se muestra el nombre limpio en campos anteriores que incorporaron el color como sufijo; no se modifican sus datos persistidos.


## v22.3.89
- Editor independiente para tarjetas y barras, sin navegación a Entrenamientos.
- Edición por campo y por color con 18 hoyos y Hcp 9/18.


## v22.3.90
- Editar tarjeta y barras abre el panel desde la fase de captura del documento, antes de los controladores antiguos.
- Editor en contenedor independiente en lugar de elemento section, evitando estilos generales de secciones ocultas.
- Se conserva edición de 18 hoyos y las barras por campo.


## v22.3.91
- Hasta dos ejercicios diarios desde Entrenar, con series, repeticiones, carga adicional, fecha inicio/fin y franja.
- En Mi día: Hecho o repeticiones reales, historial por fecha y volumen estimado según peso.
- Guardado independiente de db.entreno, sin aumentar sesiones de entrenamiento.


## v22.3.92
- Se fuerza la visibilidad de Mis ejercicios diarios en Mi día.
- Se actualiza al entrar en Mi día y al registrar ejercicios.
- No cambia registros ni contadores de entrenamiento.


## v22.3.93 - Recuperación sin migración
- Solucionado error de sintaxis introducido en v22.3.92 al insertar una etiqueta style en un string JavaScript.
- No modifica la clave de almacenamiento, los datos, ni inicia restablecimiento o restauración.
- Antes de registrar nuevos datos, exportar una copia completa del estado recuperado.


## v22.3.94
- Corrige solo la fecha y actualización de Mis ejercicios diarios en Mi día.
- Usa la fecha real de hoy en lugar de la selección de fecha de Resumen del día.
- Mantiene los datos previos y funciones recuperadas en v22.3.93.


## v22.3.95
- Ejercicios diarios: elegir del catálogo por nombre o imagen; editar series, repeticiones, kilos, minutos y fechas.
- Modificar un ejercicio existente sin alterar los días completados.
- Mantiene los registros diarios fuera del contador de entrenamientos.


## v22.3.96
- Mi día: Mis ejercicios diarios se sitúa justo antes de Mi entrenamiento de hoy.
- Sin cambios en almacenamiento, cálculo ni registro de ejercicios.


## v22.3.97
- Mi día: se retira la cabecera grande con el título y la frase descriptiva, conservando la función de detalles.
- Ejercicios diarios completados: etiqueta visible ✅ HECHO y Desmarcar secundario; sin alterar el registro diario.


## v22.3.98
- Mi día solo muestra la próxima toma pendiente cuando corresponde a la fecha actual.
- Tras marcar Hecho u Omitir se actualiza y se oculta si no quedan tomas de hoy.
- Farmacia sigue mostrando las próximas tomas futuras.
- Sin cambios en los registros ni en el almacenamiento.


v22.3.99: Búsqueda de campos vía Cloudflare Worker /search-golf-course, vista previa de recorridos, salidas, hoyos y fuentes. Sin guardado automático. Permite copiar información básica al formulario.


v22.3.100: Coloca Buscar con IA directamente en el panel visible de creación de campos, antes del formulario. Sin cambios de datos.


v22.3.101: corrige búsqueda con IA: nombre del campo directamente junto al botón. No altera datos locales.


v22.3.102: Guardar explícitamente un campo nuevo a partir de la búsqueda IA, con recorridos en bloques de 9 y salidas con par/hcp/metros separados. Evita duplicados; no modifica campos existentes.


v22.3.103: Permite fusionar barras del resultado de IA con un campo existente, solo si coinciden nombres de los recorridos, sin sobrescribir valores ya guardados.


v22.3.104: favoritos, campo por defecto, foto con revisión y restauración de tarjeta, historial de ediciones, caché de búsquedas exitosas.


## v22.3.105 RECUPERACIÓN
- Reparación de ubicación del bloque HTML/CSS/JS de v22.3.104 que interrumpía el JavaScript principal.
- Sin cambios en formato de datos, claves de almacenamiento ni funciones de Golf; verificar en iPhone antes de usar la edición de tarjetas.
