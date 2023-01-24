const productsService = require('../services/products.service');

const validateSalesProductIdInput = async (req, res, next) => {
  const productList = req.body;
  const results = [];

  for (let i = 0; i < productList.length; i += 1) {
    results.push(productsService.getById(+productList[i].productId)); 
  }

  const results2 = await Promise.all(results);

  for (let i = 0; i < results2.length; i += 1) {
    if (!results2[i]) {
      return res.status(404).json({ message: 'Product not found' });
    }
  }

  return next();
};

module.exports = {
  validateSalesProductIdInput,
};
