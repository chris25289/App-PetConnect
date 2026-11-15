/**
 * Utilidades reutilizables para toda la aplicación
 */
const Helpers = (() => {

    /**
     * Debounce: retrasa la ejecución hasta que pase el tiempo de espera
     * Útil para: búsqueda en tiempo real, resize, scroll
     */
    const debounce = (fn, delay = 300) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(this, args), delay);
        };
    };

    /**
     * Throttle: limita la ejecución a una vez cada X ms
     * Útil para: scroll, resize
     */
    const throttle = (fn, limit = 100) => {
        let inThrottle;
        return (...args) => {
            if (!inThrottle) {
                fn.apply(this, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    };

    /**
     * Formatea un número con separador de miles
     * Ej: 12000 → "12.000"
     */
    const formatNumber = (num) => {
        return num.toLocaleString('es-ES');
    };

    /**
     * Formatea una fecha relativa
     * Ej: "hace 2 horas", "hace 3 días"
     */
    const timeAgo = (date) => {
        const seconds = Math.floor((new Date() - date) / 1000);
        const intervals = [
            { label: 'año', seconds: 31536000 },
            { label: 'mes', seconds: 2592000 },
            { label: 'día', seconds: 86400 },
            { label: 'hora', seconds: 3600 },
            { label: 'minuto', seconds: 60 }
        ];

        for (const interval of intervals) {
            const count = Math.floor(seconds / interval.seconds);
            if (count > 0) {
                return `hace ${count} ${interval.label}${count > 1 ? 's' : ''}`;
            }
        }
        return 'hace un momento';
    };

    /**
     * Capitaliza la primera letra de un string
     */
    const capitalize = (str) => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    /**
     * Sanitiza un string para evitar inyección HTML
     */
    const sanitize = (str) => {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    };

    /**
     * Detecta si el dispositivo es móvil
     */
    const isMobile = () => window.innerWidth <= 968;

    /**
     * Genera un ID único simple
     */
    const generateId = (prefix = 'id') => {
        return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
    };

    return {
        debounce,
        throttle,
        formatNumber,
        timeAgo,
        capitalize,
        sanitize,
        isMobile,
        generateId
    };
})();