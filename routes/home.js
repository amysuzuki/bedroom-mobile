var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  let context = {};
  context.title="Home";
  context.greeting ="Hello";

  res.render('home', context);
});

module.exports = router
