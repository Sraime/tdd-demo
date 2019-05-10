const express = require('express');

const router = express.Router();
const carnetController = require('./controllers/carnet-controller');

router.get('/', carnetController.getForm);
router.post('/', carnetController.addContact);


module.exports = router;
