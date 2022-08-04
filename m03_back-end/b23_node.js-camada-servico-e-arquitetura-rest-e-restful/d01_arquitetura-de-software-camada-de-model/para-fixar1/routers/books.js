const { Router } = require('express');
const Book = require('../models/Book');

const bookRouter = Router();

bookRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  const result = await Book.getByAuthorId(id);

  if(!result) return res.status(404).json({ message: 'Not found!'})

  res.status(200).json(result);
})

bookRouter.get('/', async (_req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
})

module.exports = bookRouter;