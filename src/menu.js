// const content = document.querySelector(".content");
//
const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            impedit labore quod asperiores inventore odio recusandae vero?
            Impedit eius ea optio ipsam? `;

function createRecipe(container, headText) {
  const recipe = document.createElement("div");
  recipe.classList.add("rcipe");
  const head = document.createElement("h2");
  head.innerText = headText;
  const par = document.createElement("p");
  par.innerText = lorem;
  recipe.appendChild(head);
  recipe.appendChild(par);
  container.appendChild(recipe);
}

function createMenu(container) {
  createRecipe(container, "Kimchi");
  createRecipe(container, "Pasta");
  createRecipe(container, "Soup");
  content.appendChild(container);
}

export { createMenu };
