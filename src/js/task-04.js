
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>



const counter = {

    counterId: document.getElementById('counter'),

    counterValue: document.getElementById('value').innerText,

    consoleLog () {
        console.log(this.counterId);
        console.log(this.counterValue);
    },

    increment () {
        console.log('click');
        this.counterValue = parseInt(this.counterValue +1);
        return document.getElementById('value').innerText = this.counterValue;
      },

    decrement () {
        console.log('click');
        this.counterValue = parseInt(this.counterValue -1);
        return document.getElementById('value').innerText = this.counterValue;
    },

};

const decrementButton = counter.counterId.querySelector('[data-action="decrement"]');

const incrementButton = counter.counterId.querySelector('[data-action="increment"]');

decrementButton.addEventListener('click', counter.decrement.bind(counter)); 

incrementButton.addEventListener('click', counter.increment.bind(counter));

counter.consoleLog();