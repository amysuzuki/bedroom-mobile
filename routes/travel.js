var express = require('express');
var router = express.Router();

// define the home page route
router.get('/', function (req, res) {
  // let context = {};
  // context.title="View the Current Bedroom-Mobile Route and Position";
  // //context.greeting ="Enter your criteria";
  // context.route = {time:"8pm Friday Morning",stop:"Grandma's House"};
  // //context.registeredDocks = [{name: "exampleName", cost: 9.99}, {name: "exampleName2", cost: 9.99}, {name: "exampleName3", cost: 9.99}];
  // 
  // res.render('TravelPage', context);
  res.render('login')
});

module.exports = router;
