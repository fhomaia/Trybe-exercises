const mongoConnection = require('./connection');
const { ObjectId } = require('mongodb')

const getAll = async () => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const movies = await moviesCollection
    .find()
    .toArray();

  return movies.map(({ _id, ...movieData }) => ({
    id: _id,
    ...movieData,
  }));
};

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const { insertedId: id } = await moviesCollection
    .insertOne({ title, directedBy, releaseYear });

  return {
    id,
    title, 
    directedBy, 
    releaseYear
  };
};

const getById = async (id) => {
  const movie = await mongoConnection.getConnection()
    .then((db) => db.collection('movies').findOne({ id: id }))
  if (movie) {
    const { title, directedBy, releaseYear} = movie;
    return { id, title, directedBy, releaseYear };
  }
  return false
}

module.exports = {
  create,
  getAll,
  getById,
};