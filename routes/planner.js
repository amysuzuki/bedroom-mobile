var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  let context = {};
  res.render('planner', context);
});

module.exports = router

//estimateTripFuelUse() calculates how many fuel stops are required for a trip based on the origin 
//and destination locations passed to it by using the AutoDriving system's mapping trip management software
function estimateTripFuelUse(origin, destination){
  distance = bedroomMobile.autoDriver.getDistance(origin, destination);
  fuelRequired = distance * bedroomMobile.utilities.avgMPG;
  numRefuels = fuelRequired/ bedroomMobile.utilities.fuelCapacity;
  return numRefuels;
}