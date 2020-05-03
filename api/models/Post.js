const { Sequelize, Model, DataTypes } = require('sequelize');
const { db } = require('../db.js');

class Post extends Model {}

Post.init({
  content: DataTypes.STRING
}, { sequelize: db, modelName: 'post' });

db.sync();

exports.Post = Post;
