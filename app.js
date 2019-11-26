const express = require('express')
const exphbs  = require('express-handlebars');

const app = express();
const port = 4000

//Use Handlebars to template html
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Define Routes
const login = require('./routes/login');
const home = require('./routes/home');
app.use('/login', login);
app.use('/', home);

app.listen(port, () => console.log(`App listening on port ${port}.`))
