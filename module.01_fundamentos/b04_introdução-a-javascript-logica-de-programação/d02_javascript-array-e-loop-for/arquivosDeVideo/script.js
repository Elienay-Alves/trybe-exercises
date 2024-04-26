let pizza1 = '4 Queijos';
let pizza2 = 'Frango com Catupry';
let pizza3 = 'Marguerita';
let pizza4 = 'Palmito';
let pizza5 = 'Chocolate'; //Essa era a forma antiga de se fazer

let pizzas = ['4 Queijos', 'Frango com Catupry', 'Marguerita', 'Palmito', 'Chocolate']; //Assim podemos por varios valores dentro de uma unica variavel

pizzas[5] = 'peito de peru';//Isso é uma forma de adicionar itens ao nosso array. Outra forma de fazer seria:
pizzas.push('peito de frango');

// console.log('Menu de sabores: ' + pizzas);

// pizzas.length //O .length serve para dizer um tamanho do array ou para adicionar algo ao final do array quando não sabemos o tamanho dele

// .sort // O .sort põe os itens do array em ordem alfabetica (igual o do terminal)

// .push() // O .push() adiciona um novo valor ao final do array. O bom dele é que você não precisa saber o tamanho do final para adicionar algo no ultimo indice.

// .unshift() // O unshift adiciona um valor no inicio do array.

//  .pop() // Remove o valor contido no ultimo indice do array.

// .

console.log(pizzas[0]); //O [index] acessa uma posição especifica de um array

for (index = 0; index < pizzas.length; index += 1) {
  console.log(pizzas[index]);
}