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

const addProduct = async (prod) => {
  if (!prod) return false;
  const result = await connection.execute(
    'INSERT INTO StoreManager.products ( name ) VALUES ( ? )',
    [prod],
  );
  return result;
};

const updateProduct = async (prod) => {
  if (!prod) return false;
  const result = await connection.execute(
    `UPDATE StoreManager.products
      SET name = "${prod.name}"
    WHERE id = ${prod.id};`,
  );
  return result;
};

module.exports = {
  getAllProducts,
  getById,
  addProduct,
  updateProduct,
};