const express = require('express');
const productsControler = require('../controllers/products.controller');
const validateProductInput = require('../middlewares/validateProductInput');
const { validateProductIdExistsInput } = require('../middlewares/validateProductIdExistsInput');
// const validateProductID = require('../middlewares/validateProductExistsInput');

const router = express.Router();

router.get('/', productsControler.getAllProducts);
router.get('/:id', productsControler.getById);
router.put('/:id',
  validateProductInput,
  validateProductIdExistsInput,
  productsControler.updateProduct);
router.post('/', validateProductInput, productsControler.addProduct);

module.exports = router;
