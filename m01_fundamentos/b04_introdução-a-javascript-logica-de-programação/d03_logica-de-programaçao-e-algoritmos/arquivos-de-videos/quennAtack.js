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

console.log ('Pode atacar?', canAttack);