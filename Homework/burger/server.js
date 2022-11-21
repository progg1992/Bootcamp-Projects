const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// Set the server port to a dynamic value for deployment and to 3000 for local development
const port = process.env.PORT || 3000;

const app = express();

// Set up middleware
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Setup Handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes from the Controllers folder
const routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(port);