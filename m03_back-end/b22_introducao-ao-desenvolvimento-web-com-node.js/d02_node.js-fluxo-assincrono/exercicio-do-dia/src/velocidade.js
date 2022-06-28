const { questionInt } = require('readline-sync');

const calculaDist = (d, t) => {
  const media = (d / t);

  return media
};

const main = () => {
  const distancia = questionInt('Qual a distancia?');
  const tempo = questionInt('Qual o tempo tempo em segundos?');
  
  const velMed = calculaDist(distancia, tempo);
  console.log(`Média: ${velMed.toFixed(2)}`);
}

main();