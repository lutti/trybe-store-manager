const express = require('express');
const salesProductController = require('../controllers/salesProducts.controller');
const validateSalesInput = require('../middlewares/validateSalesInput');
const validateSalesQuantityInput = require('../middlewares/validateSalesQuantityInput');
const { validateSalesProductIdInput } = require('../middlewares/validateSalesProductIdInput');

const router = express.Router();

router.post('/',
  validateSalesQuantityInput,
  validateSalesInput,
  validateSalesProductIdInput,
  salesProductController.addSalesProducts);

module.exports = router;
