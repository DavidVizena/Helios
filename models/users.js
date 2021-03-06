'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  user.associate = function(models) {
      user.hasMany(models.rideInfo);
    // associations can be defined here
  };
  return user;
};