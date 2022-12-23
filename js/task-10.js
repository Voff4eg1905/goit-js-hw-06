function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const createButtonEl = document.querySelector("button[data-create]");
const resetButtonEl = document.querySelector("button[data-destroy]");
const divToFillEl = document.querySelector("#boxes");



const onCreateButtonClick = event => {
  let numberOfCopies = inputEl.value;
  if (numberOfCopies <= 0) {
    alert("Need enter number that is bigger than 0");
    return
  }
  
  createBoxes(numberOfCopies);
}

const onResetButtonClick = event => {
  divToFillEl.innerHTML = "";
  inputEl.value = 0;
}


function createBoxes (number) {
  console.log(number);
  const divsArr = [];
  let width = 30;
  let height = 30;
 for (let i = 0; i < number; i +=1) {
  const newDiv = document.createElement("div");
  newDiv.style.width = `${width}px`;
  newDiv.style.height = `${height}px`;
  newDiv.style.backgroundColor = getRandomHexColor();
  divsArr.push(newDiv);
  height += 10;
  width +=10;
 }

 console.log(divsArr[1].style.backgroundColor);
 divToFillEl.prepend(...divsArr);
}



createButtonEl.addEventListener("click", onCreateButtonClick);
resetButtonEl.addEventListener("click", onResetButtonClick)