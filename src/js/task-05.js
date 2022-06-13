
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputId = document.getElementById("name-input");
console.log(inputId);

let spanId = document.querySelector(`#name-output`);
console.log(spanId);

let inputContents = '';

const inputTracker = function (event) {
    console.log(event);
    console.log(event.currentTarget.value);
   
  return inputContents = event.currentTarget.value;

    //----- A commented version where text would be placed in a span immediateatle after input change =====

    //     if (event.value === "Enter") {
    //         console.log(`Enter for ${inputContents}`);
    //        // spanId.innerHTML(inputContents);
    //     }
    //    return spanId.textContent = inputContents;
};

    // ---- Event listener for Enter to place the text in a span only after Enter button was clicked ----
const inputEnterTracker = function (event) {
    if (event.key === "Enter") {
                console.log(`Enter for ${inputContents}`);
                return spanId.textContent = inputContents;
             }
};

inputId.addEventListener('input', inputTracker);

inputId.addEventListener('keydown', inputEnterTracker);

