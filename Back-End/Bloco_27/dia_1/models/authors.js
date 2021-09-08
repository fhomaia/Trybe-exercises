const connection = require('./connection');
const { ObjectId } = require('mongodb')

const createAuthor = ({firstName, lastName, email}) => {
  return connection()
  .then((db) => db.collection('authors').insertOne({firstName, lastName, email}))
  .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
}

const getUser = () => {
  return connection()
  .then((db) => db.collection('authors').find().toArray());
}

const getUserById = (id) => {
  return connection()
  .then((db) => db.collection('authors').findOne(ObjectId(id)))
}

const addUser = (newUser) => {
  return connection()
  .then((db) => db.collection('authors'). insertOne(newUser))
  .then(() => newUser);
}

module.exports = {
  createAuthor,
  getUser,
  getUserById,
  addUser,
};