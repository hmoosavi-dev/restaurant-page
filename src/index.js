import "./style.css";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

const nav = document.querySelector(".nav");
const container = document.createElement("div");
container.classList.add("container");
const content = document.querySelector(".content");

function tabSwitch(e) {
  container.replaceChildren();
  if (e.target.id === "home") {
    createHome(container);
  } else if (e.target.id === "menu") {
    createMenu(container);
  } else if (e.target.id === "contact") {
    createContact(container);
  }
}

nav.addEventListener("click", tabSwitch);
