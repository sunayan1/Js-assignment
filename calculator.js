const prompt = require('prompt-sync')();

const a = parseFloat(prompt("Enter the first number: "));
const b = parseFloat(prompt("Enter the second number: "));
const operator = prompt("Enter an operator (+, -, *, /): ");

function calculator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return "Invalid operator";
    }
}

console.log('The result is: ' + calculator(a, b, operator));
