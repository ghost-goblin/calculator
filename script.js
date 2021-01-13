class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    };
    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined;

    };

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;   //  stops the return of double periods
        this.currentOperand = this.currentOperand.toString() + number.toString();
    };

    chooseOperation(operation) {
        if (this.currentOperand === '') return; // skip if no operand is available
        if (this.previousOperand !== '') {
            this.calculate();
        };
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    };

    calculate() {
        let calculation
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        console.log(prev + this.operation + this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch(this.operation) {
            case '+':
                calculation = prev + current;
                console.log(prev + current);
                break;
            case '-':
                calculation = prev - current;
                console.log(prev - current);
                break;
            case '*':
                calculation = prev * current;
                console.log(prev * current);
                break;
            case '/':
                calculation = prev / current;
                console.log(prev / current);
                break;
            default:
                return;
        };
        this.currentOperand = calculation;
        console.log(calculation);
        this.operation = undefined;
        this.previousOperand = '';
    };

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;
    };
};

// Button Variables
const digitButtons = document.querySelectorAll('[data-digit]');
const operationButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.value);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener('click', button => {
    calculator.calculate();
    calculator.updateDisplay();
});


clearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});