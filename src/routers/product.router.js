const express = require('express');
const productsControler = require('../controllers/products.controller');
const validateProductInput = require('../middlewares/validateProductInput');
// const validateProductID = require('../middlewares/validateProductExistsInput');

const router = express.Router();

router.get('/', productsControler.getAllProducts);
router.get('/:id', productsControler.getById);
router.post('/', validateProductInput, productsControler.addProduct);

module.exports = router;
