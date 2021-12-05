// let paragraph = document.getElementById("paragraph");
// paragraph.style.color = "green";

let tituloBruxo = document.querySelector("#page-title").innerText = "The Witcher 3: Wild Hunt";

let segundoParagrafo = document.querySelector("#second-paragraph").innerText = "O BRUXÃO vai te pegar!!!";

document.getElementById("subtitle").innerText = 'CUIDADO !!!';

// msc@betrybe.com: para falar com o pessoal responsavel pelo msc!

let xablauMaster = document.getElementsByClassName('xablau')[0].innerText = 'Aff mano que cor ruim, namoral muda isso!!';

// Outra forma de fazer é:

let xablauRegaçaTudo = document.getElementsByClassName('xablau');
 xablauRegaçaTudo[0].style.color = 'blue'; //Só podemos adicionar style em let e const primitivos e não em arrays, por isso quando tivermos uma lista devemos especificar a posição. E sim, podemos adicionar outros estilos além do color. Se liga:
xablauRegaçaTudo[0].style.fontSize = '25px';

let aCorEMinhaEuFacoOQueEuQuiser = document.getElementsByTagName('h4')[0];
aCorEMinhaEuFacoOQueEuQuiser.style.color = 'red'; //Aqui nós especificamos a posição antes de estilizar. Poderiamos ter feito da mesma forma que o exercício anterior?

let minhaCorMinhasRegras = document.getElementsByTagName('h4');
minhaCorMinhasRegras[0].style.color = 'green';
// E a resposta é sim. Nesse caso vimos três formas de manipular os arrays "transformando-os" em "tipos primitivos" através do index. Parabéns, você é quase foda! Isso foi ironia.

// Vamos vamos olhar uma função master god que nos trará a possibilidade de fazer apenas com ela (egoista não?!). Vamos conhecer a QUERYSELECTOR!

