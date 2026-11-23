/**
 * Módulo: Autenticación (Login / Registro)
 * - Abrir/cerrar modal
 * - Cambiar entre tabs Login/Register
 * - Manejo de formularios
 */
const AuthModule = (() => {
    let currentTab = 'login';

    const openModal = (tab = 'login') => {
        const modal = document.getElementById('authModal');
        if (!modal) return;

        switchTab(tab);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        const modal = document.getElementById('authModal');
        if (!modal) return;

        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    const switchTab = (tab) => {
        currentTab = tab;
        const tabs = document.querySelectorAll('.auth-tab');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');

        tabs.forEach(t => {
            t.classList.toggle('active', t.dataset.tab === tab);
        });

        if (tab === 'login') {
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
        } else {
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        console.log('🔐 Login:', { email, password });
        alert(`¡Bienvenido de vuelta! 🐾\nEmail: ${email}`);
        closeModal();
    };

    const handleRegister = (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // 👇 Leer el tipo de cuenta seleccionado
    const accountType = document.querySelector('input[name="accountType"]:checked')?.value;
    // 'owner' | 'service'

    console.log('📝 Registro:', { name, email, password, accountType });
    alert(`¡Cuenta creada con éxito! 🎉\nTipo: ${accountType === 'owner' ? 'Dueño' : 'Servicio'}\nBienvenido ${name}`);
    closeModal();
    };

    const handleGoogleLogin = () => {
        console.log('🔵 Login con Google');
        alert('Redirigiendo a Google...');
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        if (!email) {
            alert('Por favor, ingresa tu email primero');
            return;
        }
        alert(`📧 Enlace de recuperación enviado a: ${email}`);
    };

    const init = () => {
        // Botones del navbar que abren el modal
        const loginBtn = document.querySelector('.btn-login');
        const registerBtn = document.querySelector('.btn-primary');

        if (loginBtn) {
            loginBtn.addEventListener('click', (e) => {
                e.preventDefault();
                openModal('login');
            });
        }

        if (registerBtn) {
            registerBtn.addEventListener('click', (e) => {
                e.preventDefault();
                openModal('register');
            });
        }

        // Cerrar modal
        const closeBtn = document.getElementById('authClose');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        // Cerrar al hacer clic fuera del modal
        const modal = document.getElementById('authModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }

        // Cerrar con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Tabs
        const tabs = document.querySelectorAll('.auth-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                switchTab(tab.dataset.tab);
            });
        });

        // Formularios
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', handleLogin);
        }

        const registerForm = document.getElementById('registerForm');
        if (registerForm) {
            registerForm.addEventListener('submit', handleRegister);
        }

        // Google
        const googleBtn = document.querySelector('.btn-google');
        if (googleBtn) {
            googleBtn.addEventListener('click', handleGoogleLogin);
        }

        // Forgot password
        const forgotLink = document.querySelector('.form-link');
        if (forgotLink) {
            forgotLink.addEventListener('click', handleForgotPassword);
        }
    };

    return { init, openModal, closeModal };
})();