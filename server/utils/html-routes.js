var path = require('path');

module.exports = function(app) {
  app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/dashboard/dashboard.html"));
  });
  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/dashboard/user.html"));
  });
  app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/dashboard/table.html"));
  });
  app.get("/maps", function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/dashboard/maps.html"));
  });
}