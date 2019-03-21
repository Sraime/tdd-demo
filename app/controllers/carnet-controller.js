const carnetService = require('../services/carnet-service');

const CarnetController = {

  getForm(req, res) {
    res.render('index');
  },

  addContact(req, res) {
    carnetService.save({ nom: "CANARY", prenom: "Alice", tel: "0102030405" });
    res.render('index', { nom: "CANARY", prenom: "Alice" });
  },
};

module.exports = CarnetController;
