let modalBtns = document.querySelectorAll(".modal-open")

modalBtns.forEach(function(btn) {
  btn.onclick = function() {
    let modal = btn.getAttribute("data-modal");

    document.getElementById(modal).style.display = "block";
  };
});

let closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach(function(btn) {
  btn.onclick = function() {
    let modal = btn.closest(".modal").style.display = 'none';
  }
});

window.onclick = function(e) {
  if (e.target.className === "modal") {
    e.target.style.display = "none";
  }
};

// let modalBtns = document.querySelectorAll("modal-open");
// let closeMod = document.getElementById("modal-close");

// function openModal() {
//   let modal = document.getElementById("modal");
//   modal.style.display = "block";
// }

// function closeModal() {
//   let modal = document.getElementById("modal");
//   modal.style.display = "none";
// }

// modalBtns.addEventListener("click", openModal);
// closeMod.addEventListener("click", closeModal);