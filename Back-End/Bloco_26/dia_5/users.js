const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (username.length < 3) {
    return res.status(400).json({ message: 'Insira um nome de usuario com mais de 3 digitos' });
  }
  if (!email.includes('@mail.com')) {
    return res.status(400).json({ message: 'Insira um email no formato email@mail.com' });
  }
  if ( password.length < 4 || password.length > 8) {
    return res.status(400).json({ message: 'Insira uma senha com tamanho entre 4 e 8 caracteres' });
  }
  res.status(200).json({ message: "user created" });
});

router.post('/login', (req,res) => {
  const { email, password } = req.body;
  const token = []
  if (!email) {
    return res.status(400).json({ message: 'Campo email em branco'})
  }
  if (!password) {
    return res.status(400).json({ message: 'Campo senha em branco'})
  }
  if (!email.includes('@mail.com')) {
    return res.status(400).json({ message: 'Insira um email no formato email@mail.com' });
  }
  if ( password.length < 4 || password.length > 8) {
    return res.status(400).json({ message: 'Insira uma senha com tamanho entre 4 e 8 caracteres' });
  }
  for( let index = 1; index <= 12; index += 1) {
    number = Math.ceil(Math.random() * 9);
    token.push(number);
  }
  res.status(200).json({ token: token.join('') });
});

module.exports = router;