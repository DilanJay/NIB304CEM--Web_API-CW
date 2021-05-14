const express = require('express');
const router = express.Router();
const {
    getProductById,
    updateProduct,
  } = require('../controllers/productControllers'); // named impots


  router.get('/:id', getProductById);
  router.put('/:id', updateProduct);

  module.exports = router;