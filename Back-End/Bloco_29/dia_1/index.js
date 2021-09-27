const express = require('express');


const app = express();

const PORT = process.env.PORT

app.get('/', (_req, res) => {
  res.send('Está vivo!!');
})

app.listen(PORT, () => `App na porta ${PORT}`);