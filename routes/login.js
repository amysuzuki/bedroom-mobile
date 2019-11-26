var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  res.render('login')
})

// define the about route
router.post('/', function (req, res) {
  res.send('Recieved Login')
})

module.exports = router
