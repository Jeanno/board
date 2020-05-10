'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {});

  User.beforeCreate(async (user, options) => {
    console.log("user create");
    user.uid = uuidv4();
  });

  User.associate = function(models) {
    User.AccessTokens = User.hasMany(models.AccessToken);
  };
  return User;
};
