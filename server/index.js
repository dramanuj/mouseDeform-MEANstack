var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// Create the application
var app = express();

// Add Middleware for rest api's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Override'));

// CORS support
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Test code Hello World
//app.use('/hello', function(req, res, next){
//   res.send('Hello World');
//    next();
//});

// Connect to MongoDB **** CHANGE PATH TO MATCH APP NAME******
mongoose.connect('mongodb://localhost/deformapp');

mongoose.connection.once('open', function(){   
    
    // Load the models
    app.models = require('./models/index');
    // Load the routes
    var routes = require('./routes');
    _.each(routes, function(controller, route){
           app.use(route,controller(app, route));           
    });
    
    console.log('Listening on port 3000......');
    app.listen(3000);

});