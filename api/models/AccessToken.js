'use strict';

function generateSecret(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

module.exports = (sequelize, DataTypes) => {
  const AccessToken = sequelize.define('AccessToken', {
    secret: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  AccessToken.beforeCreate(async (token, options) => {
    token.secret = generateSecret(64);
  });
  AccessToken.associate = function(models) {
    AccessToken.User = AccessToken.belongsTo(models.User);
  };
  return AccessToken;
};
