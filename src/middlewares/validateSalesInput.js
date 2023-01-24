module.exports = (req, res, next) => {
  const productList = req.body;

  for (let i = 0; i < productList.length; i += 1) {
    if (!productList[i].productId) {
      return res.status(400).json({ message: '"productId" is required' });
    } 
    if (!productList[i].quantity) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
  }

  return next();
};