//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulIngredients = document.getElementById(`ingredients`);

ingredients.forEach((element)=> {
  
  const li = document.createElement(`li`);
  li.textContent = element;
  ulIngredients.appendChild(li); 

});


// const li = document.createElement('li');
// const ul = document.getElementById('ingredients');

// let liIngredients = [];

//  for (let y=0; y < ingredients.length; y=y+1) {
//   liIngredients.push(`<li>${ingredients[y]}</li>`);
  
// };

// ul.insertAdjacentHTML("afterbegin", liIngredients);
// console.log(liIngredients);

// console.log(ul);
