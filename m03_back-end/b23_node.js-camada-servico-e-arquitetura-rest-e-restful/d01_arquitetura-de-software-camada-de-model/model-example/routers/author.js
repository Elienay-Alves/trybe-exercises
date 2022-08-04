const { Router } = require('express');
const Author = require('../models/author');

const router = Router();

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

module.exports = router;