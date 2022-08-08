const express = require('express');

const Cep = require('../controllers/Cep');

const errorMiddleware = require('../middlewares/error');

const route = express.Router();
route.use(express.json());

route.get('/:cep', Cep.findAddressByCep);
route.post('/', Cep.create);

route.use(errorMiddleware);

module.exports = route;
