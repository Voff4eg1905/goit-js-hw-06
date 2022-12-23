const inputEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

const onInputChange = event => {
    spanTextEl.style.fontSize = `${event.currentTarget.value}px`;

}
inputEl.addEventListener("change", onInputChange);