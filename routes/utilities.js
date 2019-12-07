var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  let context = {};
  
  context.electricity = getData("electricity");
  context.water = getData("water");
  context.wifi = getData("wifi");
  context.lights = getData("lights");
  context.room = getData("room");
  context.door = getData("door");

  res.render('utilities', context);
});

//API to get uility status
function getData(utility)
{
  var result;
  switch(utility) 
  {
    case "electricity":
      result = {
        current:70,
        max:100,
        saverStatus:true
      };
      break;
    case "water":
      result={
        current:70,
        max:100,
        saverStatus:true
      }; 
      break;
    case "wifi":
      result={
        current:70,
        max:100,
        status:true
      };         
      break;
    case "lights":
      result={
        status:false
      };          
      break;
    case "room":
      result={
        bed:true,
        table:true 
      };          
      break;
    case "door":
      result={
        locked:true 
      };          
      break;
  } 
  return result;
}

module.exports = router
