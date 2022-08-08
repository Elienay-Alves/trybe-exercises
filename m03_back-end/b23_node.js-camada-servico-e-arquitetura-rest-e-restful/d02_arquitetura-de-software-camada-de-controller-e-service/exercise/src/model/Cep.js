const db = require('./db');

// CEP Regex
const CEP_REGEX = /^\d{5}-\d{3}$/;

const formatCep = (data) => {
  if (CEP_REGEX.test(data)) return data;

  return data.replace(/^\d{5}-\d{3}$/, '$1-$2');
};

const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf,
});

const findAdressByCep = async (cepToSearch) => {
  const treatedCep = cepToSearch.replace('-', '');
  const query = `
  SELECT cep, logradouro, bairro, localidade, uf FROM ceps
  WHERE cep = ?;`;
  const row = await db.query(query, [treatedCep])
    .then(([rows]) => (rows.length ? rows[0] : null));
  
  if (!row) return null;

  return getNewCep(row);
};

const create = async ({ cep: rawCep, logradouro, bairro, localidade, uf }) => {
  const cep = rawCep.replace(/-/ig, '');

  const query = `
  INSERT INTO ceps (cep, logradouro, bairro, localidade, uf)
  VALUES (?, ?, ?, ?, ?);`;

  await db.query(query, [cep, logradouro, bairro, localidade, uf]);

  return { cep, logradouro, bairro, localidade, uf };
};

module.exports = {
  findAdressByCep,
  create,
};
