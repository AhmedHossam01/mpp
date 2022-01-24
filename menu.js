const buttonMobile = document.getElementById("btn-menu");
const closingButton = document.getElementById("close");
const navbarLink = document.querySelector(".navbar__link");

function toggleMenu() {
  console.log("clicked link");
  const nav = document.getElementById("nav");
  nav.classList.toggle("navbar__menu--open");
}

buttonMobile.addEventListener("click", toggleMenu);
closingButton.addEventListener("click", toggleMenu);

document.querySelectorAll(".navbar__link").forEach((item) => {
  item.addEventListener("click", toggleMenu);
});
