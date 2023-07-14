const { Router } = require('express');
const Author = require('../models/author');

const router = Router();
router.use(express.json());

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await Author.readId(id);

  if(!result) return res.status(404).json({ message: 'Not found!'})

  res.status(200).json(result);
})

router.get('/', async (_req, res) => {
  const result = await Author.readAll();

  res.status(200).json(result);
})

router.post('/', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) return res.status(400).json({ message: 'Dados invalidos'})

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso!'})
})

module.exports = router;