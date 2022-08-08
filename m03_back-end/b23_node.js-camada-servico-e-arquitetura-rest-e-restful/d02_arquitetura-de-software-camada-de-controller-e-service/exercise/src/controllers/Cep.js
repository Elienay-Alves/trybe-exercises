const rescue = require('express-rescue');
const Joi = require('joi');
const Cep = require('../service/Cep');

const findAddressByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;

  const address = await Cep.findAdressByCep(cep);

  if (address.error) {
    return next(address.error);
  }

  return res.status(200).json(address);
});

const create = rescue(async (req, res, next) => {
  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
  }).validate(req.body);

  if (error) return next(error);

  const newCep = await Cep.create(req.body);

  if (newCep.error) {
    return next(newCep.error);
  }

  res.status(201).json(newCep);
});

module.exports = {
  findAddressByCep,
  create,
};
