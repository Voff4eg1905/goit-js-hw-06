function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

const onButtonClick = () => {
  let colorForBody = getRandomHexColor();
  spanEl.textContent = colorForBody;
  document.body.style.backgroundColor = colorForBody;
}
buttonEl.addEventListener("click", onButtonClick);