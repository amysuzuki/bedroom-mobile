var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  let context = {};
  context.title="Search for Docks";
  context.greeting ="Enter your criteria";
  context.dockingTerminals = [{name: "exampleName", cost: 9.99}, {name: "exampleName2", cost: 9.99}, {name: "exampleName3", cost: 9.99}];
  context.registeredDocks = [{name: "exampleName", cost: 9.99}, {name: "exampleName2", cost: 9.99}, {name: "exampleName3", cost: 9.99}];

  res.render('FilterInterface', context);
});

module.exports = router
