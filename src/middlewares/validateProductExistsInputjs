const productsModel = require('../models/products.model');

const validateProductID = (req, res, next) => {
  const productList = req.body;
  let productNotFound = false;

  productList.forEach((p) => {
    if (!productsModel.getById(p.productId)) {
      productNotFound = true;
    }
  });
  // console.log('Executou next');
  if (productNotFound) return res.status(404).json({ message: 'Product not found' });
  return next();
};

module.exports = validateProductID;
