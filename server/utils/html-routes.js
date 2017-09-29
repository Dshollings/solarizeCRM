var path = require('path');

module.exports = function(app) {
  app.get("/dashboard", function(req, res) {
    res.redirect("https://afternoon-eyrie-66951.herokuapp.com/dashboard.html");
  });
  app.get("/user", function(req, res) {
    res.redirect("https://afternoon-eyrie-66951.herokuapp.com/user.html");
  });
  app.get("/table", function(req, res) {
    res.redirect("https://afternoon-eyrie-66951.herokuapp.com/table.html");
  });
  app.get("/maps", function(req, res) {
    res.redirect("https://afternoon-eyrie-66951.herokuapp.com/maps.html");
  });
  app.get("/leadinfo", function(req, res) {
    res.redirect("https://afternoon-eyrie-66951.herokuapp.com/leadinfo.html");
  });
