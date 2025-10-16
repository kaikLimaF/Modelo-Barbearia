const menuHamburger = document.querySelector('.menu-hamburger');
const navContainer = document.querySelector('.nav-container');

menuHamburger.addEventListener('click', () => {
    navContainer.classList.toggle('active');
});

const navegar = document.querySelectorAll('.nav-container ul li a');

navegar.forEach(link =>{
link.addEventListener('click', (event)=> {
    event.preventDefault()

    const targeId = link.getAttribute('href')
    const targetSection = document.querySelector(targeId)

    targetSection.scrollIntoView({
        behavior: 'smooth'
    })
})
})