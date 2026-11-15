/**
 * 🚀 Inicialización de la aplicación
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Mi Compañero inicializado');

    // Inicializar módulos
    ThemeModule.init();
    SearchModule.init();
    NavModule.init();

    // Ejemplo: usar helpers
    const totalAdopciones = Helpers.formatNumber(3400);
    console.log(`📊 Total adopciones: ${totalAdopciones}`);
});