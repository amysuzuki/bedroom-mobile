var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  let context = {};
  //console.log(req.query.dest); //test if there are parameters with the request
  if(req.query.dest != undefined)
  {
    //destination options
    var destOptions = {};
    switch(req.query.dest) 
    {
      case "1":
        destOptions.first = "1"
        break;
    } 

    //rideSetting options
    var rideOptions = {};
    switch(req.query.ride) 
    {
      case "1":
        rideOptions.first = "1"
        break;
      case "2":
        rideOptions.second = "2"
        break;
    } 

    //notify options
    var notifyOptions = {};
    switch(req.query.notify) 
    {
      case "1":
        notifyOptions.first = "1"
        break;
      case "2":
        notifyOptions.second = "2"
        break;
      case "3":
        notifyOptions.third = "3"
        break;
    } 
    context = {dest:destOptions, arrive:req.query.arrive, return:req.query.return, ride:rideOptions, notify:notifyOptions};
  }
  //console.log(context); //test context under different conditions
  res.render('planner', context);
});

//Process Requests from the planner html form and redirect information to travelInterface
router.post('/', function(req, res) {
  let query = '?';
  query += `dest=${req.body.destination}`;
  query += `&arrive=${req.body.arriveTime}`;
  query += `&return=${req.body.returnTime}`;
  query += `&ride=${req.body.rideSetting}`;
  query += `&notify=${req.body.notificationSetting}`
  res.redirect(`/travelInterface${query}`)
})

module.exports = router

//estimateTripFuelUse() calculates how many fuel stops are required for a trip based on the origin
//and destination locations passed to it by using the AutoDriving system's mapping trip management software
function estimateTripFuelUse(origin, destination){
  distance = bedroomMobile.autoDriver.getDistance(origin, destination);
  fuelRequired = distance * bedroomMobile.utilities.avgMPG;
  numRefuels = fuelRequired/ bedroomMobile.utilities.fuelCapacity;
  return numRefuels;
}
