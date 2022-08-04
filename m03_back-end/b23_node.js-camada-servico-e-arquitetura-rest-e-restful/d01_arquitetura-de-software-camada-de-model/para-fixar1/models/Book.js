const connection = require('./connection');

const readAll = async () => {
  const [result] = await connection.execute(
    'SELECT id, title, author_id FROM books;',
  );

  return result;
};

module.exports = {
  readAll,
}