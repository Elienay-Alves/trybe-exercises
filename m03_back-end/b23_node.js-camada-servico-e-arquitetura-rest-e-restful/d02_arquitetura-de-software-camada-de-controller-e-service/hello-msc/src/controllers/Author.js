const Author = require('../services/Author');

const getAll = async (_req, res) => {
  try {
    const rows = await Author.getAll();

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const row = await Author.getById(id);
    
    if (!row) return res.status(404).json({ message: 'Not found' });
  
    return res.status(200).json(row);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  const row = await Author.createAuthor(first_name, middle_name, last_name);

  if (!row) return res.status(400).json({ message: 'Dados inválidos' });

  return res.status(201).json({ message: 'Pessoa autora criada com sucesso!' });
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};