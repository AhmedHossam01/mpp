const closingButton = document.getElementById("close-popup");

function generatePopup(details) {
  let template = `
      <div class="popup">
      
      </div>
      `;
  return template;

    
    
    closingButton.addEventListener("click", generatePopup);

}