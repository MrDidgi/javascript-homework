
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input 
// и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, 
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const refs = {
    controlsId: document.querySelector('#controls'),
    inputId: document.querySelector('#controls > input'),
    renderButton: document.querySelector('[data-action="render"]'),
    destroyButton: document.querySelector('[data-action="destroy"]'),
    boxesDiv: document.querySelector('#boxes')
};

let inputValue = 0;

const getNumber = function () {
    console.log(refs.inputId.value);
    inputValue = Number(refs.inputId.value);
    return inputValue;
};



function getRandomNumber() {
    return Math.random() * (255 - 10);
  }



const createBoxes = function () {

    console.log(`creating ${inputValue} boxes`)

    const divCreator = [];
    
   // let sizeAccamulator = 20;
    
    for (let i = 0; i < inputValue; i++ ) {
       // sizeAccamulator = sizeAccamulator + 10;
       const createdDiv = document.createElement('div');
        createdDiv.style.width = `${i+3}0px`;
        createdDiv.style.height = `${i+3}0px`;
        createdDiv.style.backgroundColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
        divCreator.push(createdDiv);
        console.log(divCreator[i]);
    };

    console.log(divCreator);

    for (let b = 0; b < divCreator.length; b++) {
        refs.boxesDiv.append(divCreator[b]);
    };
   
    console.log(refs.boxesDiv);

};

const destroyBoxes = function () {
    console.log(`destroying all boxes`)
    refs.boxesDiv.innerHTML='';
};

refs.inputId.addEventListener('input', getNumber);

refs.renderButton.addEventListener("click", createBoxes);

refs.destroyButton.addEventListener("click", destroyBoxes);





