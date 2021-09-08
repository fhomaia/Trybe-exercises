const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/products', async (req, res, next) => {
  const products = await ProductModel.getAll();
  if (!products) return res.status(500).end(); 
  return res.status(200).json(products);
});

router.get('/products/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);
  if (!products) return res.status(404).json({ error: { message: 'Not Found'}}); 
  return res.status(200).json(product);
});

router.post('/user', async (req, res) => {
  const { name, brand } = req.body;
  try {
    const newProduct = await ProductModel.add(name, brand);
    return res.json(newProduct);
  }
  catch(err) {
    return res.status(500).json(err);
  }
});

router.delete('/user/:id', async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);
    return res.status(200).json(products);
  }
  catch(err) {
    return res.status(500).json(err);
  }
});

router.put('/user/:id', async (req, res) => {
  const { name, brand } = req.body;
  try {
    const products = await ProductModel.update(req.params.id, name, brand);
    res.status(200).json(products);
  }
  catch(err) {
    return res.status(500).json(err);
  }
});

module.exports = router;