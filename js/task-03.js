const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryCard = ({url, alt}) => {
  return `
  <li class = "gallery__item">
    <img src = "${url}" alt = ${alt} class = "gallery__image" >
  </li>
  `
};
// console.log(galleryCard(images[0]));


const gallery = arr => arr.map(card => galleryCard(card)).join("");
console.log(gallery(images));


const galleryEl = document.querySelector(".gallery");
// console.log(galleryEl);
galleryEl.insertAdjacentHTML("afterbegin", gallery(images));


//*Styles

galleryEl.style.display = "flex";
galleryEl.style.gap = "20px"