const salesProductsService = require('../services/salesProducts.service');

const validateSaleIdExistsInput = async (req, res, next) => {
  const { id } = req.params;
  const sale = await salesProductsService.getById(id);

  if (!sale || sale.length < 1) {
    return res.status(404).json({ message: 'Sale not found' });
  }

  return next();
};

module.exports = {
  validateSaleIdExistsInput,
};
