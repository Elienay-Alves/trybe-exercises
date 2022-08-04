const { Router } = require('express');
const Author = require('../models/author');

const router = Router();

router.get('/', async (_req, res) => {
  const authors = await Author.readAll();

  res.status(200).json(authors);
})

module.exports = router;