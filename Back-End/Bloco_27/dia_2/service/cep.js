const { getCep, addAddress } = require('../models/Cep');

const CEP_REGEX = /\d{5}-?\d{3}/;

const findAddressByCep = async (searchedCep) => {
  if (!CEP_REGEX.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
  }
  const cep = await getCep(searchedCep);

  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    };
  }
  return cep;
}

const addAddress = (newCep) => {
  const { cep } = newCep;
  if (!CEP_REGEX.test(newCep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
  }
  const cep = await getCep(newCep);
  if (cep) {
    return {
      error: {
        code: "alreadyExists",
        message: "CEP já existente"
      },
    };
  };
  addAddress(newCep);
}

module.exports = {
  findAddressByCep,
}