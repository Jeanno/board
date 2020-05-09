const { Sequelize, Model, DataTypes } = require('sequelize');
const { db } = require('../db.js');

class User extends Model {}

User.init({
  nickname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uid: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  secret: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, { sequelize: db, modelName: 'User' });

module.exports = User;


