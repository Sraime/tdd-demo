const carnetService = require('../services/carnet-service');

const CarnetController = {

  homePage(req, res) {
    res.render('index');
  },

  getForm(req, res) {
    res.render('addForm');
  },

  addContact(req, res) {
    const contact = {
      nom: req.body.nom,
      prenom: req.body.prenom,
      tel: req.body.tel,
    };
    const errors = carnetService.save(contact);
    if (errors) { res.render('addForm', { errors, nom: contact.nom, prenom: contact.prenom }); }
    res.render('addForm', { nom: contact.nom, prenom: contact.prenom });
  },
};

module.exports = CarnetController;
