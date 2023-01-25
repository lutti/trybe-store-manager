const productsService = require('../services/products.service');

const validateProductIdExistsInput = async (req, res, next) => {
  const { id } = req.params;
  const product = await productsService.getById(id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return next();
};

module.exports = {
  validateProductIdExistsInput,
};
