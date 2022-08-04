const { Router } = require('express');
const Book = require('../models/Book');

const bookRouter = Router();

bookRouter.get('/', async (_req, res) => {
  const books = await Book.readAll();

  res.status(200).json(books);
})

module.exports = bookRouter;