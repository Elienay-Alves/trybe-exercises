// codando na mão:
// console.log('Quando a média for menor que 7, retorna "reprovado":');

const { expect } = require("chai");
const { calculaSituacao } = require("../calculaSituacao");


// TDD
describe('Quando a média for menor que 7', () => {
  it('retorna "Reprovação"', () => {
    const resposta = calculaSituacao(4);
    
    expect(resposta).to.be.equals('Reprovação')
  })
});

describe('Quando a média for maior que 7', () => {
  it('retorna "Aprovação"', () => {
    const resposta = calculaSituacao(9);
    
    expect(resposta).to.be.equals('Aprovação')
  })
});

describe('Quando a média for igual a 7', () => {
  it('retorna "Aprovação"', () => {
    const resposta = calculaSituacao(7);
    
    expect(resposta).to.be.equals('Aprovação')
  })
});