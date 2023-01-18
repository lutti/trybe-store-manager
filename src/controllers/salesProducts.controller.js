const salesProductsService = require('../services/salesProducts.service');

const addSalesProducts = async (req, res) => {
  const lista = req.body;
  const result = await salesProductsService.addSalesProducts(lista);
  return res.status('201').json(result);
};

module.exports = { addSalesProducts };
