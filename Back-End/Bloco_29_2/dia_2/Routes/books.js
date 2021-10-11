const { Router } = require('express');
const { Book } = require('../models/');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const book = await Book.findAll();
    return res.status(200).json(book);
  }
  catch(e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findPk(id);
    if (!book) return res.status(404).json({ message: 'Not Found'});
    return res.status(200).json(book);
  }
  catch(e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, createdAt, pageQuantity } = req.body;
    let book;
    if (pageQuantity) {
      book = await Book.create({ title, createdAt, pageQuantity } );
    }
    book = await Book.create({ title, createdAt });
    return res.status(201).json(book);
  }
  catch(e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { title, createdAt, pageQuantity } = req.body;
    const { id } = req.params;
    let book;
    if (pageQuantity) {
      book = await Book.update({ title, createdAt, pageQuantity }, { where: { id } });
    }
    book = await Book.update({ title, createdAt }, { where: { id } });
    if (!book.updateBook) return res.status(404).json({ message: 'Not Found'});
    return res.status(201).json(book.updateBook);
  }
  catch(e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    book = await Book.destroy({ where: { id } });
    return res.status(201).json(book);
  }
  catch(e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});


module.exports = router;