
// let categoriesCount = document.querySelectorAll('li.item').length;
// console.log(`'В списке ${categoriesCount} категории.`);

// let headers = document.querySelectorAll('h2');
// let liElements = document.querySelectorAll('li');
// let items = document.querySelectorAll('ul');
// let count = 0;
// headers.forEach(
    
//     function (element) { 
//         count++
//       console.log(`Категория: ${element.textContent}`);
//       console.log(`Количество элементов: ${items[count].children.length}`);
     
      
//     });

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
//Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента 
//(тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const liElements = [...document.getElementsByClassName(`item`)];
console.log(`В списке ${liElements.length} категории.`);
console.log(liElements);
console.log(Array.isArray(liElements));



liElements.forEach(function(element) { 
  console.log(`Категория: ${element.children[0].textContent}`); 
  console.log(`Количество элементов: ${element.children[1].children.length}`); 
});
