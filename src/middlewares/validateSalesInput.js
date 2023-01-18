module.exports = (req, res, next) => {
  const productList = req.body;

  productList.forEach((p) => {
    if (!p.productId) return res.status(400).json({ message: '"productId" is required' });
    if (!p.quantity) return res.status(400).json({ message: '"quantity" is required' });
    if (+p.quantity <= 0) {
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
  });

  return next();
};