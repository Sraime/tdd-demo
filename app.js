const express = require('express');
const routes = require('./app/routes');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static('statics'))
app.use('/', routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})