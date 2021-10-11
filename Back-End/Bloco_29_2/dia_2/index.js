const express = require('express');
const bodyParser = require('body-parser');
const books = require('./Routes/books');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`App na porta ${PORT}`));

app.use('/book', books);
