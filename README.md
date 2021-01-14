# 🧮 Calculator Project - [The Odin Project](https://www.theodinproject.com/courses/foundations/lessons/calculator)

## Initial Code
My initial code was more _procedural_ based and while this worked on simple calculator, the functionality of the calculator is limited.

```js
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const clear = document.querySelector('.ac');
const equals = document.querySelector('.equal-sign');

const clearDisplay = () => {
    display.textContent = '';
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
    if ((e.target.className !== 'operator') 
    && (e.target.getAttribute('value') !== '=')
    && (display.textContent.length < 15)) {
        displayValue = e.target.getAttribute('value');
        display.textContent += displayValue;
    };
    // Clear the Display ...
    if (e.target.className === 'ac') {
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
```

## Object Oriented Programming
What we need to do is to create a calculator template and assign it some properties and methods.
You can read up up more on classes [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

```js
class Calculator {
    constructor(previousValue, currentValue) {
        this.previousValue = previousValue;
        this.currentValue = currentValue;
    };
    clear() {

    };
    // some method functions here
};

// get the digit buttons
const digitButtons = document.querySelector('[data-digit]');
// create the new calculator ...
const calculator = new Calculator(previousValue, currentValue);
```