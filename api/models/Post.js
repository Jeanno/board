const { Sequelize, Model, DataTypes } = require('sequelize');
const { db } = require('../db.js');

class Post extends Model {}

Post.init({
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, { sequelize: db, modelName: 'Post' });

module.exports = Post;
