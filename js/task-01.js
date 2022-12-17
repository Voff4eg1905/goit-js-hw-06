
console.log(`Number of categories: ${document.querySelectorAll(".item").length}`);


const itemsArr = [...document.querySelectorAll(".item")];

const finalResults = itemsArr => {
    itemsArr.map( item => {
        console.log(`Category: ${item.firstElementChild.textContent}`);
        console.log(`Elements: ${item.querySelectorAll("li").length}`);
        // console.log(`Elements: ${item.lastElementChild.children.length}`);    //*alternative option
    })
}

finalResults(itemsArr);




