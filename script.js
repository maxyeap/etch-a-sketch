const body = document.querySelector("body");

const resetButtonDiv = document.createElement("div");
resetButtonDiv.classList.add("resetButtonDiv");
body.appendChild(resetButtonDiv);
const resetButton = document.createElement("button");
resetButtonDiv.appendChild(resetButton);
const resetButtonText = document.createTextNode("Reset");
resetButton.appendChild(resetButtonText);
resetButton.style.margin = "50px auto";
resetButton.style.display = "block";
resetButton.style.fontSize = "30px";

const container = document.createElement("div");
container.setAttribute("id", "container");
body.appendChild(container);
container.style.border = "2px solid red";

const createGrid = function () {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  container.appendChild(grid);
};

for (let i = 0; i < 256; i++) {
  createGrid();
}

const randomColor = function () {
  let o = Math.round;
  let r = Math.random;
  let s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
};

const gridColor = function () {
  let elementsArray = document.querySelectorAll(".grid");
  elementsArray.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      elem.className = "coloredGrid";
      if (elem.classList.contains("coloredGrid")) {
        const test = document.querySelector(".coloredGrid");
        test.style.backgroundColor = randomColor();
        elem.classList.remove("coloredGrid");
      }
    });
  });
};

gridColor();

const reset = function (userInput) {
  userInput = prompt("Number of squares per side for the new grid");
  if (userInput > 100) {
    alert("Please input number smaller than 100");
    return;
  } else if (isNaN(userInput)) {
    alert("Please input only number");
    return;
  }
  const remove = document.getElementById("container");
  while (remove.firstChild) {
    remove.removeChild(remove.lastChild);
  }
  let numberOfSquares = userInput * userInput;
  for (let i = 0; i < numberOfSquares; i++) {
    createGrid();
  }
  gridColor();
  const container = document.querySelector("#container");
  container.style.setProperty(
    "grid-template-columns",
    "repeat(" + userInput + ", 1fr)"
  );
};

resetButton.addEventListener("click", reset);

// 1. Event Listener Click
// 2. Prompt Appears
// 3. User Input Number Of Fr
// 4. Change The Fr
