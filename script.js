document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los enlaces de la barra de navegación que apuntan a secciones
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    // Selecciona el botón para desplegar la barra de navegación en móviles
    const navbarToggler = document.querySelector('.navbar-toggler');
    // Selecciona el contenedor colapsable del menú
    const navbarCollapse = document.querySelector('#navbarNav');

    // Itera sobre cada enlace para agregar un evento de clic
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Cierra el menú de navegación si está abierto (solo en móviles)
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
});