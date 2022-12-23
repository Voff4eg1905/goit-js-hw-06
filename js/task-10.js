function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const createButtonEl = document.querySelector("button[data-create]");
const resetButtonEl = document.querySelector("button[data-destroy]")
console.log(resetButtonEl);

