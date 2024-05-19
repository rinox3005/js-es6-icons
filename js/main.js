'use strict';

const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue',
    },
];

console.log(icons);

const filteredIcons = document.getElementById("filtered-icons");
const filter = document.getElementById("filter");




function swapIcons(filter) {

    icons.forEach((element) => {

        const div = document.createElement("div");
        const i = document.createElement("i");
        const h3 = document.createElement("h3");

        switch (filter) {

            case "all":
                div.classList.add("card");
                i.classList.add(`${element.family}`);
                i.classList.add(`${element.prefix}${element.name}`);
                i.style.color = element.color;
                h3.innerText = element.name;
                div.appendChild(i);
                div.appendChild(h3);
                filteredIcons.appendChild(div);

            case "animal":
                if (element.type === filter) {
                    div.classList.add("card");
                    i.classList.add(`${element.family}`);
                    i.classList.add(`${element.prefix}${element.name}`);
                    i.style.color = element.color;
                    h3.innerText = element.name;
                    div.appendChild(i);
                    div.appendChild(h3);
                    filteredIcons.appendChild(div);
                }

            case "vegetable":
                if (element.type === filter) {
                    div.classList.add("card");
                    i.classList.add(`${element.family}`);
                    i.classList.add(`${element.prefix}${element.name}`);
                    i.style.color = element.color;
                    h3.innerText = element.name;
                    div.appendChild(i);
                    div.appendChild(h3);
                    filteredIcons.appendChild(div);
                }

            case "user":
                if (element.type === filter) {
                    div.classList.add("card");
                    i.classList.add(`${element.family}`);
                    i.classList.add(`${element.prefix}${element.name}`);
                    i.style.color = element.color;
                    h3.innerText = element.name;
                    div.appendChild(i);
                    div.appendChild(h3);
                    filteredIcons.appendChild(div);
                }
        }
    });
}

filter.addEventListener("change", () => {
    const filterValue = filter.value;
    swapIcons(filterValue);
});

window.addEventListener("load", () => {
    const filterValue = filter.value;
    swapIcons(filterValue);
});

