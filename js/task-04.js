let counterValue = 0;
let counterEl = document.querySelector("span");
counterEl.textContent = counterValue;
let decreaseButtonEl = document.querySelector('button[data-action="decrement"]')
let increaseButtonEl = document.querySelector('button[data-action="increment"]')
// console.log(increaseButton);

decreaseButtonEl.addEventListener("click", () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
})


increaseButtonEl.addEventListener("click", () => {
    counterValue +=1;
    counterEl.textContent = counterValue;;
})