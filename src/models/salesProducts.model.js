const { connection } = require('./connection');

const addSalesProducts = async (salesProducts) => {
  const result = await connection.execute(
    'INSERT INTO StoreManager.sales_products ( sale_id, product_id, quantity ) VALUES ( ?, ?, ? )',
    [Number(salesProducts.saleId), Number(salesProducts.productId), Number(salesProducts.quantity)],
  );
  return result;
};

const getAllSalesProducts = async () => {
  const [result] = await connection.execute(
    `SELECT sp.sale_id as saleId, s.date, sp.product_id as productId, sp.quantity 
    FROM StoreManager.sales_products sp 
    INNER JOIN StoreManager.sales s ON sp.sale_id = s.id;`,
  );
  return result;
};

const getById = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT s.date, sp.product_id as productId, sp.quantity FROM StoreManager.sales_products sp 
    INNER JOIN StoreManager.sales s ON sp.sale_id = s.id
    WHERE sp.sale_id = ?;`,
    [+saleId],
  );
  return result;
};

module.exports = {
  addSalesProducts,
  getAllSalesProducts,
  getById,
};
