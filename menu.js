const buttonMobile = document.getElementById('btn-menu')
const closingButton = document.getElementById('close')

function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('navbar__menu--open');
}

buttonMobile.addEventListener('click', toggleMenu)
closingButton.addEventListener('click', toggleMenu)
