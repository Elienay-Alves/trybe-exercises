const { questionInt } = require('readline-sync');

const realizaFatoracao = (x) => {
  let fatorial = x;

  const primeiroMultiplicador = x - 1;

  for (let index = primeiroMultiplicador; index > 0; index -= 1) {
    fatorial *= index;
  }

  return fatorial;
}

const main = () => {
  const x = questionInt('Informe o valor de x: ');

  if (x <= 0) {
    console.log('Digite um número maior que 0!');
    return;
  }

  console.log(`x: ${x}`);
  const resultado = realizaFatoracao(x);
  console.log(`Resultado: ${resultado}`);
}

main();