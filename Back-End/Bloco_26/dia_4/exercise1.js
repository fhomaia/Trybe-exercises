const express = require('express');
const bodyparser = require('body-parser');


const app = express();
app.use(bodyparser.json())

app.get('/ping', handleHelloWorldRequest);

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000')
});

function handleHelloWorldRequest(req, res) {
  res.status(200).json({ message: 'pong' });
}

app.post('/hello', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` })
  return res.status(200).send('ok')
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age > 17) {
    res.json({ message: `Hello, ${name}!` });
    return res.status(200).send('ok')
  }
  return res.status(401).send('Unauthorized').json({ message: 'Unauthorized'})
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.json({ message: `Seu nome eh ${name} e voce tem ${age} anos` })
});
