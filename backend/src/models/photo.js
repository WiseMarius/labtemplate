'use strict';
module.exports = (sequelize, DataTypes) => {
  const photo = sequelize.define('photo', {
    photo: DataTypes.STRING,
    rating: DataTypes.INTEGER
  });

  photo.associate = (models) => {
    models.photo.belongsTo(models.user)
  }
  return photo;
};