const express = require('express');
const salesProductController = require('../controllers/salesProducts.controller');

const router = express.Router();

router.post('/', salesProductController.addSalesProducts);

module.exports = router;
