const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { products } = require('../mocks/product.model.mocks');
const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');

describe('Testa controller de products', function () {
  it('Retorno de getAll lista de products', async function () {
    const res = {};
    const req = { params: { travelId: 1, driverId: 9999 }, body: {} };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'getAllProducts')
      .resolves(products);

    await productsController.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });

  afterEach(function () {
    sinon.restore();
  });
});