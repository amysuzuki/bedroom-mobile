const express = require('express')
const exphbs  = require('express-handlebars');

const app = express();
const port = 4000

//Use Handlebars to template html
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//For css, javascript
app.use('/static', express.static('public'));

//Define Routes
const login = require('./routes/login');
const home = require('./routes/home');
const homepage = require('./routes/homepage');
app.use('/login', login);
app.use('/', home);
app.use('/homepage', homepage);

app.listen(port, () => console.log(`App listening on port ${port}.`))
