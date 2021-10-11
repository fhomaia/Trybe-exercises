const express = require('express');

const app = express();

const PORT = process.env.PORT;

const MESSAGE = process.env.MESSAGE || 'Its alive!!!';

app.get('/', (_req, res) => {
  res.send(MESSAGE);
});

app.listen(PORT, () => console.log(`App rodando na porta ${PORT}`));