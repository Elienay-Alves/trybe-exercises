const Cep = require('../model/Cep');
const ViaCep = require('../model/ViaCep');

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

  if (cep) return cep;

  const cepFromApi = await ViaCep.lookupCep(data);

  if (!cepFromApi) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      },
    };
  }

  return Cep.create(cepFromApi);
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