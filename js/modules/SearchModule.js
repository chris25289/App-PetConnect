/**
 * Módulo: Gestión de búsqueda
 */
const SearchModule = (() => {

    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const inputs = form.querySelectorAll('input');
        const query = inputs[0].value.trim();
        const location = inputs[1].value.trim();

        if (!query) {
            alert('Por favor, indica qué necesitas');
            return;
        }

        console.log(`🔍 Buscando: "${query}" cerca de "${location}"`);
        // Aquí iría la llamada a tu API
    };

    /**
     * Búsqueda en tiempo real con debounce (opcional)
     */
    const handleLiveSearch = (e) => {
        const query = e.target.value.trim();
        if (query.length > 2) {
            console.log(`🔎 Búsqueda en vivo: "${query}"`);
        }
    };

    const init = () => {
        const form = document.getElementById('searchForm');
        if (!form) return;

        // Submit del formulario
        form.addEventListener('submit', handleSearch);

        // Búsqueda en vivo con debounce (opcional, usa Helpers)
        const searchInput = form.querySelector('input[type="text"]');
        if (searchInput && typeof Helpers !== 'undefined') {
            const debouncedSearch = Helpers.debounce(handleLiveSearch, 300);
            searchInput.addEventListener('input', debouncedSearch);
        }
    };

    return { init };
})();