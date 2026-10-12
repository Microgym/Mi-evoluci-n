# Micro Health v22.3.21 — Corrección de Inicio

Corrige una colisión entre reglas CSS de las versiones 22.3.16 y 22.3.19 que ocultaba las tarjetas del Inicio salvo el peso.

Inicio debe mostrar, en este orden:
1. Peso actual
2. Objetivo de entrenamientos esta semana
3. Objetivos de mi perfil (información del apartado Datos)
4. Próximos hitos
5. Alertas y señales

El resto permanece accesible en Mi día, Registrar, Entrenar y Progreso. No se han alterado datos ni la clave `miguel-evolucion-v4`.

Antes de publicar, exportar JSON; las fotos en IndexedDB requieren respaldo aparte.
