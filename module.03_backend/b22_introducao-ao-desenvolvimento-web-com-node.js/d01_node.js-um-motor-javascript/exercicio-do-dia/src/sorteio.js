const { questionInt, question} = require('readline-sync');

const sorteio = (guess) => {
  const min = Math.ceil(0);
  const max = Math.floor(11);
  const nRandom = Math.floor(Math.random() * (max - min)) + min;
  
  return (guess === nRandom) ? 'Parabéns, número correto' : `Opa, não foi dessa vez, o número era ${nRandom}`;
};

const main = () => {
  const guess = questionInt('Qual o número sorteado?');
  const verificaN = sorteio(guess);
  console.log(verificaN);

  const tryAgain = question('Quer tentar novamente? (sim, nao)');
  switch (tryAgain) {
    case 'sim':
      return main();
      break;
    default:
      break;
  }
};

main();