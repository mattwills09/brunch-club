module.exports = function(sequelize, DataTypes) {
  var restaurant = sequelize.define("restaurant", {
    // Giving the restaurant model a name of type STRING
    name: DataTypes.STRING
  });

  restaurant.associate = function(models) {
    // Associating restaurant with Posts
    // When an restaurant is deleted, also delete any associated Posts
    restaurant.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return restaurant;
};
