const PESO_PADRAO_EM_KG = 66.5;
const ALTURA_PADRAO_EM_CM = 181;
const { questionInt, questionFloat } = require('readline-sync');

const peso = questionFloat('Qual o seu peso?');
const altura = questionInt('Qual sua altura?');

const calculaImc = (p, a) => {
  console.log(`Peso: ${p}, Altura:${a}`);

  const alturaMetros = a / 100;
  const alturaQuadrado = alturaMetros **2;

  const imc = (p / alturaQuadrado);

  return imc
};

const main = () => {
  const imc = calculaImc(peso, altura);
  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();