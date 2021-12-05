// Problema: Dada a posição da rainha e a posição so oponente, devemos verificar se ela pode ou não pode atacar.
// OBS: não iremos eftivamente movimentar a rainha.

//  posição da rainha
let quennRowPosition = 6;
let quennColumnPosition = 4;

// Posilçao do oponente
let opponentRowPosition = 2;
let opponentColumnPosition = 4;

// Armazena se o ataque foi bem sucedido
let canAttack = false;

// Verifica se a peça esta na mesma linha e coluna
if (opponentRowPosition === quennRowPosition || opponentColumnPosition === quennColumnPosition) {
  canAttack = true;
}



// Diagonal Superior Direita
for (let iSupDir = 1; iSupDir < 8; iSupDir += 1) {
  let currentQueenRow = quennRowPosition + iSupDir;
  let currentQueenColumn = quennColumnPosition + iSupDir;

  // Se a linha for > 8 OU a coluna for > 8 eu tenho que parar o loop
  if (currentQueenRow > 8 || currentQueenColumn > 8) {
    break;
  }

  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
    canAttack = true;
    console.log ('Pode atacar na diagonal superior direita');
    break;
  }

  // console.log(currentQueenRow, currentQueenColumn);
}

console.log ('Pode atacar?', canAttack);