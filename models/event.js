
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    venue: DataTypes.STRING,
    theme: DataTypes.STRING,
    date_time: DataTypes.STRING,
    specials: DataTypes.STRING,
    address: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    food_type: DataTypes.STRING,
  });

  return Event;
  
};
