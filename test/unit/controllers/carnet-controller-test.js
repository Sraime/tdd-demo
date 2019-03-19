/* eslint no-unused-expressions: 0 */
const chai = require('chai');
const sinon = require('sinon');
const chaiSinon = require('chai-sinon');

const { expect } = chai;
chai.use(chaiSinon);

const carnetController = require('../../../app/controllers/carnet-controller');

describe('carnet controller', () => {
  describe('getForm', () => {
    let response;
    before(() => {
      response = {
        render: sinon.fake(),
      };
    });
    it('should render the page', () => {
      carnetController.getForm({}, response);

      expect(response.render).to.have.been.called;
    });
  });
});
