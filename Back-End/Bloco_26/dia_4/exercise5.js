const express = require('express');
const bodyparser = require('body-parser');
const fs = require('fs').promises;

const app = express();

app.use(bodyparser.json());

app.listen(3000, () => console.log('App ouvindo a porta 3000'));

const newSimpsons = [
  {
    "id": "1",
    "name": "Homer Simpson"
  },
  {
    "id": "2",
    "name": "Marge Simpson"
  },
  {
    "id": "3",
    "name": "Bart Simpson"
  },
  {
    "id": "4",
    "name": "Lisa Simpson"
  },
  {
    "id": "5",
    "name": "Maggie Simpson"
  },
  {
    "id": "6",
    "name": "Ned Flanders"
  },
  {
    "id": "7",
    "name": "Montgomery Burns"
  },
  {
    "id": "8",
    "name": "Nelson Muntz"
  },
  {
    "id": "9",
    "name": "Krusty"
  },
  {
    "id": "10",
    "name": "Milhouse Van Houten"
  }
]

function setSimpsons (newSimpsons) {
  console.log('aqui')
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}


const getSimpsons = async () => {
  await setSimpsons(newSimpsons);
  return fs.readFile('./simpsons.json')
  .then(fileContent => JSON.parse(fileContent))
  .catch( err => console.log(err));
}


app.get('/simpsons', async (_req, res) => {
  const simpsons = await getSimpsons();
  res.status(200).json(simpsons)
});

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params
  const simpsons = await getSimpsons()
  const simpson = simpsons.find((simpson) => simpson.id === id);
  if (simpson) {
    return res.status(200).json(simpson)
  }
  res.status(404).send('Nao ha id correspondente')
});

app.post(
  '/simpsons',
  async (req, res) => {
    const { id, name } = req.body;
    const simpsons = await getSimpsons();
    const simpson = simpsons.find((simpson) => parseInt(simpson.id) === id);
    if (simpson) {
      return res.status(409).send('Conflict')
    }
    const newSimpson = [...simpsons, { id, name, }];
    await setSimpsons(newSimpson);
    res.status(204).end();
  }
);
