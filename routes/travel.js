var express = require('express');
var router = express.Router();

// define the home page route
router.get('/', function (req, res) {
  let context = {};
  //console.log(req.query.dest); //test 
  context.title="View the Current Bedroom-Mobile Route and Position";
  //context.greeting ="Enter your criteria";
  //context.route = {time:"8pm Friday Morning",stop:"Grandma's House"};
  if(req.query.dest != undefined)
  {
  	  //highly coupled with planer, not good, need to think a better way later
  	  var destination;
  	  switch(req.query.dest) 
  	  {
  	  	case "1":
  	  		destination = "Las Vegas"
  	  		break;
  	  }               //most attributes here are used to convey parameters back to planner page
      context.route = {time:req.query.arrive, stop:destination, dest:req.query.dest, return:req.query.return, ride:req.query.ride, notify:req.query.notify};
  }
  //console.log(context); //test context under different conditions
  
  //context.registeredDocks = [{name: "exampleName", cost: 9.99}, {name: "exampleName2", cost: 9.99}, {name: "exampleName3", cost: 9.99}];

  res.render('TravelPage', context);
});

module.exports = router;
