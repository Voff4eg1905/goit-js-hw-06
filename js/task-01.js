let categoriesArr = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesArr.length}`);

categoriesArr.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.querySelectorAll("li").length}`);
});





//! Old version
// const itemsArr = [...categoriesArr];

// const finalResults = itemsArr => {
//     itemsArr.map( item => {
//         console.log(`Category: ${item.firstElementChild.textContent}`);
//         console.log(`Elements: ${item.querySelectorAll("li").length}`);
//         // console.log(`Elements: ${item.lastElementChild.children.length}`);    //*alternative option
//     })
// }

// finalResults(itemsArr);

