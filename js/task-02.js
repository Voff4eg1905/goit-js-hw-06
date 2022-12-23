const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createCard = title => {
  const itemEl = document.createElement("li");
  itemEl.textContent = title;
  itemEl.classList.add("item");

  return itemEl;
}




const collection = ingredients => ingredients.map(ingredient => createCard(ingredient));
collection(ingredients)
const listToFill = document.querySelector('#ingredients')

listToFill.append(...collection(ingredients));