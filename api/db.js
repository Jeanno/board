const { Sequelize, Model, DataTypes } = require('sequelize');
exports.db = new Sequelize({
  dialect: 'sqlite',
  storage: '../db.sqlite'
});
