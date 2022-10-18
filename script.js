const mydiv = document.querySelector("#mydiv");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is my content";

mydiv.appendChild(content);

const p1 = document.createElement("p");
p1.textContent = "Hey i'm red";
p1.style.color = "red";
mydiv.appendChild(p1);

const myh3 = document.createElement("h3");
myh3.textContent = "I'm a blue H3";
myh3.setAttribute("style", "color: blue");

mydiv.appendChild(myh3);

const newD = document.createElement("div");
newD.textContent = "testing";
newD.setAttribute("style", "border: 1px solid black; background-color:pink");

const myh1 = document.createElement("h1");
myh1.textContent = "im a div";
newD.appendChild(myh1);

const p2 = document.createElement("p");
p2.textContent = "ME TOO";
newD.appendChild(p2);

mydiv.appendChild(newD);

const m2 = document.querySelector("#m2");
m2.onclick = () => alert("metodo 2 pto");

const m3 = document.querySelector("#m3");

m3.addEventListener("click", () => {
  alert("metodo 3 pto");
});

const mf = document.querySelector("#mf");
mf.addEventListener("click", extraMethod);

function extraMethod() {
  alert("You clicked a button");
}

mf.addEventListener("click", function (e) {
  console.log(e);
});

mf.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
