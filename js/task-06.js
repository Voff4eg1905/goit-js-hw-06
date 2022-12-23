const inputEl = document.querySelector("#validation-input");

const onInputElBlur = (event) => {
  event.currentTarget.classList.remove("valid");
  event.currentTarget.classList.remove("invalid");

  /* Якщо не додаю рядки 6 і 7 і потім декілька разів змінюю кількість символів в інпуті без перезавантаження сторінки, 
  воно залишає раніше доданий клас і тоді некоректно працює. Як правильно зробити? */

 
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.getAttribute("data-length"))
  ) {
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.add("invalid");
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