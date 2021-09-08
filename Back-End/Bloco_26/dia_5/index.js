const express = require('express');
const router = require('./users');
const bodyparser = require('body-parser');
const fetch = require('node-fetch');

const app = express();

app.use(bodyparser.json());

app.use('/user', router);

app.listen(3000, () => console.log('App na porta 3000'));

const isTokenValid = (req,res,next) => {
  const token = req.headers.authorization;
  if (token.length !== 12) {
    return res.status(401).json({ message: `Invalid Token` })
  }
  next();
}

app.get('/btc/price',[isTokenValid, (_req, res) => {
  console.log('agora')
  fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
  .then(response => response.json())
  .then(response => res.status(200).json({ message: response }))
  .catch((err) => res.status(500).json({ message: err }))
} ]);