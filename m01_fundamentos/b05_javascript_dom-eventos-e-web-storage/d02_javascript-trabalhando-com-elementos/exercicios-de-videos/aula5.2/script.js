// Onde eu quero adicionar esse elemento?
let container = document.getElementById('first');
console.log(container);

// Como criar um elemento HTML?
let newDiv = document.createElement('div')
console.log(newDiv);

// Como adicionar classes a este elemento?
newDiv.className = 'circle small green';

container.appendChild(newDiv);