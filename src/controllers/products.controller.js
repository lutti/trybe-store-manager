const productsService = require('../services/products.service');

const getAllProducts = async (req, res) => {
  const products = await productsService.getAllProducts();
  res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.getById(id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(product);
};

const addProduct = async (req, res) => {
  const { name } = req.body;
  const sqlResponse = await productsService.addProduct(name);
  if (!sqlResponse) return res.status(400).json({ message: 'Product not added' });
  const [{ insertId }] = sqlResponse;
  // return res.status(201).json({ id: sqlResponse.insertId, name });
  return res.status(201).json({ id: insertId, name });
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const produto = {
    id,
    name,
  };
  await productsService.updateProduct(produto);
  
  // console.log(result);
  return res.status(200).json(produto);
};

module.exports = {
  getAllProducts,
  getById,
  addProduct,
  updateProduct,
};
