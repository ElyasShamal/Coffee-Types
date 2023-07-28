// request when the website opend
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
  btn.textContent = 0 + "❤️";
  // add elements to the dom
  div.append(img, h3, span, p, btn);
  document.getElementById("collection").appendChild(div);
};

fetch("https://api.sampleapis.com/coffee/iced")
  .then((res) => res.json())
  .then((datas) => console.log(datas));
