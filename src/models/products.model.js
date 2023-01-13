const { connection } = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products;');
  return result;
};

module.exports = {
  getAllProducts,
};