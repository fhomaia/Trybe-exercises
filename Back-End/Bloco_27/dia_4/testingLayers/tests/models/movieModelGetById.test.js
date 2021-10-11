const { expect } = require('chai');
const sinon = require('sinon');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { MongoClient } = require('mongodb');
const { getById } = require('../../models/movieModel');
const mongoConnection = require('../../models/connection');

describe('Testa a função getById da camada de modelo', () => {
  
  let connectionMock; 
  const DBServer = new MongoMemoryServer();
  before( async () => {
    const URLMock = await DBServer.getUri();
    connectionMock = await MongoClient
    .connect(URLMock, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('model_example'));
    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock)
  });

  after(() => {
    mongoConnection.getConnection.restore();
    // DBServer.stop()
  });

  describe('Testa a função getById em caso de sucesso', () => {
    const expectedMovie = {
      id: '604cb554311d68f491ba5781',
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    }; 
    before(async () => {
      await connectionMock.collection('movies').insertOne({ ...expectedMovie });
    });
    it('Testa se a função retorna um objeto', async () => {
      const movie = await getById('604cb554311d68f491ba5781');
      expect(movie).to.be.an('object');
    });
    it('Testa se a função retorna um objeto não vazio', async () => {
      const movie = await getById('604cb554311d68f491ba5781');
      expect(movie).to.be.not.empty;
    });
    it('Testa se a função retorna um objeto com as propriedades desejadas', async () => {
      const movie = await getById('604cb554311d68f491ba5781');
      expect(movie).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
    });
  });
  describe('Testa a função em caso de erro', () => {
    it('Testa se a função retorna um booleano', async () => {
      const movie = await getById('604cb554311d68f491ba5782');
      expect(movie).to.be.a('boolean');
    });
    it('Testa se a função retorna falso', async () => {
      const movie = await getById('604cb554311d68f491ba5782');
      expect(movie).to.equal(false);
    });
  });
});