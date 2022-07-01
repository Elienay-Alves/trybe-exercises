const calculaSituacao = require('./calculaSituação');

console.log('Quando a média for menor que 7, retorna "reprovação": ');

const resposta1 = calculaSituacao(4);
if (resposta1 === 'Reprovação') {
  console.log('Ok');
} else {
  console.error(`Resposta não esperada: ${resposta1}`);
}

console.log('Quando a media for maior que 7, retorna "Aprovação');

const resposta2 = calculaSituacao(9);
if (resposta2 === 'Aprovação') {
  console.log('Ok');
} else {
  console.error(`Resposta não esperada: ${resposta2}`);
}

console.log('Quando a media for igual a 7, retorna "Aprovação');

const resposta3 = calculaSituacao(7);
if (resposta3 === 'Aprovação') {
  console.log('Ok');
} else {
  console.error(`Resposta não esperada: ${resposta3}`);
}