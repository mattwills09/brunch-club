
var db = require("../models");

module.exports = function(app) {

//===============================
//Get ALL Events
  app.get("/api/events", function(req, res) {
    db.Event.findAll({}).then(function(results) {
      res.json(results);

    });
  });

//===============================
//Create New Event
  app.post("/api/events", function(req, res) {
    console.log(req.body);

    db.Event.create({
     
      venue: req.body.venue,
      theme: req.body.theme,
      date_time: req.body.date_time,
      specials: req.body.specials,
      address: req.body.address,
      neighborhood: req.body.neighborhood,
      food_type: req.body.food_type,
    }).then(function(results) {
      res.json(results);

      // res.redirect("/events/");
    
    });
  });

//===============================
//Delete Event by id
  app.delete("/api/events/:id", function(req, res) {
    db.Event.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      var data = {redirect: "/events/"};
      res.json(data);

    });
  });

//===============================
//Update Event by id
  app.put("/api/events", function(req, res) {
    db.Event.update({
      venue: req.body.venue,
      theme: req.body.theme,
      date_time: req.body.date_time,
      specials: req.body.specials,
      address: req.body.address,
      neighborhood: req.body.neighborhood,
      food_type: req.body.food_type,
    }, {
      where: {id:req.body.id
      }
    }).then(function(results) {
      res.json(results);

    });
  });

};
