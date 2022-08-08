const express = require('express');

const route = express.Router();

route.get('/', (_req, res) => {
  res.status(200).json({ message: 'pong!' });
});

module.exports = route;