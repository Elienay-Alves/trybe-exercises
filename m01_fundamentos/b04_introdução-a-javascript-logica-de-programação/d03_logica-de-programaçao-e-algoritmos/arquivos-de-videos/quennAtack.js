// Problema: Dada a posição da rainha e a posição so oponente, devemos verificar se ela pode ou não pode atacar.
// OBS: não iremos eftivamente movimentar a rainha.

//  posição da rainha
let quennRowPosition = 6;
let quennColumnPosition = 4;

// Posilçao do oponente
let opponentRowPosition = 8;
let opponentColumnPosition = 2;

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
    // console.log ('Pode atacar na diagonal superior direita');
    break;
  }

}

// Diagonal Inferior Esquerda
for (let iInfEsq = 1; iInfEsq < 8; iInfEsq += 1) {
  let currentQueenRow = quennRowPosition - iInfEsq;
  let currentQueenColumn = quennColumnPosition - iInfEsq;
  
  // Se a linha for < 1 OU a coluna for < 1 eu tenho que parar o loop
  if (currentQueenRow < 1 || currentQueenColumn < 1) {
    break;
  }

  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
    canAttack = true;
    // console.log('Pode atacar na diagonal inferior esquerda');
    break;
  }
}


// Diagonal Superior Esquerda
for (let iSupEsq = 1; iSupEsq < 8; iSupEsq += 1) {
  let currentQueenRow = quennRowPosition + iSupEsq;
  let currentQueenColumn = quennColumnPosition - iSupEsq;

  // Se a linha for > 8 OU a coluna for < 1 eu tenho que parar o loop
  if (currentQueenRow > 8 || currentQueenColumn < 1) {
    break;
  }

  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
  canAttack = true;
    // console.log('Pode atacar na diagonal superior esquerda');
    break;
  }
}

// Diagonal Inferior Direita
for (let iInfDir = 1; iInfDir < 8; iInfDir += 1) {
  let currentQueenRow = quennRowPosition - iInfDir;
  let currentQueenColumn = quennColumnPosition + iInfDir;
  
  // Se a linha for < 1 OU a coluna for > 8 eu tenho que parar o loop
  if (currentQueenRow < 1 || currentQueenColumn > 8) {
    break;
  }

  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
    canAttack = true;
    console.log('Pode atacar na diagonal inferior direita');
     break;
  }
}

console.log('Pode atacar?', canAttack);