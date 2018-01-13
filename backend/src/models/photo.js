'use strict';
module.exports = (sequelize, DataTypes) => {
  const photo = sequelize.define('photo', {
    photo: DataTypes.STRING,
    rating: DataTypes.INTEGER
  });

  photo.associate = (models) => {
    photo.belongsTo(models.user, { foreignKey: 'uid' });
  }
  return photo;
};