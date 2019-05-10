const carnetService = require('../services/carnet-service');

const CarnetController = {

  getForm(req, res) {
    res.render('index');
  },

  addContact(req, res) {
    const contact = {
      nom: req.body.nom,
      prenom: req.body.prenom,
      tel: req.body.tel,
    };
    const errors = carnetService.save(contact);
    if (errors) { res.render('index', { errors, nom: contact.nom, prenom: contact.prenom }); }
    res.render('index', { nom: contact.nom, prenom: contact.prenom });
  },
};

module.exports = CarnetController;
