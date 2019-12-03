var express = require('express');
var router = express.Router();

// define the home page route
router.get('/', function (req, res) {
  let context = {};
  context.title="View the Current Bedroom-Mobile Route and Position";
  //context.greeting ="Enter your criteria";
  context.route = {arrivalTime:"8pm Friday Morning",destination:"212 Gass Avenue, Las Vegas, NV 89101 The Arts District, Las Vegas, Downtown Las Vegas Las Vegas Nevada United States",origin:"1401 F Street, San Diego, CA 92101 San Diego, East Village, Downtown San Diego San Diego California United States",departureTime:""};
  context.pitstop = [{address:"West 21st Street, San Bernardino, CA 92411 San Bernardino San Bernardino California United States",latitude:"34.13471873440743",longitude:"-117.3139584183148",duration:15}];
  //context.registeredDocks = [{name: "exampleName", cost: 9.99}, {name: "exampleName2", cost: 9.99}, {name: "exampleName3", cost: 9.99}];

  res.render('TravelPage', context);
});

module.exports = router;
