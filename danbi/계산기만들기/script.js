const display = document.getElementById('display');
const buttons = document.querySelectorAll('.but');
const deleteButton = document.getElementsByClassName('delete');

let currentInput = '';
let firstValue = '';
let secondValue = '';
let operator = '';
let resultDisplayed = false;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;

        if (buttonText >= '0' && buttonText <='9') {
            if (resultDisplayed) {
                currentInput = buttonText;
                resultDisplayed = false;
            } else {
                currentInput += buttonText;
            }
            display.value = currentInput;
        }

        else if (buttonText === '+' || buttonText === '-' 
            || buttonText === '&times;' || buttonText === '&divide;'){
            if (firstValue === '') {
                firstValue = currentInput;
            }   operator = buttonText;
                currentInput = '';
        }
            else if (buttonText === '=') {
                secondValue = currentInput;
                if (firstValue !== '' && secondValue !== '' && operator !== ''){
                switch(operator){
                    case '+':
                        currentInput = (parseFloat(firstValue) + parseFloat(secondValue)).toString();
                        break;
                    case '-':
                        currentInput = (parseFloat(firstValue) - parseFloat(secondValue)).toString();
                        break;
                    case '&times;':
                        currentInput = (parseFloat(firstValue) * parseFloat(secondValue)).toString();
                        break;
                    case '&divide;':
                        if (secondValue === '0') {
                        currentInput = 'Error';  // 0으로 나누기 처리
                        } else {
                        currentInput = (parseFloat(firstValue) / parseFloat(secondValue)).toString();
                        }
                        break;
                }
                display.value = currentInput;  
                resultDisplayed = true; 
            }
        }    
        else if (buttonText === '&#8592;') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        }
    });
})