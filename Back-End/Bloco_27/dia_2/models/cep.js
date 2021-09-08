const connection = require('./connection')

const CEP_REGEX = /\d{5}-?\d{3}/;

const formatCep = (cep) => {
  if (CEP_REGEX.test(cep)) return cep;
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
}

const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf});

const getCep = async (cep) => {
  const treatedCep = cep.replace('-', '');
  const result = await connection
  .execute('SELECT * FROM ceps c WHERE c.cep = ?', [treatedCep])
  then(([results]) => (results.length ? results[0] : null));
  if (!result) return null;
  return getNewCep(result);
}

const addAddress = ({ cep, logradouro, bairro, localidade, uf }) => {
  const treatedCep = cep.replace('-', '');
  await connection
  .execute('INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES ( ?, ?, ?, ?, ? )', [treatedCep, logradouro, bairro, localidade, uf]);
  return { cep, logradouro, bairro, localidade, uf };
}

module.exports = {
  getCep,
  addAddress,
}