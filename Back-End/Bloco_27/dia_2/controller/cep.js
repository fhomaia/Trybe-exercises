const { findAddressByCep, addAdress } = require('../service/cep');
const rescue = require('express-rescue');

const getAdressByCep = rescue(async (_req, res, next) => {
  const { cep } = req.params;
  const cepData = await findAddressByCep(cep);
  if (cepData.error) {
    next(cepData.error);
  }
  return res.status(200).json(cepData);
});

const addAdress = rescue(async (_req, res, next) => {
  
  const address = req.body;
  const requiredNonEmptyString = Joi.string().not().empty().required();
  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2),
  }).validate(address);

  if (error) return next(error);
  const cepData = await addAdress(address);
  if (cepData.error) {
    next(cepData.error);
  }
  return res.status(201).json(cepData);
});

module.exports = {
  getAdressByCep,
  addAdress,
}