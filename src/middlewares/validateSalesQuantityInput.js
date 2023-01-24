module.exports = (req, res, next) => {
  const productList = req.body;

  for (let i = 0; i < productList.length; i += 1) {
    if (+productList[i].quantity <= 0) {
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
  }

  return next();
};