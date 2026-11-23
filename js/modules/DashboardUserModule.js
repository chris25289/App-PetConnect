/**
 * Módulo: Dashboard de Usuario (Dueño de mascota)
 * - Navegación sidebar
 * - Añadir mascota (inline)
 * - Editar / eliminar mascota
 * - Recordatorios: marcar, eliminar, añadir
 * - Acciones de reserva y profesional
 * - Log de actividad reciente
 */
const DashboardUserModule = (() => {

    /* ---------- Helpers locales ---------- */
    const logActivity = (title, desc) => {
        const list = document.getElementById('activityList');
        if (!list) return;
        const li = document.createElement('li');
        li.className = 'du-activity-item';
        li.innerHTML = `
            <span class="du-activity-dot">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </span>
            <div class="du-activity-body">
                <strong>${title}</strong>
                <p>${desc}</p>
                <span class="du-activity-time">Justo ahora</span>
            </div>`;
        list.prepend(li);
    };

    /* ---------- Sidebar ---------- */
    const initNav = () => {
        document.querySelectorAll('.du-nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (item.getAttribute('href') === '#') {
                    e.preventDefault();
                    document.querySelectorAll('.du-nav-item').forEach(i => i.classList.remove('active'));
                    item.classList.add('active');
                    // cerrar sidebar en móvil
                    document.getElementById('duSidebar')?.classList.remove('open');
                }
            });
        });
    };

    /* ---------- Mascotas ---------- */
    const initPets = () => {
        const grid = document.getElementById('petsGrid');
        if (!grid) return;

        const addPet = () => {
            const name = prompt('Nombre de la nueva mascota:');
            if (!name) return;
            const type = (prompt('Tipo (Perro / Gato / Otro):') || 'Perro');
            const card = document.createElement('article');
            card.className = 'du-pet-card';
            card.innerHTML = `
                <div class="du-pet-media">
                    <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&q=80" alt="${Helpers.sanitize(name)}">
                    <span class="du-pet-type">${Helpers.sanitize(type)}</span>
                </div>
                <div class="du-pet-body">
                    <div class="du-pet-row">
                        <h3>${Helpers.sanitize(name)}</h3>
                        <div class="du-pet-actions">
                            <button class="du-pet-btn" aria-label="Editar"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path></svg></button>
                            <button class="du-pet-btn du-pet-btn--danger" aria-label="Eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
                        </div>
                    </div>
                    <p class="du-pet-breed">Sin datos · recién agregado</p>
                    <div class="du-pet-chip">Completa su ficha 🐾</div>
                    <a href="#" class="du-pet-link">Ver ficha completa
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                </div>`;
            grid.appendChild(card);
            logActivity('Mascota añadida', `Registraste a ${name} en tu familia.`);
        };

        document.getElementById('addPetBtn')?.addEventListener('click', addPet);
        document.getElementById('addPetInlineBtn')?.addEventListener('click', addPet);

        // Delegación para editar/eliminar
        grid.addEventListener('click', (e) => {
            const editBtn = e.target.closest('.du-pet-btn:not(.du-pet-btn--danger)');
            const delBtn = e.target.closest('.du-pet-btn--danger');
            const card = e.target.closest('.du-pet-card');
            if (!card) return;
            const petName = card.querySelector('h3').textContent;

            if (editBtn) {
                const newName = prompt('Editar nombre:', petName);
                if (newName) { card.querySelector('h3').textContent = newName; logActivity('Ficha actualizada', `Cambiaste el nombre a ${newName}.`); }
            } else if (delBtn) {
                if (confirm(`¿Eliminar a ${petName}?`)) {
                    card.style.transition = 'all .3s ease';
                    card.style.opacity = '0';
                    card.style.transform = 'scale(.95)';
                    setTimeout(() => card.remove(), 300);
                    logActivity('Mascota eliminada', `${petName} fue removido de tu familia.`);
                }
            }
        });
    };

    /* ---------- Recordatorios ---------- */
    const initReminders = () => {
        const list = document.getElementById('remindersList');
        if (!list) return;

        list.addEventListener('change', (e) => {
            if (e.target.matches('input[type="checkbox"]')) {
                const item = e.target.closest('.du-reminder');
                const title = item.querySelector('.du-reminder-title').textContent;
                item.classList.toggle('is-done', e.target.checked);
                if (e.target.checked) logActivity('Recordatorio cumplido', `Marcaste "${title}" como hecho.`);
            }
        });

        list.addEventListener('click', (e) => {
            const del = e.target.closest('.du-reminder-del');
            if (!del) return;
            const item = del.closest('.du-reminder');
            const title = item.querySelector('.du-reminder-title').textContent;
            item.style.transition = 'all .25s ease';
            item.style.opacity = '0';
            setTimeout(() => item.remove(), 250);
            logActivity('Recordatorio eliminado', `Quitaste "${title}".`);
        });

        const addReminder = () => {
            const title = prompt('Título del recordatorio:');
            if (!title) return;
            const meta = prompt('Mascota · Tipo (ej: Luna · Vacuna):') || 'General';
            const date = prompt('Fecha · Hora (ej: 30 de noviembre · 10:00):') || 'Próximamente';
            const li = document.createElement('li');
            li.className = 'du-reminder';
            li.innerHTML = `
                <label class="du-reminder-check"><input type="checkbox"><span class="du-reminder-box"></span></label>
                <div class="du-reminder-info">
                    <span class="du-reminder-title">${Helpers.sanitize(title)}</span>
                    <span class="du-reminder-meta">${Helpers.sanitize(meta)}</span>
                    <span class="du-reminder-date">${Helpers.sanitize(date)}</span>
                </div>
                <button class="du-reminder-del" aria-label="Eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>`;
            list.appendChild(li);
            logActivity('Nuevo recordatorio', `Agregaste "${title}".`);
        };

        document.getElementById('addReminderBtn')?.addEventListener('click', addReminder);
        document.getElementById('newReminderBtn')?.addEventListener('click', addReminder);
    };

    /* ---------- Reserva + Profesional ---------- */
    const initActions = () => {
        document.getElementById('rescheduleBtn')?.addEventListener('click', () => {
            const when = prompt('Nueva fecha y hora:', '23 de noviembre, 18:00');
            if (when) {
                const dateEl = document.querySelector('.du-reserve-date');
                if (dateEl) dateEl.lastChild.textContent = ' ' + when;
                logActivity('Reserva reprogramada', `Paseo movido a ${when}.`);
            }
        });

        document.getElementById('cancelReserveBtn')?.addEventListener('click', () => {
            if (confirm('¿Cancelar el paseo de Luna?')) {
                document.querySelector('.du-reserve')?.style.setProperty('opacity', '.5');
                logActivity('Reserva cancelada', 'Cancelaste el paseo de Luna.');
            }
        });

        document.getElementById('requestWalkBtn')?.addEventListener('click', () => {
            logActivity('Solicitud enviada', 'Pediste un paseo con Sofía Martínez.');
            alert('🐾 ¡Solicitud enviada a Sofía! Te avisaremos cuando confirme.');
        });
    };
        /* ---------- Mi perfil ---------- */
    const initProfile = () => {
        const editBtn = document.getElementById('profileEditBtn');
        const nameEl = document.getElementById('profileName');
        const settingsLink = document.getElementById('profileSettingsLink');

        editBtn?.addEventListener('click', () => {
            const newName = prompt('Editar nombre de perfil:', nameEl.textContent);
            if (newName && newName.trim()) {
                nameEl.textContent = newName.trim();
                logActivity('Perfil actualizado', `Cambiaste tu nombre a "${newName.trim()}".`);
            }
        });

        settingsLink?.addEventListener('click', (e) => {
            e.preventDefault();
            logActivity('Configuración', 'Abriste la configuración de la cuenta.');
            alert('⚙️ Configuración de la cuenta\n\n• Notificaciones\n• Privacidad\n• Métodos de pago\n• Cerrar sesión');
        });
    };
    const init = () => {
        initNav();
        initPets();
        initReminders();
        initProfile();   // 👈 NUEVO
        initActions();
        console.log('✅ Dashboard de usuario inicializado');
    };

    return { init };
})();