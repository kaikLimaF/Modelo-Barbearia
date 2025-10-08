const menuHamburger = document.querySelector('.menu-hamburger');
const navContainer = document.querySelector('.nav-container');

menuHamburger.addEventListener('click', () => {
    navContainer.classList.toggle('active');
});