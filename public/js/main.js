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
fetcData();

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

    const createDiv = document.createElement("div");
    createDiv.classList.add("home-content__main-content--lists");
    createS.appendChild(createDiv);
    createDiv.appendChild(createUl);
    containerSection.appendChild(createS);
  });
})();
