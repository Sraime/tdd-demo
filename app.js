const express = require('express')
const defaultController = require('./app/controller/default-controller')

const app = express()

app.use('/', defaultController)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})