const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT id, title, author_id FROM books;',
  );

  return result;
};

const getByAuthorId = async (id) => {
  const query = `SELECT * FROM books
  WHERE author_id=?`

  const [result] = await connection.execute( query, [id]);

  return result;
}

module.exports = {
  getAll,
  getByAuthorId,
}