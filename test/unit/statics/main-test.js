const chai = require('chai');
const sinon = require('sinon');
const chaiSinon = require('chai-sinon');

const { expect } = chai;
chai.use(chaiSinon);

const main = require('../../../statics/main');

describe('main js static file', () => {
  describe('onFieldChange', () => {
    let objBtn;
    beforeEach(() => {
      global.document = {
        getElementById: sinon.stub(),
      };

      objBtn = { disabled: true };
      global.document.getElementById.withArgs('btn-enregistrer').returns(objBtn);
    });

    it('sould enable button button when all field are complited', () => {
      global.document.getElementById.withArgs('input-nom').returns({ value: 'NNNN' });
      global.document.getElementById.withArgs('input-prenom').returns({ value: 'PPPP' });
      global.document.getElementById.withArgs('input-tel').returns({ value: '000000' });

      main.onFieldChange();

      expect(global.document.getElementById).to.have.been.calledWith('input-nom');
      expect(global.document.getElementById).to.have.been.calledWith('input-prenom');
      expect(global.document.getElementById).to.have.been.calledWith('input-tel');
      expect(global.document.getElementById).to.have.been.calledWith('btn-enregistrer');
      expect(objBtn.disabled).to.equal(false);
    });

    it('should not enable button if the field nom is not set', () => {
      global.document.getElementById.withArgs('input-nom').returns({ value: '' });
      global.document.getElementById.withArgs('input-prenom').returns({ value: 'PPPP' });
      global.document.getElementById.withArgs('input-tel').returns({ value: '000000' });

      main.onFieldChange();

      expect(global.document.getElementById).to.have.been.calledWith('input-nom');
      expect(global.document.getElementById).to.have.not.been.calledWith('input-prenom');
      expect(global.document.getElementById).to.not.have.been.calledWith('input-tel');
      expect(global.document.getElementById).to.have.not.been.calledWith('btn-enregistrer');
      expect(objBtn.disabled).to.equal(true);
    });
  });
});
