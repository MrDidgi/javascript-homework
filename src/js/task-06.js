
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputId = document.querySelector(`#validation-input`);
 console.log(inputId.dataset.length);

const inputChecker = function (event) {
       
    //  ~~ double tild is used to convert a String to Number

    if (~~event.currentTarget.value.length < ~~inputId.dataset.length) {
        inputId.classList.add('invalid');  
        console.log(`red class`)
    }
    else if (~~event.currentTarget.value.length === ~~inputId.dataset.length) {
        inputId.classList.replace('invalid', 'valid');
        console.log(`green class`)
    } else {
        inputId.classList.replace('valid', 'invalid');
        console.log(`red class`)
    }
};

inputId.addEventListener('input', inputChecker);



