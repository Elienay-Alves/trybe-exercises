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

  if(imc < 18.5) {
    console.log('Abaixo do peso (magresa)');
  } if (imc >= 18.5 && imc <= 24.9) {
    console.log('Peso normal');
  } if (imc >= 25.0 && imc <= 29.9){
    console.log('Acima do peso (sobrepeso)')
  } if (imc >= 30 && imc <= 34.9) {
    console.log('Obesidade grau I');
  } if (imc >= 35 && imc <= 39.9) {
    console.log('Obesidade grau II');
  } if (imc >= 40) {
    console.log('Obesidade graus III e IV');
  }
}

main();