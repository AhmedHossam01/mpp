const buttonMobile = document.getElementById('btn-menu')

function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('navbar__menu--open');
}

buttonMobile.addEventListener('click', toggleMenu)
