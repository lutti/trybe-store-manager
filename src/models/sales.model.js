const { connection } = require('./connection');

const addSales = async () => {
  const data = new Date().toISOString().slice(0, 19).replace('T', ' ');
  const result = await connection.execute(
    'INSERT INTO StoreManager.sales ( date ) VALUES ( ? )',
    [data],
  );
  return result;
};

module.exports = { addSales };
