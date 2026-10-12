# Micro Health v22.3.31 — Corrección del alta por foto

Se corrige un error de integración de v22.3.30: el código de la nueva pantalla se había insertado accidentalmente dentro del HTML de impresión del informe de entrenamiento y no se ejecutaba como script de la aplicación. Ahora la pantalla «Añadir medicamento» se inicia correctamente desde Mi día → Mi medicación → Añadir.

Incluye cámara, galería, nombre escrito, vista previa, quitar foto y continuar manualmente; tras confirmar el alta, la imagen se guarda con los documentos del medicamento.

**Pendiente:** «Identificar con IA» requiere habilitar la ruta POST /analyze-medication en el Worker del Coach. Si no existe, se indica el error y se permite continuar manualmente. No se afirma que la identificación automática ya funcione.

No se cambian las claves `miguel-evolucion-v4` ni `micro-health-medicacion-v1`. Antes de actualizar, exportar copias JSON general y de medicación. Las fotografías históricas requieren su propio respaldo.
