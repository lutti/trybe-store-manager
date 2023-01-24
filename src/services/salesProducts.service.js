const salesModel = require('../models/sales.model');
const salesProductsModel = require('../models/salesProducts.model');

const addSalesProducts = async (salesList) => {
  const [{ insertId }] = await salesModel.addSales();
  const salesMapped = salesList.map((sale) => ({ saleId: insertId, ...sale }));
  const results = salesMapped.map((item) => salesProductsModel.addSalesProducts(item));
  await Promise.all(results);
  const formatedResult = { id: insertId, itemsSold: salesList };
  return formatedResult;
};

const getAll = async () => {
  const salesList = await salesProductsModel.getAllSalesProducts();
  return salesList;
};

const getById = async (id) => {
  const sale = await salesProductsModel.getById(id);
  return sale;
};

module.exports = {
  addSalesProducts,
  getAll,
  getById,
};
