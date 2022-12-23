function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const createButtonEl = document.querySelector("button[data-create]");
const resetButtonEl = document.querySelector("button[data-destroy]")



const onCreateButtonClick = event => {
  let numberOfCopies = inputEl.value;
  createBoxes(numberOfCopies);
}

function createBoxes (number) {
  console.log(number);
}


createButtonEl.addEventListener("click", onCreateButtonClick);