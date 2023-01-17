const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/products.model');
const productsService = require('../../../src/services/products.service');
const { products } = require('../mocks/product.model.mocks');

describe('Testa service de products', function () {
  it('Retorno de getAll lista de products', async function () {
    // Arrange
    sinon.stub(productsModel, 'getAllProducts').resolves(products);
    // Act
    const result = await productsService.getAllProducts();
    // Assert
    expect(result).to.be.deep.equal(products);
  });

  afterEach(function () {
    sinon.restore();
  });
});