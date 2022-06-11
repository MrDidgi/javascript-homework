
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputId = document.getElementById("name-input");
console.log(inputId);

let spanId = document.getElementById(`name-output`);
console.log(spanId);

let inputContents = '';

const inputTracker = function (key) {
    console.log(key);
   
   //inputContents += key.key ;

    if (key.code === "Enter") {
        console.log(`Enter for ${inputContents}`);

       // spanId.innerHTML(inputContents);
    }
};

inputId.addEventListener('keydown', inputTracker);

