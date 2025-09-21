// const content = document.querySelector(".content");
const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            impedit labore quod asperiores inventore odio recusandae vero?
            Impedit eius ea optio ipsam? Blanditiis error magnam nobis? Mollitia
            nobis iste vitae autem non natus corporis.`;
//
function createCard(container, headText, parText) {
  const card = document.createElement("div");
  const head = document.createElement("h2");
  const par = document.createElement("p");

  card.classList.add("card");
  head.innerText = headText;
  par.innerText = parText;
  card.appendChild(head);
  card.appendChild(par);
  container.appendChild(card);
}

function createHome(container) {
  createCard(container, "We Value Our Past...", lorem);
  createCard(container, "We Where Passion and Science Meet...", lorem);
  createCard(container, "To Provide the Best...", lorem);
  content.appendChild(container);
}

export { createHome };
