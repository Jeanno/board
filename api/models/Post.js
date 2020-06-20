'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}

  Post.init({
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    defaultScope: {
      order: [['id', 'DESC']],
      include: 'author'
    },
    sequelize,
    modelName: 'Post'
  });
  Post.associate = function(models) {
    Post.User = Post.belongsTo(models.User, {
      as: "author"
    });
  };
  return Post;
};
