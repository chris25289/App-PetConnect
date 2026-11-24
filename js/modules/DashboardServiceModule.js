/**
 * Módulo: Dashboard de Prestador de Servicios
 * - Navegación sidebar
 * - Toggle chips de especialidad (sincronizados con cards)
 * - Estado "Disponible"
 * - Especialidades activables (dot + card)
 * - Servicios: editar, eliminar, toggle visible
 * - Nuevo servicio (inline)
 */
const DashboardServiceModule = (() => {

    const logActivity = (msg) => console.log(`🐾 [Servicio] ${msg}`);

    /* ---------- Sidebar ---------- */
    const initNav = () => {
        document.querySelectorAll('.ds-nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (item.getAttribute('href') === '#') {
                    e.preventDefault();
                    document.querySelectorAll('.ds-nav-item').forEach(i => i.classList.remove('active'));
                    item.classList.add('active');
                }
            });
        });
    };

    /* ---------- Chips de especialidad ---------- */
    const initChips = () => {
        const chips = document.querySelectorAll('.ds-chip');
        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                chip.classList.toggle('active');
                const spec = chip.dataset.spec;
                logActivity(`Especialidad "${chip.textContent}" ${chip.classList.contains('active') ? 'activada' : 'desactivada'} (${spec})`);
            });
        });
    };

    /* ---------- Disponible ---------- */
    const initAvailable = () => {
        const btn = document.getElementById('availableBtn');
        if (!btn) return;
        btn.addEventListener('click', () => {
            btn.classList.toggle('off');
            const label = btn.classList.contains('off') ? 'No disponible' : 'Disponible';
            btn.lastChild.textContent = ' ' + label;
            logActivity(`Estado de disponibilidad: ${label}`);
        });
    };

    /* ---------- Especialidades (cards) ---------- */
    const initSpecs = () => {
        document.querySelectorAll('.ds-spec-card').forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('active');
                const name = card.querySelector('h3').textContent;
                logActivity(`Especialidad "${name}" ${card.classList.contains('active') ? 'activada' : 'desactivada'}`);
            });
        });
    };

    /* ---------- Servicios ---------- */
    const updateCount = () => {
        const grid = document.getElementById('servicesGrid');
        const countEl = document.getElementById('serviceCount');
        if (grid && countEl) {
            const n = grid.querySelectorAll('.ds-service-card').length;
            countEl.textContent = `${n} servicio${n !== 1 ? 's' : ''} en tu perfil`;
        }
    };

    const initServices = () => {
        const grid = document.getElementById('servicesGrid');
        if (!grid) return;

        grid.addEventListener('click', (e) => {
            const card = e.target.closest('.ds-service-card');
            if (!card) return;
            const editBtn = e.target.closest('.ds-service-btn:not(.ds-service-btn--danger)');
            const delBtn = e.target.closest('.ds-service-btn--danger');
            const name = card.querySelector('h3').textContent;

            if (editBtn) {
                const newName = prompt('Editar nombre del servicio:', name);
                if (newName) { card.querySelector('h3').textContent = newName; logActivity(`Servicio renombrado a "${newName}"`); }
            } else if (delBtn) {
                if (confirm(`¿Eliminar "${name}"?`)) {
                    card.style.transition = 'all .3s ease';
                    card.style.opacity = '0';
                    card.style.transform = 'scale(.95)';
                    setTimeout(() => { card.remove(); updateCount(); }, 300);
                    logActivity(`Servicio "${name}" eliminado`);
                }
            }
        });

        // Toggle visible
        grid.addEventListener('change', (e) => {
            if (e.target.matches('.ds-toggle input')) {
                const card = e.target.closest('.ds-service-card');
                const name = card.querySelector('h3').textContent;
                logActivity(`"${name}" ${e.target.checked ? 'visible' : 'oculto'} en perfil`);
            }
        });
    };

    /* ---------- Nuevo servicio ---------- */
    const initNewService = () => {
        const add = () => {
            const grid = document.getElementById('servicesGrid');
            if (!grid) return;
            const title = prompt('Nombre del nuevo servicio:');
            if (!title) return;
            const type = prompt('Especialidad (Veterinaria, Paseador, etc.):') || 'General';
            const price = prompt('Precio (ej: $5.000 o Sin costo):') || 'Sin costo';
            const unit = prompt('Unidad (por servicio / por día / por traslado):') || 'por servicio';

            const card = document.createElement('article');
            card.className = 'ds-service-card';
            const priceClass = /sin costo/i.test(price) ? 'ds-service-price ds-service-price--free' : 'ds-service-price';
            card.innerHTML = `
                <div class="ds-service-top">
                    <div class="ds-service-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="4" r="2"></circle><circle cx="18" cy="8" r="2"></circle><circle cx="20" cy="16" r="2"></circle><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path></svg></div>
                    <div class="ds-service-actions">
                        <button class="ds-service-btn" aria-label="Editar"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path></svg></button>
                        <button class="ds-service-btn ds-service-btn--danger" aria-label="Eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
                    </div>
                </div>
                <span class="ds-service-type">${Helpers.sanitize(type)}</span>
                <h3>${Helpers.sanitize(title)}</h3>
                <p class="ds-service-desc">Servicio recién creado. Completa los detalles.</p>
                <div class="ds-service-price-row">
                    <span class="${priceClass}">${Helpers.sanitize(price)}</span>
                    <span class="ds-service-unit">${Helpers.sanitize(unit)}</span>
                </div>
                <div class="ds-service-meta">
                    <span class="ds-service-meta-item"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>A definir</span>
                    <span class="ds-service-meta-item"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>Ubicación por definir</span>
                </div>
                <div class="ds-service-divider"></div>
                <label class="ds-toggle-row">
                    <span class="ds-toggle-label">Visible en tu perfil</span>
                    <span class="ds-toggle"><input type="checkbox" checked><span class="ds-toggle-slider"></span></span>
                </label>`;
            grid.appendChild(card);
            updateCount();
            logActivity(`Nuevo servicio "${title}" creado`);
        };

        document.getElementById('newServiceBtn')?.addEventListener('click', add);
        document.getElementById('addSpecBtn')?.addEventListener('click', add);
    };
    /* ---------- Agenda ---------- */
    const initAgenda = () => {
        document.getElementById('viewWeekBtn')?.addEventListener('click', () =>
            logActivity('Vista semanal de agenda abierta'));

        document.getElementById('agendaList')?.addEventListener('click', (e) => {
            const btn = e.target.closest('.ds-complete-btn');
            if (!btn) return;
            const item = btn.closest('.ds-agenda-item');
            const title = item.querySelector('h3').textContent;
            item.classList.add('is-done');
            item.querySelector('.ds-agenda-title-row')?.insertAdjacentHTML('beforeend',
                '<span class="ds-agenda-tag">Completado</span>');
            btn.remove();
            logActivity(`Turno "${title}" marcado como completado`);
        });
    };

    /* ---------- Solicitudes ---------- */
    const updateRequestsCount = () => {
        const list = document.getElementById('requestsList');
        const count = document.getElementById('requestsCount');
        if (list && count) {
            const n = list.querySelectorAll('.ds-request-card').length;
            count.textContent = `${n} pendiente${n !== 1 ? 's' : ''}`;
            if (n === 0) count.remove();
        }
    };

    const initRequests = () => {
        document.getElementById('requestsList')?.addEventListener('click', (e) => {
            const card = e.target.closest('.ds-request-card');
            if (!card) return;
            const accept = e.target.closest('.ds-accept-btn');
            const reject = e.target.closest('.ds-reject-btn');
            const who = card.querySelector('strong').textContent;

            if (accept) {
                card.style.transition = 'all .3s ease';
                card.style.opacity = '0'; card.style.transform = 'scale(.96)';
                setTimeout(() => { card.remove(); updateRequestsCount(); }, 300);
                logActivity(`Solicitud de ${who} aceptada → añadida a agenda`);
            } else if (reject) {
                card.style.transition = 'all .3s ease';
                card.style.opacity = '0'; card.style.transform = 'scale(.96)';
                setTimeout(() => { card.remove(); updateRequestsCount(); }, 300);
                logActivity(`Solicitud de ${who} rechazada`);
            }
        });
    };

    /* ---------- Perfil profesional + público ---------- */
    const initProfiles = () => {
        document.getElementById('editProfileBtn')?.addEventListener('click', () =>
            logActivity('Edición de perfil profesional abierta'));

        document.getElementById('publicEditBtn')?.addEventListener('click', () => {
            const newName = prompt('Editar nombre del perfil público:',
                document.getElementById('publicName')?.textContent);
            if (newName && newName.trim()) {
                document.getElementById('publicName').textContent = newName.trim();
                logActivity(`Perfil público renombrado a "${newName.trim()}"`);
            }
        });

        document.getElementById('publicSettingsLink')?.addEventListener('click', (e) => {
            e.preventDefault();
            logActivity('Configuración de la cuenta abierta');
        });
    };

    /* ---------- Ingresos (animación de barras al aparecer) ---------- */
    const initChart = () => {
        const bars = document.querySelectorAll('.ds-bar');
        bars.forEach(b => { const h = b.style.height; b.style.height = '0'; requestAnimationFrame(() => setTimeout(() => b.style.height = h, 100)); });
    };
    const init = () => {
        initNav();
        initChips();
        initAvailable();
        initSpecs();
        initServices();
        initNewService();
        initAgenda();        // 👈
        initRequests();      // 👈
        initProfiles();      // 👈
        initChart();         // 👈
        updateCount();
        updateRequestsCount();
        console.log('✅ Dashboard de servicio inicializado');
    };

    return { init };
})();