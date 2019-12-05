var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  let context = {};
  context.electricity={
    current:70,
    max:100,
    saverStatus:"true"
  };
  context.water={
    current:70,
    max:100,
    saverStatus:true
  };
  context.wifi={
    current:70,
    max:100,
    status:true
  };
  context.lights={
    status:true
  };
  context.room={
    bed:true,
    table:true
  };
  context.door={
    locked:true
  };
  res.render('utilities', context);
});

module.exports = router
