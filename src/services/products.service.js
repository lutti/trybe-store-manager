const productsModel = require('../models/products.model');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  return products;
};

const getById = async (idNumber) => { 
  const product = await productsModel.getById(idNumber);
  return product;
};

module.exports = {
  getAllProducts,
  getById,
};
