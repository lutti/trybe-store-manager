const { connection } = require('./connection');

const addSalesProducts = async (salesProducts) => {
  const result = await connection.execute(
    'INSERT INTO StoreManager.sales_products ( sale_id, product_id, quantity ) VALUES ( ?, ?, ? )',
    [Number(salesProducts.saleId), Number(salesProducts.productId), Number(salesProducts.quantity)],
  );
  return result;
};

module.exports = {
  addSalesProducts,
};
