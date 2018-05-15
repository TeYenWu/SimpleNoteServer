var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/Notedb');

var note = require('./models/simpleNoteModel.js')  //created model loading here


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/router.js'); //importing route
routes(app); //register the route


app.listen(port);


console.log('note list RESTful API server started on: ' + port);
