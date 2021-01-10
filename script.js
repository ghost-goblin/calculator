const buttons = document.querySelectorAll('button');

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



buttons.forEach((button => {
    button.addEventListener('click', operate);
}));

function operate(e) {
    operator = e.target.getAttribute('value');
    a = 4;
    b = 5;
    switch (operator) {
        case '+':
            result = add(a, b);
            console.log(result);
            break;
        case '-':
            console.log('minus');
            break;

    };
};