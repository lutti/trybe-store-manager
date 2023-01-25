const productsModel = require('../models/products.model');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  return products;
};

const getById = async (idNumber) => { 
  const product = await productsModel.getById(idNumber);
  return product;
};

const addProduct = async (prod) => {
  const result = await productsModel.addProduct(prod);
  return result;
};

const updateProduct = async (prod) => {
  const result = await productsModel.updateProduct(prod);
  return result;
};

module.exports = {
  getAllProducts,
  getById,
  addProduct,
  updateProduct,
};
