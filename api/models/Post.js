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
      limit: 10,
      order: [['id', 'DESC']]
    },
    sequelize,
    modelName: 'Post'
  });
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};
