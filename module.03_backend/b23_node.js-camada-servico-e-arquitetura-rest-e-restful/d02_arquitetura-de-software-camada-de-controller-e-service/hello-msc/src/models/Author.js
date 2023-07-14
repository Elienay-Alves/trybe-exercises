const db = require('./db');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;
  
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
  
    return {
      id,
      firstName,
      middleName,
      lastName,
      name: fullName,
    };
  };

// snake_case to camelCase
const serialize = (authorData) => authorData.map((row) => getNewAuthor({
  id: row.id,
  firstName: row.first_name,
  middleName: row.middle_name,
  lastName: row.last_name,
}));

const getAll = async () => {
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors;';
  const [rows] = await db.query(query);

  return serialize(rows);
};

const findById = async (id) => {
  const query = `SELECT id, first_name, middle_name, last_name FROM model_example.authors
  WHERE id = ?;`;
  const [row] = await db.query(query, [id]);

  if (row.length === 0) return null;

  return serialize(row)[0];
};

const createAuthor = async (firstName, middleName, lastName) => {
  const query = 'INSERT INTO model_example.authors (first_name, middle_name, last_name);';
  const [row] = await db.query(query, [firstName, middleName, lastName]);

  return [getNewAuthor({ id: row.insertId, firstName, middleName, lastName })];
};

const findByName = async (firstName, middleName, lastName) => {
  let query = `
  SELECT id, first_name, middle_name, last_name 
  FROM model_example.authors
`;

  if (middleName) {
    query += 'WHERE first_name = ? AND middle_name = ? AND last_name = ?;';
  } else {
  query += 'WHERE first_name = ? AND last_name = ?;';
  }

  const params = middleName ? [firstName, middleName, lastName] : [firstName, lastName];
  const [row] = await db.query(query, params);

  if (row.length === 0) return null;

  return serialize(row);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
  findByName,
};