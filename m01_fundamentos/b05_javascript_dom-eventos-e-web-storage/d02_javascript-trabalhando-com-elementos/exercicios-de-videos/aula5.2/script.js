// Onde eu quero adicionar esse elemento?
let container = document.getElementById('first');
console.log(container);

function createDivElement (classes) {
  let newDiv = document.createElement('div');
  newDiv.className = classes;
  return newDiv
}

function addElementAsChild (local, elemento) {
  local.appendChild(elemento);
}

let features = ['square small green', 'circle small yellow', 'square small red'];

for (let feature of features) {
  let element = createDivElement(feature)
  addElementAsChild(container, element)
}



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