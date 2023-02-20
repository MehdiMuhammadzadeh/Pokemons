const pokemon = [
  {
    name: "Bulbasaur",
    image:
      "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg",
    type: "grass",
    color: "#e6ffee",
  },
  {
    name: "Ivysaur",
    image:
      "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/2.svg",
    type: "grass",
    color: "#e6ffee",
  },
  {
    name: "Venusaur",
    image:
      "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/3.svg",
    type: "grass",
    color: "#e6ffee",
  },
  {
    name: "Charmander",
    image:
      "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/4.svg",
    type: "fire",
    color: "#ffe6e6",
  },
  {
    name: "Charmeleon",
    image:
      "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/5.svg",
    type: "fire",
    color: "#ffe6e6",
  },
  {
    name: "Charizard",
    image:
      "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/6.svg",
    type: "fire",
    color: "#ffe6e6",
  },
  {
    name: "Charizard",
    image:
      "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/6.svg",
    type: "fire",
    color: "#ffe6cc",
  },
  {
    name: "Charizard",
    image:
      "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/6.svg",
    type: "fire",
    color: "#ffe6cc",
  },
  {
    name: "Charizard",
    image:
      "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/6.svg",
    type: "fire",
    color: "#ffe6cc",
  },
  {
    name: "Charizard",
    image:
      "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/6.svg",
    type: "fire",
    color: "#ffe6cc",
  },
  {
    name: "Charizard",
    image:
      "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/6.svg",
    type: "fire",
    color: "#ffe6cc",
  },
  {
    name: "Charizard",
    image:
      "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/6.svg",
    type: "fire",
    color: "#ffe6cc",
  },
];

let body = document.querySelector("body");

// @Dev create div tag with container class
let container = document.createElement("div");
container.classList.add("container");

pokemon.forEach((item) => {
  // @Dev create div tag with card class
  let card = document.createElement("div");
  card.classList.add("card");

  switch (item.type) {
    case "fire":
      card.style.backgroundColor = "#ffe6cc";
      break
    case "grass":
      card.style.backgroundColor = "#e6ffee";
      break
    default:
      break
  }

  // @Dev create div tag with img class
  let avatar = document.createElement("div");
  avatar.classList.add("avatar");

  // @Dev create div tag with img-box class
  let imgContainer = document.createElement("div");

  //@Dev create img tag with src attr
  let photo = document.createElement("img");
  photo.src = item.image;
  // photo.setAttribute('src', image.image);

  // @Dev create div with text class
  let description = document.createElement("div");
  description.classList.add("description");

  let title = document.createElement("h2");
  title.textContent = item.name;

  let info = document.createElement("p");
  info.textContent = item.type;

  // @Dev description Part appends
  description.appendChild(title);
  description.appendChild(info);
  card.appendChild(description);

  // @Dev image Part appends

  imgContainer.appendChild(photo);
  avatar.appendChild(imgContainer);
  card.appendChild(avatar);
  container.appendChild(card);
  body.appendChild(container);
});



//fire grass 