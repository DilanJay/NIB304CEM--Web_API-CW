const express = require('express');
const router = express.Router();
const {
   getProducts,
    getProductById,
    addProduct,
    updateProduct,
   
  } = require('../controllers/productControllers'); // named impots

  router.get('/', getProducts);

  router.get('/:id', getProductById);
  router.post('/', addProduct);
  router.put('/:id', updateProduct);
  module.exports = router;