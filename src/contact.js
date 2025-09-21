function createContact(container) {
  const contact = document.createElement("div");
  const number = document.createElement("h3");
  number.innerText = "09248492742";
  const email = document.createElement("h3");
  email.innerText = "Kimchi-palace@gmail.com";
  const address = document.createElement("h3");
  address.innerText = "43 2nd St. NewYork";
  contact.appendChild(number);
  contact.appendChild(email);
  contact.appendChild(address);
  container.appendChild(contact);
  content.appendChild(container);
}

export { createContact };
