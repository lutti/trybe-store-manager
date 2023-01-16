const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../src/models/products.model');

const { connection } = require('../../../src/models/connection');
const { products, productsFromDB } = require('./mocks/product.model.mocks');

describe('Testa model de products', function () { 
  it('Retorno de getAll lista de products', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([products, undefined]);
    // Act
    const result = await productsModel.getAllProducts();
    // Assert
    expect(result).to.be.deep.equal(products);
  });

  afterEach(function () {
    sinon.restore();
  });
});