const express = require('express');

const router = express.Router();
const carnetController = require('./controllers/carnet-controller');

router.get('/', carnetController.homePage);
router.get('/add', carnetController.getForm);
router.post('/add', carnetController.addContact);


module.exports = router;
