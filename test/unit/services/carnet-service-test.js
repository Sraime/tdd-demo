
/* eslint no-unused-expressions: 0 */
const chai = require('chai');
const sinon = require('sinon');
const chaiSinon = require('chai-sinon');

const { expect } = chai;
chai.use(chaiSinon);

const carnetService = require('../../../app/services/carnet-service');

describe('carnet service', () => {
  describe('save', () => {
    let listPush;
    beforeEach(() => {
      listPush = sinon.spy(carnetService.list, 'push');
    });
    afterEach(() => {
      listPush.restore();
    });
    it('should save the object in a list', () => {
      const object = {
        nom: 'CANARY',
        prenom: 'Alice',
        tel: '0102030405',
      }
      carnetService.save(object);

      expect(listPush).to.have.been.calledWith(object);
    });
  });
});
