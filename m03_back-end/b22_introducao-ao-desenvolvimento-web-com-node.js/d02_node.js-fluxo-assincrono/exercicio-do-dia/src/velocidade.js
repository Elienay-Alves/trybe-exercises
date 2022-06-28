const { questionInt, questionFloat } = require('readline-sync');

const distancia = questionInt('Qual a distancia?');
const tempo = questionInt('Qual o tempo tempo em segundos?');

const calculaDist = (d, t) => {
  console.log(`Distancia: ${d}, Tempo:${t}`);

  const media = (d / t);

  return media

  
};

const main = () => {
  const imc = calculaDist(distancia, tempo);
  console.log(`Média: ${imc.toFixed(2)}`);
}

main();