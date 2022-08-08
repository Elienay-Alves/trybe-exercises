const Author = require('../models/Author');

// validation
const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  return true;
};

// Create fullname
const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter(Boolean()).join(' ');
  
  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const getAll = async () => {
  const rows = await Author.getAll();
  return rows.map(getNewAuthor);
};

const findById = async (id) => {
  const row = await Author.findById(id);

  if (!row) return null;

  return getNewAuthor(row);
};

const createAuthor = async (firstName, middleName, lastName) => {
  const validate = isValid(firstName, middleName, lastName);

  if (!validate) return false;

  const [row] = await Author.createAuthor(firstName, middleName, lastName);

  return getNewAuthor({
    id: row.id,
    firstName,
    middleName,
    lastName,
  });
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};