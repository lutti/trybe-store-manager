const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../src/models/products.model');

const { connection } = require('../../../src/models/connection');
const { product, products, productsFromDB, productFromDB } = require('../mocks/product.model.mocks');

describe('Testa model de products', function () { 
  it('Retorno de getAll lista de products', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves(productsFromDB);
    // Act
    const result = await productsModel.getAllProducts();
    // Assert
    expect(result).to.be.deep.equal(products);
  });

  it('Retorno de getById de products', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([[product]]);
    // Act
    const result = await productsModel.getById(1);
    // Assert
    expect(result).to.be.deep.equal(product);
  });

  afterEach(function () {
    sinon.restore();
  });
});