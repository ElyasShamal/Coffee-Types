// request for hot coffee
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://api.sampleapis.com/coffee/hot")
    .then((res) => res.json())
    .then((data) => data.map((element) => createElement(element)));
});

const createElement = (element) => {
  // create a div
  let div = document.createElement("div");
  div.classList.add("data");
  //  create image tag
  let img = document.createElement("img");
  img.classList.add("image");
  img.src = element.image;
  // create h3 for the title
  let h3 = document.createElement("h3");
  h3.textContent = element.title;
  // create span for the ingredients
  let span = document.createElement("span");
  span.textContent = element.ingredients;
  // create p tag for description
  let p = document.createElement("p");
  p.classList.add("paragraph");
  p.textContent = element.description;
  // create a button
  let btn = document.createElement("button");
  btn.classList.add("like-btn");
  btn.textContent = 0 + "❤️";
  // add elements to the dom
  div.append(img, h3, span, p, btn);
  document.getElementById("collection").appendChild(div);
};
// end for hot coffee

// fetch request for iced coffee

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://api.sampleapis.com/coffee/iced")
    .then((respone) => respone.json())
    .then((datas) => datas.forEach((data) => createData(data)));
});

// createData function

const createData = (data) => {
  // create a new div
  let div = document.createElement("div");
  div.classList.add("data");

  let img = document.createElement("img");
  img.classList.add("image");
  img.src = data.image;

  let h3 = document.createElement("h3");
  h3.textContent = data.title;

  let span = document.createElement("span");
  span.textContent = data.ingredients;

  let p = document.createElement("p");
  p.classList.add("paragraph");
  p.textContent = data.description;

  let btn = document.createElement("button");
  btn.classList.add("like-btn");
  btn.textContent = 0 + "❤️";

  div.append(img, h3, span, p, btn);

  document.getElementById("iced-Collection").appendChild(div);
};
