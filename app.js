const express = require('express')
const exphbs  = require('express-handlebars');

const app = express();
const port = 4000

//include body parser so we can parse the bodies of post requests...
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

//Use Handlebars to template html
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Define Routes
const login = require('./routes/login');
const home = require('./routes/home');
app.use('/login', login);
app.use('/', home);

app.listen(port, () => console.log(`App listening on port ${port}.`))
