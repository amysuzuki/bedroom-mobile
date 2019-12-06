var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  let context = {};

  if(req.query.dest != undefined)
  {
    //destination options
    var destOptions = {};

    switch(req.query.dest)
    {
      case "1":
        destOptions.first = "1"
        break;
      default:
        //do nothing
    }

    context.rideOptions = req.query.ride

    //notify options
    /*
    Same Comment as rideOptions
    */
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

    context = {
      dest:destOptions,
      arrive:req.query.arrive,
      return:req.query.return,
      ride:rideOptions,
      notify:notifyOptions
    };
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
