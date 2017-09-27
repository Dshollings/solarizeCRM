 // *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var setupPassport = require("./utils/setupPassport");
var flash = require('connect-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

app.use(cookieParser())
app.use(session({ secret: '4564f6s4fdsfdfd', resave: false, saveUninitialized: false }))

app.use(flash())
app.use(function(req, res, next) {
    res.locals.errorMessage = req.flash('error')
    next()
});

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

setupPassport(app);
// app.use(express.static("./client/public"));
// app.get("*", function(req, res) {
  if ( process.env.NODE_ENV === 'production' ) {
    app.use(express.static("./client/build"));
  } else {
    app.use(express.static("./client/public"));
  }
// });

// Enable CORS so that browsers don't block requests.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

require("./utils/api-routes.js")(app);

// app.get("*", function(req, res) {
//   if ( process.env.NODE_ENV === 'production' ) {
//      app.use(express.static("client/build"));
//   } else {
//      app.use(express.static("client/public"));
//   }
// });



// Syncing our sequelize models and then starting our express app
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
