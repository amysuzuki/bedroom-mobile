var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  let context = {};

  context.title="Search for Docks";
  context.greeting ="Enter your criteria";
  context.dockingTerminals = [{name: "Thunder Creak", cost: 9.99}, {name: "Pine Meadows ", cost: 9.99}, {name: "Kent KOAPlace", cost: 9.99}];
  context.registeredDocks = [{name: "Home", cost: 9.99}, {name: "Grandma's", cost: 9.99}, {name: "Nick's Place", cost: 9.99}];

  //redirect way
  /*if(req.session.valid != undefined && req.session.valid == true)
  {
  	  context = req.session.context;
      req.session.valid = false;
  }
  else
  {
      context.title="Search for Docks";
      context.greeting ="Enter your criteria";
      context.dockingTerminals = [{name: "exampleName", cost: 9.99}, {name: "exampleName2", cost: 9.99}, {name: "exampleName3", cost: 9.99}];
      context.registeredDocks = [{name: "exampleName", cost: 9.99}, {name: "exampleName2", cost: 9.99}, {name: "exampleName3", cost: 9.99}];
  }*/

  res.render('FilterInterface', context);
});

router.get('/search', function (req, res) {
  let context = {};
  context.title="Search for Docks";
  context.greeting ="Enter your criteria";
  context.dockingTerminals = search(req.query.cityName);
  context.searchRecord = req.query.cityName;
  context.registeredDocks = [{name: "Home", cost: 9.99}, {name: "Grandma's", cost: 9.99}, {name: "Nick's Place", cost: 9.99}];
  
  //render way
  res.render('FilterInterface', context);

  //redirect way
  /*req.session.valid = true;
  req.session.context = context;
  res.redirect('/FilterInterface');*/
});

function search(cityName) {
	//imitate database search function
  if(cityName != "" && cityName != null && cityName != undefined)
      cityName.toLowerCase();
	var database = [{name: "Thunder Creak", cost: 9.99, city: "Los Angeles"}, 
	                {name: "Pine Meadows ", cost: 9.99, city: "Seattle"}, 
	                {name: "Kent KOAPlace", cost: 9.99, city: "New York"}];
    var results = database.filter(function(dockingTerminal) {
        return dockingTerminal.city.toLowerCase() == cityName;
    });
    return results;
}

module.exports = router
