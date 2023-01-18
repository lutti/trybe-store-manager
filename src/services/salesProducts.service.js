const salesModel = require('../models/sales.model');
const salesProductsModel = require('../models/salesProducts.model');

const addSalesProducts = async (salesList) => {
  const [{ insertId }] = await salesModel.addSales();
  const salesMapped = salesList.map((sale) => ({ saleId: insertId, ...sale }));
  salesMapped.forEach(async (item) => salesProductsModel.addSalesProducts(item));
  const formatedResult = { id: insertId, itemsSold: salesMapped };
  return formatedResult;
};

module.exports = {
  addSalesProducts,
};
