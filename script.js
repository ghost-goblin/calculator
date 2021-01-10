const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const clear = document.querySelector('.ac');
const equals = document.querySelector('.equal-sign');



const clearDisplay = () => {
    display.innerText = '';
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

// Event Listener
buttons.forEach((button => {
    button.addEventListener('click', calculate);
}));

function calculate(e) {
    displayValue = e.target.getAttribute('value');
    display.innerText += displayValue;
    displayedNum = display.textContent;
    console.log(displayedNum);
    // Clear the display ....
    if (displayValue === 'ac') {
        clearDisplay();
    };
};

equals.addEventListener('click', function() {
    equals.value = display.textContent;
    console.log(equals.value);
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
