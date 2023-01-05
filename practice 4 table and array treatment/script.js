const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

// Your code here

const main = document.querySelector("#main");
const table = document.createElement("table");

table.setAttribute('style', 'border: 1px solid red; border-radius: 20px;')

const head = document.createElement("tr");
table.appendChild(head);

const Name = document.createElement("th");
Name.textContent = "Name";
head.appendChild(Name);

const Height = document.createElement("th");
Height.textContent = "Height";
head.appendChild(Height);

const Place = document.createElement("th");
Place.textContent = "Place";
head.appendChild(Place);

MOUNTAINS.forEach((mountain) => {
  console.log(mountain.name);
  const row = document.createElement("tr");

  const name = document.createElement("td");
  name.textContent = mountain.name;
  row.appendChild(name);

  const height = document.createElement("td");
  height.textContent = mountain.height;
  row.appendChild(height);

  const place = document.createElement("td");
  place.textContent = mountain.place;
  row.appendChild(place);

  table.appendChild(row);
});

main.appendChild(table);
