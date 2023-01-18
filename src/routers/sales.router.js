const express = require('express');
const salesProductController = require('../controllers/salesProducts.controller');
const validateSalesInput = require('../middlewares/validateSalesInput');

const router = express.Router();

router.post('/', validateSalesInput, salesProductController.addSalesProducts);

module.exports = router;
