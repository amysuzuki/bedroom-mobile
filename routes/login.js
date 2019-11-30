var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {

  let context = {};

  if (req.query.error) {
    if (req.query.error === 'noPass') {
      context.error = 'Username/Password is invalid.'
    } else {
      context.error = 'Login Error'
    }
  }

  res.render('login', context);
})

module.exports = router
