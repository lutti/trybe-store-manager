const salesProductsService = require('../services/salesProducts.service');

const addSalesProducts = async (req, res) => {
  const lista = req.body;
  const result = await salesProductsService.addSalesProducts(lista);
  return res.status('201').json(result);
};

const getAllSalesProducts = async (req, res) => {
  const sales = await salesProductsService.getAll();
  return res.status('200').json(sales);
};

const getByIdSalesProducts = async (req, res) => {
  const { id } = req.params;
  const sale = await salesProductsService.getById(id);
  return res.status('200').json(sale);
};

module.exports = {
  addSalesProducts,
  getAllSalesProducts,
  getByIdSalesProducts,
};
