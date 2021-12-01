// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados.

// const a = 21;
// const b = 23;

// console.log('Adição: ' + (a + b));
// console.log('Subtração: ' + (a - b));
// console.log('Multiplicação: ' + (a * b));
// console.log('Divisão: ' + (a / b));
// console.log('Módulo: ' + (a % b));

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
// const a = 21;
// const b = 23;

// if (a > b) {
//   console.log('O maior dos números é ' + a);
// } else if (b > a) {
//   console.log ('O ganhador é ' + b);
// }

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
// const a = 21;
// const b = 23;
// const c = 167;

// if (a > b && a > c) {
//   console.log('O campeão é o A com o total de: ' + a);
// } else if (b > a && b > c) {
//   console.log('O campeão é o B com o total de: ' + b);
// } else if (c > a && c > b) {
//   console.log('O campeão é o C com o total de: ' + c);
// }

// 4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const valor = 4;

// if (valor > 0) {
//   console.log('positive');
// } else if (valor < 0) {
//   console.log('negative');
// } else {
//   console.log('zero')
// }

// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
const anguloA = 60;
const anguloB = 60;
const anguloC = 60;
const SomaTotalDosAngulos = anguloA + anguloB + anguloC;
const angulosSaoPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosSaoPositivos) {
  if (SomaTotalDosAngulos === 180){
    console.log (true);
  } else {
    console.log (false);
  }
} else {
  console.log ('Valores Invalidos');
}