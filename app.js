const express = require('express')
const exphbs  = require('express-handlebars');

const app = express();
const port = 4000

//Get Root of project
var path = require('path');
global.appRoot = path.resolve(__dirname);

//include body parser so we can parse the bodies of post requests...
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

//Use Handlebars to template html
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//For css, javascript
app.use('/static', express.static('public'));

//Define Routes
const login = require('./routes/login');
const homepage = require('./routes/homepage');
const filter = require('./routes/filterInterface');
const utilities = require('./routes/utilities');
const planner = require('./routes/planner');

app.use('/login', login);
app.use('/', login);
app.use('/homepage', homepage);
app.use('/planner', planner);
app.use('/utilities', utilities);
app.use('/filterInterface', filter);

app.listen(port, () => console.log(`App listening on port ${port}.`))
