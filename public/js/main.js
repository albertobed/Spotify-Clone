"use strict";
const containerSection = document.querySelector(".home-content__main");
async function fetcData() {
  try {
    const response = await fetch("json/data.json");
    const r = await response.json();
    const data = r.sections;
    return data;
  } catch {}
}

(async function () {
  const data = await fetcData();

  data.forEach(function (e, i) {
    const mlCards = data[i].ml_cards;
    const createS = document.createElement("section");
    createS.classList.add("home-content__main-content");
    createS.id = data[i].id;

    const sectionTitle = `
    <h2 class="home-content__main-content--title">
        <a href="#"> ${data[i].title} </a>
    </h2>
      `;
    createS.insertAdjacentHTML("beforeend", sectionTitle);

    const createUl = document.createElement("ul");
    createUl.classList.add("home-content__main-content--lists__items");

    const CreateMlCards = function () {
      let counter = 0;
      mlCards.forEach(() => {
        const sectionCard = `
            <li class="ml-card">
               <div class="ml-card--img">
                  <img
                     src=${data[i].ml_cards[counter].img}
                     alt="#" />
               </div>
               <div class="ml-card--txt">
                  <h5>${data[i].ml_cards[counter].name}</h5>
                  <span>${data[i].ml_cards[counter].des}</span>
               </div>
            </li>
          `;

        createUl.insertAdjacentHTML("beforeend", sectionCard);
        counter++;
      });
    };
    CreateMlCards();

    const createDiv = document.createElement("div");
    createDiv.classList.add("home-content__main-content--lists");
    createS.appendChild(createDiv);
    createDiv.appendChild(createUl);
    // containerSection.appendChild(createS);
    containerSection.insertAdjacentElement("afterbegin", createS);
  });
})();
///////////////////////////////////
const containerCardSearch = document.querySelector(".search-content__body");
async function fetcData2() {
  try {
    const response = await fetch("json/data-search.json");
    const r = await response.json();
    const data = r.cards;
    return data;
  } catch {}
}
(async function () {
  const data = await fetcData2();

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1 + min));
  const randomColor = () =>
    `rgb(${randomNumber(0, 255)},${randomNumber(0, 255)},${randomNumber(
      0,
      255
    )})`;

  data.forEach(function (d, i) {
    const catCard = document.createElement("div");
    catCard.classList.add("search-content__body--card");
    catCard.style.backgroundColor = randomColor();

    const catSpan = document.createElement("span");
    catSpan.classList.add("search-content__body--card__title");
    catSpan.textContent = data[i].title;
    catCard.appendChild(catSpan);

    const catDiv = document.createElement("div");
    catDiv.classList.add("search-content__body--card__img");

    const catImg = document.createElement("img");
    catImg.src = data[i].img;

    catDiv.appendChild(catImg);

    catCard.appendChild(catDiv);
    containerCardSearch.insertAdjacentElement("afterbegin", catCard);
    console.log(catCard);
  });
})();
///////////////////////////////////
const resizer = document.querySelector(
  ".main-content__wrapper__container__resizer"
);
const sidebar = document.querySelector(
  ".main-content__wrapper__container__menubar"
);

resizer.addEventListener("mousedown", (event) => {
  document.addEventListener("mousemove", resize, false);
  document.addEventListener(
    "mouseup",
    () => {
      document.removeEventListener("mousemove", resize, false);
    },
    false
  );
});

function resize(e) {
  const size = `${e.x}px`;
  sidebar.style.flexBasis = size;
}

sidebar.style.flexBasis = "325px";
const mainContent = document.querySelector(
  ".main-content__wrapper__container__contentbar"
);

/////////////////////////////////////////////
const homeBtn = document.querySelector(".btnhome");
const searchBtn = document.querySelector(".btnsearch");
const containerHome = document.querySelector(".home-content");
const containerSearch = document.querySelector(".search-content");

homeBtn.addEventListener("click", function () {
  containerHome.classList.remove("hidden");
  containerSearch.classList.add("hidden");
  searchBtn.classList.remove("active");
  homeBtn.classList.add("active");

  console.log(containerSection);
});

searchBtn.addEventListener("click", function () {
  containerHome.classList.add("hidden");
  containerSearch.classList.remove("hidden");
  homeBtn.classList.remove("active");
  searchBtn.classList.add("active");
});

///////////////////////////////////////////
