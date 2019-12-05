var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  let context = {};
  context.electricity={
    current:70,
    max:100,
    saverStatus: 1
  };
  context.water={
    current:70,
    max:100,
    saverStatus:1
  };
  context.wifi={
    current:70,
    max:100,
    status:1
  };
  context.lights={
    status:1
  };
  context.room={
    bed:1,
    table:1
  };
  context.door={
    locked:1
  };
  res.render('utilities', context);
});

module.exports = router
