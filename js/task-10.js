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
  const divsArr = [];
  let width = 30;
  let height = 30;
 for (let i = 0; i < number; i +=1) {
  const newDiv = document.createElement("div");
  newDiv.style.width = `${width}px`;
  newDiv.style.height = `${height}px`
  divsArr.push(newDiv);
  height += 10;
  width +=10;
 }

 console.log(divsArr[1].style.height);
}


createButtonEl.addEventListener("click", onCreateButtonClick);