var express = require('express');
var router = express.Router();

// define the home page route
router.get('/', function (req, res) {
  let context = {};
  context.title="View the Current Bedroom-Mobile Route and Position";
  //context.greeting ="Enter your criteria";
  //context.route = {time:"8pm Friday Morning",stop:"Grandma's House"};

  if(req.query.dest != undefined && req.query.dest != "") {
  	  //highly coupled with planer, not good, need to think a better way later
  	  var destination;
  	  switch(req.query.dest)
  	  {
  	  	case "1":
  	  		destination = "212 Gass Avenue, Las Vegas, NV 89101 The Arts District, Las Vegas, Downtown Las Vegas Las Vegas Nevada United States"
  	  		break;
  	  }
      //most attributes here are used to convey parameters back to planner page

      context.route = {
        arrivalTime:req.query.arrive,
        destination:destination,
        origin:"1401 F Street, San Diego, CA 92101 San Diego, East Village, Downtown San Diego San Diego California United States",
        departureTime:"",
        dest:req.query.dest,
        return:req.query.return,
        ride:req.query.ride,
        notify:req.query.notify};

      context.pitstop = [{address:"West 21st Street, San Bernardino, CA 92411 San Bernardino San Bernardino California United States",latitude:"34.13471873440743",longitude:"-117.3139584183148",duration:15}];

      let autoDriver = {
        avgMPG: 30,
        fuelCapacity: 50
      }
      autoDriver.stopsRequired = estimateTripFuelUse(0, 100, autoDriver);
      context.bedroomMobile = {};
      context.bedroomMobile.autoDriver = autoDriver;
  }

  //context.route = {arrivalTime:"8pm Friday Morning",destination:"212 Gass Avenue, Las Vegas, NV 89101 The Arts District, Las Vegas, Downtown Las Vegas Las Vegas Nevada United States",origin:"1401 F Street, San Diego, CA 92101 San Diego, East Village, Downtown San Diego San Diego California United States",departureTime:""};
  //context.pitstop = [{address:"West 21st Street, San Bernardino, CA 92411 San Bernardino San Bernardino California United States",latitude:"34.13471873440743",longitude:"-117.3139584183148",duration:15}];
  //context.registeredDocks = [{name: "exampleName", cost: 9.99}, {name: "exampleName2", cost: 9.99}, {name: "exampleName3", cost: 9.99}];

  res.render('TravelPage', context);
});

module.exports = router;

//estimateTripFuelUse() calculates how many fuel stops are required for a trip based on the origin
//and destination locations passed to it by using the AutoDriving system's mapping trip management software
function estimateTripFuelUse(origin, destination, autoDriver){
  //distance = bedroomMobile.autoDriver.distance;
  console.log("Calculating stops");
  distance = destination - origin;
  fuelRequired = distance * autoDriver.avgMPG;

  numRefuels = fuelRequired/ autoDriver.fuelCapacity;
  return numRefuels;
}
