const { questionInt } = require('readline-sync');

const calculaElemento = (quantity) => {
  let a = 1;
  let b = 1;

  for (let n = quantity; n >= 0; n -= 1) {
    if (b) console.log(b);

    const temp = a;
    a += b;
    b = temp;
  };
  console.log(b);
  return b;
};

const main = () => {
  const n = questionInt('Digite o valor de n: ');

  if (n <= 0) {
    console.log('Digite um número maior que 0!');
    return;
  }

  console.log(`n: ${n}`);
  calculaElemento(n - 2);
}

main();