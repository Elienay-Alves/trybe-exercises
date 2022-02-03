const colecao = [50, 85, -30, 3, 15];

// let maior = 0;

// for (let index = 0; index < colecao.length; index += 1) {
//   if (colecao[index] > maior) {
//     maior = colecao[index];
//   }
// }
const reduce = (acum, curr) => ((acum > curr) ? acum : curr);

const maior = colecao.reduce(reduce, 0);
console.log(maior);

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const even = (number) => number % 2 === 0;
const reduc = (acum, curr) => acum + curr;

const sumOfEvens = (array) => array.filter(even).reduce(reduc);

console.log(sumOfEvens(numbers));
