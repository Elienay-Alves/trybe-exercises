const db = require('./db');

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await db
    .execute(
      "INSERT INTO model_example.movies (title, directed_by, release_year) VALUES (?, ?, ?)",
      [title, directedBy, releaseYear]
    );

  return {
    id: result.insertId,
  };
};

module.exports = {
  create,
};