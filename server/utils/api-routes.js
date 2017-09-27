var db = require("../models/index.js");
var path = require('path');
const signupController = require('./create_new_User.js');
const passport = require('passport');
const setupPassport = require('./setupPassport.js');

module.exports = function(app) {
  let isAuthenticated = function(req, res, next){
    if(req.isAuthenticated())
      return next()
    req.flash('error', 'Need to be logged in')
    res.redirect('/')
  } 

  app.post('/signup', signupController.signup);

    app.post('/login', function(req, res, next) {
      passport.authenticate('local', {failureFlash:true}, function(err, user, info) {
        console.log(user)
        let userid = user.id;
       if (err) { return next(err); }
       if (!user) { return res.redirect('/'); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
       return res.redirect('http://localhost:3000/user/affiliate?id=' + userid);
     });
    })(req, res, next);
  });


  app.get("/api/user", function(req, res) {
  db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/user", function(req, res) {
    console.log(req.body);
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser)
    });
  });

  app.get("/api/lead", function(req, res) {
  db.Lead.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/lead", function(req, res) {
    console.log(req.body);
    db.Lead.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.delete("/api/lead/:id", function(req, res) {
    db.Lead.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser)
    });
  });
}

app.get("*", function(req, res) {
  if ( process.env.NODE_ENV === 'production' ) {
    res.sendFile(__dirname + "/client/build/index.html");
  } else {
    res.sendFile(__dirname + "/client/public/index.html");
  }
});