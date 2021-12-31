function verificaPalindromo (string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}

// console.log (verificaPalindromo('arroz'));

function maiorValor (array) {
  let bigSmoke = 0;
  for (let index in array) {
    if (array[bigSmoke] < array[index]) {
      bigSmoke = index;
    }
  }
  return bigSmoke
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]));

let a = 5;
let b = 2;
console.log(a);
a += b;
console.log(a);
b -= a;
console.log(b);


let eu = ['Alguém da Trybe', ' que é super legal'];
let string = eu[0] + eu[1] + '!';

console.log(string)

let a = "Serei a melhor pessoa dev";
let b = "Esse é meu jeito dev de ser!";
let num = 2;
let strings = [a, b];

console.log((typeof strings.length) == (typeof num));

if ( a < 10) {
  console.log("Quase lá...");
} else if ( a > 10) {
  console.log("Incrível!");
} else {
  console.log("Você é 10");
}





