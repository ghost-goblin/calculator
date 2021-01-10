const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const clear = document.querySelector('.ac');
const equals = document.querySelector('.equal-sign');
// const operators = document.querySelectorAll('.operator');

const clearDisplay = () => {
    display.innerText = '';
    equals.value = '';
};


// Operate Functions
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return (a * b);
};

function divide(a, b) {
    return (a / b);
};

// Event Listeners
buttons.forEach((button => {
    button.addEventListener('click', calculate);
    // console.log(button.className);
}));

function calculate(e) {
    if ((e.target.className !== 'operator') && (e.target.getAttribute('value') !== '=')) {
        displayValue = e.target.getAttribute('value');
        display.innerText += displayValue;
    };
    // Clear the Display ...
    if (displayValue === 'ac') {
        clearDisplay();
    };
    return a = parseInt(display.textContent);
};

// Get Operator Value ...
buttons.forEach((button => {
    button.addEventListener('click', function() {
        if (button.className === 'operator') {
            return operator = button.value;
        };
    });
}));

// Get Result ...
equals.addEventListener('click', function () {
    equals.value = display.textContent;
    operate(a, Number(equals.value), operator);
});


// Operate Function
function operate(a, b, operator) {
    switch (operator) {
        case '+':
            result = add(a, b);
            console.log(result);
            break;
        case '-':
            result = subtract(a, b);
            console.log(result);
            break;
        case '*':
            result = multiply(a, b);
            console.log(result);
            break;
        case '/':
            result = divide(a, b);
            console.log(result);
            break;
        default:
            console.log('IDK...');
    };
};