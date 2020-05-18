'use strict';

const { v4: uuidv4 } = require('uuid');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
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
  }, {
    defaultScope: {
      attributes: {
        exclude: ['id', 'updatedAt']
      }
    },
    sequelize,
    modelName: 'User'
  
  });

  User.beforeCreate(async (user, options) => {
    user.uid = uuidv4();
  });

  User.associate = function(models) {
    User.AccessTokens = User.hasMany(models.AccessToken, {
      as: "accessTokens"
    });
  };
  return User;
};
