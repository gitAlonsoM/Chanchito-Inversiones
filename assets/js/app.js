/* assets/js/app.js */

// Función para cargar componentes reutilizables
function loadComponents() {
    // Obtener el nombre del archivo actual
    const path = window.location.pathname;
    const page = path.split("/").pop();

    // Cargar Navbar (excepto en index.html y login.html)
    if (page !== 'index.html' && page !== 'login.html' && page !== 'register.html') {
        fetch('../components/navbar.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navbar').innerHTML = data;
                updateNavbar(); // Actualizar el navbar según el estado de sesión
            });
    }

    // Cargar Header si lo deseas
    fetch('../components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    // Cargar Footer
    fetch('../components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}

// Función para actualizar el navbar según el estado de sesión
function updateNavbar() {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn) {
        // Mostrar "Bienvenido, Juan" y "Cerrar sesión"
        const nav = document.querySelector('.navbar .navbar-nav');
        const userMenu = document.createElement('li');
        userMenu.classList.add('nav-item', 'dropdown');
        userMenu.innerHTML = `
            <a class="nav-link dropdown-toggle" href="#" id="userMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Bienvenido, Juan
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
                <li><a class="dropdown-item" href="profile.html">Perfil</a></li>
                <li><a class="dropdown-item" href="notifications.html">Notificaciónes</a></li>
                <li><a class="dropdown-item" href="settings.html">Configuración</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" id="logout">Cerrar sesión</a></li>
            </ul>
        `;
        nav.appendChild(userMenu);

        // Agregar evento al botón "Cerrar sesión"
        document.getElementById('logout').addEventListener('click', function(e) {
            e.preventDefault();
            logout();
        });
    }
}

// Función para simular el inicio de sesión
function login() {
    localStorage.setItem('loggedIn', 'true');
    // Redirigir al dashboard
    window.location.href = 'dashboard.html';
}

// Función para simular el cierre de sesión
function logout() {
    localStorage.removeItem('loggedIn');
    // Redirigir a la página de presentación
    window.location.href = '../index.html'; 
}


// Ejecutar al cargar el DOM
document.addEventListener('DOMContentLoaded', loadComponents);
