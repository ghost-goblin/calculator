const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const clear = document.querySelector('.ac');
const equals = document.querySelector('.equal-sign');

const clearDisplay = () => {
    display.textContent = '';
    equals.value = '';
};


// Operate Functions
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return (a - b);
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
}));

function calculate(e) {
    if ((e.target.className !== 'operator') && (e.target.getAttribute('value') !== '=')) {
        displayValue = e.target.getAttribute('value');
        display.textContent += displayValue;     
    };
    // Clear the Display ...
    if (displayValue === 'ac') {
        clearDisplay();
    };
};

// Get Operator & Operands Value/s ...
buttons.forEach((button => {
    button.addEventListener('click', function() {
        if (button.className === 'operator') {
            a = Number(display.textContent);
            display.textContent = '';
            operator = button.value;
        };
    });
}));


// Get Result ...
equals.addEventListener('click', function () {
    b = Number(display.textContent);
    console.log('*********************************************************************');
    console.log(a);
    console.log(b);
    console.log(operator);
    console.log('*********************************************************************');
    operate(a, b, operator);
});


// Operate Function
function operate(a, b, operator) {
    switch (operator) {
        case '+':
            result = add(a, b);
            display.innerText = result;
            break;
        case '-':
            result = subtract(a, b);
            display.innerText = result;
            break;
        case '*':
            result = multiply(a, b);
            display.innerText = result;
            break;
        case '/':
            result = divide(a, b);
            display.innerText = result;
            break;
        default:
            console.log('IDK...');
    };
    console.log(result);
};