// Temos um array com cada ingrediente da lista
let ingredientItens = [
  '500g de feijão carioquinha cozido',
  '200g de toucinho',
  '1 concha de óleo',
  '1 cebola média picada',
  '4 dentes de alho',
  '5 ovos',
  '1 colher de sopa de sal com alho',
  'Cheiro verde a gosto',
  '200g de farinha de mandioca'
];

// Recuperamos a classe da ul do nosso index pelo querySelector
let ingredientList = document.querySelector('.ingredients-list');

// Fizemos um loop que vai varrer o array e por cada index  dentro da variavel ingredients. A partir dai criamos uma variavel 
for (let i = 0; i < ingredientItens.length; i += 1) {
  let ingredient = ingredientItens[i];

  let ingredientListItem = document.createElement('li');
  ingredientListItem.innerText = ingredient;

  ingredientList.appendChild(ingredientListItem);
};

