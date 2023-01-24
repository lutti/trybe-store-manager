const express = require('express');
const salesProductController = require('../controllers/salesProducts.controller');
const validateSalesInput = require('../middlewares/validateSalesInput');
const validateSalesQuantityInput = require('../middlewares/validateSalesQuantityInput');
const { validateSalesProductIdInput } = require('../middlewares/validateSalesProductIdInput');
const { validateSaleIdExistsInput } = require('../middlewares/validateSaleIdExistsInput');

const router = express.Router();

router.get('/', salesProductController.getAllSalesProducts);
router.post('/',
  validateSalesQuantityInput,
  validateSalesInput,
  validateSalesProductIdInput,
  salesProductController.addSalesProducts);
router.get('/:id',
  validateSaleIdExistsInput,
  salesProductController.getByIdSalesProducts);

module.exports = router;
