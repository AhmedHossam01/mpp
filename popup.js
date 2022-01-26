let modalBtns = document.querySelectorAll(".modal-open");

modalBtns.forEach(function (btn) {
  btn.onclick = function click() {
    let modal = btn.getAttribute("data-modal");

    document.getElementById(modal).style.display = "block";
  };
});

let closeBtns = document.querySelectorAll(".modal-close");

closeBtns.forEach(function (btn) {
  btn.onclick = function click() {
    let modal = btn.closest(".modal");
    modal.style.display = "none";
  };
});

window.onclick = function click(e) {
  if (e.target.className === "modal") {
    e.target.style.display = "none";
  }
};
