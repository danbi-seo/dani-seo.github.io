let firstOperand = '';
let operator = '';
let secondOperand = '';
const $operator = document.querySelectorAll('.operator');
const $result = document.querySelector('#display');
$result.value = '0';



const onClickNum = (event) => {
    const clickedNum = event.target.textContent;

    if (operator) {
        if(secondOperand === '' || secondOperand === '0') {
            secondOperand = clickedNum;
        } else {
            secondOperand += clickedNum;
        }
        $result.value = secondOperand;
    } else {
        if (firstOperand === '0'){
            firstOperand = clickedNum;
        } else {
            firstOperand += clickedNum;
        }
        $result.value = firstOperand;
    }
};


// //숫자 클릭 이벤트
// const onClickNum = (event) => {
//     if (operator) {
//         secondOperand += event.target.textContent; // 이벤트 실행된 타겟의 텍스트를 가져오기
//         $result.value = secondOperand;
//     }   else {
//         if (firstOperand === '0'){
//             firstOperand = event.target.textContent; 
//         } else {
//             firstOperand += event.target.textContent;
//         }
//     }
//     $result.value = firstOperand + operator + secondOperand;
// };


//배열로 순회하여 num 버튼 호출
const numButtons = document.querySelectorAll('.number');
numButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        console.log(event.target.textContent);
        onClickNum(event);
    })
})

//소수점 버튼 클릭시 
const onClickDecimal  = () => {
    if (operator) {
        if(!secondOperand.includes('.')) {
            secondOperand += '.';
            $result.value = firstOperand + operator + secondOperand;
        }
    } else {
        if (!firstOperand.includes('.')) {
            firstOperand += '.';
            $result.value = firstOperand + operator + secondOperand;
        }
    }
};

document.querySelector('#decimal').addEventListener('click', onClickDecimal);


//연산자 클릭 이벤트 설정
const onClickOperator = (op) => () => {
    if (firstOperand) {
        if (secondOperand) {
            calculate();
        }
        operator = op;
        $result.value = firstOperand + operator;
        console.log(operator);
        }
    };

document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('÷'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('×'));


// 초기화 이벤트 설정
document.querySelector('#clear').addEventListener('click', () => {
    firstOperand = '0';
    secondOperand = '';
    operator = '';
    $result.value = '0';
});

// Delete 이벤트 설정
document.querySelector('#delete').addEventListener('click', () => {
    if (secondOperand) {
        secondOperand = secondOperand.slice(0, -1);
    }   else if (operator) {
        operator = '';
    }   else {
        firstOperand = firstOperand.slice(0,-1);
        if (firstOperand === '') {
            firstOperand === '0';
        }
    }
    $result.value = firstOperand + operator + secondOperand;
});    



// = 연산자 이벤트 설정
document.querySelector('#calculate').addEventListener('click', () => {
    if (firstOperand !== '' && operator === '' && secondOperand === '') {
        $result.value = firstOperand;
        return;
    }
    
    if (secondOperand === '') {
        alert('숫자를 먼저 입력하세요.');
    }
    calculate();
});

function calculate() {
    let result;
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    if (isNaN(num1) || isNaN(num2)){
        alert('유효하지 않은 값입니다');
        firstOperand = '';
        secondOperand = '';
        operator = '';
        $result.value = '0';
        return;
    }

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '×':
            result = num1 * num2;
            break;
        case '÷':
            if (secondOperand === 0) {
                alert('0으로 나눌 수 없습니다.')
                firstOperand = '0';
                secondOperand = '';
                operator = '';
                $result.value = '0';
                return;
            } else {
                result = num1 / num2;
            }    
            break;
    }
    firstOperand = result.toString();
    secondOperand = '';
    operator = '';
    $result.value = firstOperand;
    console.log(result);
};


// plus-minus 연산자 클릭 이벤트 설정
document.querySelector('#plus-minus').addEventListener('click', () => {
    if (secondOperand !== '') {
        secondOperand = (parseFloat(secondOperand) * -1).toString();
        $result.value = firstOperand + operator + secondOperand;
    } else if (firstOperand !== '') {
        firstOperand = (parseFloat(firstOperand) * -1).toString();
        if (firstOperand === '-0'){
            firstOperand = '0';
        }
        $result.value = firstOperand;
    }  
});
