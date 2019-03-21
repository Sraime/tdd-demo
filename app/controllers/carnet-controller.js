const carnetService = require('../services/carnet-service');

const CarnetController = {

  getForm(req, res) {
    res.render('index');
  },

  addContact(req, res) {
    carnetService.save({ nom: req.body.nom, prenom: req.body.prenom, tel: req.body.tel });
    res.render('index', { nom: req.body.nom, prenom: req.body.prenom });
  },
};

module.exports = CarnetController;
