// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the login page
    if (req.user) {
      res.redirect("/login");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the login page
    res.redirect("/blog");
    // res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  // Each route below handles the HTML page that user is sent to.

  // cms route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  // restaurants route loads restaurant-manager.html
  app.get("/restaurants", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/restaurant-manager.html"));
  });


//===============================
//Load ALL Events Page
// app.get("/events", function(req, res) {
//   db.Event.findAll({}).then(function(results) {
//     res.render("events", {
//       Event: results
//     });
//   });
// });

//===============================
//Load One Event by ID
// app.get("/events/:id", function(req, res) {
//   db.Event.findOne({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(results) {
//     res.render("oneEvent", {
//     Event: results
//     });
//   });
// });

//===============================
//Add New Event
// app.get("/newevent", function(req,res) {
//   db.Event.findAll({
//     limit: 3
//   }).then(function(results) {
//     res.render("add", {
//       Event: results
//     });
// });
// });

//===============================
// Render 404 page for any unmatched routes
// app.get("*", function(req, res) {
//   res.render("404");
// });


};