document.addEventListener('DOMContentLoaded', function () {

    // --- Lógica para o menu hambúrguer ---
    const menuHamburger = document.querySelector('.menu-hamburger');
    const navContainer = document.querySelector('.nav-container');

    menuHamburger.addEventListener('click', () => {
        navContainer.classList.toggle('active');
    });

    // --- Lógica para animação de revelação ao rolar ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para a animação acontecer apenas uma vez
            }
        });
    }, {
        threshold: 0.1 // O elemento é considerado visível quando 10% dele está na tela
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});