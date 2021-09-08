const express = require('express');
const bodyparser = require('body-parser');
const errorMiddleware = require('./middlewares/error')
const { getAdressByCep, addAddress } = require('./controller/cep');

const app = express();

app.use(bodyparser.json())

app.use(errorMiddleware);

const PORT = 3000

app.listen(PORT, () => {
  console.log(`App na porta ${PORT}`);
});

app.get('/ping', (_req, res) => {
  return res.status(200).json({ "message": "pong!" });
});

app.get('/cep/:cep', getAdressByCep);

app.post('/cep', addAddress);