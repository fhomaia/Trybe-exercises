
const express = require('express');
const bodyparser = require('body-parser');
const { createAuthor, getUser, getUserById, addUser } = require('./models/authors');

const app = express();
app.use(bodyparser.json());

app.post('/user', async (req, res) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(401).json({
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    });
  }
  const newAuthor = await createAuthor(req.body);
  res.status(201).json(newAuthor);
});

app.listen(3000, () => {
  console.log('App na porta 3000');
});

app.get('/user', async (_req, res) => {
  const users = await getUser();
  res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const targetUser = await getUserById(id);
  if (targetUser) {
    return res.status(200).json(targetUser);
  }
  return res.status(404).json({ message: 'User not found'});
});

const validateFields = (req, res, next) => {
  const { firstName, lastName, password, email } = req.body;
  if (!firstName) return res.status(400).json({ message: 'O campo "firstName" deve estar preenchido'});
  if (!lastName) return res.status(400).json({ message: 'O campo "lastName" deve estar preenchido'});
  if (!password) return res.status(400).json({ message: 'O campo "password" deve estar preenchido'});
  if (!email) return res.status(400).json({ message: 'O campo "email" deve estar preenchido'});
  next();
}

app.put('/user/:id', validateFields, async (req, res) => {
  const { id } = req.params
  const userToBeAdded = { id, ...req.body};
  const newUser = await addUser(userToBeAdded);
  res.status(200).json(newUser);
});
