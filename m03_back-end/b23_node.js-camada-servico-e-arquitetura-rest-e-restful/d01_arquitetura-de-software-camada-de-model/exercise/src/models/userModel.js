const Joi = require('joi');
const db = require('./db');

const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const isValid = (data) => userSchema.validate(data);

function formatUser({ id, first_name: firstName, last_name: lastName, email }) {
  return {
    id,
    firstName,
    lastName,
    email,
  };
}

// const removeUsers = async (id) => {
//   const query = `DELETE FROM users_crud.users
//   WHERE id = ?;`;
//   const result = await db.query(query, [id]);
//   const status = result[0];
//   const { affectedRows } = status;
//   return Boolean(affectedRows);
// };

const getUser = (id) => {
const query = `SELECT * FROM users_crud.users
WHERE id = ?;`;
return db.query(query, [id])
  .then(([rows]) => {
    if (rows[0]) return formatUser(rows[0]);

    return null;
  });
};

const listUsers = () => {
  const query = 'SELECT * FROM users_crud.users;';
  return db.query(query)
  .then(([rows]) => rows.map(formatUser));  
};

// Função responsavel por criar o user no banco de dados
const create = ({ firstName, lastName, email, password }) => {
  const query = `INSERT INTO users_crud.users (first_name, last_name, email, password)
  VALUES (?,?,?,?);`;

  return db.query(
    query, [firstName, lastName, email, password],
    )
  .then(([result]) => ({ id: result.id, firstName, lastName, email }));
};

const editUser = async (id, { firstName, lastName, email, password }) => {
  const query = `UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ?
  WHERE id = ? `;
  await db.query(query, [firstName, lastName, email, password, id]);
  return getUser(id);
};

module.exports = {
  formatUser,
  isValid,
  getUser,
  listUsers,
  create,
  editUser,
};