const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
console.log(inputEl.textContent);

inputEl.addEventListener("input", (event) => {
    if (event.currentTarget.value !== "")
    spanEl.textContent = event.currentTarget.value;
} )