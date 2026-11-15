/**
 * Módulo: Gestión del tema (claro/oscuro)
 */
const ThemeModule = (() => {
    const STORAGE_KEY = 'mi-companero-theme';

    const toggle = () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    };

    const loadSavedTheme = () => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'dark') {
            document.body.classList.add('dark-mode');
        }
    };

    const init = () => {
        const btn = document.getElementById('themeBtn');
        if (btn) {
            btn.addEventListener('click', toggle);
        }
        loadSavedTheme();
    };

    return { init };
})();