const form = document.querySelector(".contact-form");
const email = document.querySelector("#_replyto");
const errorMessage = document.querySelector(".error-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit form");
  console.log(email.value.toLowerCase());

  if (email.value !== email.value.toLowerCase()) {
    errorMessage.classList.replace("d-none", "d-block");
  } else {
    errorMessage.classList.replace("d-block", "d-none");
    form.submit();
  }
});
