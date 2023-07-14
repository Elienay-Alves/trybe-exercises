const express = require('express');

const api = express();
api.use(express.json())

api.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' })
})

api.post('/hello', (req, res) => {
  const name = req.body.name;
  res.status(200).json({ message: `Hello, ${name}`})
})

api.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if ( age <= 17) return res.status(401).json({ message: "Unauthorized" })
  res.status(200).json({ message: `Hello, ${name}!`})
})

api.put('/users/:name/:age', (req, res) => {
  const { name } = req.params;
  const age = parseInt(req.params.age);
  
  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade`});
})

api.get('/', (req, res) => {
  res.status(200).json({ message: 'el barto'})
})

api.listen(4500, () => {
  console.log('ay caramba!');
})