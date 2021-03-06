const projects = [
  {
    title: "Tonic",
    company: "CANPOY",
    position: "Back End Dev",
    date: "2015",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    languages: ["html", "css", "javascript"],
    imageUrl: "images/project1.png",
    id: "1",
  },
  {
    title: "Multi-Post Stories",
    company: "Tonic",
    position: "Back End Dev",
    date: "2015",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    languages: ["html", "css", "javascript"],
    imageUrl: "images/project2.png",
    id: "2",
  },
  {
    title: "Tonic",
    company: "Tonic",
    position: "Back End Dev",
    date: "2015",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    languages: ["html", "css", "javascript"],
    imageUrl: "images/project3.png",
    id: "3",
  },
  {
    title: "Multi-Post Stories",
    company: "Tonic",
    position: "Back End Dev",
    date: "2015",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    languages: ["html", "css", "javascript"],
    imageUrl: "images/project4.png",
    id: "4",
  },
];

let portfolioSection = document.getElementById("portfolio");

function generateHTML(details) {
  let template = `
        <div class="works__single__img_container">
          <img class="works__single__img" src="${details.imageUrl}" alt="${details.title}" />
        </div>
      
        <div class="works__single__holder">
          <h2 class="works__single__title">${details.title}</h2>
        
          <div class="works__single__details">
            <p class="works__single__details__single works__single__details__single--dark">
              ${details.company}
            </p>
            <div class="dot"></div>
            <p class="works__single__details__single works__single__details__single--light">
              ${details.position}
            </p>
            <div class="dot"></div>
            <p class="works__single__details__single works__single__details__single--light">
              ${details.date}
            </p>
          </div>
        
          <p>
          ${details.desc}
          </p>
        
          <div class="works__single__tags">
          </div>
          <button id="${details.id}" class="button modal-open" data-modal="modal-${details.id}">See Project</button>


          <div class="modal" id="modal-${details.id}">
            <div class="modal-content">
              <div class="">
                <button id="modal-close" class=""><img class="modal-close" src="images/closing_btn.svg" alt="Closing Button" id="close"></button>
              </div>
              <div class="works__single__holder">
                <h2 class="works__single__title">${details.title}</h2>
          
                <div class="works__single__details">
                <p class="works__single__details__single works__single__details__single--dark">
                ${details.company}
                </p>
                <div class="dot"></div>
                <p class="works__single__details__single works__single__details__single--light">
                ${details.position}
                </p>
                <div class="dot"></div>
                <p class="works__single__details__single works__single__details__single--light">
                ${details.date}
                </p>
              </div>
              <div class="works__single__img_container">
                <img class="works__single__img" src="${details.imageUrl}" alt="${details.title}" />
              </div>
              <div>
                <p>${details.body}</p>
              </div>
              <div class="works__single__tags hr">
                <div class="works__single__tags">
                <div class="works__single__tags__single">${details.languages[0]}</div>
                <div class="works__single__tags__single">${details.languages[1]}</div>
                <div class="works__single__tags__single">${details.languages[2]}</div>
              </div>
              </div>
              <div class="modal-links">
                <a href="./index.html"><button class="button">See Live <img src="./images/see-live.svg" alt="See Live"></button></a>
                <a href="./index.html"><button class="button">See Source <img src="./images/see-source.svg" alt="See Live"></button></a>
              </div>
            </div>
          </div>
        </div>
      `;

  return template;
}

projects.forEach((project) => {
  let HTMLElement = document.createElement("div");
  HTMLElement.classList.add("works__single");
  HTMLElement.innerHTML = generateHTML(project);

  portfolioSection.appendChild(HTMLElement);
});
