var db = require("../models");

module.exports = function(app) {
  app.get("/api/restaurants", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.restaurant.findAll({
      include: [db.Post]
    }).then(function(dbrestaurant) {
      res.json(dbrestaurant);
    });
  });

  app.get("/api/restaurants/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.restaurant.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbrestaurant) {
      res.json(dbrestaurant);
    });
  });

  app.post("/api/restaurants", function(req, res) {
    db.restaurant.create(req.body).then(function(dbrestaurant) {
      res.json(dbrestaurant);
    });
  });

  app.delete("/api/restaurants/:id", function(req, res) {
    db.restaurant.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbrestaurant) {
      res.json(dbrestaurant);
    });
  });

};
