const express = require('express');
const app= express();

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', (_req, res) =>
res.drinks.sort().json(drinks)
)

app.get('/drinks/search', (req, res) => {
	const { name } = req.query
	const drink = drinks.filter((d) => d.name.includes(name));
	res.status(200).json(drink);
})

app.get('/drinks/:id', (req, res) => {
	const { id } = req.params;
	const drink = drinks.find((d) => d.id === Number(id))
	
	if (!drink) return res.status(404).json({ message: 'Drink not found'});

  res.status(200).json(drink);
})

app.put('/drinks/:id', (req, res) => {
	const { id } = req.params;
	const { name, price } = req.body;
	const drinkIndex = drinks.findIndex((d) => d.id === Number(id));

	if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found' });

	drinks[drinkIndex] = { ...recipes[recipeIndex], name, price };

	res.status(204).end();
})

app.delete('/drinks/:id', (req, res) => {
	const { id } = req.params;
	const drinkIndex = drinks.findIndex((d) => d.id === Number(id));

	if (recipeIndex === -1) return res.status(404).json({ message: 'Drink not found' })

	drinks.splice(drinkIndex, 1);
})

app.all('*', (req, res) => {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`})
})
app.listen(3001, () =>
console.log('Arriiiibaa'));