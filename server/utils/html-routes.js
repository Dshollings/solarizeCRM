var path = require('path');

module.exports = function(app) {
  app.get("/dashboard", function(req, res) {
    res.redirect("https://solarizeinfo.herokuapp.com/dashboard.html");
  });
  app.get("/user", function(req, res) {
    res.redirect("https://solarizeinfo.herokuapp.com/user.html");
  });
  app.get("/table", function(req, res) {
    res.redirect("https://solarizeinfo.herokuapp.com/table.html");
  });
  app.get("/maps", function(req, res) {
    res.redirect("https://solarizeinfo.herokuapp.com/maps.html");
  }); 
}