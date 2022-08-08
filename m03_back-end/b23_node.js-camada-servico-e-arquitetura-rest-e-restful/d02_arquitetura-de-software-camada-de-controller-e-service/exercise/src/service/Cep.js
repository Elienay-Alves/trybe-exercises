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

module.exports = {
  findAdressByCep,
};