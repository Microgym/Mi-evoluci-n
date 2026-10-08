# Micro Health v22.2.71 — Orden de Entreno

En **Entreno** el orden ahora es: siguiente rutina recomendada, mis rutinas (plegadas por defecto, con inicio desde cada rutina), registrar entrenamiento, historial reciente y entrenamientos registrados. El resumen «Esta semana» se conserva después del historial. Cuando se inicia una rutina, el panel de rutina activa aparece junto a la recomendación.

Se ha retirado solo el botón general **🏋️ Iniciar rutina**. Se mantienen los botones de inicio de las rutinas existentes y el de la recomendación.

**Entrenamientos registrados** separa las sesiones **Por rutina** y los **Entrenamientos individuales**; se conservan las acciones de modificar, eliminar, cambiar fecha y gimnasio.

No cambian los registros ni la clave local `miguel-evolucion-v4`. No se requiere cambio de Cloudflare.

## Publicación

1. Exporta una copia de seguridad JSON por precaución.
2. Sustituye `index.html` y `sw.js` en la raíz de GitHub Pages.
3. No reinstales la PWA ni borres sus datos. La caché pasa a `micro-health-v22-2-71`.
