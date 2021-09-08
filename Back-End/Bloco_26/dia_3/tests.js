const { expect } = require('chai');
const checkNumber = require('./checkNumber');
const writeOnFile = require('./writeOnFile')
const fs = require('fs').promises;
const sinon = require('sinon');

describe('tests function checkNumber', () => {
  it('tests if it returns a string', ()=>{
    const resposta = checkNumber(2);
    expect(resposta).to.be.a('string');
  });
  it('tests when the parameter is a positive number', () => {
    const resposta = checkNumber(2);
    expect(resposta).to.be.equals(`Number 2 is positive!`);
  });
  it('tests when the parameter is a negative number', () => {
    const resposta = checkNumber(-2);
    expect(resposta).to.be.equals(`Number -2 is negative!`);
  });
  it('tests when the parameter is zero', () => {
    const resposta = checkNumber(0);
    expect(resposta).to.be.equals('Zero is not defined as positive or negative');
  });
  it('tests if it throws an error when the given paramenter is not a number', () => {
    expect(() => checkNumber('string')).to.throws('Only insert numbers')
  });
});

describe('Tests function writeOnFile', () => {
  before(() => {
    sinon.stub(fs, 'writeFile').resolves('ok')
  });
  after(() => {
    fs.writeFile.restore()
  });
  it('tests if function succeeds', async () => {
    const resposta = await writeOnFile('Exemplo', './newFile.js');
    expect(resposta).to.be.equals('ok');
  });
});