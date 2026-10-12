# Micro Health v22.3.29 — Corrección Consultar AEMPS

El botón «Consultar en AEMPS» de cada medicamento abre inmediatamente la página oficial CIMA en otra pestaña y, además, intenta cargar resultados dentro de Micro Health. De este modo hay una acción visible incluso si la API no está disponible o el navegador bloquea las peticiones. En CIMA se introduce el nombre para localizar el medicamento exacto.

La consulta integrada no constituye un análisis de IA ni una revisión personalizada de interacciones. Se mantienen las claves `miguel-evolucion-v4` y `micro-health-medicacion-v1`, los documentos y las fotografías. Antes de actualizar, exportar copias JSON general y de medicación.
