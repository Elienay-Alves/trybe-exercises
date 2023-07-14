const IMC = {
  'Abaixo do peso (magreza)': {
    imcMinimo: 0, 
    imcMaximo: 18.4,
  },
  'Peso normal': {
    imcMinimo: 18.5,
    imcMaximo: 24.9,
  },
  'Acima do peso (sobrepeso)': {
    imcMinimo: 25,
    imcMaximo: 29.9,
  },
  'Obesidade grau I': {
    imcMinimo: 30.0,
    imcMaximo: 34.9,
  },
  'Obesidade grau II': {
    imcMinimo: 35,
    imcMaximo: 39.9,
  },
  'Obesidade graus III e IV': {
    imcMinimo: 40,
    imcMaximo: 100
    },
};

module.exports = {
  IMC,
};