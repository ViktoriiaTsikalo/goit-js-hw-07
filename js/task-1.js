const allCategories = document.querySelectorAll('ul#categories>li.item');
console.log("Number of categories:" + allCategories.length);
allCategories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const elements = category.querySelectorAll('ul > li');
    console.log("Category: " + title);
    console.log("Elements: " + elements.length);
});
