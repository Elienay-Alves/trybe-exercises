const Cep = require('../model/Cep');

const CEP_REGEX = /^\d{5}-?\d{3}$/;

const findAdressByCep = async (data) => {
  if (!CEP_REGEX.test(data)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      },
    };
  }

  const cep = await Cep.findAdressByCep(data);

  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      },
    };
  }

  return cep;
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const existingCep = await Cep.findAdressByCep(cep);

  if (existingCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existe',
      },
    };
  }

  return Cep.create({ cep, logradouro, bairro, localidade, uf });
};

module.exports = {
  findAdressByCep,
  create,
};