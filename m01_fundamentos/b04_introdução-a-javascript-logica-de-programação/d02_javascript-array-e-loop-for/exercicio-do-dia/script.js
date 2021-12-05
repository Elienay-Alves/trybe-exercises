let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1) 
// {
//   resultado += numbers[index];
// }

// let media = resultado / numbers.length;
//  if (media > 20) {
//    console.log('valor maior que 20!');
//  } else {
//     console.log('valor menor que ou igual a 20!');
//  }

// console.log(media);

for (let index = 0; index < numbers.length; index +=1) {
  if (numbers[index] % 2 !== 0){
    resultado += 1;
  }
}

if (resultado === 0) {
  console.log('nenhum valor encontrado')
} else {
console.log(resultado);
}

// exercicios feitos até o 6. Voltar depois e completar.