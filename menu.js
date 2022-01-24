const buttonMobile = document.getElementById("btn-menu");
const closingButton = document.getElementById("close");

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("navbar__menu--open");
}

buttonMobile.addEventListener("click", toggleMenu);
closingButton.addEventListener("click", toggleMenu);

document.querySelectorAll(".navbar__link").forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("navbar__menu--open");
  });
});
