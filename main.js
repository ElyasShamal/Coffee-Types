document.addEventListener("DOMContentLoaded", () => {
  fetch("https://api.sampleapis.com/coffee/hot")
    .then((res) => res.json())
    .then((data) => data.map((element) => createElement(element)));
});

const createElement = (element) => {
  let div = document.createElement("div");
  div.classList.add("data");

  let img = document.createElement("img");
  img.classList.add("image");
  img.src = element.image;

  let h3 = document.createElement("h3");
  h3.textContent = element.title;

  let p = document.createElement("p");
  p.textContent = element.description;

  div.append(img, h3, p);

  document.getElementById("collection").appendChild(div);
  console.log(div);
};
