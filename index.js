const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digit'); 
const clearBtn = document.querySelector('.clear');
const backspaceBtn = document.querySelector('.backspace');
const dotBtn = document.querySelector('.dot');
const operators = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('.equals');



let displayValue = 0;
let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let divisionByZeroMessage = 'You can\'t divide by 0!';

// Buttons
clearBtn.addEventListener('click', () => {
    clearDisplay();
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
});

backspaceBtn.addEventListener('click', deleteLast);

digits.forEach((digit) => digit.addEventListener('click', (e) => {
    updateDisplay(e.target.textContent);
}));

dotBtn.addEventListener('click', (e) => {
    updateDisplay(e.target.textContent);
});

operators.forEach((oper) => oper.addEventListener('click', () => {
    if (display.textContent !== '') {
        firstNumber = +display.textContent;
        operator = oper.textContent;

        clearDisplay();
    }
}));

equalsBtn.addEventListener('click', evaluate);

// Keyboard support
const digitKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const dotKey = '.';
const backspaceKey = 'Backspace';
const equalsKey = '=';
const operatorKeys = ['+', '-', '*', '/'];

document.addEventListener('keydown', (e) => {
    if (digitKeys.includes(Number.parseInt(e.key))) {
        updateDisplay(e.key);
    } else if (e.key === backspaceKey) {
        deleteLast();
    } else if (e.key === dotKey) {
        updateDisplay(e.key);
    } else if (operatorKeys.includes(e.key)) {
        if (display.textContent !== '') {
            firstNumber = +display.textContent;
            operator = e.key;

            clearDisplay();
        }
    } else if (e.key === equalsKey || e.key == 'Enter') {
        evaluate();
    }

    console.log(e.key);
});

// Display functions
function clearDisplay() {
    displayValue = 0;
    display.textContent = '';
}

function updateDisplay(value) {
    if (display.textContent === divisionByZeroMessage) {
        return;
    }

    let number = Array.from(display.textContent);

    if (number.includes('.') && value === '.') {
        return;
    }

    displayValue = value;
    display.textContent += displayValue;
}

function deleteLast() {
    let arr = Array.from(display.textContent);
    arr.pop();
    display.textContent = arr.join('').toString();
}

function evaluate() {
    if (display.textContent !== '') {
        secondNumber = +display.textContent;
        operate(firstNumber, secondNumber, operator);
    }
}

// Math logic
function operate(firstNumber, secondNumber, operator) {
    let result;

    if (operator === '+') {
        result = add(firstNumber, secondNumber);
    } else if (operator === '-') {
        result = subtract(firstNumber, secondNumber);
    } else if (operator === '*') {
        result = multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        result = divide(firstNumber, secondNumber);
    }

    if (!isNaN(result)) {
        display.textContent = result.toFixed(2);   
    } else {
        display.textContent = result;
    }
}

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return divisionByZeroMessage;
    }
    
    return firstNumber / secondNumber;
}