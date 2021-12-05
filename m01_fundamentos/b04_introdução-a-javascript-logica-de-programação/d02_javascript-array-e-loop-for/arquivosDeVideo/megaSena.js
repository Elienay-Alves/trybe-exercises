// Nosso Jogo
let otavioGame = [4, 15, 20, , 55, 58];


// Criando o jogo sorteado
// Saiba mais sobre como criar números aleatórios em: https://www.w3schools.com/js/js_random.asp
let number1 = Math.floor(Math.random() * 60) + 1;
let number2 = Math.floor(Math.random() * 60) + 1;
let number3 = Math.floor(Math.random() * 60) + 1;
let number4 = Math.floor(Math.random() * 60) + 1;
let number5 = Math.floor(Math.random() * 60) + 1;
let number6 = Math.floor(Math.random() * 60) + 1;

let megaSenaNumbers = [number1, number2, number3, number4, number5, number6];
// Lição de Casa. Fazer a estrutura acima usando for

// 


// Conferir o jogo
let numberOfHits = 0;

for (let index = 0; index < megaSenaNumbers.length; index += 1) {
  let drawNumber = (megaSenaNumbers[index]);
  // console.log('Número Sorteado:', drawNumber);

  for (let gameIndex = 0; gameIndex < otavioGame.length; gameIndex += 1) {
    let otavioNumber = otavioGame[gameIndex];
    // console.log('Número do Otavio:', otavioNumber);
    if (drawNumber === otavioNumber) {
      numberOfHits += 1;
    }
  }
}

console.log('Jogo do Otavio:', otavioGame);
console.log('Número Sorteado:', megaSenaNumbers);
console.log('Acertos:', numberOfHits);