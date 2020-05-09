const { Sequelize, Model, DataTypes } = require('sequelize');
const { db } = require('../db.js');

class Tag extends Model {}

Tag.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, { sequelize: db, modelName: 'Tag' });

module.exports = Tag;

