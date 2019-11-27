var express = require('express')
var router = express.Router()

// define the home page route (home of homepage)
router.get('/', function (req, res) {
  res.render('homepage')
})

// define the about route
router.post('/', function (req, res) {
  res.send('Recieved homepage')
})


module.exports = router