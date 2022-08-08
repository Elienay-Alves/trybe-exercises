const express = require('express');
const Author = require('../services/Author');

const route = express.Router();
route.use(express.json());

route.get('/', Author.getAll);

route.get('/:id', Author.findById);

route.post('/', Author.createAuthor);

module.exports = route;