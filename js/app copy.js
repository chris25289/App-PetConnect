/**
 * 🚀 Inicialización de la aplicación
 * Detecta la vista actual y carga solo los módulos necesarios.
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Mi Compañero inicializado');

    if (typeof ThemeModule !== 'undefined') ThemeModule.init();

    const body = document.body;
    const isHome = document.querySelector('.hero') !== null;
    const isDashboardV1 = document.querySelector('.dashboard-layout') !== null;
    const isDashboardUser = body.classList.contains('dashboard-user-body');
    const isDashboardService = body.classList.contains('dashboard-service-body');   // 👈 NUEVO

    if (isDashboardService) {
        console.log('📍 Vista detectada: Dashboard de Servicio');
        if (typeof DashboardServiceModule !== 'undefined') DashboardServiceModule.init();
    }
    else if (isDashboardUser) {
        console.log('📍 Vista detectada: Dashboard de Usuario (Dueño)');
        if (typeof DashboardUserModule !== 'undefined') DashboardUserModule.init();
    }
    else if (isDashboardV1) {
        console.log('📍 Vista detectada: Dashboard General');
        if (typeof DashboardModule !== 'undefined') DashboardModule.init();
    }
    else if (isHome) {
        console.log('📍 Vista detectada: Home (Pública)');
        if (typeof SearchModule !== 'undefined') SearchModule.init();
        if (typeof NavModule !== 'undefined') NavModule.init();
        if (typeof AuthModule !== 'undefined') AuthModule.init();
        if (typeof Helpers !== 'undefined') {
            console.log(`📊 Total adopciones: ${Helpers.formatNumber(3400)}`);
        }
    }
});