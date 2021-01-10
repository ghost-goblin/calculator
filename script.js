const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const clear = document.querySelector('.ac');

let a = null;
let b = null;
let operator = null;



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

// Event Listener
buttons.forEach((button => {
    button.addEventListener('click', getValues);
}));

function getValues(e) {
    currentValue = e.target.getAttribute('value');
    display.innerText += currentValue;
    if (currentValue === 'ac') {
        display.innerText = '';
    };
};

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

// operate(5, 5, '+');