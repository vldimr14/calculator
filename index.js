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

    return result;
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
    return firstNumber / secondNumber;
}
