let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

let pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';

let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Primeiro filho do filho';

let primeiroFilho = pai.firstElementChild;

let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

let atencao = elementoOndeVoceEsta.nextSibling;

let thirdChild = elementoOndeVoceEsta.nextElementSibling;

let terceiroFilho = pai.lastElementChild.previousElementSibling;