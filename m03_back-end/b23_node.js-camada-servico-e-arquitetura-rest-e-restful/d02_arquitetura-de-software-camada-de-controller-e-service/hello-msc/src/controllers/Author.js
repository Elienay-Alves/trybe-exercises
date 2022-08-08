const Joi = require('joi');
const Author = require('../services/Author');

const getAll = async (_req, res) => {
  try {
    const rows = await Author.getAll();

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const findById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const row = await Author.getById(id);
    
    if (Author.error) return next(Author.error);
  
    return res.status(200).json(row);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createAuthor = async (req, res, next) => {
  const {
    first_name: firstName,
    middle_name: middleName,
    last_name: lastName } = req.body;

  const { error } = Joi.object({
    firstName: Joi.string().not().empty().required(),
    lastName: Joi.string().not().empty().required(),
  }).validate({ firstName, middleName, lastName });

  if (error) {
    return next(error);
  }

  const row = await Author.createAuthor(firstName, middleName, lastName);

  if (row.error) return next(row.error);

  return res.status(201).json(row);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};