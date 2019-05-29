module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
    // userId: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // }
  });

  Post.associate = function(models) {
    // We're saying that a Post should belong to an restaurant
    // A Post can't be created without an restaurant due to the foreign key constraint
    Post.belongsTo(models.restaurant, {
      foreignKey: {
        allowNull: false
      }
    });
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
