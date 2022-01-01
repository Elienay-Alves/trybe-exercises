// // let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// // let pai = elementoOndeVoceEsta.parentElement;
// pai.style.color = 'red';

// let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
// primeiroFilhoDoFilho.innerText = 'Primeiro filho do filho';

let primeiroFilho = pai.firstElementChild;

let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

let atencao = elementoOndeVoceEsta.nextSibling;

let thirdChild = elementoOndeVoceEsta.nextElementSibling;

// let terceiroFilho = pai.lastElementChild.previousElementSibling;

// Parte II
// 1. Crie um irmão para `elementoOndeVoceEsta`.

let pai = document.getElementById('pai');
let irmaoElementoOndeVoceEsta = document.createElement('section');

irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

// 2. Crie um filho para 'elementoOndeVoceEsta'.

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

let filhoElementoOndeVoceEsta = document.createElement('section');

filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

// 3. Crie um filho para 'primeiroFilhoDoFilho'.

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filhoPrimeiroFilhoDoFilho = document.createElement('section');

filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// 4. A partir desse filho criado, acesse 'terceiroFilho'.

let terceiroFilho = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;

console.log(terceiroFilho)

// Parte III
// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

let pai = document.getElementById('pai');
for (let i = pai.childNodes.length -1; i >= 0; i -=1) {
  currentChildren = pai.childNodes[i];
  if (currentChildren.id !== 'elementoOndeVoceEsta') {
    currentChildren.remove();
  }
}

let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();