const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM books;'
  const [result] = await connection.execute(query);

  return result.map(({ id, title, author_id}) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const getById = async (id) => {
  const query = `SELECT * FROM books
  WHERE id=?;`

  const [result] = await connection.execute(query, [id]);

  if (result.length === 0) return null;

  return result.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }))
}

const getByAuthorId = async (authorId) => {
  const query = `SELECT * FROM books
  WHERE author_id=?;`

  const [result] = await connection.execute( query, [authorId]);

  return result.map(({ id, title, author_id}) => ({
    id,
    title,
    authorId: author_id,
  }));
};

module.exports = {
  getAll,
  getByAuthorId,
  getById,
}