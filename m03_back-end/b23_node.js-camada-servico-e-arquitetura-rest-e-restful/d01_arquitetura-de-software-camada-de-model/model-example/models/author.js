const connection = require("./connection");

const readNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  }
}

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  }
}

const readAll = async () => {
  const [result] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');

  return result.map(serialize).map(readNewAuthor);
} 

module.exports = {
  readAll,
}