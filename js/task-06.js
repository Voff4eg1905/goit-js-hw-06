const inputEl = document.querySelector("#validation-input");

const onInputElBlur = (event) => {

  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.getAttribute("data-length"))
  ) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");

  }
  
};

inputEl.addEventListener("blur", onInputElBlur);



//? Another option

// event.currentTarget.classList.add("invalid");
// if (
//   event.currentTarget.value.length ===
//   Number(event.currentTarget.getAttribute("data-length"))
// ) {
//   event.currentTarget.classList.replace("invalid", "valid");
// }