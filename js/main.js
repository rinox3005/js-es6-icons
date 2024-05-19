"use strict";

// array di oggetti di partenza
const icons = [
  {
    name: "cat",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "crow",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dog",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dove",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "horse",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "user-astronaut",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-graduate",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-ninja",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-secret",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
];

// prendo gli elementi che mi servono tramite id
const filteredIcons = document.getElementById("filtered-icons");
const filter = document.getElementById("filter");

// prendo tutti i type diversi delle icone dell'array
const types = icons.map((icons) => icons.type);
const typesOfIcons = new Set(types);

// event listener per gestire la visualizzazione in pagina
filter.addEventListener("change", () => {
  const filterValue = filter.value;
  swapIcons(filterValue);
});

window.addEventListener("load", () => {
  const filterValue = filter.value;
  swapIcons(filterValue);
});

// richiamo la funzione per popolare il select
createFilterTypes();

// popolo dinamicamente le options del select utilizzando i valori di typesOfIcons
function createFilterTypes() {
  const all = document.createElement("option");
  all.setAttribute("value", "all");
  all.innerText = "All";
  filter.appendChild(all);

  typesOfIcons.forEach((element) => {
    const option = document.createElement("option");
    option.setAttribute("value", element);
    option.innerText = element.charAt(0).toUpperCase() + element.slice(1);
    filter.appendChild(option);
  });
}

// funzione che gestisce la creazione degli elementi e la visualizzazione in pagina
function swapIcons(filter) {
  filteredIcons.innerHTML = "";
  icons.forEach((element) => {
    if (filter === "all" || element.type === filter) {
      // creo gli elementi da appendere in html
      const div = document.createElement("div");
      const i = document.createElement("i");
      const h3 = document.createElement("h3");
      div.classList.add("card");
      i.classList.add(`${element.family}`);
      i.classList.add(`${element.prefix}${element.name}`);
      i.style.color = element.color;
      h3.innerText = element.name;
      div.appendChild(i);
      div.appendChild(h3);
      filteredIcons.appendChild(div);
    }
  });
}
