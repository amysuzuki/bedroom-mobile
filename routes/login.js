var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  res.render('login')
})

// define the about route
router.post('/', function (req, res) {
  let context = {};

  //if they clicked Bedroom-mobile Manager
  if (req.body['BMM']){
    console.log("Open Bedroom-mobile manager");
    context.title = "Bedroom-mobile Manager";
  };

  //if they clicked Docking Terminal Manager
  if (req.body['DTM']){
    console.log("Open Bedroom-mobile manager");
    context.title = "Bedroom-mobile Manager";
  };

  context.inputEmail = req.body.inputEmail;
  context.inputPassword = req.body.inputPassword;
  context.greeting = "Welcome " + context.inputEmail + "This is what the " +context.title + " home page looks like!";
  res.render('home', context);
  //res.send('Recieved Login');
});

module.exports = router
