// Onde eu quero adicionar esse elemento?
let container = document.getElementById('first');
console.log(container);

// Como criar um elemento HTML?
let newDiv = document.createElement('div')
let newDiv2 = document.createElement('div')
let newDiv3 = document.createElement('div')
console.log(newDiv);

// Como adicionar classes a este elemento?
newDiv.className = 'circle small green';
newDiv2.className = 'square big red';
newDiv3.className = 'circle medium yellow';

// Como pôr o elemento no arquivo HTML?
container.appendChild(newDiv);
container.appendChild(newDiv2);
container.appendChild(newDiv3);