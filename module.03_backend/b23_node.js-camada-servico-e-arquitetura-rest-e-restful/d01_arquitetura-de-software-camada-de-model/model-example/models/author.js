const connection = require("./connection");

// Cria uma string com o nome completo do author
const readNewAuthor = ({ id, firstName, middleName, lastName }) => {

  // Boolean é uma função que recebe um parâmetro e retorna true ou false,
  // nesse caso só vai trazer os parametros que forem true
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  }
}

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  }
}

// Busca todos os autores do banco
const readAll = async () => {
  const [result] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors;',
  );

  return result.map(serialize).map(readNewAuthor);
} 

const readId = async (id) => {
  const query = `SELECT id, first_name, middle_name, last_name FROM authors
  WHERE id=?`
  const [result] = await connection.execute( query, [id]);

  if (result.length === 0) return null;

  const { firstName, middleName, lastName } = result.map(serialize)[0];

  return readNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  });
}

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
}

const create = async (firstName, middleName, lastName) => {
  const query = `INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?);`;
  connection.execute(query, [firstName, middleName, lastName]);


}

module.exports = {
  readAll,
  readId,
  isValid,
  create,
}