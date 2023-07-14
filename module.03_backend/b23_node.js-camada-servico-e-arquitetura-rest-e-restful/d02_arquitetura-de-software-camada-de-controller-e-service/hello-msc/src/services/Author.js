const Author = require('../models/Author');

const getAll = async () => Author.getAll();

const findById = async (id) => {
  const row = await Author.findById(id);

  if (!row) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar uma pessoa com o id ${id}`,
      },
    };
  }

  return row;
};

const createAuthor = async (firstName, middleName, lastName) => {
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Uma pessoa autora já existe com esse nome completo',
      },
    };
  }

  return Author.createAuthor(firstName, middleName, lastName);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};