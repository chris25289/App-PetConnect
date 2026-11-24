/**
 * 🚀 Inicialización de la aplicación
 * Detecta la vista actual y carga solo los módulos necesarios para evitar errores.
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Mi Compañero inicializado');

    // 1️⃣ El módulo de tema siempre se carga (está en todas las vistas)
    if (typeof ThemeModule !== 'undefined') {
        ThemeModule.init();
    }

    // 2️⃣ Detectar en qué vista estamos
    const isHome = document.querySelector('.hero') !== null;
    const isDashboardV1 = document.querySelector('.dashboard-layout') !== null;
    const isDashboardUser = document.body.classList.contains('dashboard-user-body');
    const isDashboardService = document.body.classList.contains('dashboard-service-body'); // 👈 NUEVO

    // 3️⃣ Inicializar módulos según la vista
    if (isDashboardService) { // 👈 NUEVO: Prioridad al dashboard de servicio
        console.log('📍 Vista detectada: Dashboard de Servicio (Prestador)');
        if (typeof DashboardServiceModule !== 'undefined') {
            DashboardServiceModule.init();
        }
    } 
    else if (isDashboardUser) {
        console.log('📍 Vista detectada: Dashboard de Usuario (Dueño)');
        if (typeof DashboardUserModule !== 'undefined') {
            DashboardUserModule.init();
        }
    } 
    else if (isDashboardV1) {
        console.log('📍 Vista detectada: Dashboard General');
        if (typeof DashboardModule !== 'undefined') {
            DashboardModule.init();
        }
    } 
    else if (isHome) {
        console.log('📍 Vista detectada: Home (Pública)');
        
        if (typeof SearchModule !== 'undefined') SearchModule.init();
        if (typeof NavModule !== 'undefined') NavModule.init();
        if (typeof AuthModule !== 'undefined') AuthModule.init();
        
        // Ejemplo de uso de helpers (solo en home)
        if (typeof Helpers !== 'undefined') {
            const totalAdopciones = Helpers.formatNumber(3400);
            console.log(`📊 Total adopciones: ${totalAdopciones}`);
        }
    }
});