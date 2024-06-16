const catList = document.getElementById('categories');
const catItems = catList.querySelectorAll('.item');
console.log('Number of categories:', catItems.length);
catItems.forEach(category => {
  const catName = category.querySelector('h2').textContent;
  const catElements = category.querySelectorAll('li');
  console.log('Category:', catName);
  console.log('Elements:', catElements.length);
});
