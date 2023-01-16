const express = require('express');
const productsControler = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productsControler.getAllProducts);
router.get('/:id', productsControler.getById);

module.exports = router;
