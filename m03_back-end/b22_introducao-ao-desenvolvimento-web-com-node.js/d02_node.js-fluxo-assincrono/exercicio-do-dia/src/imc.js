const { questionInt, questionFloat } = require('readline-sync');
const { IMC } = require('./data/data');

const calculaImc = (p, a) => {
  console.log(`Peso: ${p}, Altura:${a}`);

  const alturaMetros = a / 100;
  const alturaQuadrado = alturaMetros **2;

  const imc = (p / alturaQuadrado);

  return imc

  
};

const calculaSituacao = (imc) => {
  const situacoes = Object.keys(IMC);
  const situacaoEncontrada = situacoes.find((situacao) => {
    const {imcMaximo, imcMinimo } = IMC[situacao];
    return imc >= imcMinimo && imc <= imcMaximo;
  })
  return situacaoEncontrada;
}

const main = () => {
  const peso = questionFloat('Qual o seu peso?');
  const altura = questionInt('Qual sua altura?');
  const imc = calculaImc(peso, altura);
  console.log(`IMC: ${imc.toFixed(2)}`);
  const situacao = calculaSituacao(imc);
  console.log(`Situacao: ${situacao}`);
}

main();