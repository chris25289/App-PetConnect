/**
 * Módulo: Navegación
 * - Menú hamburguesa para móvil
 * - Scroll suave a secciones
 * - Resaltar link activo al hacer scroll
 * - Ocultar/mostrar header al scrollear
 */
const NavModule = (() => {
    const BREAKPOINT_MOBILE = 968;

    /**
     * Crea el botón hamburguesa dinámicamente
     */
    const createMobileToggle = () => {
        const navActions = document.querySelector('.nav-actions');
        const navLinks = document.querySelector('.nav-links');

        if (!navActions || !navLinks) return;

        const burgerBtn = document.createElement('button');
        burgerBtn.className = 'burger-toggle';
        burgerBtn.setAttribute('aria-label', 'Abrir menú');
        burgerBtn.innerHTML = `
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
        `;

        // Insertar antes de las acciones de usuario
        navActions.parentNode.insertBefore(burgerBtn, navActions);

        burgerBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('nav-links--open');
            burgerBtn.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Cerrar al hacer clic en un link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('nav-links--open');
                document.body.style.overflow = '';
            });
        });
    };

    /**
     * Scroll suave para anchors internos (#seccion)
     */
    const enableSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const targetId = anchor.getAttribute('href');
                if (targetId === '#') return;

                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };

    /**
     * Resalta el link activo según la sección visible
     */
    const highlightActiveLink = () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');

        if (!sections.length || !navLinks.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        navLinks.forEach(link => {
                            link.classList.toggle(
                                'active',
                                link.getAttribute('href') === `#${id}`
                            );
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach(section => observer.observe(section));
    };

    /**
     * Oculta el header al hacer scroll hacia abajo, lo muestra al subir
     */
    const autoHideHeader = () => {
        const header = document.querySelector('header');
        if (!header) return;

        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > lastScroll && currentScroll > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }

            lastScroll = currentScroll;
        });
    };

    const init = () => {
        createMobileToggle();
        enableSmoothScroll();
        highlightActiveLink();
        autoHideHeader();
    };

    return { init };
})();