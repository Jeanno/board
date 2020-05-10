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
    user.uid = uuidv4();
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
