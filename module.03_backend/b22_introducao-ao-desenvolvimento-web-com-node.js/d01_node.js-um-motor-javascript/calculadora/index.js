const { sum, sub, mul, div } = require('./operacoes');
const { questionInt, question } = require('readline-sync');

console.log('Simple Calculator');
const num1 = questionInt('Type a number please: ')
const oper = question('Type the operation: (+, -, *, /)');
const num2 = questionInt('Type a number please: ')

switch (oper) {
  case '+':
    sum(num1, num2)
    break;
  case '-':
    sub(num1, num2)
    break;
  case '*':
    mul(num1, num2)
    break;
  case '/':
    div(num1, num2)
    break;
  default:
    console.log('Sorry! We don\'t have this operation yet :(');
}