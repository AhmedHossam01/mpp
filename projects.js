const projects = [
  {
    title: "Multi-Post Stories",
    company: "CANPOY",
    position: "Back End Dev",
    date: "2015",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    languages: ["html", "css", "javascript"],
    imageUrl: "images/project1.png",
  },
  {
    title: "Multi-Post Stories",
    company: "Tonic",
    position: "Back End Dev",
    date: "2015",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    languages: ["html", "css", "javascript"],
    imageUrl: "images/project2.png",
  },
];

let portfolioSection = document.getElementById("portfolio");

projects.map((project) => {
  let HTMLElement = document.createElement("div");
  HTMLElement.innerHTML = generateHTML(project);

  portfolioSection.appendChild(HTMLElement);
});

function generateHTML(details) {
  let template = `
      <div class="works__single">
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
      
        <button class="button">See Project</button>
      </div>
      </div>
      `;

  return template;
}
