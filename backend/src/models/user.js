'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    twitter: DataTypes.STRING,
    google: DataTypes.STRING,
    relationship: DataTypes.STRING,
    living: DataTypes.STRING,
    working: DataTypes.STRING,
    photo: DataTypes.STRING,
  });
  user.associate = (models) => {
    user.hasMany(models.status, { foreignKey: 'uid' });
    user.belongsToMany(user, { as: 'friends', through: 'userFriends', foreignKey: 'u1id', otherKey: 'u2id' })
    user.hasMany(models.photo, { foreignKey: 'uid' });
  }

  return user;
};