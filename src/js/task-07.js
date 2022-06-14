
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.



const sliderId = document.querySelector('#font-size-control');

const textId = document.getElementById('text');

const changeSize = function () {
   return textId.style.fontSize = `${sliderId.value / 2}px`;
};

sliderId.addEventListener('input', changeSize);