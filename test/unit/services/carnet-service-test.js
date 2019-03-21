
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
    let validateFct;

    beforeEach(() => {
      listPush = sinon.spy(carnetService.list, 'push');
      validateFct = sinon.stub(carnetService, 'validateContact').returns(null);
    });

    afterEach(() => {
      listPush.restore();
      validateFct.restore();
    });

    it('should save Alice in a list', () => {
      const object = {
        nom: 'CANARY',
        prenom: 'Alice',
        tel: '0102030405',
      };
      carnetService.save(object);

      expect(listPush).to.have.been.calledWith(object);
    });

    it('should save Bob in a list', () => {
      const object = {
        nom: 'BABOUCHE',
        prenom: 'Bob',
        tel: '0102030405',
      };
      carnetService.save(object);

      expect(listPush).to.have.been.calledWith(object);
    });

    it('should return an error when the object is not valide', () => {
      const missingError = { missing: ['tel'] };
      validateFct.returns(missingError);

      const result = carnetService.save({ nom: 'CANARY', prenom: 'Alice' });

      expect(listPush).to.have.not.been.called;
      expect(result).to.deep.equal(missingError);
    });
  });

  describe('validateContact', () => {
    it('should return null when the tel, nom and prenom are not empty', () => {
      const contact = {
        nom: 'BABOUCHE',
        prenom: 'Bob',
        tel: '0102030405',
      };

      const result = carnetService.validateContact(contact);

      expect(result).to.be.null;
    });

    it('should return an error object when the tel information is missing', () => {
      const contact = {
        nom: 'BABOUCHE',
        prenom: 'Bob',
      };

      const result = carnetService.validateContact(contact);

      expect(result).to.deep.equal({ missing: ['tel'] });
    });

    it('should return an error object when the nom information is missing', () => {
      const contact = {
        prenom: 'Bob',
        tel: '0102030405',
      };

      const result = carnetService.validateContact(contact);

      expect(result).to.deep.equal({ missing: ['nom'] });
    });

    it('should return an error object when the nom and prenom information is missing', () => {
      const contact = {
        tel: '0102030405',
      };

      const result = carnetService.validateContact(contact);

      expect(result).to.deep.equal({ missing: ['nom', 'prenom'] });
    });
  });
});
