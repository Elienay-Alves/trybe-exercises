// Todos os exercícios devem ser realizados utilizando reduce , e se necessário outra HOF , a informação será citada no enunciado.

// Dada uma matriz, transforme em um array. 

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (array) => array.reduce((acc, curr) => acc.concat(curr), []);

console.log(flatten(arrays));

