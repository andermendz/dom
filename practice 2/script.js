const container = document.querySelector("container");
const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
    counter.textContent = `The last bottom pressed was Button ${button.id}`;
  });
});

const counter = document.createElement("counter");
body.appendChild(counter);
