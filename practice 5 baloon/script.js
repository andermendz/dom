balloon = document.querySelector("p");
var px = 100;

balloon.setAttribute(
  "style",
  `display:flex;font-size:${px}px; margin:0px; padding:0px;`
);
console.log(px);

window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    px += px * 0.1;
    balloon.setAttribute("style", `font-size:${px}px;`);
    console.log(px);
    e.preventDefault();
  } else if (e.key == "ArrowDown") {
    px -= px * 0.1;
    balloon.setAttribute("style", `font-size:${px}px;`);
    console.log(px);
    e.preventDefault();
  }

  if (px > 1000) {
    balloon.setAttribute("style", "font-size:200px");
    balloon.textContent = "BOOOOMMMMMM!";
  }
});
