console.log("working");

const container = document.querySelector("#container");
const body = document.querySelector("body");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "It's Working";
container.appendChild(content);

const thered = document.createElement("p");
thered.textContent = "I'm the red";
thered.setAttribute("style", "color: red");
body.appendChild(thered);

const blueh3 = document.createElement("h3");
blueh3.textContent = "I'm the blue h3";
blueh3.setAttribute("style", "color: blue");
body.appendChild(blueh3);

const father = document.createElement("div");
father.setAttribute(
  "style",
  "border: 3px solid black",
  "background-color: pink",
  "border-radius: 30px"
);

const dh1 = document.createElement("h1");
dh1.textContent = "I'm in a div";
father.appendChild(dh1);

const dp = document.createElement("p");
dp.textContent = "Me too";
father.appendChild(dp);

const btn = document.createElement("button");
btn.textContent = "Click Me";
father.appendChild(btn);

var clicked = 0;
btn.addEventListener("click", () => {
  console.log("clicked");
  clicked++;
  counter.textContent = `I've been clicked ${clicked} times`;
});

const counter = document.createElement("div");
counter.textContent = `I've been clicked ${clicked} times`;
father.appendChild(counter);

body.appendChild(father);
