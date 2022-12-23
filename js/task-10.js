function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const createButtonEl = document.querySelector("button[data-create]");
const resetButtonEl = document.querySelector("button[data-destroy]")



const onCreateButtonClick = event => {
  let numberOfCopies = inputEl.value;
  if (numberOfCopies <= 0) {
    alert("Need enter number that is bigger than 0");
    return
  }
  
  createBoxes(numberOfCopies);
}

function createBoxes (number) {
  console.log(number);
 for (let i = 0; i < number; i +=1) {
  console.log(i);
 }
}


createButtonEl.addEventListener("click", onCreateButtonClick);