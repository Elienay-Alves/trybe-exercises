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

module.exports = {
  readAll,
}