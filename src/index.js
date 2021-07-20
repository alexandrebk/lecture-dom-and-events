console.log("Hello from src/index.js!");

const list = document.querySelector("#players"); // CSS id selector

console.log(list);
list.insertAdjacentHTML("beforeend", "<li>Luke</li>");
list.insertAdjacentHTML("beforeend", "<li>Anakin</li>");
console.log(list.innerText);
console.log(list.innerHTML);
console.log(list.lastElementChild.innerText);

const active = document.querySelector('ul#players > .active a.btn');
console.log(active.innerText);
const countries = document.querySelectorAll('#fifa-wins li');
console.log(countries)
countries.forEach((item) => {
  item.innerText = "France (2 wins)";
});

const fifaWinnners = document.querySelector('#fifa-wins')
fifaWinnners.insertAdjacentHTML("beforeend", "<li>France (2 wins)</li>");
fifaWinnners.classList.add("red");
fifaWinnners.style.display = "none";


// Select one country only
const country = document.querySelector("#fifa-wins li");
console.log(country.innerText)

const emailInput = document.getElementById("email");

// Read
console.log(emailInput.value);

emailInput.value = "john@gmail.com";

const home = document.getElementById("home");
console.log(home.innerText);
console.log(home.innerHTML);
home.attributes.href.value = "https://www.lewagon.com/mauritius";


const boris = document.getElementById('user');
console.log(boris.dataset.uid);
console.log(boris.dataset.githubNickname);

const romain = document.getElementById("romain");

romain.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.currentTarget);
});

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("img-circle");
  });
});
