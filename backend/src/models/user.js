'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING
  });
  user.associate = (models) => {
    user.hasMany(models.status, { foreignKey: 'uid' });
    user.belongsToMany(user, { as: 'friends', through: 'userFriends', foreignKey: 'u1id', otherKey: 'u2id' })
    user.hasMany(models.photo, { foreignKey: 'uid' });
  }

  return user;
};