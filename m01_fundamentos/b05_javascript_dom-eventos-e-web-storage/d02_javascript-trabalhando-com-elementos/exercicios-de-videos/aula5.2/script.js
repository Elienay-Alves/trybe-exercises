// Onde eu quero adicionar esse elemento?
let container = document.getElementById('first');
console.log(container);

// function createDivElement (classes) {
//   let newDiv = document.createElement('div');
//   newDiv.className = classes;
//   container.appendChild(newDiv);
// }

// createDivElement('circle small red');

// Eu fiz da forma acima e funcionou, porém o professor fez de outra forma. Como esta abaixo:

function createDivElement (classes) {
  let newDiv = document.createElement('div');
  newDiv.className = classes;
  return newDiv
}

container.appendChild(createDivElement('circle small red'));
container.appendChild(createDivElement('square small green'));
container.appendChild(createDivElement('circle small yellow'));

// Jeito velho de fazer:

// let newDiv = document.createElement('div')
// let newDiv2 = document.createElement('div')
// let newDiv3 = document.createElement('div')
// console.log(newDiv);

// // Como adicionar classes a este elemento?
// newDiv.className = 'circle small green';
// newDiv2.className = 'square big red';
// newDiv3.className = 'circle medium yellow';


// container.appendChild(newDiv);
// container.appendChild(newDiv2);
// container.appendChild(newDiv3);