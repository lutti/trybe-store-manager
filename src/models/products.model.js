const { connection } = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products;');
  return result;
};

const getById = async (idNumber) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;',
    [Number(idNumber)],
  );
  return result;
};

module.exports = {
  getAllProducts,
  getById,
};