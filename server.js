var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

//PARSE
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));


//ROUTER
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);


//LISTENER
app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});