var express = require('express')
var fs = require('fs');
let passwordFile = (`${appRoot}/auth.json`);

var router = express.Router()

// Do not let users access homepage without logging in. Redirect to login
router.get('/', function(req, res) {
  res.redirect('/');
});

// define the about route
router.post('/', function (req, res) {
  if (!req.body.inputEmail || !req.body.inputPassword) {
    res.redirect('/');
    return;
  }

  if (!authenticate(req.body.inputEmail, req.body.inputPassword)) {
    res.redirect('/?error=noPass');
    return;
  }

  res.render('homepage');
})

function authenticate(username, password) {

  //Read in password
  let auth = fs.readFileSync(passwordFile);
  auth = JSON.parse(auth);

  if (!Object.keys(auth).includes(username)) {
    console.log('Username unfound')
    return false;
  }

  if (auth[username] !== password) {
    console.log('Password incorrect');
    return false;
  }
  return true;
}

module.exports = router
